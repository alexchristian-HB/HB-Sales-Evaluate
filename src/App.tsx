import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { AgentInputBar } from './components/AgentInputBar';
import { AgentLoadingRadar } from './components/AgentLoadingRadar';
import { Step1CompanyAndPainPoints } from './components/Step1CompanyAndPainPoints';
import { Step2LinkedInSignals } from './components/Step2LinkedInSignals';
import { Step3ServiceMatch } from './components/Step3ServiceMatch';
import { Step4OutboundSuite } from './components/Step4OutboundSuite';
import { SalesAdvisorDrawer } from './components/SalesAdvisorDrawer';
import { CompanyIntelligence } from './types';
import { Layers, Search, Cpu, Linkedin, CheckCircle, ShieldAlert, Sparkles, History, ArrowRight, ShieldCheck } from 'lucide-react';

export default function App() {
  const [intelligence, setIntelligence] = useState<CompanyIntelligence | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentScanningDomain, setCurrentScanningDomain] = useState('https://highwayrealestates.com/');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isAdvisorOpen, setIsAdvisorOpen] = useState(false);
  const [recentProspects, setRecentProspects] = useState<any[]>([]);
  const [activeStepTab, setActiveStepTab] = useState<'all' | 'step1' | 'step2' | 'step3' | 'step4'>('all');

  // Trigger analysis for a given domain
  const analyzeDomain = async (domain: string, notes?: string, focus?: string) => {
    setIsLoading(true);
    setErrorMessage(null);
    setCurrentScanningDomain(domain);

    // Update URL query parameter
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('domain', domain);
      window.history.replaceState({}, '', url.toString());
    } catch (e) {
      // Ignore URL update errors in sandboxes
    }

    try {
      const response = await fetch('/api/analyze-prospect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ domain, customNotes: notes, targetFocus: focus }),
      });

      if (!response.ok) {
        throw new Error(`Agent reconnaissance failed with status ${response.status}`);
      }

      const data: CompanyIntelligence = await response.json();
      setIntelligence(data);
      fetchRecentProspects();
    } catch (err: any) {
      console.error('Error analyzing prospect:', err);
      setErrorMessage(err.message || 'Failed to complete autonomous reconnaissance. Please check your domain and retry.');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchRecentProspects = async () => {
    try {
      const res = await fetch('/api/recent-prospects');
      if (res.ok) {
        const data = await res.json();
        setRecentProspects(data.prospects || []);
      }
    } catch (e) {
      // silently ignore
    }
  };

  // Run automatically on first mount with URL domain or https://highwayrealestates.com/
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const domainFromUrl = urlParams.get('domain');
    const initialDomain = domainFromUrl || 'https://highwayrealestates.com/';
    analyzeDomain(initialDomain);
    fetchRecentProspects();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Application Bar */}
      <Header
        currentIntelligence={intelligence}
        onToggleAdvisor={() => setIsAdvisorOpen(!isAdvisorOpen)}
        isAdvisorOpen={isAdvisorOpen}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Banner / Value Proposition */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-5">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-bold text-slate-500 font-mono">
                Hidden Brains B2B Intelligence Pipeline
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Autonomous Account Reconnaissance Agent
            </h1>
            <p className="text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
              Equipping Hidden Brains sales & business development teams with instant prospect research, software and IT system pain areas (MERN stack & AI gaps), LinkedIn collaboration/RFP discovery, and customized service alignments.
            </p>
          </div>

          {/* CMMI & Global Credibility Strip */}
          <div className="flex items-center gap-2.5 shrink-0 text-xs text-slate-700 bg-white border border-slate-200 px-4 py-2.5 rounded-xl shadow-xs">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span className="font-bold text-slate-900">Hidden Brains:</span>
            <span className="font-semibold text-blue-700">CMMI Level 3</span>
            <span className="text-slate-300">•</span>
            <span>500+ Engineers</span>
            <span className="text-slate-300">•</span>
            <span>2,400+ Clients (107 Countries)</span>
          </div>
        </div>

        {/* Input Bar */}
        <AgentInputBar
          onAnalyze={analyzeDomain}
          isLoading={isLoading}
          activeDomain={currentScanningDomain}
        />

        {/* Error Notification */}
        {errorMessage && (
          <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-center justify-between">
            <span>{errorMessage}</span>
            <button
              onClick={() => analyzeDomain(currentScanningDomain)}
              className="px-3 py-1 bg-rose-600 text-white rounded-lg text-xs font-semibold hover:bg-rose-700"
            >
              Retry
            </button>
          </div>
        )}

        {/* Loading Radar */}
        {isLoading && <AgentLoadingRadar domain={currentScanningDomain} />}

        {/* Completed Intelligence Dashboard */}
        {!isLoading && intelligence && (
          <div className="space-y-8">
            {/* Step Navigation Bar */}
            <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-md py-2.5 border-y border-slate-200 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 shadow-xs">
              <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <button
                    onClick={() => setActiveStepTab('all')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                      activeStepTab === 'all'
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    Full Dossier (Steps 1–4)
                  </button>

                  <button
                    onClick={() => {
                      setActiveStepTab('step1');
                      document.getElementById('step-1-research')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                      activeStepTab === 'step1'
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    Step 1: Research & Tech Pains
                  </button>

                  <button
                    onClick={() => {
                      setActiveStepTab('step2');
                      document.getElementById('step-2-linkedin')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                      activeStepTab === 'step2'
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    Step 2: LinkedIn & RFPs
                  </button>

                  <button
                    onClick={() => {
                      setActiveStepTab('step3');
                      document.getElementById('step-3-services')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                      activeStepTab === 'step3'
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    Step 3: Hidden Brains Fit
                  </button>

                  <button
                    onClick={() => {
                      setActiveStepTab('step4');
                      document.getElementById('step-4-outreach')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                      activeStepTab === 'step4'
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    Step 4: Outbound Touchpoints
                  </button>
                </div>

                <div className="hidden lg:flex items-center gap-2 text-xs text-slate-500 font-mono">
                  <span>Target:</span>
                  <span className="text-slate-900 font-bold">{intelligence.domain}</span>
                </div>
              </div>
            </div>

            {/* Step 1: Company Profile & Modern MERN/AI Pain Points */}
            {(activeStepTab === 'all' || activeStepTab === 'step1') && (
              <Step1CompanyAndPainPoints intelligence={intelligence} />
            )}

            {/* Step 2: LinkedIn Signals & Open RFP/Collaboration */}
            {(activeStepTab === 'all' || activeStepTab === 'step2') && (
              <Step2LinkedInSignals intelligence={intelligence} />
            )}

            {/* Step 3: Hidden Brains Service Alignment Matrix */}
            {(activeStepTab === 'all' || activeStepTab === 'step3') && (
              <Step3ServiceMatch intelligence={intelligence} />
            )}

            {/* Step 4: Ready-to-Send Outbound Suite */}
            {(activeStepTab === 'all' || activeStepTab === 'step4') && (
              <Step4OutboundSuite intelligence={intelligence} />
            )}
          </div>
        )}

        {/* Recent Audits Footer Strip */}
        {recentProspects.length > 1 && (
          <div className="pt-6 border-t border-slate-200">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              <History className="w-3.5 h-3.5" />
              <span>Recent Team Audits</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {recentProspects.map((p) => (
                <button
                  key={p.id}
                  onClick={() => analyzeDomain(p.domain)}
                  className="px-3 py-1.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-xs text-slate-700 hover:text-blue-700 transition-colors flex items-center gap-2 shadow-xs"
                >
                  <span className="font-semibold text-slate-900">{p.companyName}</span>
                  <span className="text-[11px] text-slate-500 font-mono">{p.domain}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* AI Deal Advisor Sliding Drawer */}
      <SalesAdvisorDrawer
        isOpen={isAdvisorOpen}
        onClose={() => setIsAdvisorOpen(false)}
        intelligence={intelligence}
      />

      {/* Footer */}
      <footer className="border-t border-slate-200 py-6 mt-12 bg-white text-xs text-slate-500 text-center">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900 font-display">Hidden Brains InfoTech</span>
            <span>—</span>
            <span>Enterprise Software & AI Solutions (CMMI Level 3)</span>
          </div>
          <div className="flex items-center gap-4 text-slate-500">
            <a
              href="https://hiddenbrains.com/about-us.html"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 transition-colors"
            >
              About Company
            </a>
            <a
              href="https://hiddenbrains.com/services.html"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 transition-colors"
            >
              Services
            </a>
            <a
              href="https://hiddenbrains.com/contact-us.html"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
