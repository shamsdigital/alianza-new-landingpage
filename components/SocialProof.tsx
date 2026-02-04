import React from 'react';
import { TESTIMONIALS } from '../constants';
import { motion } from 'framer-motion';

const SocialProof: React.FC = () => {
  return (
    <section id="proof" className="py-24 px-6 bg-black relative overflow-hidden text-left border-b border-[#ffffff14]">
      <div className="absolute inset-0 bg-[#005fff]/[0.01] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Header Section */}
        <div className="mb-20 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#005fff]/20 bg-[#005fff]/5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#005fff] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#005fff]"></span>
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#005fff] font-bold">Social Proof: Verified Logs</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-[48px] font-bold leading-[0.9] tracking-tighter max-w-3xl">
              Data points. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-neutral-700 italic font-light">Not opinions.</span>
            </h2>
            <p className="text-neutral-400 max-w-md text-sm leading-relaxed border-l border-white/10 pl-6">
              Our metrics are tied to revenue, not vanity. These logs represent verified outcomes from calibration deployments.
            </p>
          </div>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#005fff]/30 transition-all duration-500 rounded-xl overflow-hidden"
            >
              {/* Decorative Gradient Blob */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#005fff]/5 rounded-full blur-2xl group-hover:bg-[#005fff]/10 transition-all duration-500"></div>

              {/* Header: Verified Stamp */}
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="px-2 py-1 border border-white/10 rounded flex items-center gap-2 bg-black/40 backdrop-blur-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-400">Verified_Log</span>
                </div>
                <div className="font-mono text-[9px] text-[#005fff]/50 group-hover:text-[#005fff] transition-colors uppercase tracking-widest">
                  ID: {Math.floor(Math.random() * 9000) + 1000}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6 relative z-10 mb-8">
                <p className="text-lg md:text-xl font-light text-neutral-200 leading-relaxed italic">
                  "{t.quote}"
                </p>

                {/* Tech Deco Elements */}
                <div className="flex gap-1 opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="h-0.5 w-4 bg-[#005fff]"></div>
                  <div className="h-0.5 w-2 bg-[#005fff]"></div>
                  <div className="h-0.5 w-1 bg-[#005fff]"></div>
                </div>
              </div>

              {/* Footer: Author & Metadata */}
              <div className="pt-6 border-t border-white/5 flex justify-between items-end relative z-10">
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-neutral-500 mb-1">Signal Source</div>
                  <div className="font-bold text-sm text-white">{t.author}</div>
                </div>
                <div className="text-right">
                  <div className="font-mono text-[9px] uppercase tracking-widest text-neutral-500 mb-1">Latency</div>
                  <div className="font-mono text-xs text-[#005fff]">0.0{idx + 2}ms</div>
                </div>
              </div>

            </div>
          ))}

          {/* Call to Action Card (Optional addition for balance if needed, or just keeping the existing button below) */}
        </div>

        {/* CTA Button */}
        <div className="mt-20 text-center">
          <button className="group relative inline-flex items-center gap-4 px-8 py-4 bg-transparent border border-white/10 hover:border-[#005fff]/50 rounded-full transition-all duration-300">
            <div className="absolute inset-0 bg-[#005fff]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-full blur-md"></div>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400 group-hover:text-white transition-colors">Access Performance Logs</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#005fff] group-hover:animate-ping"></div>
          </button>
        </div>

      </div>
    </section>
  );
};

export default SocialProof;
