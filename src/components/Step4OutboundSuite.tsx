import React, { useState } from 'react';
import { Mail, Linkedin, FileText, HelpCircle, Copy, Check, Sparkles, RefreshCw, Send, ArrowRight, UserCheck } from 'lucide-react';
import { CompanyIntelligence } from '../types';

interface Step4Props {
  intelligence: CompanyIntelligence;
}

export const Step4OutboundSuite: React.FC<Step4Props> = ({ intelligence }) => {
  const { outreach, companyName, domain } = intelligence;

  const [activeTab, setActiveTab] = useState<'inmail' | 'email' | 'brief' | 'discovery'>('inmail');
  const [copiedType, setCopiedType] = useState<string | null>(null);

  // Customizer state
  const [persona, setPersona] = useState('Chief Technology Officer');
  const [tone, setTone] = useState('consultative');
  const [isGeneratingCustom, setIsGeneratingCustom] = useState(false);
  const [customOutreach, setCustomOutreach] = useState<{ subject: string; content: string } | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleGenerateCustom = async () => {
    setIsGeneratingCustom(true);
    try {
      const res = await fetch('/api/customize-outreach', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          intelligence,
          persona,
          tone,
          channel: activeTab === 'inmail' ? 'LinkedIn InMail' : 'Cold Email',
        }),
      });
      const data = await res.json();
      if (data.subject && data.content) {
        setCustomOutreach({ subject: data.subject, content: data.content });
      }
    } catch (err) {
      console.error('Failed to generate customized outreach:', err);
    } finally {
      setIsGeneratingCustom(false);
    }
  };

  return (
    <section id="step-4-outreach" className="space-y-6">
      {/* Step Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">
              Step 4
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 tracking-tight">
              Ready-to-Send Outbound & RFP Collaboration Suite
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Personalized sales touchpoints engineered to convert {companyName} decision-makers on your modern MERN & AI offerings.
          </p>
        </div>
      </div>

      {/* Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Content Tabs & Message Body */}
        <div className="lg:col-span-2 bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs space-y-5">
          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-slate-100 pb-3">
            <button
              onClick={() => { setActiveTab('inmail'); setCustomOutreach(null); }}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'inmail'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn InMail</span>
            </button>

            <button
              onClick={() => { setActiveTab('email'); setCustomOutreach(null); }}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'email'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              <Mail className="w-3.5 h-3.5" />
              <span>2-Step Email Cadence</span>
            </button>

            <button
              onClick={() => { setActiveTab('brief'); setCustomOutreach(null); }}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'brief'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Executive RFP Proposal Brief</span>
            </button>

            <button
              onClick={() => { setActiveTab('discovery'); setCustomOutreach(null); }}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'discovery'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Discovery Questions</span>
            </button>
          </div>

          {/* Tab 1: LinkedIn InMail */}
          {activeTab === 'inmail' && (
            <div className="space-y-4">
              {customOutreach ? (
                <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-800 uppercase tracking-wider">
                      Customized for {persona} ({tone})
                    </span>
                    <button
                      onClick={() => handleCopy(`${customOutreach.subject}\n\n${customOutreach.content}`, 'custom')}
                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors"
                    >
                      {copiedType === 'custom' ? <Check className="w-3 h-3 text-white" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedType === 'custom' ? 'Copied!' : 'Copy Message'}</span>
                    </button>
                  </div>
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-slate-500 font-bold block">Subject</label>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">{customOutreach.subject}</p>
                  </div>
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-slate-500 font-bold block mb-1">Body</label>
                    <p className="text-xs text-slate-800 whitespace-pre-line leading-relaxed font-mono bg-white p-3 rounded-lg border border-slate-200">
                      {customOutreach.content}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-slate-500 font-medium">
                      High-impact LinkedIn InMail hook referencing {companyName}'s growth and modern MERN/AI capabilities.
                    </div>
                    <button
                      onClick={() => handleCopy(`${outreach.linkedInInMail.subject}\n\n${outreach.linkedInInMail.body}`, 'inmail')}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg border border-slate-200 transition-colors"
                    >
                      {copiedType === 'inmail' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
                      <span>{copiedType === 'inmail' ? 'Copied to Clipboard' : 'Copy InMail'}</span>
                    </button>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold block">
                      Subject Line:
                    </span>
                    <p className="text-sm font-bold text-blue-700">
                      {outreach.linkedInInMail.subject}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold block">
                      Message Body:
                    </span>
                    <p className="text-xs text-slate-800 whitespace-pre-line leading-relaxed font-mono">
                      {outreach.linkedInInMail.body}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 text-xs text-blue-900 flex items-center justify-between">
                    <span><strong>Suggested Call-to-Action:</strong> {outreach.linkedInInMail.callToAction}</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tab 2: 2-Step Email Cadence */}
          {activeTab === 'email' && (
            <div className="space-y-5">
              {/* Step 1 Email */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                    Touchpoint 1: Initial Modernization & Architecture Proposition
                  </span>
                  <button
                    onClick={() => handleCopy(`${outreach.coldEmailSequence.step1Subject}\n\n${outreach.coldEmailSequence.step1Body}`, 'email1')}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg border border-slate-200 transition-colors"
                  >
                    {copiedType === 'email1' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3 text-slate-500" />}
                    <span>{copiedType === 'email1' ? 'Copied' : 'Copy Email 1'}</span>
                  </button>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <p className="text-xs text-slate-600">
                    <strong className="text-slate-900">Subject:</strong> {outreach.coldEmailSequence.step1Subject}
                  </p>
                  <p className="text-xs text-slate-800 whitespace-pre-line leading-relaxed font-mono pt-1">
                    {outreach.coldEmailSequence.step1Body}
                  </p>
                </div>
              </div>

              {/* Step 2 Email */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider">
                    Touchpoint 2: Follow-Up (Day 4) With Modern MERN & AI Proof of Concept
                  </span>
                  <button
                    onClick={() => handleCopy(`${outreach.coldEmailSequence.step2Subject}\n\n${outreach.coldEmailSequence.step2Body}`, 'email2')}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg border border-slate-200 transition-colors"
                  >
                    {copiedType === 'email2' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3 text-slate-500" />}
                    <span>{copiedType === 'email2' ? 'Copied' : 'Copy Email 2'}</span>
                  </button>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <p className="text-xs text-slate-600">
                    <strong className="text-slate-900">Subject:</strong> {outreach.coldEmailSequence.step2Subject}
                  </p>
                  <p className="text-xs text-slate-800 whitespace-pre-line leading-relaxed font-mono pt-1">
                    {outreach.coldEmailSequence.step2Body}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: RFP Brief */}
          {activeTab === 'brief' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">
                  Executive proposal brief ready for direct pitch deck submission or partnership inquiry.
                </span>
                <button
                  onClick={() => handleCopy(outreach.executiveProposalBrief, 'brief')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg border border-slate-200 transition-colors"
                >
                  {copiedType === 'brief' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
                  <span>{copiedType === 'brief' ? 'Copied Brief' : 'Copy Proposal Brief'}</span>
                </button>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <pre className="text-xs text-slate-800 whitespace-pre-line font-mono leading-relaxed overflow-x-auto">
                  {outreach.executiveProposalBrief}
                </pre>
              </div>
            </div>
          )}

          {/* Tab 4: Discovery Questions */}
          {activeTab === 'discovery' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">
                  Strategic qualifying questions for sales reps to uncover technical drag, MERN gaps, and AI readiness.
                </span>
                <button
                  onClick={() => handleCopy(outreach.discoveryQuestions.join('\n\n'), 'discovery')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg border border-slate-200 transition-colors"
                >
                  {copiedType === 'discovery' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
                  <span>{copiedType === 'discovery' ? 'Copied Questions' : 'Copy All Questions'}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {outreach.discoveryQuestions.map((q, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 text-xs font-bold flex items-center justify-center shrink-0 border border-blue-200">
                      {idx + 1}
                    </span>
                    <p className="text-xs text-slate-800 leading-relaxed font-medium">
                      {q}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right 1 Col: Dynamic Outreach Customizer */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <h3 className="text-sm font-bold text-slate-900 font-display">
                Dynamic Tone & Persona Customizer
              </h3>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Tailor the pitch for specific executive roles or regional real estate leaders.
            </p>

            <div className="space-y-3 pt-1">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Target Decision-Maker Persona
                </label>
                <select
                  value={persona}
                  onChange={(e) => setPersona(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-600 font-medium"
                >
                  <option value="Chief Technology Officer">Chief Technology Officer (CTO)</option>
                  <option value="Managing Director / CEO">Managing Director / CEO</option>
                  <option value="VP of Engineering / IT">VP of Engineering / IT</option>
                  <option value="Head of Digital Transformation">Head of Digital Transformation</option>
                  <option value="Head of Sales & Broker Operations">Head of Sales & Broker Operations</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Pitch Voice & Tone
                </label>
                <select
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-600 font-medium"
                >
                  <option value="consultative">Consultative & Value-First (Recommended)</option>
                  <option value="technical">Technical & Architectural (MERN/Next.js/AI)</option>
                  <option value="executive">High-Level Executive & ROI Driven</option>
                  <option value="collaborative">Strategic Partnership & Broker Expansion</option>
                </select>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 space-y-3">
            <button
              onClick={handleGenerateCustom}
              disabled={isGeneratingCustom}
              className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 disabled:opacity-50 active:scale-[0.99]"
            >
              {isGeneratingCustom ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Synthesizing Custom Copy...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Generate Tailored Copy</span>
                </>
              )}
            </button>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 space-y-1">
              <span className="font-bold text-slate-800 block">Hidden Brains Credentials:</span>
              <p>500+ engineers, CMMI Level 3 certified delivery, 20+ years in enterprise IT, 60% cost efficiency vs domestic hiring.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
