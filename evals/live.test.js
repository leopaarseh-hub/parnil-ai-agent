// Live evals — exercise the REAL agent end-to-end via the handler.
// Skipped automatically when GEMINI_API_KEY is absent (e.g. CI without a key),
// so `npm run eval` is always green locally; run with a key for full scoring.
//
// Scores three things the course cares about (not just unit tests):
//   1) Trigger correctness  — does the consultant respond like a consultant?
//   2) Output quality       — is the brief valid, complete JSON?
//   3) Tool trajectory      — did code (not the LLM) own the pricing math?
const test = require("node:test");
const assert = require("node:assert");

const handler = require("../api/index.js");
const { computeQuote, PACKAGES } = handler._internals;

const HAS_KEY = !!process.env.GEMINI_API_KEY;
const opts = { skip: HAS_KEY ? false : "set GEMINI_API_KEY to run live evals" };

// Invoke the serverless handler with a fake req/res and capture the JSON result.
function invoke(action, body) {
  return new Promise((resolve) => {
    const req = { method: "POST", query: { action }, body, url: `/api/${action}` };
    const res = {
      statusCode: 200,
      _json: null,
      setHeader() {},
      status(c) {
        this.statusCode = c;
        return this;
      },
      json(payload) {
        this._json = payload;
        resolve({ status: this.statusCode, body: payload });
        return this;
      },
    };
    handler(req, res);
  });
}

test("trigger: consultant responds with a question", opts, async () => {
  const { status, body } = await invoke("chat", {
    lang: "en",
    messages: [{ role: "user", text: "Hi, I run a small coffee shop and want more customers." }],
  });
  assert.strictEqual(status, 200);
  assert.ok(body.text && body.text.length > 0, "expected a reply");
  assert.ok(body.text.includes("?"), "a discovery reply should ask a question");
});

const TRANSCRIPT = [
  { role: "model", text: "Welcome! Tell me about your business." },
  { role: "user", text: "I run 'Bloom Cafe', a specialty coffee shop in Munich." },
  { role: "user", text: "Biggest issue: no online presence, people can't find us or book tables." },
  { role: "user", text: "Goal: more reservations and foot traffic in 1 month. I love a modern look." },
  { role: "user", text: "My name is Lena, business Bloom Cafe, email lena@example.com." },
];

test("output quality: brief is valid, complete JSON", opts, async () => {
  const { status, body } = await invoke("brief", { lang: "en", chatHistory: TRANSCRIPT });
  assert.strictEqual(status, 200);
  for (const f of ["businessName", "summary", "sitemap", "nextSteps", "id"]) {
    assert.ok(body[f], `brief should contain ${f}`);
  }
  assert.ok(Array.isArray(body.sitemap) && body.sitemap.length >= 3, "sitemap should have pages");
});

test("trajectory: pricing was computed in code from the model's selection", opts, async () => {
  const { body } = await invoke("brief", { lang: "en", chatHistory: TRANSCRIPT });
  assert.ok(PACKAGES[body.recommendedPackage], "model must select a valid package key");
  assert.ok(body.quote, "server must attach a computed quote");
  const expected = computeQuote(body.recommendedPackage, body.recommendedAddOns);
  assert.strictEqual(
    body.quote.oneTimeTotal,
    expected.oneTimeTotal,
    "the returned total must equal the code-computed total (LLM never does the math)"
  );
  assert.ok(body.summary.includes("€"), "investment card should be appended to the summary");
});
