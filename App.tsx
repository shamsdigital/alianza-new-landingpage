import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Entropy from './components/Entropy';
import Calibration from './components/Calibration';
import Mechanism from './components/Mechanism';
import SocialProof from './components/SocialProof';
import Pricing from './components/Pricing';
import System from './components/System';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import AuditModal from './components/AuditModal';

const App: React.FC = () => {
  const [showAudit, setShowAudit] = useState(false);

  // Smooth scroll logic
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    window.addEventListener('click', handleAnchorClick);
    return () => window.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative">
      <div className="fixed inset-0 bg-grid opacity-20 pointer-events-none z-0"></div>
      <div className="relative z-10">
        <main>
          <Hero onAudit={() => setShowAudit(true)} />
          <Entropy />
          <Calibration />
          <Mechanism />
          <SocialProof />
          <Pricing onDeploy={() => setShowAudit(true)} />
          <System />
          <FAQ />
        </main>

        <Footer onAudit={() => setShowAudit(true)} />
      </div>

      {showAudit && <AuditModal onClose={() => setShowAudit(false)} />}
    </div>
  );
};

export default App;