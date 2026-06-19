# Security & Threat Model

A lightweight threat-model pass over the **most sensitive component**: the
LLM-facing API (`api/index.js`), which handles untrusted user input and the only
PII the system touches (lead name/email/conversation).

## Trust boundaries
- **Browser → API**: all chat/brief content is **untrusted**. Treated as data,
  never as instructions.
- **API → Gemini**: the API key lives only server-side (env var); never shipped
  to the browser.
- **API → Supabase**: an **insert-only** key (RLS policy: INSERT, no SELECT) so a
  leaked client key cannot read leads back. A service-role key, if used, is
  server-only.

## STRIDE-lite

| Threat | Vector | Mitigation (file ref) |
|--------|--------|------------------------|
| **Spoofing / abuse** | Scripted spam to endpoints | Circuit-breaker caps on turns/size before any model call — `validateMessages()` |
| **Tampering** | Prompt injection ("ignore instructions…") | System prompts treat chat as data + `looksLikeInjection()` flags attempts to the audit trail |
| **Repudiation** | "I never sent that" / no audit | Structured per-request logs with `x-request-id`, `request_start/ok/error`, `lead_saved`, `quote_computed` |
| **Information disclosure** | PII in logs; reading others' leads | `redactPII()` masks emails/phones in every log line; Supabase RLS blocks public reads |
| **DoS / cost runaway** | Huge payloads, endless loops | `LIMITS` (max messages, per-message + total chars); model fallback with bounded retries — `generateWithFallback()` |
| **Elevation / secret leak** | Secrets in source | No secrets committed; all keys from env (`.env.example`); least-privilege Supabase key |

## Residual risks / future work
- No per-IP rate limiting yet (relies on platform + size caps). Add edge rate
  limiting (e.g. Vercel/Cloud Armor) for production scale.
- Injection detection is heuristic (flag, not block) to avoid false positives in
  a real consultation; defense-in-depth relies on instruction hardening.
- Lead PII is stored in plaintext in Supabase; restrict dashboard access and
  consider column encryption if scope grows.

## Reporting
Email security@parnil.studio (or open a private advisory) — do not file public
issues for vulnerabilities.
