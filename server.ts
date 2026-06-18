import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import handler from "./api/index";

dotenv.config();

/**
 * Local development server.
 *
 * In production on Vercel, both endpoints are served by the single serverless
 * function in api/index.ts — Vercel does not run this Express process. This file
 * exists so `npm run dev` works locally (and so the app can also run on any normal
 * Node host via `npm start`). It wires the two Express routes to the SAME handler,
 * passing the action the way the Vercel rewrites do, so behaviour is identical.
 */
async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: "1mb" }));

  const route = (action: "chat" | "brief") => (req: any, res: any) => {
    req.query = { ...(req.query || {}), action };
    return handler(req, res);
  };

  app.post("/api/chat-consultant", route("chat"));
  app.post("/api/generate-brief", route("brief"));

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
