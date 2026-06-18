import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { runChat, runBrief, getFriendlyError, ClientError } from "./api/_lib/consultant";

dotenv.config();

/**
 * Local development server.
 *
 * In production on Vercel, the two endpoints are served by serverless functions
 * (api/chat-consultant.ts, api/generate-brief.ts) — Vercel does not run this Express
 * process. This file exists so `npm run dev` works locally (and so the app can also be
 * hosted on any normal Node host via `npm start`). Both paths call the SAME shared logic
 * in api/_lib/consultant.ts, so behaviour is identical everywhere.
 */
async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: "1mb" }));

  app.post("/api/chat-consultant", async (req, res) => {
    const lang = req.body?.lang || "de";
    try {
      const text = await runChat(req.body?.messages, lang);
      res.json({ text });
    } catch (error: any) {
      console.error("Chat Consultant Error:", error);
      if (error instanceof ClientError && error.expose) {
        return res.status(error.status).json({ error: error.message });
      }
      res.status(500).json({ error: getFriendlyError(error, lang) });
    }
  });

  app.post("/api/generate-brief", async (req, res) => {
    const lang = req.body?.lang || "de";
    try {
      const brief = await runBrief(req.body || {}, lang);
      res.json(brief);
    } catch (error: any) {
      console.error("Brief Generation Error:", error);
      if (error instanceof ClientError && error.expose) {
        return res.status(error.status).json({ error: error.message });
      }
      res.status(500).json({ error: getFriendlyError(error, lang) });
    }
  });

  // API fallback so unmatched /api/* requests return JSON, not HTML.
  app.all("/api/*", (req, res) => {
    res.status(404).json({ error: `API endpoint ${req.method} ${req.url} does not exist.` });
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
