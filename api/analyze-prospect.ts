import { generateClientIntelligence } from '../src/services/intelligenceEngine';

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  try {
    const { domain, customNotes, targetFocus } = req.body || {};
    if (!domain) {
      res.status(400).json({ error: 'Missing domain parameter' });
      return;
    }

    const data = generateClientIntelligence(domain, customNotes, targetFocus);
    res.status(200).json(data);
  } catch (err: any) {
    console.error('Error in /api/analyze-prospect serverless handler:', err);
    res.status(500).json({ error: err.message || 'Internal Server Error' });
  }
}
