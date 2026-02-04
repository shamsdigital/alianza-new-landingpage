import React, { useState } from 'react';

const Calibration: React.FC = () => {
  const steps = [
    {
      id: "01",
      label: "Measure",
      desc: "Quantify the leaks.",
      params: ["DOM Density", "LCP Latency", "Index Coverage"],
      voltage: 85
    },
    {
      id: "02",
      label: "Diagnose",
      desc: "Identify the friction.",
      params: ["Schema Drift", "Crawl Budget Waste", "Semantic Gaps"],
      voltage: 92
    },
    {
      id: "03",
      label: "Refactor",
      desc: "Rewrite code. Restructure logic.",
      params: ["JSON-LD Injection", "CSS Purging", "Copy Tightening"],
      voltage: 98
    },
    {
      id: "04",
      label: "Verify",
      desc: "Confirm the signal is received.",
      params: ["Search Console Validation", "LLM Extraction Test"],
      voltage: 100
    }
  ];

  return (
    <section id="solution" className="py-24 px-6 bg-black border-b border-[#ffffff14] relative overflow-hidden">
      <div className="absolute top-0 right-0 p-64 bg-[#005fff]/[0.02] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* Header Block - Sticky Left */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#005fff]/20 bg-[#005fff]/5 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#005fff] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#005fff]"></span>
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#005fff] font-bold">The Solution: Calibration</span>
            </div>

            <h2 className="text-[48px] font-bold leading-[0.9] tracking-tighter">
              We do not “maintain.” <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005fff] to-neutral-500 italic font-light">We calibrate.</span>
            </h2>

            <div className="h-px w-full bg-gradient-to-r from-[#005fff]/30 to-transparent"></div>

            <div className="space-y-6 text-neutral-400 text-sm leading-relaxed max-w-md">
              <p>
                Maintenance is keeping the lights on. Calibration is increasing the voltage.
              </p>
              <div className="p-4 border border-white/5 bg-white/[0.02] rounded-lg">
                <p className="font-mono text-xs text-neutral-500">
                  <span className="text-[#005fff]">{`>`}</span> Websites decay. Links break. Schema drifts.<br />
                  <span className="text-[#005fff]">{`>`}</span> We run a monthly physics loop to ensure maximum signal output.
                </p>
              </div>
            </div>
          </div>

          {/* Process Block - Right Column */}
          <div className="lg:col-span-7 grid gap-4">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="group relative p-6 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#005fff]/30 transition-all duration-300 rounded-xl overflow-hidden"
              >
                {/* Background Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#005fff]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 flex flex-col md:flex-row gap-6 md:items-center justify-between">

                  {/* Step Info */}
                  <div className="flex gap-6 items-start">
                    <span className="font-mono text-2xl font-light text-white/20 group-hover:text-[#005fff]/50 transition-colors">
                      {step.id}
                    </span>
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-white tracking-tight group-hover:text-[#005fff] transition-colors">{step.label}</h4>
                      <p className="text-sm text-neutral-400 font-light italic">{step.desc}</p>

                      {/* Params */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {step.params.map((param, pIdx) => (
                          <span key={pIdx} className="text-[10px] font-mono text-neutral-600 uppercase tracking-wider bg-white/[0.02] px-1.5 py-0.5 rounded border border-white/5 group-hover:border-[#005fff]/20 group-hover:text-neutral-400 transition-colors">
                            {param}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Voltage Meter */}
                  <div className="md:w-32 flex flex-col gap-2 items-end">
                    <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">Voltage</div>
                    <div className="flex items-end gap-1 h-8">
                      {/* Bars visualization */}
                      {Array.from({ length: 5 }).map((_, barIdx) => {
                        const isActive = (barIdx + 1) * 20 <= step.voltage;
                        return (
                          <div
                            key={barIdx}
                            className={`w-1.5 rounded-sm transition-all duration-500 ${isActive ? 'bg-[#005fff]' : 'bg-white/10'}`}
                            style={{ height: `${20 + (barIdx * 15)}%` }} // Staggered height
                          ></div>
                        )
                      })}
                    </div>
                    <div className="font-mono text-xs text-[#005fff] font-bold">{step.voltage}%</div>
                  </div>

                </div>
              </div>
            ))}

            <div className="mt-8 p-6 border-l border-[#005fff]/30 bg-gradient-to-r from-[#005fff]/5 to-transparent">
              <p className="text-lg text-neutral-300 font-light leading-relaxed">
                "We strip away the rot so the machine <span className="text-white font-medium">(Google)</span> can understand the message."
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Calibration;
