
import React from 'react';

interface NavbarProps {
  onDeploy: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onDeploy }) => {
  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 border-2 border-white flex items-center justify-center font-mono font-bold text-xs">
            AL
          </div>
          <span className="font-mono font-bold tracking-widest text-lg hidden sm:inline">ALIANZA</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-mono tracking-wider opacity-70">
          <a href="#system" className="hover:opacity-100 transition-opacity uppercase">The System</a>
          <a href="#pricing" className="hover:opacity-100 transition-opacity uppercase">Pricing</a>
          <a href="#faq" className="hover:opacity-100 transition-opacity uppercase">FAQ</a>
        </div>

        <button 
          onClick={onDeploy}
          className="bg-white text-black font-mono font-bold px-5 py-2 text-sm uppercase hover:bg-neutral-200 transition-colors"
        >
          [Deploy Campaign]
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
