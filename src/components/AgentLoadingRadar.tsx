import React, { useEffect, useState } from 'react';
import { Search, Cpu, Share2, Layers, CheckCircle2 } from 'lucide-react';

interface AgentLoadingRadarProps {
  domain: string;
}

const STEPS = [
  {
    icon: Search,
    title: 'Phase 1: Enterprise Profile & Real-World Crawling',
    description: 'Scanning domain, business model, live web pages, and market positioning...',
  },
  {
    icon: Cpu,
    title: 'Phase 2: Tech Stack & Modern MERN / AI Pain Point Audit',
    description: 'Diagnosing legacy monolithic friction, database latency, and missing GenAI copilots...',
  },
  {
    icon: Share2,
    title: 'Phase 3: LinkedIn & Open RFP / Collaboration Signals',
    description: 'Scanning LinkedIn announcements, strategic partnership calls, and tender opportunities...',
  },
  {
    icon: Layers,
    title: 'Phase 4: Hidden Brains Service Alignment & Outreach Suite',
    description: 'Aligning CMMI Level 3 capabilities, calculating modernization urgency, and writing InMail...',
  },
];

export const AgentLoadingRadar: React.FC<AgentLoadingRadarProps> = ({ domain }) => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev < STEPS.length - 1 ? prev + 1 : prev));
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-8 max-w-2xl mx-auto shadow-xs text-center">
      {/* Radar Graphic */}
      <div className="relative w-20 h-20 mx-auto mb-5 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border-2 border-blue-200 animate-ping" />
        <div className="absolute inset-2 rounded-full border border-blue-300 animate-pulse" />
        <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
          <Search className="w-7 h-7 text-white animate-spin" style={{ animationDuration: '4s' }} />
        </div>
      </div>

      <h3 className="text-xl font-bold font-display text-slate-900 mb-1.5">
        Autonomous Reconnaissance in Progress
      </h3>
      <p className="text-xs text-slate-500 mb-6 font-mono">
        Target Domain: <span className="text-blue-700 font-bold">{domain}</span>
      </p>

      <div className="space-y-3 text-left max-w-lg mx-auto">
        {STEPS.map((step, idx) => {
          const Icon = step.icon;
          const isDone = idx < activeStep;
          const isCurrent = idx === activeStep;

          return (
            <div
              key={idx}
              className={`p-3.5 rounded-xl border transition-all flex items-start gap-3.5 ${
                isCurrent
                  ? 'bg-blue-50/70 border-blue-200 shadow-xs'
                  : isDone
                  ? 'bg-slate-50 border-emerald-200 opacity-90'
                  : 'bg-slate-50/50 border-slate-200 opacity-40'
              }`}
            >
              <div className="mt-0.5">
                {isDone ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                ) : (
                  <Icon
                    className={`w-5 h-5 ${
                      isCurrent ? 'text-blue-600 animate-pulse' : 'text-slate-400'
                    }`}
                  />
                )}
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold text-slate-800 flex items-center justify-between">
                  <span>{step.title}</span>
                  {isCurrent && (
                    <span className="text-[10px] uppercase font-bold text-blue-700 tracking-wider">
                      Analyzing...
                    </span>
                  )}
                  {isDone && (
                    <span className="text-[10px] uppercase font-bold text-emerald-700 tracking-wider">
                      Completed
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5 font-normal">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
