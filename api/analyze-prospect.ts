import { GoogleGenAI } from '@google/genai';
import { generateClientIntelligence } from '../src/services/intelligenceEngine';

const DEFAULT_GEMINI_KEY = 'AIzaSyDMO4gVcRKDAO8REOcmAhLiu1LGT4Z7rWI';

async function generateWithGemini(prompt: string): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY || DEFAULT_GEMINI_KEY;
  const ai = new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });

  const models = ['gemini-3.6-flash', 'gemini-2.0-flash'];
  let lastErr: any = null;
  for (const model of models) {
    try {
      const res = await ai.models.generateContent({
        model,
        contents: prompt,
      });
      if (res.text) return res.text;
    } catch (e: any) {
      console.warn(`Serverless model ${model} failed:`, e?.message || e);
      lastErr = e;
    }
  }
  throw lastErr || new Error('All Gemini models failed');
}

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

    const clean = domain
      .replace(/^(?:https?:\/\/)?(?:www\.)?/i, '')
      .split('/')[0]
      .toLowerCase()
      .trim();

    // Grounded fallback intelligence
    const fallbackData = generateClientIntelligence(clean, customNotes, targetFocus);

    // Call Gemini with domain context to get live deep intelligence
    const prompt = `
You are an elite B2B Account Intelligence Agent representing "Hidden Brains InfoTech" (https://hiddenbrains.com/), a premier enterprise software development, modern web app engineering (MERN, React, Node.js, Next.js, TypeScript), Cloud & DevOps, Enterprise AI & GenAI, and dedicated IT staffing company founded in 2003 with 500+ engineers, CMMI Level 3, and 2,400+ clients across 107 countries.

The user wants an in-depth intelligence audit on this prospective company:
Domain / Target URL: "${clean}"
${customNotes ? `Additional user notes/context: "${customNotes}"` : ''}

CRITICAL RESEARCH DIRECTIVE (NO VAGUE BOILERPLATE):
1. ACCURATELY IDENTIFY THE REAL COMPANY & OPERATIONS:
   - If domain is "dwtchospitality.com": Accurately identify it as Hospitality by Dubai World Trade Centre (DWTC) - the premier luxury catering and mega-event banqueting division of DWTC serving over 2M meals annually, ISO 22000 and HACCP certified, with 148 master chefs, catering major international exhibitions (GITEX Global, Arab Health, Gulfood) and state banquets.
   - If domain is "highwayrealestates.com" or a property agency: Focus specifically on Dubai/Sharjah property listings, off-plan developer projects (Emaar, Damac, Sobha), Bayut/Dubizzle awards, and multi-portal MLS syndication.
   - If other domain: Perform thorough research on their exact offerings, target market, and real operational scope.

2. SPECIFIC SOFTWARE & IT PAIN POINTS:
   - Identify 3 to 4 specific pain areas they face if NOT up-to-date with:
     * Modern MERN stack (MongoDB, Express, React, Node.js / Next.js) for high-speed client portals, sub-50ms search, or event booking engines.
     * Cloud infrastructure & multi-system integration (ERP, CRM, logistics, supply chain).
     * Enterprise Generative AI & workflow automation (automated inquiry triage, menu/event cost estimation, 24/7 client copilots).

3. LINKEDIN SIGNALS, POSTS & OPEN WORK / RFPs:
   - Identify actual public posts, collaboration calls, open RFP tenders, or project initiatives.
   - Provide their official LinkedIn company page URL ("linkedInCompanyUrl").
   - Provide direct URLs for signals where available ("postUrl" linking to their official LinkedIn or jobs portal, "rfpPortalUrl" linking to official procurement/tender portals).

4. HIDDEN BRAINS SERVICE ALIGNMENT ("Services sold by us"):
   - Choose exact services from Hidden Brains (https://hiddenbrains.com/):
     * Custom Web & Enterprise Modern MERN Engineering (https://hiddenbrains.com/web-development-services.html)
     * Enterprise AI & GenAI Solutions (https://hiddenbrains.com/ai-development-services.html)
     * Dedicated CMMI Level 3 Offshore Development Pods (https://hiddenbrains.com/hire-dedicated-developers.html)
     * Cloud Migration & DevOps Automation (https://hiddenbrains.com/devops-consulting-services.html)

Return ONLY a valid JSON object matching the following structure (no markdown fences):
{
  "id": "prospect-${Date.now()}",
  "domain": "${clean}",
  "companyName": "string",
  "tagline": "string",
  "industry": "string",
  "headquarters": "string",
  "estimatedScale": "string",
  "coreOfferings": ["string"],
  "targetAudience": "string",
  "linkedInCompanyUrl": "string",
  "rfpPortalUrl": "string",
  "techStackObservedOrInferred": {
    "frontend": ["string"],
    "backend": ["string"],
    "cloudInfra": ["string"],
    "database": ["string"],
    "aiReadinessScore": 85,
    "modernizationUrgencyScore": 88
  },
  "painPoints": [
    {
      "id": "string",
      "category": "architecture_mern",
      "title": "string",
      "severity": "critical",
      "currentRisk": "string",
      "businessImpact": "string",
      "remedy": "string"
    }
  ],
  "linkedInSignals": [
    {
      "type": "open_initiative",
      "title": "string",
      "summary": "string",
      "sourceContext": "string",
      "collaborationAngle": "string",
      "keyStakeholders": ["string"],
      "postUrl": "string",
      "actionLabel": "string"
    }
  ],
  "pitchStrategy": {
    "executivePitch": "string",
    "whyHiddenBrainsWins": "string",
    "primaryModernizationAngle": "string",
    "immediateNextStep": "string"
  },
  "serviceMatches": [
    {
      "serviceName": "string",
      "serviceCategory": "string",
      "hiddenBrainsOfferingUrl": "string",
      "whyFit": "string",
      "valueProposition": "string",
      "proofOfCapability": "string",
      "implementationScope": ["string"]
    }
  ],
  "outreach": {
    "linkedInInMail": {
      "subject": "string",
      "hook": "string",
      "body": "string",
      "callToAction": "string"
    },
    "coldEmailSequence": {
      "step1Subject": "string",
      "step1Body": "string",
      "step2Subject": "string",
      "step2Body": "string"
    },
    "executiveProposalBrief": "string",
    "discoveryQuestions": ["string"]
  },
  "executiveSummary": "string",
  "analyzedAt": "ISO date string"
}
`;

    try {
      const responseText = await generateWithGemini(prompt);
      let jsonStr = responseText.trim();
      if (jsonStr.startsWith('```json')) jsonStr = jsonStr.replace(/^```json\s*/i, '').replace(/\s*```$/, '');
      else if (jsonStr.startsWith('```')) jsonStr = jsonStr.replace(/^```\s*/, '').replace(/\s*```$/, '');
      const firstBrace = jsonStr.indexOf('{');
      const lastBrace = jsonStr.lastIndexOf('}');
      if (firstBrace !== -1 && lastBrace !== -1) {
        jsonStr = jsonStr.substring(firstBrace, lastBrace + 1);
      }

      const parsed = JSON.parse(jsonStr);
      parsed.domain = clean;
      parsed.analyzedAt = new Date().toISOString();
      res.status(200).json(parsed);
    } catch (aiErr) {
      console.warn('AI generation failed, returning grounded domain fallback intelligence:', aiErr);
      res.status(200).json(fallbackData);
    }
  } catch (err: any) {
    console.error('Error in /api/analyze-prospect serverless handler:', err);
    res.status(500).json({ error: err.message || 'Internal Server Error' });
  }
}
