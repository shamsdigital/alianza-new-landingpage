import React from 'react';
import { motion } from 'framer-motion';

const Mechanism: React.FC = () => {
  return (
    <section id="mechanism" className="py-32 px-6 border-b border-[#ffffff14] bg-black overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#005fff]/10 via-black to-black opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header Section */}
        <div className="mb-20 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#005fff]/20 bg-[#005fff]/5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#005fff] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#005fff]"></span>
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#005fff] font-bold">Mechanism: GEO</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-[48px] font-bold leading-[0.9] tracking-tighter max-w-3xl">
              Speak the language <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-neutral-700 italic font-light">of the machine.</span>
            </h2>
            <p className="text-neutral-400 max-w-md text-sm leading-relaxed border-l border-white/10 pl-6">
              AI extractors don't read. They parse. We restructure your digital footprint into pure, machine-consumable signal.
            </p>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]">

          {/* Large Card: The Difference (Human vs Machine) */}
          <div className="md:col-span-6 lg:col-span-8 row-span-2 rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden relative group hover:border-[#005fff]/30 transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none"></div>

            <div className="p-8 h-full flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-500">Processing Logic</h3>
                <div className="flex gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-800"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-800"></span>
                </div>
              </div>

              <div className="flex-grow grid grid-cols-2 gap-8 relative">
                {/* Human View */}
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-3 opacity-50">
                    <div className="w-8 h-8 rounded border border-white/10 flex items-center justify-center font-mono text-xs text-white">H</div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">Human</span>
                  </div>
                  <div className="p-4 rounded border border-white/5 bg-black/40 backdrop-blur-sm space-y-2">
                    <div className="h-2 w-24 bg-neutral-800 rounded mx-auto sm:mx-0"></div>
                    <div className="h-2 w-32 bg-neutral-800 rounded mx-auto sm:mx-0"></div>
                    <div className="space-y-1 pt-2">
                      <div className="h-1 w-full bg-neutral-900 rounded"></div>
                      <div className="h-1 w-5/6 bg-neutral-900 rounded"></div>
                    </div>
                  </div>
                  <p className="text-xs text-neutral-500 text-center sm:text-left">Seeks narrative, emotion, and visual hierarchy.</p>
                </div>

                {/* Machine View (Active) */}
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded border border-[#005fff]/40 bg-[#005fff]/10 flex items-center justify-center font-mono text-xs text-[#005fff]">M</div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#005fff]">Machine</span>
                  </div>
                  <div className="p-4 rounded border border-[#005fff]/20 bg-[#005fff]/5 backdrop-blur-sm space-y-2 font-mono text-[10px] text-[#005fff]/80">
                    <div>{`{`}</div>
                    <div className="pl-2">{`"entity": "Brand",`}</div>
                    <div className="pl-2">{`"trust": 0.98,`}</div>
                    <div className="pl-2">{`"relevance": "High"`}</div>
                    <div>{`}`}</div>
                  </div>
                  <p className="text-xs text-[#005fff]/70 text-center sm:text-left">Seeks entities, relationships, and structured data.</p>
                </div>

                {/* Connector Line */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Metric Card 1: Hierarchy */}
          <div className="md:col-span-3 lg:col-span-2 rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors group">
            <div className="h-full flex flex-col justify-between">
              <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="w-1 h-3 bg-neutral-500"></div>
              </div>
              <div>
                <div className="font-mono text-2xl text-white font-light tracking-tighter">Flat</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-600 mt-1">Hierarchy</div>
              </div>
            </div>
          </div>

          {/* Metric Card 2: Syntax */}
          <div className="md:col-span-3 lg:col-span-2 rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors group">
            <div className="h-full flex flex-col justify-between">
              <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="w-3 h-1 bg-neutral-500"></div>
              </div>
              <div>
                <div className="font-mono text-2xl text-white font-light tracking-tighter">Strict</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-600 mt-1">Syntax</div>
              </div>
            </div>
          </div>


          {/* Terminal / Output Card */}
          <div className="md:col-span-6 lg:col-span-4 row-span-2 rounded-2xl border border-white/10 bg-[#050505] overflow-hidden flex flex-col shadow-2xl shadow-black/50">
            {/* Terminal Header */}
            <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#005fff]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
              </div>
              <div className="font-mono text-[9px] uppercase tracking-widest text-neutral-500">schema_out_v4.2</div>
            </div>

            {/* Code Block */}
            <div className="p-6 flex-grow overflow-x-auto font-mono text-[11px] leading-relaxed text-neutral-400">
              <span className="text-[#005fff]">const</span> <span className="text-white">optimization</span> = <span className="text-[#005fff]">{`{`}</span><br />
              &nbsp;&nbsp;<span className="text-neutral-500">"@context"</span>: <span className="text-green-500">"https://schema.org"</span>,<br />
              &nbsp;&nbsp;<span className="text-neutral-500">"@type"</span>: <span className="text-green-500">"TechService"</span>,<br />
              &nbsp;&nbsp;<span className="text-neutral-500">"status"</span>: <span className="text-white">"CALIBRATED"</span>,<br />
              &nbsp;&nbsp;<span className="text-neutral-500">"signal_strength"</span>: <span className="text-[#005fff]">100</span>,<br />
              &nbsp;&nbsp;<span className="text-neutral-500">"latency"</span>: <span className="text-[#005fff]">0.02ms</span>,<br />
              &nbsp;&nbsp;<span className="text-neutral-500">"entropy_reduction"</span>: <span className="text-[#005fff]">-94.5%</span>,<br />
              &nbsp;&nbsp;<span className="text-neutral-500">"semantic_density"</span>: <span className="text-white">"HIGH"</span>,<br />
              &nbsp;&nbsp;<span className="text-neutral-500">"geo_coordinates"</span>: <span className="text-green-500">"34.05, -118.24"</span>,<br />
              &nbsp;&nbsp;<span className="text-neutral-500">"generative_index"</span>: <span className="text-[#005fff]">0.99</span><br />
              <span className="text-[#005fff]">{`}`}</span>;
            </div>

            {/* Footer Status */}
            <div className="p-3 border-t border-white/5 bg-white/[0.02] flex justify-between items-center text-[9px]">
              <div className="flex items-center gap-2 text-[#005fff]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#005fff] animate-pulse"></span>
                <span className="tracking-widest font-mono uppercase">Live Signal</span>
              </div>
              <span className="font-mono text-neutral-600">ID: 884-XJ</span>
            </div>
          </div>

          {/* Quote / Summary Card */}
          <div className="md:col-span-6 lg:col-span-8 rounded-2xl border border-white/5 bg-gradient-to-r from-neutral-900/50 to-black p-8 flex items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-32 bg-[#005fff] opacity-[0.03] blur-[100px] rounded-full"></div>
            <p className="relative z-10 text-xl md:text-2xl font-light text-neutral-300 leading-normal">
              "We rebuild the infrastructure so that the machine understands your value in <span className="text-white font-medium">seconds</span>, not sessions."
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Mechanism;
