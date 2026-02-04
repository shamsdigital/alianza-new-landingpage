import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Entropy: React.FC = () => {
  // Dynamic State for the Traffic Equation
  const [equationState, setEquationState] = useState(0);

  const dataStates = [
    {
      visibility: 100,
      ctr: 25,
      label: "Optimal",
      color: "text-green-500",
      barColor: "bg-green-500",
      desc: "Target State: Signal is calibrated. AI cites you as the primary source."
    },
    {
      visibility: 85,
      ctr: 12,
      label: "Decaying",
      color: "text-yellow-500",
      barColor: "bg-yellow-500",
      desc: "Observation: Standard SEO maintains visibility, but CTR begins to erode."
    },
    {
      visibility: 92,
      ctr: 5,
      label: "Critical",
      color: "text-amber-500",
      barColor: "bg-amber-500",
      desc: "Warning: AI Overviews absorb the query. Traffic drops despite high rankings."
    },
    {
      visibility: 98,
      ctr: 0.8,
      label: "Terminal",
      color: "text-red-500",
      barColor: "bg-red-500",
      desc: "System Failure: Zero-click reality. Visibility metrics become vanity."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setEquationState((prev) => (prev + 1) % dataStates.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const currentData = dataStates[equationState];

  return (
    <section id="problem" className="pt-[220px] pb-24 px-6 bg-black border-y border-[#ffffff14] relative overflow-hidden">
      Alianwebsite-vibe-oasis
      {/* Background Gradient - Subtle "Void" Effect with Brand Blue */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#005fff]/10 via-black to-black pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* Header Block - Sticky Left */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#005fff]/20 bg-[#005fff]/5 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-[#005fff] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#005fff]"></span>
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#005fff] font-bold">System Status: Degrading</span>
            </div>

            <h2 className="text-[48px] font-bold leading-[0.9] tracking-tighter">
              You are fighting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-neutral-800 italic font-light">a war against noise.</span>
            </h2>

            <div className="h-px w-full bg-gradient-to-r from-[#005fff]/30 to-transparent"></div>

            <div className="space-y-6 text-neutral-400 text-sm leading-relaxed max-w-md">
              <p>
                The internet is entering a state of high entropy. AI Overviews have slashed click-through rates by nearly 50%.
              </p>
              <div className="pl-4 border-l-2 border-[#005fff]/20">
                <p className="italic text-neutral-500">
                  "The denominator is shrinking. Prioritizing volume over signal is now a losing strategy."
                </p>
              </div>
            </div>
          </div>

          {/* Analysis Block - Right Column */}
          <div className="lg:col-span-7 space-y-6">

            {/* The Equation Card - Clean, High-End Data Viz */}
            <div className="group relative p-8 border border-white/10 bg-[#0A0A0A] rounded-2xl overflow-hidden hover:border-[#005fff]/30 transition-all duration-500">

              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-1">Traffic Equation</h3>
                  <div className="text-white font-mono text-sm">v.2.0.4 Analysis</div>
                </div>
                <div className="flex gap-2">
                  {dataStates.map((_, idx) => (
                    <div key={idx} className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${idx === equationState ? dataStates[idx].barColor : 'bg-white/10'}`}></div>
                  ))}
                </div>
              </div>

              {/* The Core Visualization */}
              <div className="grid md:grid-cols-5 gap-8 items-center py-6 border-y border-white/5">

                {/* Inputs */}
                <div className="col-span-2 space-y-4">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-neutral-400">Visibility</span>
                    <span className="text-white font-mono">{currentData.visibility}%</span>
                  </div>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${currentData.visibility}%` }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                      className="h-full bg-neutral-600"
                    ></motion.div>
                  </div>

                  <div className="flex justify-between items-center text-xs">
                    <span className="text-neutral-400">Click Rate (CTR)</span>
                    <span className={`${currentData.color} font-mono`}>{currentData.ctr}%</span>
                  </div>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${currentData.ctr * 4}%` }} // Scale up for visibility
                      transition={{ duration: 1, ease: "easeInOut" }}
                      className={`h-full ${currentData.barColor}`}
                    ></motion.div>
                  </div>
                </div>

                {/* Operator */}
                <div className="col-span-1 flex justify-center text-neutral-600">
                  {`→`}
                </div>

                {/* Outcome */}
                <div className={`col-span-2 p-4 border rounded-lg text-center transition-colors duration-500 bg-white/[0.02] border-white/5`}>
                  <div className={`font-mono text-[10px] uppercase tracking-widest mb-1 ${currentData.color}`}>Projected Traffic</div>
                  <motion.div
                    key={currentData.label}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="text-2xl font-bold text-white tracking-tighter"
                  >
                    {currentData.label}
                  </motion.div>
                </div>
              </div>

              <div className="mt-6 flex items-start gap-3 h-12">
                <div className={`mt-[7px] w-1.5 h-1.5 rounded-full shrink-0 ${currentData.barColor} transition-colors duration-500`}></div>
                <motion.p
                  key={currentData.desc}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xs text-neutral-500 leading-relaxed font-mono"
                >
                  {currentData.desc}
                </motion.p>
              </div>

            </div>

            {/* Comparison Grid */}
            <div className="grid sm:grid-cols-2 gap-4">

              {/* Problem Card */}
              <div className="p-6 border border-white/5 bg-white/[0.02] rounded-xl hover:bg-white/[0.03] transition-colors">
                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center mb-4 text-xs text-neutral-500">01</div>
                <h4 className="font-bold text-white mb-2">The Volume Trap</h4>
                <p className="text-sm text-neutral-500 leading-relaxed border-t border-white/5 pt-3 mt-3">
                  Increasing content volume decreases signal density. You pay more to be heard less.
                </p>
              </div>

              {/* Solution Card */}
              <div className="p-6 border border-white/5 bg-white/[0.02] rounded-xl hover:bg-white/[0.03] transition-colors">
                <div className="w-8 h-8 rounded bg-[#005fff]/10 flex items-center justify-center mb-4 text-xs text-[#005fff]">02</div>
                <h4 className="font-bold text-white mb-2">Signal Optimization</h4>
                <p className="text-sm text-neutral-500 leading-relaxed border-t border-white/5 pt-3 mt-3">
                  Victory belongs to the primary source. We restructure your data to be the Answer, not just a link.
                </p>
              </div>

            </div>

            {/* Status Footer */}
            <div className="flex items-center gap-4 p-4 rounded-lg bg-[#0A0A0A] border border-white/5">
              <div className="flex gap-1.5">
                <div className="w-1 h-3 bg-neutral-700 rounded-full"></div>
                <div className="w-1 h-3 bg-neutral-700 rounded-full"></div>
                <div className="w-1 h-3 bg-neutral-700 rounded-full"></div>
              </div>
              <div className="h-4 w-px bg-white/10"></div>
              <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                Infrastructure Analysis: <span className="text-[#005fff]">Complete</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Entropy;
