import React from 'react';
import { Layers, CheckCircle2, Award, ExternalLink, ShieldCheck, Zap, ArrowRight, Target, Compass, PhoneCall } from 'lucide-react';
import { CompanyIntelligence } from '../types';

interface Step3Props {
  intelligence: CompanyIntelligence;
}

export const Step3ServiceMatch: React.FC<Step3Props> = ({ intelligence }) => {
  const { serviceMatches, companyName, pitchStrategy } = intelligence;

  return (
    <section id="step-3-services" className="space-y-6">
      {/* Step Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">
              Step 3
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 tracking-tight">
              Hidden Brains Service Alignment Matrix
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Matching services sold by Hidden Brains (https://hiddenbrains.com) to {companyName}'s identified software gaps & collaboration opportunities.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>CMMI Level 3 Certified Delivery</span>
          </span>
        </div>
      </div>

      {/* Strategic Pitch Framework Banner */}
      {pitchStrategy && (
        <div className="bg-white border border-blue-200/80 rounded-2xl p-6 shadow-xs relative overflow-hidden">
          <div className="flex items-center gap-2 mb-3">
            <div className="p-1.5 rounded-lg bg-blue-50 text-blue-700">
              <Compass className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-slate-900 font-display">
              Executive Pitch Strategy for {companyName}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="font-bold text-slate-900 flex items-center gap-1.5 mb-1 text-xs">
                <Target className="w-3.5 h-3.5 text-blue-600" />
                Strategic Value Pitch:
              </span>
              <p className="text-slate-700 leading-relaxed font-medium">
                {pitchStrategy.executivePitch}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="font-bold text-slate-900 flex items-center gap-1.5 mb-1 text-xs">
                <Award className="w-3.5 h-3.5 text-amber-600" />
                Why Hidden Brains Wins:
              </span>
              <p className="text-slate-700 leading-relaxed font-medium">
                {pitchStrategy.whyHiddenBrainsWins}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="font-bold text-slate-900 flex items-center gap-1.5 mb-1 text-xs">
                <Zap className="w-3.5 h-3.5 text-blue-600" />
                Primary Modernization Angle:
              </span>
              <p className="text-slate-700 leading-relaxed font-medium">
                {pitchStrategy.primaryModernizationAngle}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100">
              <span className="font-bold text-blue-900 flex items-center gap-1.5 mb-1 text-xs">
                <PhoneCall className="w-3.5 h-3.5 text-blue-700" />
                Immediate Sales Call Action:
              </span>
              <p className="text-blue-950 leading-relaxed font-medium">
                {pitchStrategy.immediateNextStep}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {serviceMatches.map((service, idx) => (
          <div
            key={idx}
            className="bg-white border border-slate-200 hover:border-slate-300 rounded-2xl p-6 flex flex-col justify-between transition-all shadow-xs hover:shadow-sm group relative"
          >
            {/* Top Tag & Title */}
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  {service.serviceCategory}
                </span>
                <a
                  href={service.hiddenBrainsOfferingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                  title="View service on hiddenbrains.com"
                >
                  <span>hiddenbrains.com</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                  {service.serviceName}
                </h3>
              </div>

              {/* Why It Fits */}
              <div className="space-y-1.5 text-xs">
                <span className="font-bold text-slate-900 flex items-center gap-1">
                  <Zap className="w-3 h-3 text-blue-600" />
                  Why It Fits {companyName}:
                </span>
                <p className="text-slate-700 font-medium leading-relaxed bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  {service.whyFit}
                </p>
              </div>

              {/* Value Proposition */}
              <div className="space-y-1 text-xs">
                <span className="font-bold text-slate-700 block">Value Proposition:</span>
                <p className="text-slate-600 leading-relaxed">{service.valueProposition}</p>
              </div>

              {/* Proof of Capability */}
              <div className="space-y-1 text-xs">
                <span className="font-bold text-emerald-800 flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-emerald-600" />
                  Hidden Brains Capability:
                </span>
                <p className="text-slate-600 leading-relaxed">{service.proofOfCapability}</p>
              </div>

              {/* Implementation Scope Checklist */}
              <div className="pt-2">
                <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold block mb-2">
                  Key Scope Deliverables:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                  {service.implementationScope.map((item, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA to Hidden Brains page */}
            <div className="pt-5 mt-4 border-t border-slate-100">
              <a
                href={service.hiddenBrainsOfferingUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-100 hover:bg-blue-600 hover:text-white text-xs font-semibold text-slate-800 transition-colors"
              >
                <span>View Offering on Hidden Brains</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
