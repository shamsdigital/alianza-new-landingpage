import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onAudit: () => void;
}

const Footer: React.FC<FooterProps> = ({ onAudit }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 border border-white flex items-center justify-center font-mono font-bold text-[10px]">
                  AL
                </div>
                <span className="font-mono font-bold tracking-widest text-sm">ALIANZA</span>
              </div>
              
              <h3 className="text-2xl font-light leading-snug text-white/90 max-w-sm mb-8 font-instrument-serif italic">
                Infrastructure for the <span className="text-white not-italic font-sans">machine-readable web</span>.
              </h3>
              
              <p className="text-sm text-neutral-500 font-mono max-w-xs leading-relaxed">
                We optimize digital entropy for generative systems. The future is not clicked—it is computed.
              </p>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-6">
              <h4 className="font-mono text-xs text-neutral-500 uppercase tracking-widest">[ Platform ]</h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#system" className="group flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors duration-300">
                    <span className="w-1 h-1 bg-neutral-600 rounded-full group-hover:bg-white transition-colors"></span>
                    The System
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="group flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors duration-300">
                    <span className="w-1 h-1 bg-neutral-600 rounded-full group-hover:bg-white transition-colors"></span>
                    Pricing Model
                  </a>
                </li>
                <li>
                  <a href="#calibration" className="group flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors duration-300">
                    <span className="w-1 h-1 bg-neutral-600 rounded-full group-hover:bg-white transition-colors"></span>
                    Calibration
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-6">
              <h4 className="font-mono text-xs text-neutral-500 uppercase tracking-widest">[ Company ]</h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#" className="group flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors duration-300">
                    <span className="w-1 h-1 bg-neutral-600 rounded-full group-hover:bg-white transition-colors"></span>
                    Manifesto
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors duration-300">
                    <span className="w-1 h-1 bg-neutral-600 rounded-full group-hover:bg-white transition-colors"></span>
                    Careers <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-white/70 ml-1">Hiring</span>
                  </a>
                </li>
                <li>
                  <button onClick={onAudit} className="group flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors duration-300 text-left">
                    <span className="w-1 h-1 bg-neutral-600 rounded-full group-hover:bg-white transition-colors"></span>
                    Contact Support
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3 - Social / Action */}
            <div className="flex flex-col gap-6">
              <h4 className="font-mono text-xs text-neutral-500 uppercase tracking-widest">[ Connect ]</h4>
              <ul className="flex flex-col gap-3">
                 <li>
                  <a href="https://twitter.com/alianza" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors duration-300">
                    Twitter / X <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                  </a>
                </li>
                 <li>
                  <a href="https://github.com/alianza" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors duration-300">
                    GitHub <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/company/alianza" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors duration-300">
                    LinkedIn <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-end md:items-center gap-6">
           <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
             <p className="text-neutral-600 text-xs font-mono">
               © {currentYear} ALIANZA INC.
             </p>
             <div className="flex items-center gap-2 text-xs font-mono text-neutral-600">
               <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
               SYSTEM OPERATIONAL
             </div>
           </div>

           <div className="flex items-center gap-8">
             <a href="#" className="text-xs font-mono text-neutral-600 hover:text-neutral-400 transition-colors uppercase tracking-wider">Privacy</a>
             <a href="#" className="text-xs font-mono text-neutral-600 hover:text-neutral-400 transition-colors uppercase tracking-wider">Terms</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
