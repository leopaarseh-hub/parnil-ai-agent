# Parnil Studio — AI Growth Consultant & Brief Generator

> A production-grade AI agent that runs a senior-level discovery conversation,
> then synthesizes a **Strategic Business Brief** — tailored sitemap, design
> direction, and an **exact, code-computed investment quote** — while the pricing
> math stays owned by deterministic code, never the model.

<p align="left">
  <img alt="Frontend" src="https://img.shields.io/badge/Frontend-React_19_·_Vite_·_Tailwind_v4-0A0D15">
  <img alt="Backend" src="https://img.shields.io/badge/Backend-Serverless_(api%2Findex.js)-0A0D15">
  <img alt="LLM" src="https://img.shields.io/badge/LLM-Gemini_Flash_via_%40google%2Fgenai-0A0D15">
  <img alt="License" src="https://img.shields.io/badge/License-MIT-C8FF00">
</p>

**Live:** [agent.parnil.co](https://agent.parnil.co) · **Languages:** English · German · Turkish · Persian (RTL)

Built as a production-grade reference implementation. It demonstrates a
clear orchestration layer, a deliberate **deterministic-vs-LLM split**, native tool
calling, security guardrails, structured observability, executable specs, and an
eval suite — the things that separate a demo from a system you'd actually ship.

---

## Table of contents
- [Why it exists](#why-it-exists)
- [Architecture at a glance](#architecture-at-a-glance)
- [The deterministic-vs-LLM split](#the-deterministic-vs-llm-split)
- [Request lifecycle](#request-lifecycle)
- [Capabilities map](#capabilities-map)
- [Business rules](#business-rules)
- [Quick start](#quick-start)
- [Configuration](#configuration)
- [Try it without the UI](#try-it-without-the-ui)
- [Testing & evals](#testing--evals)
- [Deploy](#deploy)
- [Project layout](#project-layout)
- [Roadmap](#roadmap)
- [License](#license)

---

## Why it exists
Agencies lose leads in long intake forms. This agent turns intake into a
conversation with a senior consultant: it asks sharp, scope-revealing questions,
captures the lead, and hands the client a polished, actionable proposal in
~10 seconds. The catch every "AI quote tool" gets wrong — **the money math** — is
handled here by pure code, so totals are always correct and auditable.

## Architecture at a glance
One self-contained serverless function is the entire backend. Two POST routes,
one shared handler, a strict boundary between what the LLM is *allowed* to decide
and what code *must* compute.

```
                          ┌────────────────────────────────────────────┐
   Browser (React 19)     │            api/index.js  (handler)          │
 ┌───────────────────┐    │                                            │
 │  Chat UI           │    │   resolveAction(req)                       │
 │  Brief view        │    │      ├── "chat"  → runChat()               │
 │  Same-device memory│◄──►│      └── "brief" → runBrief()              │
 └───────────────────┘    │                                            │
        │  POST            │   Guardrails  → validateMessages,          │
        │  /api/chat-      │                 looksLikeInjection,        │
        │     consultant   │                 redactPII                  │
        │  /api/generate-  │   LLM         → generateWithFallback ──────┼──► Gemini
        │     brief        │                 (model fallback chain)     │   (@google/genai)
        │                  │   Pricing     → computeQuote (CODE)        │
        ▼                  │                 buildInvestmentCardHTML     │
   localStorage            │   Lead        → saveLead (insert-only) ────┼──► Supabase
   (resume/New Chat)       │   Logs        → log + request id           │   (optional)
                          └────────────────────────────────────────────┘
```

See **[ARCHITECTURE.md](./ARCHITECTURE.md)** for the full orchestration diagram and
**[SECURITY.md](./SECURITY.md)** for the threat model.

## The deterministic-vs-LLM split
The single most important design decision in the project.

| Decision | Owner | Why |
|----------|-------|-----|
| Which questions to ask, when to stop | **LLM** (`runChat`) | Genuinely ambiguous, conversational |
| Which package + add-ons fit the client | **LLM** (`runBrief`) | Judgement call from context |
| Narrative, sitemap, design direction | **LLM** | Creative synthesis |
| **Every euro of the quote** | **Code** (`computeQuote`) | Must be exact, never hallucinated |
| Delivery estimate bounds (4–15 business days) | **Code** + prompt policy | Promise the business can keep |
| PII redaction in logs, injection flags, caps | **Code** | Safety can't be optional |

The model **selects** by returning package/add-on *keys*; the server looks those
keys up in a typed price table and does the arithmetic. A model can misread a
number — it can't here, because it never touches one.

## Request lifecycle
**`POST /api/generate-brief`** (the interesting path):

1. `validateMessages` enforces hard caps and shape; `looksLikeInjection` flags
   prompt-injection attempts; `redactPII` scrubs emails/phones from logs.
2. `generateWithFallback` calls Gemini with the brief system instruction, walking
   a **model fallback chain** (`gemini-2.5-flash` → `gemini-2.0-flash` →
   `gemini-flash-latest`) with bounded retries on transient/429 errors. The client
   carries a **50s timeout**, safely under Vercel's 60s function cap, so a slow
   upstream fails fast and friendly instead of 504-ing.
3. The model returns a single JSON object selecting one package + add-on keys.
4. **Code takes over:** `computeQuote` resolves keys → exact one-time and recurring
   totals; `buildInvestmentCardHTML` renders the official, localized investment card.
5. `saveLead` best-effort writes the lead to Supabase (never blocks the brief).
6. A structured log line with a correlating request id closes the turn.

**`POST /api/chat-consultant`** runs `runChat`: the full transcript is sent every
turn, so context is never lost, with a hard cap on questions to keep discovery tight.

## Capabilities map
| Area | Where |
|------|-------|
| Orchestration / routing | `handler`, `resolveAction` — `api/index.js` |
| Deterministic pricing engine | `computeQuote`, `buildInvestmentCardHTML` — `api/index.js` |
| Native tool calling (pricing) | `CALCULATE_QUOTE_TOOL` → `executeCalculateQuote` / `runQuoteToolCall` |
| Model resilience | `generateWithFallback`, `MODELS` fallback chain + timeout |
| Guardrails | `validateMessages`, `looksLikeInjection`, `redactPII` |
| Observability | `log`, `newRequestId` (structured logs + request id) |
| Same-device memory + New Chat reset | `SESSION_KEY` — `src/App.tsx` |
| Skills (workflow definitions) | `skills/*/SKILL.md` |
| Specs (Gherkin source of truth) | `specs/*.feature` |
| Evals (deterministic + live + LLM judge) | `evals/*.test.js`, `evals/judge.js` |

## Business rules
Encoded once, applied everywhere (chat, brief, and the offline fallback generator):

- **Packages:** Presence (€948) · Momentum (€1,428) · Authority (€2,227), plus a
  typed catalog of one-time and recurring add-ons. Recommend the leanest package
  that hits the client's #1 goal — never default to the most expensive.
- **Delivery:** every project ships within a firm **4–15 business-day** window. The
  agent analyses scope and gives a realistic estimate *inside* that range, always
  framed as an **estimate** confirmed on the strategy call — never weeks, never a
  hard deadline.

## Quick start
**Prerequisites:** Node.js 18+

```bash
npm install
cp .env.example .env.local        # add your free Gemini key
npm run dev                       # http://localhost:3000
```
Get a free Gemini key at <https://aistudio.google.com/apikey> (no card needed). The
dev server (`tsx server.ts`) runs the same `api/index.js` handler Vercel uses, behind
Vite middleware — so local and production behave identically.

## Configuration
All configuration is environment variables; **no secrets are committed**.

| Variable | Required | Default | Purpose |
|----------|----------|---------|---------|
| `GEMINI_API_KEY` | ✅ | — | Server-side Gemini access (`@google/genai`) |
| `SUPABASE_URL` | optional | — | Lead capture endpoint |
| `SUPABASE_SERVICE_ROLE_KEY` / `SUPABASE_ANON_KEY` | optional | — | Insert-capable key (insert-only via RLS) |
| `ENABLE_PRICING_TOOL_CALL` | optional | **off** | `1`/`true` enables the native tool-calling round for pricing |
| `PORT` | optional | `3000` | Server port (Cloud Run-compatible) |

> **Note on `ENABLE_PRICING_TOOL_CALL`:** the brief already computes the exact quote
> in code via `computeQuote`. The native tool-calling path is a *second, sequential*
> Gemini request that demonstrates `calculate_quote(packageId, addonIds)` round-tripping
> through the server — illustrative, but redundant for the final number, and on a 60s
> serverless limit two sequential LLM calls can time out. It therefore defaults **off**;
> set it to `1` to showcase native function calling.

## Try it without the UI
```bash
npm run demo     # guided walkthrough: pricing, redaction, guardrails (+ live if key set)
```

## Testing & evals
```bash
npm run lint         # tsc --noEmit (type safety)
npm run eval         # full suite — deterministic always; live tests self-skip without a key
npm run eval:live    # live evals against Gemini (requires GEMINI_API_KEY)
npm run eval:judge   # LLM-as-judge scoring of generated briefs
```
The deterministic evals always run (pricing math, guardrails, redaction); live evals
and the judge engage only when a key is present, so CI stays green and free.

## Deploy

### Vercel (current live host)
1. Import the repo in Vercel.
2. **Settings → Environment Variables:** add `GEMINI_API_KEY` (and optional
   `SUPABASE_*`) for Production.
3. Redeploy. `vercel.json` rewrites both endpoints to `api/index.js`
   (`maxDuration: 60`) and serves the built frontend from `dist/`.

**Custom subdomain (e.g. `agent.parnil.<tld>`):** Vercel → **Settings → Domains →
Add**, then add the `CNAME` to `cname.vercel-dns.com` Vercel shows (apex domains use
its `A` record). TLS is issued automatically once DNS verifies.

### Container / Cloud Run (portable)
```bash
docker build -t parnil-agent .
docker run -p 8080:8080 -e GEMINI_API_KEY=your-key parnil-agent   # http://localhost:8080
# Cloud Run: gcloud run deploy --image ... --set-env-vars GEMINI_API_KEY=...
```
The server reads `PORT` from the environment, so it runs unchanged on Cloud Run.

## Project layout
```
api/index.js          # the agent: routing, LLM calls, pricing, guardrails, logging
src/                  # React frontend (chat UI, brief view, same-device memory)
skills/               # SKILL.md workflow definitions
specs/                # Gherkin behaviour specs (source of truth)
evals/                # eval suite: deterministic + live + LLM judge
scripts/demo.js       # guided demo
server.ts             # local/Node dev server (Vercel uses api/index.js directly)
Dockerfile            # portable container build
ARCHITECTURE.md       # design + orchestration
SECURITY.md           # threat model
```

## Roadmap
- Expand `runChat` into a Gemini **function-calling loop** (true multi-step tool use).
- Per-IP rate limiting at the edge.
- Recognize returning clients by email (cross-device memory via a secure lookup).
- Map the deterministic tools onto Google ADK skills / MCP servers.

## License
MIT — see [LICENSE](./LICENSE).
