import React from 'react';
import { ShaderAnimation } from './ui/shader-animation';
import ResponsiveHeroBanner from './ui/responsive-hero-banner';

interface HeroProps {
  onAudit: () => void;
}

const Hero: React.FC<HeroProps> = ({ onAudit }) => {
  // Provided logo: White text "ALIANZA" with clean transparency
  const logoUrl = "https://cdn.builder.io/api/v1/image/assets%2F130651f9b94749c59e3072ea6dad87f8%2F66365b671c4748d0bc3c72d21d229bf3";

  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Background Paths Layer */}
      <div className="absolute inset-0 z-0">
        <ShaderAnimation />
      </div>

      {/* Grid Overlay Layer */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none z-[1]"></div>

      {/* Main UI Layer */}
      <div className="relative z-10 w-full">
        <ResponsiveHeroBanner
          logoUrl={logoUrl}
          badgeLabel="Status"
          badgeText="Engineering-First"
          title="The era of the"
          titleLine2="click is ending."
          description="Google’s AI now summarizes the web. It does not visit it. If your site is not calibrated for machine readability, it is not just invisible—it is obsolete."
          primaryButtonText="[ Get a Baseline Audit ]"
          onPrimaryClick={onAudit}
          ctaButtonText="[ Deploy Campaign ]"
          onCtaClick={onAudit}
          partnersTitle="Analyzing signal against leading generative infrastructures"
          navLinks={[
            { label: "The System", href: "#system" },
            { label: "Pricing", href: "#pricing" },
            { label: "FAQ", href: "#faq" }
          ]}
        />
      </div>

      {/* Traverse Pointer (Overlay) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 z-10 pointer-events-none">
        <span className="font-mono text-[9px] uppercase tracking-widest">Scroll to Traverse</span>
        <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
