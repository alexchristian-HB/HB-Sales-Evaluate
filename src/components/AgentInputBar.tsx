import React, { useState } from 'react';
import { Search, Globe, ChevronDown, ChevronUp, Zap, Sparkles, Building2, ShieldAlert } from 'lucide-react';

interface AgentInputBarProps {
  onAnalyze: (domain: string, notes?: string, focus?: string) => void;
  isLoading: boolean;
  activeDomain: string;
}

const PRESET_DOMAINS = [
  { label: 'DWTC Hospitality', domain: 'https://dwtchospitality.com/', tag: 'Mega Events & Banqueting' },
  { label: 'Highway Real Estate', domain: 'https://highwayrealestates.com/', tag: 'Real Estate UAE' },
  { label: 'Hidden Brains (Self)', domain: 'https://hiddenbrains.com/', tag: 'Enterprise IT' },
  { label: 'Datadog', domain: 'datadoghq.com', tag: 'Cloud Monitoring' },
  { label: 'Shopify Partners', domain: 'shopify.com', tag: 'E-Commerce' },
];

export const AgentInputBar: React.FC<AgentInputBarProps> = ({
  onAnalyze,
  isLoading,
  activeDomain,
}) => {
  const [domainInput, setDomainInput] = useState(activeDomain || 'https://highwayrealestates.com/');
  const [customNotes, setCustomNotes] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const [targetFocus, setTargetFocus] = useState<'full_analysis' | 'modern_mern_ai' | 'rfp_collaboration' | 'outbound_pitch'>('full_analysis');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!domainInput.trim()) return;
    onAnalyze(domainInput.trim(), customNotes.trim() || undefined, targetFocus);
  };

  const handleSelectPreset = (preset: string) => {
    setDomainInput(preset);
    onAnalyze(preset, customNotes.trim() || undefined, targetFocus);
  };

  return (
    <div className="bg-white border border-slate-200/90 rounded-2xl p-5 md:p-6 shadow-xs relative overflow-hidden">
      <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <Globe className="w-5 h-5 text-blue-600" />
            </div>
            <input
              id="input-prospect-domain"
              type="text"
              value={domainInput}
              onChange={(e) => setDomainInput(e.target.value)}
              placeholder="Enter prospective company domain or URL (e.g., https://highwayrealestates.com/)"
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all font-mono text-sm sm:text-base font-medium"
              disabled={isLoading}
            />
          </div>

          <button
            id="btn-launch-recon"
            type="submit"
            disabled={isLoading || !domainInput.trim()}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-xs disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap active:scale-[0.99]"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Running Agent Recon...</span>
              </>
            ) : (
              <>
                <Zap className="w-4 h-4 text-white" />
                <span>Run Autonomous Recon</span>
              </>
            )}
          </button>
        </div>

        {/* Quick Presets */}
        <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-500">
          <span className="font-semibold text-slate-700">Quick Test Targets:</span>
          {PRESET_DOMAINS.map((item) => (
            <button
              key={item.domain}
              type="button"
              onClick={() => handleSelectPreset(item.domain)}
              className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 transition-colors flex items-center gap-1.5 font-medium"
            >
              <span>{item.label}</span>
              <span className="text-[10px] text-blue-700 bg-blue-100 px-1 py-0.2 rounded font-semibold">
                {item.tag}
              </span>
            </button>
          ))}

          <button
            type="button"
            onClick={() => setShowOptions(!showOptions)}
            className="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            <span>Agent Parameters</span>
            {showOptions ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Expanded Options */}
        {showOptions && (
          <div className="pt-3 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Target Intelligence Focus
              </label>
              <select
                value={targetFocus}
                onChange={(e) => setTargetFocus(e.target.value as any)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-600 font-medium"
              >
                <option value="full_analysis">Full 4-Step Recon (Research + Gaps + LinkedIn + HB Match)</option>
                <option value="modern_mern_ai">Step 1 Priority: MERN & AI Tech Gap Audit</option>
                <option value="rfp_collaboration">Step 2 Priority: LinkedIn RFP & Open Collaboration</option>
                <option value="outbound_pitch">Step 4 Priority: Ready-to-Send Outbound Suite</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Account Context / Special Instructions (Optional)
              </label>
              <input
                type="text"
                value={customNotes}
                onChange={(e) => setCustomNotes(e.target.value)}
                placeholder="e.g. Focus on modernizing real estate property search portal and CRM sync"
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-600 font-medium"
              />
            </div>
          </div>
        )}
      </form>
    </div>
  );
};
