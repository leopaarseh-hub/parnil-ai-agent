import type { VercelRequest, VercelResponse } from "@vercel/node";
import { runChat, getFriendlyError, ClientError } from "./_lib/consultant";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const lang = (req.body?.lang as string) || "de";
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    const text = await runChat(req.body?.messages, lang);
    res.status(200).json({ text });
  } catch (error: any) {
    console.error("Chat Consultant Error:", error);
    if (error instanceof ClientError && error.expose) {
      return res.status(error.status).json({ error: error.message });
    }
    res.status(500).json({ error: getFriendlyError(error, lang) });
  }
}
