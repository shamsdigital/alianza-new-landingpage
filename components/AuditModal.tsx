import React, { useState, useEffect } from 'react';

interface AuditModalProps {
  onClose: () => void;
}

const AuditModal: React.FC<AuditModalProps> = ({ onClose }) => {
  const [step, setStep] = useState<'form' | 'scanning' | 'results'>('form');
  const [url, setUrl] = useState('');
  const [progress, setProgress] = useState(0);
  const [scanLogs, setScanLogs] = useState<string[]>([]);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const startAudit = () => {
    if (!url) return;
    setStep('scanning');

    const messages = [
      "Initializing secure connection...",
      "Fetching DOM structure...",
      "Analyzing Schema.org JSON-LD...",
      "Evaluating semantic hierarchy...",
      "Testing against Gemini 3 Pro parameters...",
      "Detecting content entropy...",
      "Measuring technical debt...",
      "Simulating AI summarization extraction...",
      "Finalizing risk assessment..."
    ];

    let currentMsg = 0;
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setStep('results'), 500);
          return 100;
        }
        return prev + 1;
      });

      if (currentMsg < messages.length && Math.random() > 0.7) {
        setScanLogs(prev => [...prev, messages[currentMsg]]);
        currentMsg++;
      }
    }, 50);
  };

  const submitContactInfo = () => {
    if (!email && !phone) {
      alert('Please provide at least an email or phone number');
      return;
    }

    const subject = `Audit Results for ${url}`;
    const body = `I would like to discuss the audit results for ${url}.\n\nContact Information:\nEmail: ${email || 'Not provided'}\nPhone: ${phone || 'Not provided'}`;

    // Try to open email client if email is provided
    if (email) {
      window.location.href = `mailto:hello@alianza.site?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }

    // Log the contact info (in production, this would be sent to your backend)
    console.log('Contact Info Submitted:', { email, phone, url });

    // Reset form and close after a short delay
    setTimeout(() => {
      setEmail('');
      setPhone('');
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-xl bg-black/80 transition-all duration-500 px-4 py-8">
      <div className="w-full max-w-2xl border border-white/10 bg-neutral-950 p-6 md:p-8 relative shadow-2xl max-h-[70vh] overflow-y-auto flex flex-col">
        <div className="scan-line opacity-10"></div>

        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#005fff]/20"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#005fff]/20"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#005fff]/20"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#005fff]/20"></div>

        <button
          onClick={onClose}
          className="absolute top-6 right-6 font-mono text-[10px] uppercase tracking-widest text-white/30 hover:text-[#005fff] transition-colors z-20"
        >
          [CLOSE_X]
        </button>

        {step === 'form' && (
          <div className="space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="space-y-3">
              <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#005fff]/40">Request_Initialization</div>
              <h2 className="text-4xl font-bold tracking-tighter uppercase">Audit Deployment</h2>
              <p className="text-neutral-400 text-lg font-light leading-relaxed">Enter your URL to calculate entropy and signal strength.</p>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-bold">Target_URI</label>
                <div className="relative group">
                  <input
                    type="url"
                    placeholder="https://yourbusiness.com"
                    className="w-full bg-white/[0.03] border border-white/10 px-6 py-5 font-mono text-white focus:border-[#005fff]/40 focus:bg-white/[0.05] transition-all outline-none"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && startAudit()}
                  />
                  <div className="absolute bottom-0 left-0 h-[1px] bg-[#005fff] w-0 group-focus-within:w-full transition-all duration-500"></div>
                </div>
              </div>
              <button
                onClick={startAudit}
                className="w-full bg-[#005fff] text-black font-mono font-bold py-6 uppercase hover:bg-[#005fff]/90 transition-all text-sm tracking-[0.1em]"
              >
                [Initialize Scan Sequence]
              </button>
            </div>

            <p className="text-[9px] font-mono uppercase tracking-[0.2em] text-neutral-600 max-w-sm">
              * By initializing, you authorize Alianza to simulate an AI traversal of your digital infrastructure for diagnostic purposes.
            </p>
          </div>
        )}

        {step === 'scanning' && (
          <div className="space-y-10 py-6 animate-in fade-in duration-500">
            <div className="space-y-6">
              <div className="flex justify-between font-mono text-[10px] uppercase tracking-[0.3em]">
                <span className="text-white/40">Analyzing: <span className="text-white">{url}</span></span>
                <span className="text-[#005fff] font-bold">{progress}%</span>
              </div>
              <div className="w-full h-1.5 bg-white/5 relative overflow-hidden">
                <div
                  className="h-full bg-[#005fff] transition-all duration-100 ease-out shadow-[0_0_15px_rgba(0,95,255,0.3)]"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            <div className="h-56 bg-black border border-white/5 p-6 font-mono text-[10px] space-y-2 overflow-y-auto scroll-smooth">
              {scanLogs.map((log, i) => (
                <div key={i} className="text-[#005fff]/60 flex gap-4">
                  <span className="text-white/10 shrink-0">[{new Date().toLocaleTimeString([], { hour12: false })}]</span>
                  <span className="animate-in fade-in slide-in-from-left-2 duration-300">{log}</span>
                </div>
              ))}
              <div className="animate-pulse text-[#005fff] font-bold flex gap-4">
                <span className="text-white/10 shrink-0">[{new Date().toLocaleTimeString([], { hour12: false })}]</span>
                <span>CALCULATING_SIGNAL...</span>
              </div>
            </div>
          </div>
        )}

        {step === 'results' && (
          <div className="space-y-10 animate-in zoom-in-95 fade-in duration-700" style={{ display: 'flex', flexDirection: 'column', gap: '-6px', padding: '28px 0' }}>
            <div className="flex items-center gap-6">
              <div className="shrink-0 inline-flex items-center justify-center w-16 h-16 border-2 border-[#005fff]/50 text-[#005fff] rounded-full animate-pulse">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="space-y-1">
                <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#005fff] font-bold">Critical_Signal_Loss</div>
                <h2 className="text-3xl font-bold uppercase tracking-tighter">Diagnostic Complete.</h2>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-neutral-400 text-lg leading-relaxed font-light">
                Target <span className="text-white font-mono">{url}</span> is currently generating <span className="text-[#005fff] font-bold italic">42% more noise</span> than necessary for generative extraction.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10">
              <div className="bg-neutral-900 p-6 space-y-1">
                <div className="font-mono text-[9px] uppercase tracking-widest text-white/30">GEO Indexability</div>
                <div className="text-2xl font-bold text-[#005fff]">FAIL</div>
              </div>
              <div className="bg-neutral-900 p-6 space-y-1">
                <div className="font-mono text-[9px] uppercase tracking-widest text-white/30">Entropy Rating</div>
                <div className="text-2xl font-bold text-[#005fff]/80">HIGH</div>
              </div>
              <div className="bg-neutral-900 p-6 space-y-1">
                <div className="font-mono text-[9px] uppercase tracking-widest text-white/30">Semantic Signal</div>
                <div className="text-2xl font-bold text-neutral-500">LOW</div>
              </div>
              <div className="bg-neutral-900 p-6 space-y-1">
                <div className="font-mono text-[9px] uppercase tracking-widest text-white/30">Technical Debt</div>
                <div className="text-2xl font-bold text-[#005fff]">SEVERE</div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <div className="text-xs font-mono uppercase tracking-widest text-[#005fff]/80 mb-2">We provide three core solutions:</div>
              <div className="space-y-1.5">
                <div className="flex gap-2 text-xs"><span className="text-[#005fff] font-bold shrink-0">•</span><span className="text-neutral-400">Semantic Optimization - AI-ready content restructuring</span></div>
                <div className="flex gap-2 text-xs"><span className="text-[#005fff] font-bold shrink-0">•</span><span className="text-neutral-400">Signal Architecture - Machine-readable infrastructure</span></div>
                <div className="flex gap-2 text-xs"><span className="text-[#005fff] font-bold shrink-0">•</span><span className="text-neutral-400">AI Calibration - Generative answer graph positioning</span></div>
              </div>
            </div>

            <div className="space-y-6 border-t border-white/10" style={{ marginTop: '25px' }}>
              <div className="space-y-3">
                <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-bold">Contact_Email</label>
                <div className="relative group">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-white/[0.03] border border-white/10 px-6 py-4 font-mono text-white focus:border-[#005fff]/40 focus:bg-white/[0.05] transition-all outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="absolute bottom-0 left-0 h-[1px] bg-[#005fff] w-0 group-focus-within:w-full transition-all duration-500"></div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-bold">Contact_Phone</label>
                <div className="relative group">
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-white/[0.03] border border-white/10 px-6 py-4 font-mono text-white focus:border-[#005fff]/40 focus:bg-white/[0.05] transition-all outline-none"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <div className="absolute bottom-0 left-0 h-[1px] bg-[#005fff] w-0 group-focus-within:w-full transition-all duration-500"></div>
                </div>
              </div>

              <button
                onClick={submitContactInfo}
                className="w-full bg-[#005fff] text-black font-mono font-bold py-6 uppercase hover:bg-[#005fff]/90 transition-all text-sm tracking-widest"
              >
                [Submit Contact Info & Request Solution]
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuditModal;
