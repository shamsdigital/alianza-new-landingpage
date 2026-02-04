import React, { useState } from 'react';
import { FAQ_DATA } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-6 bg-black border-t border-[#ffffff14] relative overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#005fff]/5 blur-[100px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* Header Block - Sticky Left */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#005fff]/20 bg-[#005fff]/5 backdrop-blur-md">
              <div className="w-1.5 h-1.5 rounded-full bg-[#005fff] animate-pulse"></div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#005fff] font-bold">Protocol Documentation</span>
            </div>

            <h2 className="text-[48px] font-bold leading-[0.9] tracking-tighter">
              System <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005fff] to-neutral-500 italic font-light">Query Logs.</span>
            </h2>

            <div className="h-px w-24 bg-[#005fff]/30"></div>

            <div className="space-y-6 text-neutral-400 text-lg leading-relaxed max-w-md">
              <p>
                We operate on absolute transparency. No sales fluff. Just engineering parameters and protocol definitions.
              </p>

              {/* Terminal Snippet */}
              <div className="p-4 bg-black/50 border border-white/10 rounded-lg font-mono text-xs">
                <div className="flex gap-2 text-neutral-500 mb-2 border-b border-white/5 pb-2">
                  <span>user@system:~$</span>
                  <span className="text-white">cat honesty.log</span>
                </div>
                <div className="space-y-1 text-[#005fff]">
                  <p>{`> "Complexity is technical debt."`}</p>
                  <p>{`> "Clarity is the only KPI."`}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Knowledge Base Grid - Right Column */}
          <div className="lg:col-span-7 space-y-3">
            {FAQ_DATA.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className={`group border transition-all duration-500 overflow-hidden ${isOpen
                    ? 'border-[#005fff]/30 bg-[#005fff]/[0.02] rounded-xl'
                    : 'border-white/5 bg-white/[0.01] hover:border-[#005fff]/20 rounded-lg'
                    }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-start sm:items-center justify-between p-6 sm:p-8 text-left"
                  >
                    <div className="flex gap-4 sm:gap-6 items-start sm:items-center">
                      <div className={`font-mono text-[10px] py-1 px-2 rounded border transition-colors shrink-0 mt-1 sm:mt-0 ${isOpen
                        ? 'bg-[#005fff] text-white border-[#005fff]'
                        : 'bg-white/5 text-white/30 border-white/5 group-hover:text-[#005fff] group-hover:border-[#005fff]/20'
                        }`}>
                        LOG_0{idx + 1}
                      </div>

                      <h4 className={`text-lg sm:text-xl font-bold tracking-tight transition-colors ${isOpen ? 'text-white' : 'text-neutral-400 group-hover:text-white'
                        }`}>
                        {faq.question}
                      </h4>
                    </div>

                    <div className={`shrink-0 ml-4 p-2 rounded-full border transition-all duration-500 ${isOpen
                      ? 'rotate-180 border-[#005fff] text-[#005fff] bg-[#005fff]/10'
                      : 'border-white/5 text-white/20 group-hover:border-white/20'
                      }`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 sm:px-8 pb-8 pt-0">
                          <div className="pl-4 sm:pl-[70px] border-l-2 border-[#005fff]/10 ml-2 sm:ml-5">
                            <div className="flex items-center gap-2 mb-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#005fff]"></div>
                              <span className="font-mono text-[9px] uppercase tracking-widest text-[#005fff]/60">System Response</span>
                            </div>
                            <p className="text-neutral-300 leading-relaxed text-base sm:text-lg">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
