# Parnil Studio — AI Growth Consultant & Brief Generator

An AI **Growth Consultant** that runs a focused discovery conversation, then
synthesizes a senior-level **Strategic Business Brief** — complete with a tailored
sitemap, design direction, and an **exact, code-computed** investment quote.

Built as a production-grade reference implementation. It demonstrates a clear
orchestration layer, a deterministic-vs-LLM split, security guardrails,
observability, specs, and an eval suite.

- **Frontend:** React 19 + Vite + Tailwind v4 (`src/`)
- **Backend:** one self-contained serverless function (`api/index.js`)
- **LLM:** Google Gemini (free-tier Flash models) via `@google/genai` — server-side only
- **Storage:** Supabase (optional, insert-only lead capture)

## What it does & why
Agencies lose leads in long intake forms. This agent makes intake feel like a
conversation with a senior consultant, captures the lead, and hands the client a
polished proposal they can act on — while the **pricing math is owned by code**, so
quotes are always correct.

## Quick start
**Prerequisites:** Node.js 18+

```bash
npm install
cp .env.example .env.local        # add your free Gemini key
npm run dev                       # http://localhost:3000
```
Get a free Gemini key at https://aistudio.google.com/apikey (no card needed).

## Try it without the UI
```bash
npm run demo     # guided walkthrough: pricing, redaction, guardrails (+ live if key set)
npm run eval     # eval suite (deterministic always; live evals run when a key is set)
```

## How it works
- `POST /api/chat-consultant` → the discovery agent (`runChat`). Full transcript
  sent each turn, so context is never lost.
- `POST /api/generate-brief` → synthesis (`runBrief`). The LLM **selects** a
  package + add-ons; **code** computes the totals and appends the official
  investment card.

See **[ARCHITECTURE.md](./ARCHITECTURE.md)** for the orchestration diagram and the
deterministic-vs-LLM split, and **[SECURITY.md](./SECURITY.md)** for the threat model.

### Capabilities at a glance
| Area | Where |
|------|-------|
| Orchestration / routing | `handler`, `resolveAction` — `api/index.js` |
| Deterministic pricing | `computeQuote`, `buildInvestmentCardHTML` — `api/index.js` |
| Guardrails (caps + injection flag + PII redaction) | `validateMessages`, `looksLikeInjection`, `redactPII` |
| Observability (structured logs + request id) | `log`, `newRequestId` |
| Memory (same-device resume) | `SESSION_KEY` — `src/App.tsx` |
| Skills | `skills/*/SKILL.md` |
| Specs (Gherkin source of truth) | `specs/*.feature` |
| Evals | `evals/*.test.js` |

## Lead capture (optional)
If `SUPABASE_URL` + an insert-capable key are set (see `.env.example`), every brief
saves the lead. The key is **insert-only** (RLS: no SELECT), so it's safe even if
exposed. If unset, capture is skipped and the brief still works.

## Deploy

### Vercel (current live host)
1. Import the repo in Vercel.
2. **Project Settings → Environment Variables**: add `GEMINI_API_KEY` (and the
   optional `SUPABASE_*` vars) for Production.
3. Redeploy. `vercel.json` rewrites both endpoints to `api/index.js` and serves the
   built frontend from `dist/`.

#### Add a custom subdomain (e.g. `agent.parnil.<tld>`)
1. Vercel → Project → **Settings → Domains → Add** → enter `agent.parnil.<tld>`.
2. In your DNS provider, add the record Vercel shows (usually a `CNAME` to
   `cname.vercel-dns.com`). Apex/root domains use Vercel's `A` record instead.
3. Wait for DNS to verify; Vercel issues the TLS cert automatically.

### Container / Cloud Run (portable)
```bash
docker build -t parnil-agent .
docker run -p 8080:8080 -e GEMINI_API_KEY=your-key parnil-agent   # http://localhost:8080
# Cloud Run: push the image and `gcloud run deploy --image ... --set-env-vars GEMINI_API_KEY=...`
```
The server reads `PORT` from the environment (Cloud Run-compatible).

## Project layout
```
api/index.js          # the agent: routing, LLM calls, pricing, guardrails, logging
src/                  # React frontend (chat UI, brief view, memory)
skills/               # SKILL.md workflow definitions
specs/                # Gherkin behavior specs (source of truth)
evals/                # eval suite (deterministic + live)
scripts/demo.js       # guided demo
server.ts             # local/Node dev server (Vercel uses api/index.js directly)
Dockerfile            # portable container build
ARCHITECTURE.md       # design + orchestration
SECURITY.md           # threat model
```

## Roadmap
- Expand `runChat` into a Gemini **function-calling loop** (true multi-step tool
  use) for the agent-loop capability.
- Per-IP rate limiting at the edge.
- "Recognize returning clients by email" (cross-device memory via a secure lookup).

## License
MIT — see [LICENSE](./LICENSE).
