import React, { useState } from 'react';
import { motion } from 'framer-motion';

const System: React.FC = () => {
  const steps = [
    {
      id: "01",
      title: "The Audit",
      phase: "Initialization",
      desc: "We baseline the signal. Indexing checks, tracking verification, and technical debt quantification.",
      position: "top-left"
    },
    {
      id: "02",
      title: "The Refactor",
      phase: "Correction",
      desc: "We purge the noise. Rebuilding core structures for maximum machine readability.",
      position: "top-right"
    },
    {
      id: "03",
      title: "The Calibration",
      phase: "Optimization",
      desc: "We tune the frequency. Monitoring the search landscape and shifting with algorithm updates.",
      position: "bottom-left"
    },
    {
      id: "04",
      title: "The Report",
      phase: "Verification",
      desc: "We confirm the impact. No fluff metrics—just verified shifts in visibility and traffic.",
      position: "bottom-right"
    }
  ];

  return (
    <section id="system" className="py-24 px-6 bg-black border-y border-[#ffffff14] relative overflow-hidden">

      {/* Background Tech Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#005fff05_1px,transparent_1px),linear-gradient(to_bottom,#005fff05_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24 text-center max-w-2xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#005fff]/20 bg-[#005fff]/5 backdrop-blur-md">
            <div className="w-1.5 h-1.5 rounded-full bg-[#005fff] animate-pulse"></div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#005fff] font-bold">The System: The Loop</span>
          </div>

          <h2 className="text-[48px] font-bold leading-[0.9] tracking-tighter">
            A continuous engine of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005fff] to-neutral-500 italic font-light">recursive optimization.</span>
          </h2>

          <p className="text-neutral-400 text-lg leading-relaxed">
            Search is not static. Your site cannot be either. We build a reactor that processes data, adapts code, and outputs signal.
          </p>
        </div>

        {/* The Reactor Loop UI */}
        <div className="relative max-w-5xl mx-auto">

          {/* Orbital Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-8 relative z-10">
            {steps.map((step) => (
              <div
                key={step.id}
                className="group relative p-8 border border-white/10 bg-black/40 backdrop-blur-sm transition-all duration-500 rounded-xl overflow-hidden hover:border-[#005fff]/50 hover:shadow-[0_0_30px_-10px_rgba(0,95,255,0.3)]"
              >
                {/* Holographic Scan Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#005fff]/5 to-transparent -translate-y-[150%] group-hover:translate-y-[150%] transition-transform duration-[1.5s] ease-in-out"></div>

                {/* Tech Grid Overlay (Reveals on Hover) */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#005fff10_1px,transparent_1px),linear-gradient(to_bottom,#005fff10_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="relative z-10 space-y-4">
                  <div className="flex justify-between items-start">
                    {/* Phase Badge */}
                    <div className="font-mono text-[9px] uppercase tracking-widest text-[#005fff] px-2 py-1 bg-[#005fff]/10 rounded border border-[#005fff]/20 group-hover:bg-[#005fff] group-hover:text-white transition-colors duration-300">
                      {step.phase}
                    </div>
                    {/* ID Badge */}
                    <div className="flex items-center gap-1 text-white/20 font-mono text-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-current group-hover:bg-[#005fff] group-hover:animate-ping transition-colors"></span>
                      <span className="group-hover:text-white transition-colors">{step.id}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:translate-x-1 transition-transform duration-300">{step.title}</h3>
                    <p className="text-neutral-500 text-sm leading-relaxed max-w-sm group-hover:text-neutral-400 transition-colors">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default System;
