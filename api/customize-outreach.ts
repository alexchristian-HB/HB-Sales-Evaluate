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

  const { persona, tone, channel, intelligence } = req.body || {};
  const companyName = intelligence?.companyName || 'the prospect';

  const subject =
    channel === 'LinkedIn InMail'
      ? `Strategic Modernization & Partnership Architecture for ${companyName}`
      : `Engineering Collaboration & MERN/AI Capabilities for ${companyName}`;

  const content = `Hi [Name],\n\nI am reaching out regarding ${companyName}'s strategic initiatives and technical delivery roadmaps. From an executive and architectural perspective (${
    persona || 'Technology Leadership'
  }), scaling digital throughput requires decoupling monolithic workflows into responsive MERN services and operationalizing GenAI concierges.\n\nHidden Brains (CMMI Level 3, 500+ engineers, 2,400+ clients across 107 countries) partners with forward-thinking enterprises to deliver dedicated engineering pods and modernization sprints with 60% cost efficiency.\n\nWould you be open to a 10-minute briefing this week to review our architectural blueprints?\n\nBest regards,\nAlex Christian\nBusiness Development | Hidden Brains InfoTech\nEmail: alex.christian@hiddenbrains.in | Web: https://hiddenbrains.com`;

  res.status(200).json({ subject, content });
}
