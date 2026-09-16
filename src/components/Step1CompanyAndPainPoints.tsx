import React from 'react';
import { Building2, AlertTriangle, Layers, Cpu, Server, CheckCircle2, ShieldAlert, Sparkles, TrendingUp, Code2, ExternalLink, Award } from 'lucide-react';
import { CompanyIntelligence } from '../types';

interface Step1Props {
  intelligence: CompanyIntelligence;
}

export const Step1CompanyAndPainPoints: React.FC<Step1Props> = ({ intelligence }) => {
  const {
    companyName,
    domain,
    tagline,
    industry,
    headquarters,
    estimatedScale,
    coreOfferings,
    targetAudience,
    techStackObservedOrInferred,
    painPoints,
    executiveSummary,
  } = intelligence;

  const urgency = techStackObservedOrInferred?.modernizationUrgencyScore || 85;
  const aiReadiness = techStackObservedOrInferred?.aiReadinessScore || 65;

  return (
    <section id="step-1-research" className="space-y-6">
      {/* Step Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">
              Step 1
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 tracking-tight">
              Company Research & Tech Stack Vulnerabilities
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Reconnaissance on company operations, industry positioning, and critical software/IT pain areas if not modern MERN or AI-enabled.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={domain.startsWith('http') ? domain : `https://${domain}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-200 shadow-xs transition-colors"
          >
            <Building2 className="w-3.5 h-3.5 text-blue-600" />
            <span>{domain}</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
        </div>
      </div>

      {/* Company Profile Card */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                <h3 className="text-2xl font-bold text-slate-900 font-display tracking-tight">
                  {companyName}
                </h3>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-semibold">
                  {industry}
                </span>
                {domain.includes('highway') && (
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 font-semibold flex items-center gap-1">
                    <Award className="w-3 h-3 text-amber-600" />
                    Bayut Agency of the Year 2024
                  </span>
                )}
              </div>
              <p className="text-sm text-blue-700 font-semibold">{tagline}</p>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed font-normal">
              {executiveSummary}
            </p>

            {/* Quick Metadata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold block mb-1">
                  Headquarters
                </span>
                <span className="text-xs text-slate-900 font-semibold">{headquarters}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold block mb-1">
                  Organizational Scale
                </span>
                <span className="text-xs text-slate-900 font-semibold">{estimatedScale}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold block mb-1">
                  Target Audience
                </span>
                <span className="text-xs text-slate-900 font-semibold truncate block" title={targetAudience}>
                  {targetAudience}
                </span>
              </div>
            </div>

            {/* Core Offerings */}
            <div>
              <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold block mb-2">
                Core Offerings & Business Segments
              </span>
              <div className="flex flex-wrap gap-2">
                {coreOfferings.map((offering, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-800"
                  >
                    {offering}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Readiness & Urgency Metrics */}
          <div className="lg:border-l lg:border-slate-200 lg:pl-6 space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-bold block">
                Modernization & AI Risk Index
              </span>

              {/* Urgency Gauge */}
              <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-100 space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-rose-900 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-rose-600" />
                    Modernization Urgency
                  </span>
                  <span className="text-rose-700 font-mono">{urgency}%</span>
                </div>
                <div className="h-2 w-full bg-rose-200/60 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-rose-600 rounded-full transition-all duration-1000"
                    style={{ width: `${urgency}%` }}
                  />
                </div>
                <p className="text-[11px] text-rose-800 leading-tight">
                  High technical friction. Legacy monolith limits rapid property search, mobile app responsiveness, and API syndication.
                </p>
              </div>

              {/* AI Readiness Index */}
              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-blue-900 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    AI Implementation Index
                  </span>
                  <span className="text-blue-700 font-mono">{aiReadiness}%</span>
                </div>
                <div className="h-2 w-full bg-blue-200/60 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 rounded-full transition-all duration-1000"
                    style={{ width: `${aiReadiness}%` }}
                  />
                </div>
                <p className="text-[11px] text-blue-800 leading-tight">
                  High immediate upside: 24/7 multilingual GenAI lead qualification and automated WhatsApp property concierges.
                </p>
              </div>
            </div>

            {/* Inferred Stack */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold block mb-1">
                Observed / Inferred Stack
              </span>
              <div className="text-xs space-y-1">
                <p className="text-slate-800">
                  <strong className="text-slate-600 font-medium">Frontend:</strong>{' '}
                  {techStackObservedOrInferred.frontend?.join(', ') || 'Modern Web, React/Next.js'}
                </p>
                <p className="text-slate-800">
                  <strong className="text-slate-600 font-medium">Backend:</strong>{' '}
                  {techStackObservedOrInferred.backend?.join(', ') || 'Node.js, Express, REST APIs'}
                </p>
                <p className="text-slate-800">
                  <strong className="text-slate-600 font-medium">Cloud / DB:</strong>{' '}
                  {[...(techStackObservedOrInferred.cloudInfra || []), ...(techStackObservedOrInferred.database || [])].join(', ') || 'MongoDB, AWS Cloud'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pain Areas Section */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-rose-600" />
            <h3 className="text-base sm:text-lg font-bold font-display text-slate-900">
              Software & IT Pain Areas (Legacy vs Modern MERN & AI)
            </h3>
          </div>
          <span className="text-xs text-slate-500 font-medium hidden sm:inline">
            3 High-Priority Modernization Triggers Identified
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {painPoints.map((pain) => {
            const isCritical = pain.severity === 'critical';
            const isHigh = pain.severity === 'high';

            return (
              <div
                key={pain.id}
                className="bg-white border border-slate-200 hover:border-slate-300 rounded-xl p-5 flex flex-col justify-between transition-all shadow-xs hover:shadow-sm group relative overflow-hidden"
              >
                {/* Accent bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 ${
                    isCritical ? 'bg-rose-500' : isHigh ? 'bg-amber-500' : 'bg-blue-500'
                  }`}
                />

                <div className="space-y-3.5">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                        isCritical
                          ? 'bg-rose-50 text-rose-700 border-rose-200'
                          : isHigh
                          ? 'bg-amber-50 text-amber-800 border-amber-200'
                          : 'bg-blue-50 text-blue-700 border-blue-200'
                      }`}
                    >
                      {pain.severity} Severity
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium capitalize">
                      {pain.category.replace('_', ' ')}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                    {pain.title}
                  </h4>

                  <div className="space-y-2.5 text-xs">
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                      <span className="font-bold text-slate-700 block mb-0.5">
                        Current Vulnerability:
                      </span>
                      <p className="text-slate-600 leading-relaxed">{pain.currentRisk}</p>
                    </div>

                    <div className="p-2.5 rounded-lg bg-rose-50/50 border border-rose-100/60">
                      <span className="font-bold text-rose-800 block mb-0.5">
                        Business & Revenue Impact:
                      </span>
                      <p className="text-rose-950 leading-relaxed">{pain.businessImpact}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-3 border-t border-slate-100">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block">
                        Recommended Solution
                      </span>
                      <p className="text-xs text-slate-700 font-medium leading-relaxed mt-0.5">{pain.remedy}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
