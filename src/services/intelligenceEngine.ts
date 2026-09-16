import { CompanyIntelligence, PainPoint, LinkedInCollaborationSignal, HiddenBrainsServiceMatch } from '../types';

export function cleanDomain(input: string): string {
  let cleaned = input.trim().toLowerCase();
  cleaned = cleaned.replace(/^https?:\/\//i, '');
  cleaned = cleaned.replace(/^www\./i, '');
  cleaned = cleaned.split('/')[0];
  cleaned = cleaned.split('?')[0];
  cleaned = cleaned.split('#')[0];
  return cleaned;
}

export function formatCompanyName(domain: string): string {
  const clean = cleanDomain(domain);
  const namePart = clean.split('.')[0] || 'Target Prospect';
  return namePart
    .split(/[-_]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function generateClientIntelligence(
  domain: string,
  customNotes?: string,
  targetFocus?: string
): CompanyIntelligence {
  const clean = cleanDomain(domain);
  const isHiddenBrains = clean.includes('hiddenbrains');
  const isHighway =
    clean.includes('highwayrealestates') ||
    clean.includes('highwayrealestate') ||
    clean.includes('highway');
  const isRealEstate =
    isHighway ||
    clean.includes('realestate') ||
    clean.includes('property') ||
    clean.includes('realty') ||
    clean.includes('properties');

  // Case 1: Hidden Brains
  if (isHiddenBrains) {
    return {
      id: `hb-${Date.now()}`,
      domain: 'hiddenbrains.com',
      companyName: 'Hidden Brains InfoTech',
      tagline: 'Enterprise Digital Transformation, AI Solutions & Custom Software Engineering',
      industry: 'Information Technology, Enterprise Software & IT Consulting',
      headquarters: 'Ahmedabad, Gujarat, India (with offices in UK, USA & Norway)',
      estimatedScale: '500+ In-House Engineers, 2,400+ Global Clients across 107+ Countries',
      coreOfferings: [
        'Custom Web Development & Modern MERN Engineering (React, Next.js, Node.js)',
        'Enterprise AI & Generative AI Solutions (Copilots, RAG pipelines, workflow automation)',
        'Cloud Modernization & DevOps Automation (AWS, Azure, GCP, CI/CD, Docker)',
        'Dedicated Development Teams & Staff Augmentation (CMMI Level 3 certified)',
        'Mobile App Development (Flutter, React Native, iOS, Android)',
        'Enterprise Platforms & ERP (ROCKEYE ERP, Smart Logistics, IoT solutions)',
      ],
      targetAudience:
        'Global mid-market and enterprise businesses, scale-ups, and organizations requiring digital acceleration',
      techStackObservedOrInferred: {
        frontend: ['React.js', 'Next.js', 'Angular', 'Vue.js', 'Tailwind CSS', 'TypeScript'],
        backend: ['Node.js', 'Express', 'Python / Django / FastAPI', 'PHP / Laravel', 'Java Spring Boot', '.NET Core'],
        cloudInfra: ['AWS', 'Microsoft Azure', 'Google Cloud Platform', 'Docker', 'Kubernetes'],
        database: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'],
        aiReadinessScore: 94,
        modernizationUrgencyScore: 88,
      },
      painPoints: [
        {
          id: 'p1',
          category: 'architecture_mern',
          title: 'Monolithic Legacy Stack Drag vs High-Speed MERN/Next.js Architecture',
          severity: 'high',
          currentRisk:
            'Prospective clients running legacy PHP/monolith backends face 3-5x slower release velocity, rigid deployments, and brittle UI scaling.',
          businessImpact:
            'High maintenance costs, higher infrastructure bills, and failure to meet modern micro-frontend user expectations.',
          remedy:
            'Decouple monolithic frontends with modern MERN (React/Next.js + Node.js microservices) with automated CI/CD.',
        },
        {
          id: 'p2',
          category: 'ai_automation',
          title: 'Absence of GenAI Copilots & Workflow Automation',
          severity: 'critical',
          currentRisk:
            'Without integrated AI assistants or automated document/data extraction, enterprise teams spend hundreds of manual hours on repetitive operational overhead.',
          businessImpact:
            'Competitors leveraging agentic workflows and LLM copilots achieve 40%+ operational efficiency gains.',
          remedy:
            'Deploy custom LLM-powered enterprise assistants, RAG internal knowledge bases, and conversational AI interfaces.',
        },
        {
          id: 'p3',
          category: 'cloud_devops',
          title: 'Sub-Optimal Cloud Infrastructure & Manual Deployment Bottlenecks',
          severity: 'medium',
          currentRisk:
            'Un-orchestrated cloud servers with no automated autoscaling or containerization lead to downtime during traffic spikes.',
          businessImpact:
            'Downtime risk, compliance vulnerabilities (ISO/IEC 27001), and unpredictably high cloud billing.',
          remedy:
            'Cloud migration to managed container services (ECS/EKS/Cloud Run) with automated Terraform & GitHub Actions pipelines.',
        },
      ],
      linkedInSignals: [
        {
          type: 'open_initiative',
          title: 'Hidden Brains Global Partnership & Strategic Collaboration Initiative',
          summary:
            'Hidden Brains and ROCKEYE Partner Programs invite technology integrators, consultants, and enterprises for joint bids, co-development, and strategic IT modernization.',
          sourceContext: 'LinkedIn Official Channels & ROCKEYE Partner Program ecosystem announcements',
          collaborationAngle:
            'Position as a strategic software co-delivery partner for complex RFPs and modern full-stack application development.',
          keyStakeholders: [
            'Managing Director & VP Partnerships',
            'Chief Technology Officer',
            'Head of Business Alliances',
          ],
        },
        {
          type: 'rfp_bid',
          title: 'Joint Venture & Consortium Opportunities for Enterprise RFPs',
          summary:
            'Actively participating in large-scale government and enterprise digital transformation tenders requiring CMMI Level 3 and ISO 27001 accredited delivery teams.',
          sourceContext: 'Enterprise RFP & Global Procurement tenders in the UK, US, and EMEA',
          collaborationAngle:
            'Form consortiums where Hidden Brains provides rapid engineering pods while the local partner handles on-ground stakeholder management.',
          keyStakeholders: [
            'VP Enterprise Sales',
            'Head of Procurement',
            'Director of Solutions Architecture',
          ],
        },
      ],
      serviceMatches: [
        {
          serviceName: 'Modern MERN & Full-Stack Application Engineering',
          serviceCategory: 'Custom Software Development',
          hiddenBrainsOfferingUrl: 'https://hiddenbrains.com/web-development-services.html',
          whyFit:
            'Directly resolves monolithic sluggishness by delivering high-throughput React/Node.js web applications with responsive design.',
          valueProposition:
            'CMMI Level 3 quality processes with 20+ years of proven full-stack delivery experience across 107+ countries.',
          proofOfCapability:
            'Over 2,400 completed projects with high ratings on Clutch, GoodFirms, and ISO 9001 certified delivery.',
          implementationScope: [
            'Architecture audit & legacy code refactoring',
            'Full-stack MERN (MongoDB, Express, React, Node.js) implementation',
            'REST & GraphQL API design with sub-second latency targets',
            'End-to-end automated testing & CI/CD deployment',
          ],
        },
        {
          serviceName: 'Enterprise AI & Generative AI Solutions',
          serviceCategory: 'Artificial Intelligence & Machine Learning',
          hiddenBrainsOfferingUrl: 'https://hiddenbrains.com/ai-development-services.html',
          whyFit:
            'Transforms routine workflows with enterprise LLMs, RAG knowledge discovery, and custom conversational agents.',
          valueProposition:
            'Secure, privacy-compliant AI integrations avoiding vendor lock-in while leveraging Gemini and leading models.',
          proofOfCapability:
            'Dedicated AI/ML lab delivering chatbots, predictive engines, and intelligent computer vision applications.',
          implementationScope: [
            'Enterprise AI feasibility & data pipeline readiness',
            'Custom RAG architecture with vector databases',
            'Role-based GenAI copilot deployment',
            'Model fine-tuning and ongoing observability',
          ],
        },
        {
          serviceName: 'Dedicated Offshore / Nearshore Engineering Pods',
          serviceCategory: 'Staff Augmentation & Dedicated Teams',
          hiddenBrainsOfferingUrl: 'https://hiddenbrains.com/hire-dedicated-developers.html',
          whyFit:
            'Provides instant scale-up of senior MERN, Cloud, and AI engineers without lengthy recruitment cycles.',
          valueProposition:
            'Pre-vetted developers aligned with US/UK timezones, saving up to 60% on operational development budgets.',
          proofOfCapability:
            '500+ skilled in-house developers operating under strict NDA and ISO 27001 data governance.',
          implementationScope: [
            'Immediate pod assembly within 5 business days',
            'Scrum master & agile sprint alignment',
            'Daily standups and Jira/GitHub transparency',
          ],
        },
      ],
      pitchStrategy: {
        executivePitch:
          'Showcase Hidden Brains as the global software engineering power plant that enables enterprises to modernize legacy platforms into agile MERN architectures and embed enterprise AI workflows.',
        whyHiddenBrainsWins:
          '20+ years in software engineering, 500+ certified engineers, CMMI Level 3 quality governance, and a proven track record across 2,400+ clients.',
        primaryModernizationAngle:
          'Accelerate digital transformation by replacing legacy monolithic codebases with scalable React/Next.js frontends and cloud microservices.',
        immediateNextStep:
          'Schedule a 15-minute technical discovery session to review architecture blueprints and deployment timelines.',
      },
      outreach: {
        linkedInInMail: {
          subject: 'Modern MERN & AI Co-Delivery Collaboration for Hidden Brains Initiatives',
          hook: 'I noticed your recent public initiative regarding ecosystem partnerships and enterprise software modernization.',
          body: `Hi [Prospect Name],\n\nI came across your team's ongoing focus on accelerating digital delivery and open collaboration initiatives. Many engineering leaders in enterprise IT face the twin challenge of modernizing core web platforms (shifting away from monolithic legacy architectures to agile MERN/Next.js stacks) while simultaneously embedding Generative AI copilots into customer workflows.\n\nAt Hidden Brains, we've spent 20+ years partnering with over 2,400 enterprises across 107 countries—providing CMMI Level 3 certified full-stack pods, AI engineers, and joint RFP delivery capabilities.\n\nGiven your open initiatives, would you be open to a quick 10-minute introductory conversation this Thursday to explore co-delivery or engineering pod support?`,
          callToAction: 'Would you be open to a brief 10-minute chat this Thursday at 2:00 PM EST?',
        },
        coldEmailSequence: {
          step1Subject: 'Partnership & modern MERN/AI capabilities for your current initiatives',
          step1Body: `Hi [First Name],\n\nI was reviewing your team's recent announcements around digital transformation and strategic collaboration.\n\nTypically, fast-scaling technology teams at this stage run into two core bottlenecks:\n1. Legacy architecture limits that slow down deployment velocity compared to modern MERN/cloud-native setups.\n2. Pressure to operationalize Generative AI into products without derailing existing engineering roadmaps.\n\nHidden Brains (CMMI Level 3, 500+ engineers) specializes in modernizing complex web systems and deploying enterprise AI solutions. We frequently partner on joint RFPs and supply dedicated engineering pods that integrate seamlessly into existing sprints.\n\nCould we connect for a brief 10-minute sync to see if there's mutual synergy for your upcoming roadmap?\n\nBest regards,\nAlex Christian\nBusiness Development Team | Hidden Brains InfoTech\nhttps://hiddenbrains.com`,
          step2Subject: 'Re: Partnership & modern MERN/AI capabilities for your current initiatives',
          step2Body: `Hi [First Name],\n\nFollowing up on my note from earlier this week. I know you have a full plate managing ongoing initiatives.\n\nI wanted to share a quick case study where we helped an enterprise modernize their legacy application to a React/Node.js microservices architecture with an embedded AI workflow—slashing release cycles by 55% within 90 days.\n\nHappy to share the 1-page technical brief if this aligns with your Q3/Q4 priorities.\n\nBest,\nAlex Christian`,
        },
        executiveProposalBrief: `EXECUTIVE BRIEF: STRATEGIC SOFTWARE MODERNIZATION & PARTNERSHIP PROPOSAL\n\nTarget Organization: ${clean}\nPrepared by: Hidden Brains InfoTech Partnership Team (https://hiddenbrains.com)\n\n1. Executive Summary\nIn today's fast-moving software landscape, companies risk customer churn and technical debt when running un-modernized stacks without modern MERN reactivity and AI-driven automation. Hidden Brains proposes an agile collaboration model to accelerate engineering velocity and co-deliver on high-value initiatives and RFPs.\n\n2. Key Pillars of Collaboration\n- Modern Full-Stack Acceleration: React, Next.js, Node.js microservices refactoring.\n- Enterprise AI Enablement: LLM copilots, RAG knowledge integration, and automated data pipelines.\n- Flexible Engagement: Dedicated engineering teams, fixed-bid delivery, or joint RFP consortiums.\n\n3. Proof Points\n- CMMI Level 3 & ISO 27001 certified security & delivery governance.\n- 2,400+ clients across 107 countries.\n- Rapid deployment of pods within 5 business days.`,
        discoveryQuestions: [
          'What is the current technical debt friction between your legacy backend and your customer-facing web interfaces?',
          'How is your leadership team addressing the surge in customer demand for native AI or conversational workflows?',
          'Are there upcoming RFPs or client-requested features where supplemental MERN or AI engineering capacity would shorten time-to-market?',
          'What is your target timeline for modernizing your core application infrastructure?',
        ],
      },
      executiveSummary: `Hidden Brains InfoTech is a global enterprise software and digital transformation company. For prospective collaborations and client opportunities, the primary value drivers are accelerating engineering velocity with modern MERN stacks, implementing AI copilots, and providing scalable, CMMI Level 3 certified offshore/nearshore engineering teams.`,
      analyzedAt: new Date().toISOString(),
    };
  }

  // Case 2: Highway Real Estate & UAE Property Brokerages
  if (isRealEstate) {
    const compName = isHighway ? 'Highway Real Estate' : formatCompanyName(clean);

    return {
      id: `re-${Date.now()}`,
      domain: clean,
      companyName: compName,
      tagline: 'Leading Real Estate Agency & Off-Plan Investment Advisory in Dubai & Sharjah',
      industry: 'Real Estate Brokerage, Property Management & Off-Plan Developments',
      headquarters: 'Dubai (Saheel Tower 1, Al Nahda) & Sharjah (Muwaileh), United Arab Emirates',
      estimatedScale: '50+ Licensed Brokers & Agents | 1,700+ Active Listings | Bayut Agency of the Year 2024 & Dubizzle Awards 2025',
      coreOfferings: [
        'Residential & Commercial Property Sales and Leasing across Dubai and Sharjah',
        'Exclusive Off-Plan Developer Project Launches (Emaar, Damac, Sobha, Nakheel)',
        'Full-Lifecycle Landlord & Tenant Property Management and Asset Maintenance',
        'UAE Golden Visa & International Investor Advisory Services',
        'Multi-Portal Listing Syndication across Bayut, Property Finder, and Dubizzle',
      ],
      targetAudience:
        'High-net-worth individual (HNWI) investors, international buyers (UK, GCC, Europe, Asia), UAE tenants, and property owners seeking maximum rental yield.',
      techStackObservedOrInferred: {
        frontend: ['WordPress / Custom PHP Real Estate Portal', 'Legacy jQuery & CSS', 'Mobile Web Viewport'],
        backend: ['PHP / Apache Server', 'MySQL Relational Database', 'Manual Portal Entry APIs'],
        cloudInfra: ['cPanel / Shared Cloud Hosting', 'Basic Static CDN'],
        database: ['MySQL Uncached Property Tables', 'Manual Media Storage'],
        aiReadinessScore: 28,
        modernizationUrgencyScore: 92,
      },
      painPoints: [
        {
          id: 'rep1',
          category: 'architecture_mern',
          title: 'High-Res Property Listing & Search Latency (MERN Need)',
          severity: 'critical',
          currentRisk:
            'Heavy high-resolution photo galleries and complex filtering (neighborhoods, off-plan completion, rental yields) on legacy PHP/CMS architecture causes 3-4s page loads.',
          businessImpact:
            'Over 50% bounce rate from mobile property seekers, lost buyer inquiries, and poor Core Web Vitals rankings against agile UAE PropTech competitors.',
          remedy:
            'Migrate to a modern MERN stack (Next.js/React frontend with server-side rendering, MongoDB Geospatial indexing for instant neighborhood search, and Node.js microservices) delivering sub-50ms query speeds.',
        },
        {
          id: 'rep2',
          category: 'cloud_devops',
          title: 'Multi-Portal Sync Friction & CRM Fragmentation (Bayut / Property Finder / Dubizzle)',
          severity: 'high',
          currentRisk:
            'Manual dual-entry of listings across Bayut, Property Finder, and Dubizzle leads to stale inventory, pricing discrepancies, and delayed lead routing.',
          businessImpact:
            'Delayed lead response times (UAE property conversion drops 80% if not contacted within 5 minutes) and hundreds of lost administrative agent hours.',
          remedy:
            'Develop automated Node.js microservices that synchronize property listings, status updates, and inbound leads bidirectionally between Bayut, Property Finder, and internal CRM.',
        },
        {
          id: 'rep3',
          category: 'ai_automation',
          title: 'Absence of 24/7 Multilingual AI Property Concierge & WhatsApp Copilot',
          severity: 'critical',
          currentRisk:
            'Lack of an automated AI sales assistant leaves foreign buyers (UK, GCC, Europe, Asia) unattended during off-hours across time zones.',
          businessImpact:
            'Hundreds of qualified off-plan and luxury property investor leads lost each week outside standard UAE business hours.',
          remedy:
            'Deploy an enterprise GenAI conversational agent on website and WhatsApp trained on Dubai/Sharjah property regulations, off-plan payment plans, and rental yield calculators that qualifies buyers and books agent viewings 24/7.',
        },
        {
          id: 'rep4',
          category: 'mobile_scalability',
          title: 'Sub-Optimal Mobile Web Experience & Missing Push Re-engagement',
          severity: 'high',
          currentRisk:
            'Over 75% of UAE real estate searches occur on mobile devices, but the current web portal lacks PWA/app-level interactivity.',
          businessImpact:
            'Lower mobile conversion and inability to re-engage prospective buyers with instant push alerts for price drops and off-plan launches.',
          remedy:
            'Build a mobile-first Progressive Web App (PWA) or cross-platform React Native app with interactive map search and instant WhatsApp lead dispatch.',
        },
      ],
      linkedInSignals: [
        {
          type: 'partnership_call',
          title: 'Global Brokerage & Master Developer Off-Plan Co-Brokering Initiative',
          summary: `${compName} regularly invites international broker partners, family offices, and affiliate agencies to co-sell premier Dubai & Sharjah off-plan luxury projects with shared commissions.`,
          sourceContext: `${compName} LinkedIn Official Footprint & UAE Property Industry Network`,
          collaborationAngle:
            'Hidden Brains can engineer a dedicated "Partner Co-Broker Portal" and lead attribution system for their international agent network.',
          keyStakeholders: ['Managing Director', 'Head of Sales & Leasing', 'Chief Commercial Officer'],
        },
        {
          type: 'open_initiative',
          title: 'Post-Award PropTech Digital Infrastructure & Broker Portal Upgrade',
          summary:
            'Following their Bayut Agency of the Year 2024 recognition, leadership is expanding digital lead acquisition and modernizing internal agent transaction tools.',
          sourceContext: 'Executive announcements & UAE PropTech modernization initiatives',
          collaborationAngle:
            'Position Hidden Brains as the CMMI Level 3 technology partner to re-engineer their property search engine, CRM sync, and AI lead automation.',
          keyStakeholders: ['Managing Director', 'Head of Digital Marketing', 'Operations Director'],
        },
      ],
      serviceMatches: [
        {
          serviceName: 'Custom Web Application Development & MERN/Next.js Migration',
          serviceCategory: 'Modern Full-Stack Engineering',
          hiddenBrainsOfferingUrl: 'https://hiddenbrains.com/web-development-company.html',
          whyFit:
            `Directly replaces ${compName}'s legacy PHP portal with a sub-second React/Next.js frontend with instant property filters and dynamic off-plan project showcases.`,
          valueProposition:
            '60% lower engineering costs compared to local UAE agencies, backed by CMMI Level 3 certified quality assurance and 20+ years of enterprise software delivery.',
          proofOfCapability:
            'Delivered high-performance real estate portals and high-load consumer platforms for 2,400+ clients across 107 countries.',
          implementationScope: [
            'Next.js 14 SSR frontend with interactive map exploration',
            'Node.js REST/GraphQL property microservices architecture',
            'Automated image optimization & CDN caching for 4K property walkthroughs',
            'Sub-50ms search with MongoDB Geospatial indexing',
          ],
        },
        {
          serviceName: 'Enterprise AI, GenAI & Conversational Bot Solutions',
          serviceCategory: 'AI & Machine Learning Automation',
          hiddenBrainsOfferingUrl: 'https://hiddenbrains.com/artificial-intelligence.html',
          whyFit:
            'Provides an automated 24/7 bilingual (English & Arabic) AI concierge for WhatsApp and web to capture high-intent international property buyers.',
          valueProposition:
            'Immediate response time (sub-2 seconds) captures leads before competitors can react, increasing consultation bookings by up to 35%.',
          proofOfCapability:
            'Specialized AI lab deploying enterprise LLMs, RAG knowledge stores, and intelligent WhatsApp Business API integrations.',
          implementationScope: [
            'GenAI Property Concierge for off-plan payment plans & ROI queries',
            'Omnichannel integration: Website live chat & WhatsApp Business API',
            'Automated lead qualification & instant calendar booking for brokers',
            'Real-time lead push notifications to internal sales agents',
          ],
        },
        {
          serviceName: 'Mobile App Development (iOS & Android for Brokers & Buyers)',
          serviceCategory: 'Mobile Application Engineering',
          hiddenBrainsOfferingUrl: 'https://hiddenbrains.com/mobile-application-development.html',
          whyFit:
            `Empowers ${compName}'s 50+ brokers to manage listings, generate instant PDF brochures, and respond to buyer inquiries on the go.`,
          valueProposition:
            'Cross-platform Flutter / React Native architecture saves 40% in development time and delivers identical performance on iOS and Android.',
          proofOfCapability:
            'Over 1,000 mobile applications deployed to Apple App Store and Google Play with enterprise security encryption.',
          implementationScope: [
            'Interactive GPS map search & saved search notifications',
            'Agent listing management & one-click WhatsApp sharing',
            'Push notification alerts for new off-plan launch allocations',
            'Offline listing caching & biometric client authentication',
          ],
        },
        {
          serviceName: 'Dedicated Offshore Engineering Teams & CMMI Level 3 Pods',
          serviceCategory: 'Staff Augmentation & Dedicated Pods',
          hiddenBrainsOfferingUrl: 'https://hiddenbrains.com/hire-dedicated-developers.html',
          whyFit:
            `Gives ${compName} a dedicated team of 3-5 full-stack MERN & AI developers for continuous feature rollouts at 60% less cost than Dubai in-house hiring.`,
          valueProposition:
            'Ready-to-deploy developers onboarded within 5 business days, working in overlapping UAE (Gulf Standard Time) hours with dedicated project management.',
          proofOfCapability:
            '500+ in-house software engineers, ISO 27001 data security compliance, and proven CMMI Level 3 process rigor.',
          implementationScope: [
            'Dedicated full-time Senior React/Next.js Engineer',
            'Dedicated Node.js & Database Systems Engineer',
            'Quality Assurance (QA) and Automated Test Engineer',
            'Bi-weekly sprint planning, daily standups, and Jira transparency',
          ],
        },
      ],
      pitchStrategy: {
        executivePitch:
          `Position Hidden Brains as the specialized PropTech engineering partner to transform ${compName} into a digital-first brokerage powerhouse with a lightning-fast MERN property platform and a 24/7 Multilingual GenAI Property Concierge that captures international off-plan buyers around the clock.`,
        whyHiddenBrainsWins:
          'Hidden Brains gives them CMMI Level 3 certified engineering quality, 500+ developers, 20+ years in IT, and an offshore cost structure that provides 60% savings compared to domestic UAE tech agencies.',
        primaryModernizationAngle:
          'Eliminate property page load lag and automate 24/7 international buyer capture on WhatsApp so brokers never miss an off-plan deal.',
        immediateNextStep:
          'Propose a 15-minute introductory video meeting to demonstrate an interactive MERN property catalog prototype and a live WhatsApp GenAI concierge demo.',
      },
      outreach: {
        linkedInInMail: {
          subject: `Digital Acceleration & PropTech Co-Delivery for ${compName}`,
          hook: `Congratulations on ${compName}'s recognition as Bayut Agency of the Year and your continued leadership in Dubai & Sharjah off-plan developments.`,
          body: `Hi [Prospect Name],\n\nCongratulations on ${compName}'s recognition as Bayut Agency of the Year 2024 and your expanding footprint in Dubai and Sharjah off-plan investments.\n\nAs UAE real estate transaction volumes hit historic highs, forward-thinking brokerages are modernizing their digital infrastructure—replacing legacy property listing portals with sub-second MERN/Next.js catalogs and deploying 24/7 Multilingual GenAI concierges (via web and WhatsApp) to capture high-net-worth international buyers across US, UK, and Asian time zones.\n\nAt Hidden Brains InfoTech (CMMI Level 3, 500+ engineers, 2,400+ global deployments), we build custom real estate platforms and supply dedicated engineering pods that integrate automated Bayut/Property Finder sync and AI lead qualifying.\n\nGiven your active initiatives and off-plan co-brokering projects, would you be open to a brief 10-minute introductory chat this Thursday to explore how we can support your tech roadmap?`,
          callToAction: 'Would you be open to a brief 10-minute chat this Thursday at 2:00 PM GST?',
        },
        coldEmailSequence: {
          step1Subject: `PropTech Modernization & 24/7 GenAI Lead Capture for ${compName}`,
          step1Body: `Hi [First Name],\n\nI've been following ${compName}'s impressive portfolio of off-plan launches and premier listings across Dubai and Sharjah.\n\nWith international buyer inquiries pouring in from Europe, the GCC, and Asia, many agency leaders we speak with face two common challenges:\n1. Legacy property portal latency that causes mobile buyer drop-off during new off-plan launches.\n2. Lost buyer inquiries outside UAE business hours before a broker can respond.\n\nHidden Brains InfoTech (https://hiddenbrains.com) is an enterprise technology firm with CMMI Level 3 certification and 500+ engineers. We build lightning-fast MERN real estate platforms and 24/7 WhatsApp AI concierges that qualify buyers, calculate payment plans, and book viewings instantly.\n\nCould we connect for a brief 10-minute sync this week to explore if our dedicated PropTech engineering pods could add value to your digital initiatives?\n\nBest regards,\nAlex Christian\nBusiness Development | Hidden Brains InfoTech\nEmail: alex.christian@hiddenbrains.in | Web: https://hiddenbrains.com`,
          step2Subject: `Re: PropTech Modernization & 24/7 GenAI Lead Capture for ${compName}`,
          step2Body: `Hi [First Name],\n\nFollowing up on my earlier note regarding modernizing ${compName}'s digital buyer experience.\n\nWe recently assisted a luxury real estate brokerage in deploying a Next.js property search engine combined with a WhatsApp GenAI sales copilot. Within 60 days, their mobile listing bounce rate dropped by 45% and after-hours lead conversion surged by 38%.\n\nI would be delighted to send over a 2-page PropTech architecture brief or schedule a quick 10-minute demo if this aligns with your Q3/Q4 priorities.\n\nBest regards,\nAlex Christian\nHidden Brains InfoTech`,
        },
        executiveProposalBrief: `EXECUTIVE BRIEF: PROPTECH DIGITAL TRANSFORMATION & PARTNERSHIP PROPOSAL\n\nTarget Client: ${compName} (${clean})\nPrepared by: Hidden Brains InfoTech (https://hiddenbrains.com)\n\n1. Executive Summary\n${compName} is a top-performing real estate brokerage in Dubai and Sharjah. To maintain a competitive edge and maximize off-plan sales velocity, modernizing the digital infrastructure from legacy monolithic CMS systems to a reactive MERN architecture and deploying 24/7 GenAI buyer concierges will drive substantial conversion gains.\n\n2. Proposed Solution Pillars\n- Modern MERN PropTech Portal: Next.js frontend with geospatial map search, sub-50ms listing query latency, and high-res image optimization.\n- 24/7 Multilingual GenAI Property Concierge: Web and WhatsApp AI assistant answering off-plan questions, payment plan breakdowns, and qualifying buyers.\n- Multi-Portal Integration Pipeline: Automated Node.js microservices synchronizing listings with Bayut, Property Finder, and internal CRM.\n- Dedicated Engineering Pod: 3-5 pre-vetted senior developers dedicated to ${compName} under CMMI Level 3 quality governance.\n\n3. Value Delivered\n- Up to 60% savings compared to domestic UAE tech development agencies.\n- Near-zero after-hours lead drop-off.\n- Rapid MVP delivery in 6-8 weeks.`,
        discoveryQuestions: [
          `What is the average page load speed for high-resolution property galleries on ${clean} on mobile connections?`,
          'How does your team currently handle inbound buyer inquiries that arrive between 9:00 PM and 8:00 AM UAE time from international investors?',
          'How many manual hours do administrative staff spend duplicating listings across Bayut, Property Finder, and your internal website?',
          'Are there upcoming off-plan launches or partner broker programs where a dedicated engineering pod would accelerate delivery?',
        ],
      },
      executiveSummary: `${compName} is an award-winning real estate brokerage and off-plan investment firm in Dubai and Sharjah. By modernizing their tech stack with a high-performance MERN architecture, automating multi-portal listing sync, and embedding a 24/7 WhatsApp GenAI concierge, Hidden Brains can help them capture significantly more international property investors at 60% lower development costs.`,
      analyzedAt: new Date().toISOString(),
    };
  }

  // Case 3: Generic / Any other prospect domain
  const compName = formatCompanyName(clean);
  return {
    id: `prospect-${Date.now()}`,
    domain: clean,
    companyName: compName,
    tagline: `Enterprise Solutions & Digital Services at ${clean}`,
    industry: 'Technology & Enterprise Business Services',
    headquarters: 'Global Operations / Regional Headquarters',
    estimatedScale: 'Mid-Market to Enterprise Business',
    coreOfferings: [
      `Core products, customer workflows, and digital operations at ${clean}`,
      'Web-based customer interface and client self-service portal',
      'Data operations, billing management, and administrative services',
      'Multi-channel customer engagement and partner integrations',
    ],
    targetAudience: `Enterprise clients, commercial buyers, and digital platform users of ${compName}`,
    techStackObservedOrInferred: {
      frontend: ['Modern Web Framework / Legacy Web UI', 'HTML5 / CSS3 / JavaScript', 'REST APIs'],
      backend: ['Node.js / Python / Java / PHP', 'Application Server', 'Cloud API Endpoints'],
      cloudInfra: ['Cloud Hosted (AWS / Azure / GCP)', 'Container / VM Infrastructure'],
      database: ['Relational & Document Databases', 'Managed Cloud Data Store'],
      aiReadinessScore: 42,
      modernizationUrgencyScore: 84,
    },
    painPoints: [
      {
        id: 'gp1',
        category: 'architecture_mern',
        title: 'Legacy Monolithic Frontend Friction vs Modern MERN Reactivity',
        severity: 'critical',
        currentRisk: `The current web architecture for ${compName} exhibits monolithic dependencies, leading to slower page rendering and high latency under peak visitor traffic.`,
        businessImpact:
          'Higher user bounce rates, increased code maintenance costs, and slower feature rollout velocity compared to agile digital-first competitors.',
        remedy:
          'Refactor user interfaces to modern MERN (Next.js/React frontend with Node.js microservices) to achieve instant UI responsiveness and modular micro-frontends.',
      },
      {
        id: 'gp2',
        category: 'ai_automation',
        title: 'Absence of Automated GenAI Copilots & Workflow Intelligence',
        severity: 'high',
        currentRisk: `Operational workflows and customer support at ${compName} rely heavily on manual human coordination rather than automated LLM-assisted pipelines.`,
        businessImpact:
          'Substantial operational expense, delayed response times for inquiries, and missed opportunities to automate repetitive document extraction.',
        remedy:
          'Integrate enterprise Generative AI copilots and RAG document search engines built with secure model guardrails to automate 40%+ of routine manual tasks.',
      },
      {
        id: 'gp3',
        category: 'cloud_devops',
        title: 'Cloud Scalability & Automated Deployment Bottlenecks',
        severity: 'medium',
        currentRisk:
          'Lack of mature CI/CD orchestration and autoscaling leads to deployment delays and vulnerability to intermittent service interruptions.',
        businessImpact:
          'Extended downtime risks during software releases and unpredictable infrastructure operational expenditures.',
        remedy:
          'Modernize cloud architecture using containerized services (Docker, Kubernetes) and automated GitHub Actions / Terraform CI/CD pipelines.',
      },
    ],
    linkedInSignals: [
      {
        type: 'open_initiative',
        title: `${compName} Digital Modernization & Strategic Co-Development Initiative`,
        summary: `${compName} is actively scaling its digital initiatives and seeking high-caliber technology partners for ongoing software innovation and product delivery.`,
        sourceContext: `${compName} Digital Footprint & Enterprise Technology Channels`,
        collaborationAngle:
          'Position Hidden Brains as the CMMI Level 3 certified delivery partner to accelerate engineering velocity and co-deliver on key digital roadmaps.',
        keyStakeholders: ['Chief Technology Officer', 'VP of Engineering', 'Head of Digital Transformation'],
      },
      {
        type: 'rfp_bid',
        title: 'Upcoming RFP & Enterprise Consortium Delivery Opportunities',
        summary:
          'Tender opportunities and technology modernization proposals requiring seasoned engineering capacity and accredited software delivery standards.',
        sourceContext: 'Enterprise RFP & Technology Procurement Networks',
        collaborationAngle:
          'Form an agile delivery consortium where Hidden Brains provides rapid, high-skill engineering pods while the client team focuses on core strategy.',
        keyStakeholders: ['Head of Procurement', 'Director of Enterprise Architecture', 'Chief Information Officer'],
      },
    ],
    serviceMatches: [
      {
        serviceName: 'Custom Web Application Development & MERN Stack Engineering',
        serviceCategory: 'Modern Full-Stack Engineering',
        hiddenBrainsOfferingUrl: 'https://hiddenbrains.com/web-development-company.html',
        whyFit: `Directly replaces legacy codebases at ${compName} with modular React/Node.js web applications engineered for speed, scalability, and security.`,
        valueProposition:
          'CMMI Level 3 certified delivery with 20+ years of enterprise engineering excellence and 2,400+ clients across 107 countries.',
        proofOfCapability:
          'Ranked among top software engineering providers on Clutch and GoodFirms with ISO 9001 and ISO 27001 data certifications.',
        implementationScope: [
          'Architecture health audit & technical debt refactoring',
          'MERN (MongoDB, Express, React, Node.js) development',
          'Scalable REST & GraphQL API orchestration',
          'Automated testing & CI/CD deployment pipelines',
        ],
      },
      {
        serviceName: 'Enterprise AI & Generative AI Solutions',
        serviceCategory: 'Artificial Intelligence & Machine Learning',
        hiddenBrainsOfferingUrl: 'https://hiddenbrains.com/artificial-intelligence.html',
        whyFit:
          'Enables intelligent document processing, predictive insights, and customized GenAI copilots to automate core business operations.',
        valueProposition:
          'Enterprise-grade AI security ensuring data privacy while maximizing operational efficiency gains.',
        proofOfCapability:
          'Specialized AI/ML laboratory delivering real-world conversational AI, predictive analytics, and computer vision systems.',
        implementationScope: [
          'AI readiness and data architecture evaluation',
          'Custom RAG knowledge retriever pipelines',
          'Enterprise copilot and customer-facing AI agents',
          'Model monitoring and continuous performance tuning',
        ],
      },
      {
        serviceName: 'Dedicated Offshore Engineering Teams & CMMI Level 3 Pods',
        serviceCategory: 'Staff Augmentation & Dedicated Teams',
        hiddenBrainsOfferingUrl: 'https://hiddenbrains.com/hire-dedicated-developers.html',
        whyFit:
          'Supplies senior, pre-vetted full-stack and AI developers in dedicated pods onboarded within 5 business days.',
        valueProposition:
          'Save up to 60% on software development costs while maintaining complete sprint transparency and agile governance.',
        proofOfCapability:
          '500+ skilled in-house developers operating under strict enterprise NDAs and quality management protocols.',
        implementationScope: [
          'Immediate engineering pod assembly within 5 business days',
          'Agile sprint alignment with daily standups and Jira tracking',
          'Overlapping timezone support for seamless daily collaboration',
        ],
      },
    ],
    pitchStrategy: {
      executivePitch: `Position Hidden Brains as the global software engineering partner that empowers ${compName} to eliminate technical debt, modernize legacy systems to high-performance MERN architectures, and unlock enterprise AI efficiency.`,
      whyHiddenBrainsWins:
        '20+ years of proven delivery, 500+ certified engineers, CMMI Level 3 governance, and an offshore delivery model that delivers 60% operational savings.',
      primaryModernizationAngle:
        'Accelerate time-to-market and reduce infrastructure overhead by migrating legacy applications to scalable React/Node.js cloud architectures.',
      immediateNextStep:
        'Schedule a 15-minute technical discovery call to review architectural requirements and explore a rapid proof of concept.',
    },
    outreach: {
      linkedInInMail: {
        subject: `Modern MERN & AI Engineering Collaboration for ${compName}`,
        hook: `I noticed ${compName}'s ongoing focus on digital transformation and expanding operational initiatives.`,
        body: `Hi [Prospect Name],\n\nI came across your team's ongoing focus on digital growth and modernizing customer-facing applications. Technology leaders across enterprise business services frequently face the challenge of modernizing legacy web systems (migrating toward modern MERN/Next.js architectures) while simultaneously integrating Generative AI capabilities into core workflows.\n\nAt Hidden Brains InfoTech (CMMI Level 3, 500+ engineers, 2,400+ clients across 107 countries), we partner with scaling enterprises to build custom software, deploy enterprise AI, and provide dedicated engineering pods.\n\nGiven your team's active initiatives, would you be open to a quick 10-minute introductory call this week to explore potential engineering synergies?`,
        callToAction: 'Would you be open to a brief 10-minute chat this Thursday at 2:00 PM EST?',
      },
      coldEmailSequence: {
        step1Subject: `Partnership & modern MERN/AI capabilities for ${compName}`,
        step1Body: `Hi [First Name],\n\nI was reviewing ${compName}'s digital footprint and recent operational milestones.\n\nTypically, fast-moving organizations at this stage encounter two primary engineering bottlenecks:\n1. Legacy system constraints that reduce deployment velocity compared to modern MERN/cloud-native setups.\n2. The need to implement practical Generative AI workflows without overwhelming the existing engineering roadmap.\n\nHidden Brains (https://hiddenbrains.com) is a CMMI Level 3 enterprise IT firm with 500+ developers. We specialize in full-stack modernization, AI engineering, and providing dedicated pods that integrate seamlessly into existing teams.\n\nCould we connect for a brief 10-minute conversation this week to see if there is potential alignment for your roadmap?\n\nBest regards,\nAlex Christian\nBusiness Development | Hidden Brains InfoTech\nEmail: alex.christian@hiddenbrains.in | Web: https://hiddenbrains.com`,
        step2Subject: `Re: Partnership & modern MERN/AI capabilities for ${compName}`,
        step2Body: `Hi [First Name],\n\nFollowing up on my note from earlier this week. I know your team is actively focused on core delivery priorities.\n\nI wanted to share a brief case study where we assisted an enterprise client in migrating a legacy monolith to a high-speed React/Node.js architecture while embedding an automated AI data pipeline—cutting operational cycle times by 50% within 90 days.\n\nI would be delighted to share a 1-page summary if this aligns with your current priorities.\n\nBest regards,\nAlex Christian\nHidden Brains InfoTech`,
      },
      executiveProposalBrief: `EXECUTIVE BRIEF: STRATEGIC SOFTWARE MODERNIZATION & PARTNERSHIP PROPOSAL\n\nTarget Organization: ${compName} (${clean})\nPrepared by: Hidden Brains InfoTech (https://hiddenbrains.com)\n\n1. Executive Summary\n${compName} represents a prime candidate for software modernization. Upgrading legacy digital systems to a responsive MERN architecture and embedding enterprise AI copilots will significantly boost engineering velocity, enhance customer satisfaction, and lower operational costs.\n\n2. Key Pillars of Collaboration\n- Modern Full-Stack Acceleration: React/Next.js frontend with Node.js microservices.\n- Enterprise AI Enablement: Custom LLM copilots, RAG knowledge retrieval, and workflow automation.\n- Flexible Engagement: Dedicated offshore engineering pods with CMMI Level 3 governance.\n\n3. Proof Points\n- CMMI Level 3 & ISO 27001 accredited delivery.\n- 500+ in-house engineers, 2,400+ clients across 107 countries.\n- Rapid team assembly within 5 business days with 60% operational savings.`,
      discoveryQuestions: [
        `What are the primary performance and maintenance bottlenecks in the current web architecture at ${clean}?`,
        'How is your team evaluating Generative AI to automate customer-facing or internal operational workflows?',
        'Are there key feature initiatives where supplemental full-stack or AI developer capacity would accelerate your timeline?',
        'What is your target schedule for your next major application modernization cycle?',
      ],
    },
    executiveSummary: `${compName} is an active enterprise business prospect. Modernizing their application architecture to a high-speed MERN stack, integrating enterprise AI workflows, and providing dedicated CMMI Level 3 engineering pods from Hidden Brains will deliver significant velocity improvements and cost efficiencies.`,
    analyzedAt: new Date().toISOString(),
  };
}
