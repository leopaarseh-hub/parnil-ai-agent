# Parnil Studio — AI Strategic Brief Generator

A premium, interactive website brief generator for Parnil Studio. An AI Growth
Consultant runs a focused discovery conversation, then synthesises a senior-level
Strategic Business Brief and project proposal.

Powered by the **Claude API** (`claude-opus-4-8`) via the official Anthropic SDK.

## Run Locally

**Prerequisites:** Node.js 18+

1. Install dependencies:
   `npm install`
2. Create a `.env.local` file and set your Anthropic API key (get one at
   https://console.anthropic.com/):
   `ANTHROPIC_API_KEY="sk-ant-..."`
3. Run the app:
   `npm run dev`

The app serves on http://localhost:3000.

## How it works

- `POST /api/chat-consultant` — the conversational discovery agent. The full
  conversation is sent each turn, so the consultant never loses context.
- `POST /api/generate-brief` — synthesises the brief. Uses adaptive thinking plus
  structured outputs, so the returned JSON is always schema-valid.

Both endpoints run server-side in `server.ts`; the API key is never exposed to the
browser.
