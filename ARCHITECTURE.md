# Architecture

## Overview
Parnil AI is a two-capability growth-consultant agent:
1. **Discovery** — a conversational agent that runs a structured interview.
2. **Synthesis** — generates a Strategic Business Brief with an exact quote.

Both are served by one self-contained serverless function, `api/index.js`,
behind a thin orchestration layer.

## Orchestration layer (perceive → route → act → observe)
```
client → POST /api/{chat-consultant,generate-brief}
            │
            ▼
   handler()                      api/index.js
     ├─ newRequestId()            trace id (observability)
     ├─ resolveAction()           DETERMINISTIC routing (code, not LLM)
     ├─ validateMessages()        circuit breaker: size/turn caps + injection flag
     ├─ chat → runChat() ─────────► Gemini (consultant persona, full transcript)
     └─ brief → runBrief()
            ├─ Gemini selects package + add-ons (ambiguous decision)
            ├─ computeQuote()      DETERMINISTIC pricing math (code)
            ├─ buildInvestmentCardHTML()  authoritative, localized card
            └─ saveLead()          best-effort side effect + audit log
```

### Deterministic vs LLM (Day 4)
| Concern | Owner |
|--------|-------|
| Endpoint routing | code (`resolveAction`) |
| Input limits / safety | code (`validateMessages`, `LIMITS`) |
| Which package/add-ons fit the client | **LLM** (genuinely ambiguous) |
| All money math + totals | code (`computeQuote`) |
| Compile gating (≥3 turns + contact) | code/UI (`src/App.tsx`) |

The LLM is never trusted to do arithmetic or routing.

## Memory & context (Day 3)
- **Always-on context**: the full transcript is sent every turn (no context rot
  from truncation at this scale) + a compact system prompt with the catalog.
- **Persistent memory**: same-device session memory in the browser
  (`SESSION_KEY` in `src/App.tsx`) restores chat, brief, language and view on
  refresh/return; starting the generator resumes rather than resets.

## Resilience
- Model fallback chain `gemini-2.5-flash → 2.0-flash → flash-latest` with bounded
  transient retries (`generateWithFallback`).
- Lead capture is best-effort and never throws.
- The function is plain CommonJS with lazy SDK import, so a load-time crash is
  impossible — worst case is a clean JSON error.

## Honest scope note
This is a **guided two-call agent** with a clear orchestration layer, not an
open-ended autonomous tool-calling loop. The orchestration, deterministic/LLM
split, guardrails, memory, evals and observability follow the course's agentic
engineering practices; expanding `runChat` into a Gemini function-calling loop is
the documented next step (see README "Roadmap").
