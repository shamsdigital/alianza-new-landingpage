import React, { useState } from 'react';
import { PRICING_PLANS } from '../constants';
import { motion } from 'framer-motion';

interface PricingProps {
  onDeploy: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onDeploy }) => {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  return (
    <section id="pricing" className="py-24 px-6 bg-black relative overflow-hidden border-b border-[#ffffff14]">

      {/* Background Decor: Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24 grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <div className="w-1.5 h-1.5 rounded-full bg-[#005fff] animate-pulse"></div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold">System Architecture</span>
            </div>

            <h2 className="text-[48px] font-bold leading-[0.9] tracking-tighter">
              Primary <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005fff] to-neutral-500 italic font-light">Deployment Modes.</span>
            </h2>
          </div>

          <div className="lg:col-span-6">
            <p className="text-neutral-400 text-lg leading-relaxed max-w-lg border-l border-[#005fff]/20 pl-6">
              We do not sell "campaigns." We lease engineering capacity.
              <span className="block mt-2 text-sm font-mono text-neutral-500">
                Select your infrastructure level based on required signal velocity.
              </span>
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PRICING_PLANS.map((plan) => {
            const isGrowth = plan.id === 'growth';

            return (
              <div
                key={plan.id}
                onMouseEnter={() => setHoveredPlan(plan.id)}
                onMouseLeave={() => setHoveredPlan(null)}
                className={`group relative flex flex-col justify-between p-10 rounded-2xl border transition-all duration-500 overflow-hidden
                  ${isGrowth
                    ? 'bg-[#005fff]/[0.02] border-[#005fff]/30 shadow-[0_0_40px_-20px_rgba(0,95,255,0.3)]'
                    : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                  }`}
              >

                {/* Active Indicator for Growth */}
                {isGrowth && (
                  <div className="absolute top-0 right-0 p-4">
                    <div className="flex items-center gap-2 px-2 py-1 bg-[#005fff]/10 rounded border border-[#005fff]/20">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#005fff] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#005fff]"></span>
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-[#005fff]">Recommended Node</span>
                    </div>
                  </div>
                )}

                <div>
                  {/* Header */}
                  <div className="mb-10 space-y-2">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-[#005fff]/50">
                      Mode: {plan.id}
                    </div>
                    <h3 className="text-3xl font-bold text-white tracking-tight">{plan.name}</h3>
                    <p className="text-neutral-500 font-mono text-xs max-w-xs">{plan.objective}</p>
                  </div>

                  {/* Price Block */}
                  <div className="mb-12 p-6 bg-black/40 rounded-xl border border-white/5 relative overflow-hidden group-hover:border-[#005fff]/20 transition-colors">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#005fff] to-transparent opacity-50"></div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-white tracking-tighter">{plan.cost}</span>
                      <span className="text-neutral-600 font-mono text-xs">/month</span>
                    </div>
                    <div className="mt-2 flex items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                      <span>Capacity: Unlimited</span>
                      <span className="w-px h-3 bg-white/10"></span>
                      <span>Latency: &lt;24ms</span>
                    </div>
                  </div>

                  {/* Specs List */}
                  <div className="space-y-6 mb-12">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-white/30 border-b border-white/5 pb-2">System Specifications</div>
                    <ul className="space-y-4">
                      {plan.specs.map((spec, i) => (
                        <li key={i} className="flex gap-3 items-start text-sm text-neutral-300 group-hover:text-white transition-colors">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-[#005fff]"></span>
                          <span className="leading-relaxed">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={onDeploy}
                  className={`w-full py-4 px-6 rounded-lg font-mono text-xs uppercase tracking-widest font-bold transition-all duration-300 border
                    ${isGrowth
                      ? 'bg-[#005fff] text-white border-[#005fff] hover:bg-[#004ecb] shadow-lg shadow-[#005fff]/20'
                      : 'bg-transparent text-white border-white/20 hover:bg-white hover:text-black'
                    }`}
                >
                  {plan.cta}
                </button>

              </div>
            );
          })}
        </div>

        <div className="mt-24 text-center">
          <p className="font-mono text-xs text-neutral-600 uppercase tracking-widest">
            Need custom architecture? <button onClick={onDeploy} className="text-[#005fff] hover:underline underline-offset-4">Contact Engineering</button>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
