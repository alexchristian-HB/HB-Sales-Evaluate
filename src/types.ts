export interface PainPoint {
  id: string;
  category: 'architecture_mern' | 'ai_automation' | 'cloud_devops' | 'mobile_scalability' | 'legacy_debt';
  title: string;
  severity: 'critical' | 'high' | 'medium';
  currentRisk: string;
  businessImpact: string;
  remedy: string;
}

export interface LinkedInCollaborationSignal {
  type: 'open_initiative' | 'rfp_bid' | 'partnership_call' | 'executive_focus' | 'hiring_surge';
  title: string;
  summary: string;
  sourceContext: string;
  collaborationAngle: string;
  keyStakeholders: string[];
  postUrl?: string;
  actionLabel?: string;
}

export interface HiddenBrainsServiceMatch {
  serviceName: string;
  serviceCategory: string;
  hiddenBrainsOfferingUrl: string;
  whyFit: string;
  valueProposition: string;
  proofOfCapability: string;
  implementationScope: string[];
}

export interface OutreachAssets {
  linkedInInMail: {
    subject: string;
    hook: string;
    body: string;
    callToAction: string;
  };
  coldEmailSequence: {
    step1Subject: string;
    step1Body: string;
    step2Subject: string;
    step2Body: string;
  };
  executiveProposalBrief: string;
  discoveryQuestions: string[];
}

export interface CompanyIntelligence {
  id: string;
  domain: string;
  companyName: string;
  tagline: string;
  industry: string;
  headquarters: string;
  estimatedScale: string;
  coreOfferings: string[];
  targetAudience: string;
  linkedInCompanyUrl?: string;
  rfpPortalUrl?: string;
  techStackObservedOrInferred: {
    frontend: string[];
    backend: string[];
    cloudInfra: string[];
    database: string[];
    aiReadinessScore: number; // 0-100
    modernizationUrgencyScore: number; // 0-100
  };
  painPoints: PainPoint[];
  linkedInSignals: LinkedInCollaborationSignal[];
  serviceMatches: HiddenBrainsServiceMatch[];
  pitchStrategy?: {
    executivePitch: string;
    whyHiddenBrainsWins: string;
    primaryModernizationAngle: string;
    immediateNextStep: string;
  };
  outreach: OutreachAssets;
  executiveSummary: string;
  analyzedAt: string;
}

export interface ProspectAnalysisRequest {
  domain: string;
  customNotes?: string;
  targetFocus?: 'full_analysis' | 'modern_mern_ai' | 'rfp_collaboration' | 'outbound_pitch';
}
