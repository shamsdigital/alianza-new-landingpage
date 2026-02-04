"use client";

import React, { useState } from 'react';

interface NavLink {
    label: string;
    href: string;
    isActive?: boolean;
}

interface Partner {
    logoUrl: string;
    href: string;
}

interface ResponsiveHeroBannerProps {
    logoUrl?: string;
    backgroundImageUrl?: string;
    navLinks?: NavLink[];
    ctaButtonText?: string;
    ctaButtonHref?: string;
    badgeText?: string;
    badgeLabel?: string;
    title?: string;
    titleAccent?: string;
    titleLine2?: string;
    description?: string;
    primaryButtonText?: string;
    primaryButtonHref?: string;
    secondaryButtonText?: string;
    secondaryButtonHref?: string;
    partnersTitle?: string;
    partners?: Partner[];
    onCtaClick?: () => void;
    onPrimaryClick?: () => void;
}

const ResponsiveHeroBanner: React.FC<ResponsiveHeroBannerProps> = ({
    logoUrl = "",
    backgroundImageUrl = "",
    navLinks = [
        { label: "Home", href: "#", isActive: true },
        { label: "Missions", href: "#" },
        { label: "Destinations", href: "#" },
        { label: "Technology", href: "#" },
        { label: "Book Flight", href: "#" }
    ],
    ctaButtonText = "Reserve Seat",
    ctaButtonHref = "#",
    badgeLabel = "New",
    badgeText = "First Commercial Flight to Mars 2026",
    title = "Journey Beyond Earth",
    titleAccent = "",
    titleLine2 = "Into the Cosmos",
    description = "Experience the cosmos like never before. Our advanced spacecraft and cutting-edge technology make interplanetary travel accessible, safe, and unforgettable.",
    primaryButtonText = "Book Your Journey",
    primaryButtonHref = "#",
    secondaryButtonText = "Watch Launch",
    secondaryButtonHref = "#",
    partnersTitle = "Partnering with leading agencies worldwide",
    partners = [],
    onCtaClick,
    onPrimaryClick
}) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <section className="w-full isolate min-h-screen overflow-hidden relative bg-transparent">
            {backgroundImageUrl && (
                <img
                    src={backgroundImageUrl}
                    alt=""
                    className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 -z-10"
                />
            )}
            
            <header className="z-20 xl:top-4 relative">
                <div className="mx-6">
                    <div className="flex items-center justify-between pt-4">
                        <a
                            href="#"
                            className="inline-flex items-center justify-center font-mono font-bold tracking-widest text-lg text-white group"
                        >
                           {logoUrl ? (
                             <img
                               src={logoUrl}
                               alt="ALIANZA"
                               className="h-8 md:h-8 w-auto object-contain brightness-110 contrast-125"
                             />
                           ) : (
                             <span className="tracking-[0.3em]">ALIANZA</span>
                           )}
                        </a>

                        <nav className="hidden md:flex items-center gap-2">
                            <div className="flex items-center gap-1 rounded-full bg-white/5 px-1 py-1 ring-1 ring-white/10 backdrop-blur">
                                {navLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.href}
                                        className={`px-3 py-2 text-sm font-medium hover:text-[#005fff] font-sans transition-colors ${link.isActive ? 'text-white/90' : 'text-white/80'
                                            }`}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                                <button
                                    onClick={onCtaClick}
                                    className="ml-1 inline-flex items-center gap-2 rounded-full bg-[#005fff] px-3.5 py-2 text-sm font-bold text-black hover:bg-[#005fff]/90 font-sans transition-colors"
                                >
                                    {ctaButtonText}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                                        <path d="M7 7h10v10" />
                                        <path d="M7 17 17 7" />
                                    </svg>
                                </button>
                            </div>
                        </nav>

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur"
                            aria-expanded={mobileMenuOpen}
                            aria-label="Toggle menu"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-white/90">
                                <path d="M4 5h16" />
                                <path d="M4 12h16" />
                                <path d="M4 19h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden absolute top-20 left-6 right-6 bg-black/90 backdrop-blur-xl z-50 rounded-2xl border border-white/10 p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
                  {navLinks.map((link, index) => (
                      <a key={index} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-white/80 hover:text-[#005fff] text-lg font-mono">
                          {link.label}
                      </a>
                  ))}
                  <button onClick={() => { onCtaClick?.(); setMobileMenuOpen(false); }} className="bg-[#005fff] text-black font-mono font-bold py-4 rounded-xl">
                      {ctaButtonText}
                  </button>
              </div>
            )}

            <div className="z-10 relative flex flex-col items-center justify-center flex-1">
                <div className="sm:pt-28 md:pt-32 lg:pt-40 max-w-7xl mx-auto pt-20 px-6 pb-16">
                    <div className="mx-auto max-w-5xl text-center">
                        <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/10 px-2.5 py-2 ring-1 ring-white/15 backdrop-blur animate-fade-slide-in-1">
                            <span className="inline-flex items-center text-[10px] font-mono font-bold tracking-widest text-black bg-[#005fff] rounded-full py-0.5 px-3 uppercase">
                                {badgeLabel}
                            </span>
                            <span className="text-xs font-mono font-bold tracking-widest text-white/90 uppercase">
                                {badgeText}
                            </span>
                        </div>

                        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-8xl leading-[1.05] text-white tracking-tighter font-bold uppercase animate-fade-slide-in-2">
                            <span className="block" style={{ fontSize: "72px", fontWeight: "600" }}>{title}</span>
                            <span className="block lowercase" style={{ font: 'italic 300 112px/100px "Instrument Serif", serif ', color: "rgba(115, 115, 115, 1)" }}>{titleLine2}</span>
                        </h1>

                        <p className="sm:text-xl animate-fade-slide-in-3 text-base text-white/70 max-w-2xl mt-8 mx-auto leading-relaxed">
                            {description}
                        </p>

                        <div className="flex flex-col sm:flex-row sm:gap-4 mt-12 gap-4 items-center justify-center animate-fade-slide-in-4">
                            <button
                                onClick={onPrimaryClick}
                                className="inline-flex items-center gap-3 bg-[#295fff] hover:bg-[#295fff]/90 text-black ring-1 ring-white/15 rounded-full py-4 px-8 font-mono font-bold text-sm uppercase transition-all"
                            >
                                {primaryButtonText}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </button>
                            <a
                                href="#system"
                                className="inline-flex items-center gap-2 rounded-full bg-transparent px-8 py-4 text-sm font-mono font-bold text-white/90 hover:text-[#005fff] transition-colors border border-white/10 hover:border-[#005fff]/30 backdrop-blur-sm"
                            >
                                [ View The Logic ]
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                    <path d="m19 9-7 7-7-7" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResponsiveHeroBanner;
