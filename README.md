# Parnil Studio — AI Strategic Brief Generator

A premium, interactive website brief generator for Parnil Studio. An AI Growth
Consultant runs a focused discovery conversation, then synthesises a senior-level
Strategic Business Brief and project proposal.

Powered by the **Google Gemini API** on its **free tier** (Flash models), via the
official `@google/genai` SDK — free to run, no credit card required.

## Run Locally

**Prerequisites:** Node.js 18+

1. Install dependencies:
   `npm install`
2. Get a free Gemini API key at https://aistudio.google.com/apikey, then create a
   `.env.local` file in the project root with:
   `GEMINI_API_KEY="your-key-here"`
3. Run the app:
   `npm run dev`

The app serves on http://localhost:3000.

## How it works

- `POST /api/chat-consultant` — the conversational discovery agent. The full
  conversation is sent each turn, so the consultant never loses context.
- `POST /api/generate-brief` — synthesises the brief as structured JSON.

Both endpoints run server-side in `server.ts`; the API key is never exposed to the
browser. The server uses free-tier Flash models (`gemini-2.5-flash` → `gemini-2.0-flash`
→ `gemini-flash-latest`) with automatic fallback, so a momentary hiccup on one model
transparently retries on the next.

### Free tier & limits

Flash models on the Gemini free tier allow far more than a typical demo needs
(hundreds of requests/day). If you ever exhaust the daily free quota, the app shows a
friendly "try again in a few minutes" message and recovers automatically.
