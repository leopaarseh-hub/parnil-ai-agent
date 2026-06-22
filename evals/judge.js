// LLM-as-Judge evaluation — scores the QUALITY of generated Strategic Briefs
// against a fixed rubric, without touching production behavior.
//
//   npm run eval:judge          # skips cleanly if GEMINI_API_KEY is unset
//   GEMINI_API_KEY=... npm run eval:judge
//
// How it works:
//   1) Generate briefs by calling the REAL handler (read-only) with synthetic,
//      contact-free transcripts — so saveLead never fires and nothing is stored.
//   2) Ask a separate Gemini "judge" to score each brief on 7 rubric categories
//      (1-10) plus an overall, with a short reason per category.
//   3) Write evidence to evals/results/judge-results.{json,md} and gate on
//      overall >= THRESHOLD (exit 1 on fail) so it is CI/screenshot friendly.
//
// This file is additive and standalone. It never runs in production (Vercel only
// bundles api/index.js) and uses synthetic data only — no real user PII.
const fs = require("fs");
const path = require("path");

const handler = require("../api/index.js");

const THRESHOLD = 8.0; // overall >= 8.0 = PASS
const MODELS = ["gemini-2.5-flash", "gemini-2.0-flash", "gemini-flash-latest"];
const RESULTS_DIR = path.join(__dirname, "results");

const CATEGORIES = [
  ["businessUnderstanding", "Business understanding — does the brief show it grasped the client's business, market, and problem?"],
  ["specificity", "Specificity to the client — is it tailored to THIS business, not generic boilerplate?"],
  ["strategicQuality", "Strategic quality — are the recommendations insightful and sound, not obvious filler?"],
  ["actionability", "Actionability — are the sitemap and next steps concrete and ready to act on?"],
  ["recommendationFit", "Package/add-on recommendation fit — do the chosen package and add-ons match the client's stated needs and budget?"],
  ["tone", "Tone/professionalism — does it read like a senior consultant: clear, confident, client-ready?"],
  ["safety", "Safety/compliance — free of leaked instructions, fabricated guarantees, PII mishandling, or unprofessional content?"],
];

// Synthetic, CONTACT-FREE transcripts. No name/email => runBrief's saveLead is
// never triggered and nothing is persisted. Purely for evaluation.
const SAMPLES = [
  {
    name: "Coffee shop — local visibility",
    lang: "en",
    chatHistory: [
      { role: "model", text: "Welcome! Tell me about your business." },
      { role: "user", text: "I run 'Bloom Cafe', a specialty coffee shop in Munich." },
      { role: "user", text: "Biggest issue: no online presence, people can't find us or book tables." },
      { role: "user", text: "Goal: more reservations and foot traffic within a month. I like a modern, warm look." },
    ],
  },
  {
    name: "B2B consultancy — lead generation",
    lang: "en",
    chatHistory: [
      { role: "model", text: "Welcome! Tell me about your business." },
      { role: "user", text: "We're a small B2B operations consultancy serving mid-size manufacturers." },
      { role: "user", text: "Our site is outdated and doesn't explain what we do or generate any leads." },
      { role: "user", text: "Goal: look credible to enterprise buyers and capture qualified inquiries. Budget is flexible but not huge." },
    ],
  },
  {
    name: "Boutique fitness studio — bookings",
    lang: "en",
    chatHistory: [
      { role: "model", text: "Welcome! Tell me about your business." },
      { role: "user", text: "I own a boutique fitness studio with small-group classes." },
      { role: "user", text: "People discover us on Instagram but there's no easy way to see schedules or book online." },
      { role: "user", text: "Goal: online class booking and a clean brand site. Bold, energetic style preferred." },
    ],
  },
];

// Invoke the serverless handler with a fake req/res and capture the JSON result.
function invoke(action, body) {
  return new Promise((resolve) => {
    const req = { method: "POST", query: { action }, body, url: `/api/${action}` };
    const res = {
      statusCode: 200,
      setHeader() {},
      status(c) { this.statusCode = c; return this; },
      json(payload) { resolve({ status: this.statusCode, body: payload }); return this; },
    };
    handler(req, res);
  });
}

async function makeJudgeClient() {
  const mod = await import("@google/genai");
  return new mod.GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
}

async function judgeWithFallback(ai, payload) {
  let lastError = null;
  for (const model of MODELS) {
    try {
      return await ai.models.generateContent({ model, contents: payload.contents, config: payload.config });
    } catch (err) {
      lastError = err;
    }
  }
  throw lastError || new Error("All judge model options exhausted.");
}

const JUDGE_SYSTEM = `You are a strict, fair senior evaluator of agency "Strategic Business Briefs".
Score the brief ONLY on the rubric provided. Be calibrated: 10 is exceptional, 7 is solid,
5 is mediocre, 1-3 is poor. Reward specificity and strategic insight; penalize generic
filler, vague advice, leaked system instructions, or fabricated guarantees.
Do NOT evaluate the exact price numbers (those are computed deterministically in code) —
only whether the chosen package/add-ons fit the client's stated needs.
Return ONLY JSON matching the requested schema. Keep each "reason" under 200 characters.`;

function buildJudgePrompt(brief) {
  const rubric = CATEGORIES.map(([k, d], i) => `${i + 1}. ${k}: ${d}`).join("\n");
  // Strip nothing of substance, but keep the payload compact.
  const briefForJudge = {
    businessName: brief.businessName,
    businessType: brief.businessType,
    mainGoal: brief.mainGoal,
    summary: brief.summary,
    headline: brief.headline,
    cta: brief.cta,
    sitemap: brief.sitemap,
    designDirection: brief.designDirection,
    recommendedStack: brief.recommendedStack,
    recommendedPackage: brief.recommendedPackage,
    recommendedAddOns: brief.recommendedAddOns,
    estimatedTimeline: brief.estimatedTimeline,
    nextSteps: brief.nextSteps,
  };
  const schemaKeys = CATEGORIES.map(([k]) => `"${k}": { "score": <1-10 integer>, "reason": "<short>" }`).join(",\n    ");
  return `RUBRIC (score each 1-10):
${rubric}

BRIEF TO EVALUATE (JSON):
${JSON.stringify(briefForJudge, null, 2)}

Return ONLY this JSON shape:
{
  "categories": {
    ${schemaKeys}
  },
  "explanation": "<one or two sentence overall justification>"
}`;
}

function parseJudgeJSON(text) {
  let t = String(text || "").trim();
  if (t.startsWith("```")) t = t.replace(/^```(?:json)?/i, "").replace(/```$/, "").trim();
  const start = t.indexOf("{");
  const end = t.lastIndexOf("}");
  if (start !== -1 && end !== -1) t = t.slice(start, end + 1);
  return JSON.parse(t);
}

function overallOf(categories) {
  const scores = CATEGORIES.map(([k]) => Number((categories[k] || {}).score) || 0);
  const mean = scores.reduce((a, b) => a + b, 0) / scores.length;
  return Math.round(mean * 100) / 100;
}

function writeEvidence(report) {
  fs.mkdirSync(RESULTS_DIR, { recursive: true });
  const jsonPath = path.join(RESULTS_DIR, "judge-results.json");
  const mdPath = path.join(RESULTS_DIR, "judge-results.md");
  fs.writeFileSync(jsonPath, JSON.stringify(report, null, 2) + "\n");

  const lines = [];
  lines.push(`# LLM-as-Judge — Strategic Brief Quality`);
  lines.push("");
  lines.push(`Generated: ${report.generatedAt}  ·  Threshold: overall ≥ ${report.threshold}  ·  Judge model: ${report.judgeModel}`);
  lines.push("");
  lines.push(`**Suite result: ${report.passed ? "✅ PASS" : "❌ FAIL"}**  ·  Mean overall: **${report.meanOverall}**  (${report.results.length} briefs)`);
  lines.push("");
  for (const r of report.results) {
    lines.push(`## ${r.sample} — ${r.passed ? "✅ PASS" : "❌ FAIL"} (overall ${r.overall})`);
    lines.push("");
    lines.push(`Business: **${r.businessName || "?"}**  ·  Package: \`${r.recommendedPackage || "?"}\`  ·  Add-ons: ${(r.recommendedAddOns || []).length}`);
    lines.push("");
    lines.push(`| Category | Score | Reason |`);
    lines.push(`|---|---|---|`);
    for (const [k] of CATEGORIES) {
      const c = (r.categories || {})[k] || {};
      lines.push(`| ${k} | ${c.score ?? "—"} | ${String(c.reason || "").replace(/\|/g, "/")} |`);
    }
    lines.push("");
    if (r.explanation) lines.push(`> ${r.explanation}`);
    lines.push("");
  }
  fs.writeFileSync(mdPath, lines.join("\n"));
  return { jsonPath, mdPath };
}

async function main() {
  if (!process.env.GEMINI_API_KEY) {
    console.log("[eval:judge] SKIPPED — set GEMINI_API_KEY to run the LLM-as-Judge evaluation.");
    process.exit(0);
  }

  const ai = await makeJudgeClient();
  const results = [];

  for (const sample of SAMPLES) {
    process.stdout.write(`\n• ${sample.name}: generating brief... `);
    const { status, body: brief } = await invoke("brief", { lang: sample.lang, chatHistory: sample.chatHistory });
    if (status !== 200 || !brief || brief.error) {
      console.log(`FAILED (${status}) ${brief && brief.error ? brief.error : ""}`);
      results.push({ sample: sample.name, error: brief && brief.error ? brief.error : `status ${status}`, overall: 0, passed: false, categories: {} });
      continue;
    }
    process.stdout.write("judging... ");
    const resp = await judgeWithFallback(ai, {
      contents: [{ role: "user", parts: [{ text: buildJudgePrompt(brief) }] }],
      config: { systemInstruction: JUDGE_SYSTEM, temperature: 0, responseMimeType: "application/json", maxOutputTokens: 1024 },
    });
    let verdict;
    try {
      verdict = parseJudgeJSON(resp.text);
    } catch (e) {
      console.log("JUDGE PARSE ERROR");
      results.push({ sample: sample.name, error: "judge returned unparseable JSON", overall: 0, passed: false, categories: {} });
      continue;
    }
    const overall = overallOf(verdict.categories || {});
    const passed = overall >= THRESHOLD;
    console.log(`overall ${overall} ${passed ? "✅" : "❌"}`);
    results.push({
      sample: sample.name,
      businessName: brief.businessName,
      recommendedPackage: brief.recommendedPackage,
      recommendedAddOns: brief.recommendedAddOns || [],
      categories: verdict.categories || {},
      explanation: verdict.explanation || "",
      overall,
      passed,
    });
  }

  const scored = results.filter((r) => !r.error);
  const meanOverall = scored.length ? Math.round((scored.reduce((a, r) => a + r.overall, 0) / scored.length) * 100) / 100 : 0;
  const passed = results.length > 0 && results.every((r) => r.passed);

  const report = {
    generatedAt: new Date().toISOString(),
    judgeModel: MODELS[0],
    threshold: THRESHOLD,
    meanOverall,
    passed,
    results,
  };

  const { jsonPath, mdPath } = writeEvidence(report);

  console.log(`\n${"─".repeat(60)}`);
  console.log(`Mean overall: ${meanOverall}  ·  Threshold: ${THRESHOLD}  ·  ${passed ? "✅ PASS" : "❌ FAIL"}`);
  console.log(`Evidence written:\n  ${jsonPath}\n  ${mdPath}`);
  console.log(`${"─".repeat(60)}`);

  process.exit(passed ? 0 : 1);
}

main().catch((err) => {
  console.error("[eval:judge] error:", err && err.message ? err.message : err);
  process.exit(1);
});
