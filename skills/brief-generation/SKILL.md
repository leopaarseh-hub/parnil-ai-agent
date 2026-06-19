---
name: brief-generation
description: Synthesize a senior-level Strategic Business Brief (structured JSON) from a discovery transcript or form — summary, sitemap, design direction, recommended package/add-ons and an exact, code-computed investment quote. Use when the client has shared enough context and contact details and asks to compile their brief.
---

# Brief Generation

The synthesis half of the Parnil agent. Implemented server-side in
`api/index.js` → `getBriefSystemInstruction()` and `runBrief()`.

## Trigger
`POST /api/generate-brief` with a `chatHistory` (or a manual `formState`). The
UI only enables compile after ≥3 turns and contact details exist
(see specs/brief_generation.feature).

## Output contract
A single JSON object: `businessName, summary (HTML), sitemap[], headline, cta,
designDirection, recommendedStack, estimatedTimeline, nextSteps[]`, plus the
selection keys `recommendedPackage` and `recommendedAddOns`.

## Deterministic-vs-LLM split (the key design rule)
- The LLM makes the **ambiguous** call: which package + add-ons fit the client.
- CODE makes the **deterministic** call: `computeQuote()` totals the money and
  `buildInvestmentCardHTML()` appends the authoritative, localized investment
  card. The LLM never does arithmetic. Invalid selections fall back safely.

## Side effects (audit trail)
On success, `saveLead()` best-effort inserts the lead to Supabase (insert-only
key) and logs `lead_saved` / `quote_computed`. Failure never breaks the brief.
