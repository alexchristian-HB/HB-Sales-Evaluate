export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  res.status(200).json({
    prospects: [
      {
        id: 're-highway',
        domain: 'highwayrealestates.com',
        companyName: 'Highway Real Estate',
        industry: 'Real Estate Brokerage, Property Management & Off-Plan Developments',
        analyzedAt: new Date().toISOString(),
        modernizationUrgencyScore: 92,
        aiReadinessScore: 28,
      },
      {
        id: 'hb-demo',
        domain: 'hiddenbrains.com',
        companyName: 'Hidden Brains InfoTech',
        industry: 'Information Technology, Enterprise Software & IT Consulting',
        analyzedAt: new Date().toISOString(),
        modernizationUrgencyScore: 88,
        aiReadinessScore: 94,
      },
    ],
  });
}
