import type { VercelRequest, VercelResponse } from "@vercel/node";
import { runBrief, getFriendlyError, ClientError } from "./_lib/consultant";

// The brief can take a little longer to synthesise; give it room (Hobby plan max).
export const config = { maxDuration: 60 };

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const lang = (req.body?.lang as string) || "de";
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    const brief = await runBrief(req.body || {}, lang);
    res.status(200).json(brief);
  } catch (error: any) {
    console.error("Brief Generation Error:", error);
    if (error instanceof ClientError && error.expose) {
      return res.status(error.status).json({ error: error.message });
    }
    res.status(500).json({ error: getFriendlyError(error, lang) });
  }
}
