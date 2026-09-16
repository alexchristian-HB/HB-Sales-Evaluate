export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const { question, intelligence } = req.body || {};
  const comp = intelligence?.companyName || 'the prospect';

  const answer = `When positioning Hidden Brains for ${comp}:
1. Emphasize our CMMI Level 3 certified process rigor, ISO 27001 data governance, and 20+ years of proven delivery across 107 countries.
2. Highlight our rapid pod assembly (dedicated developers onboarded within 5 business days) delivering up to 60% cost savings compared to local hiring.
3. Anchor your pitch around immediate business ROI: eliminating web latency with high-speed MERN/Next.js architectures and deploying 24/7 GenAI concierges to capture high-value buyer demand without downtime.`;

  res.status(200).json({ answer });
}
