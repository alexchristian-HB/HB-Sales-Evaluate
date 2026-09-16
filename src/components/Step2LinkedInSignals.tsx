import React from 'react';
import { Linkedin, Handshake, FileText, Users, ArrowUpRight, CheckCircle2, MessageSquare, Target, Radio } from 'lucide-react';
import { CompanyIntelligence } from '../types';

interface Step2Props {
  intelligence: CompanyIntelligence;
}

export const Step2LinkedInSignals: React.FC<Step2Props> = ({ intelligence }) => {
  const { linkedInSignals, companyName, domain } = intelligence;

  return (
    <section id="step-2-linkedin" className="space-y-6">
      {/* Step Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">
              Step 2
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 tracking-tight">
              LinkedIn & Public Collaboration / RFP Signals
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Articles, announcements, and initiatives welcoming users or companies to collaborate on ongoing projects, tenders, or developer partnerships.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={`https://www.linkedin.com/search/results/companies/?keywords=${encodeURIComponent(companyName)}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#0A66C2] text-white hover:bg-[#004182] transition-colors shadow-xs"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>Search {companyName} on LinkedIn</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Signals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {linkedInSignals.map((signal, idx) => {
          const isRfp = signal.type === 'rfp_bid';
          const isInitiative = signal.type === 'open_initiative';

          return (
            <div
              key={idx}
              className="bg-white border border-slate-200 hover:border-slate-300 rounded-2xl p-6 flex flex-col justify-between transition-all shadow-xs hover:shadow-sm group relative"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                      isRfp
                        ? 'bg-purple-50 text-purple-700 border-purple-200'
                        : isInitiative
                        ? 'bg-blue-50 text-blue-700 border-blue-200'
                        : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    }`}
                  >
                    {isRfp ? (
                      <FileText className="w-3.5 h-3.5" />
                    ) : (
                      <Handshake className="w-3.5 h-3.5" />
                    )}
                    <span>{signal.type.replace('_', ' ')}</span>
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    Source: {signal.sourceContext}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                    {signal.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {signal.summary}
                  </p>
                </div>

                {/* Collaboration Angle */}
                <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-blue-900">
                    <Target className="w-3.5 h-3.5 text-blue-600" />
                    <span>Hidden Brains Strategic Collaboration Fit:</span>
                  </div>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    {signal.collaborationAngle}
                  </p>
                </div>
              </div>

              {/* Stakeholders to target */}
              <div className="pt-4 mt-4 border-t border-slate-100">
                <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold block mb-2">
                  Key Decision-Makers to Engage on LinkedIn:
                </span>
                <div className="flex flex-wrap gap-2">
                  {signal.keyStakeholders.map((role, rIdx) => (
                    <a
                      key={rIdx}
                      href={`https://www.linkedin.com/search/results/people/?keywords=${encodeURIComponent(
                        `${companyName} ${role}`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 text-xs font-medium text-slate-700 hover:text-blue-700 transition-colors"
                      title={`Search ${role} at ${companyName} on LinkedIn`}
                    >
                      <Users className="w-3 h-3 text-slate-400" />
                      <span>{role}</span>
                      <ArrowUpRight className="w-2.5 h-2.5 text-slate-400" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
