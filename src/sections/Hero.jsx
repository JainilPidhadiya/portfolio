import { useCallback } from 'react';
import { SectionLabel } from '../components/ui/SectionLabel';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { useTheme } from '../hooks/useTheme';

import { identity } from '../data/identity';

// System status data - easily editable
const SYSTEM_INFO = {
  currentFocus: "Full Stack Software Engineering",
  stack: "React · Node · MongoDB",
  buildStatus: "92%",
  asciiProgress: "████████████░",
};

export function Hero({ id = 'intro' }) {
  const prefersReducedMotion = useReducedMotion();
  const { theme } = useTheme();

  // Smooth scroll handler for CTA
  const handleScrollToWork = useCallback((e) => {
    e.preventDefault();
    const element = document.getElementById('work');
    if (element) {
      const navOffset = 72;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = Math.max(0, elementPosition - navOffset);

      window.scrollTo({
        top: offsetPosition,
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });

      if (window.history.pushState) {
        window.history.pushState(null, '', '#work');
      }
    }
  }, [prefersReducedMotion]);

  return (
    <section
      id={id}
      className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center overflow-hidden pt-[104px] pb-12 lg:pt-[120px] lg:pb-16 border-b border-border/60"
    >
      {/* Background: Subtle Technical Grid with Edge Mask */}
      <div 
        className="absolute inset-0 bg-tech-grid opacity-70 pointer-events-none select-none [mask-image:radial-gradient(ellipse_at_center,rgba(0,0,0,0.3)_20%,rgba(0,0,0,1)_100%)]" 
        aria-hidden="true" 
      />

      {/* Subtle Cyan & Blue Radial Ambient Glows */}
      <div 
        className="absolute -top-32 -left-32 w-80 h-80 md:w-[28rem] md:h-[28rem] bg-cyan/[0.04] rounded-full blur-3xl pointer-events-none select-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute -bottom-32 right-0 w-80 h-80 md:w-[32rem] md:h-[32rem] bg-blue/[0.04] rounded-full blur-3xl pointer-events-none select-none" 
        aria-hidden="true" 
      />


      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-center">
          
          {/* ========================================================
              LEFT COLUMN: Editorial Typography & Core Information
             ======================================================== */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* 1. Small Technical Label */}
            <div 
              className="mb-4 animate-hero-up"
              style={{ animationDelay: '50ms' }}
            >
              <SectionLabel 
                label="01 / INTRO" 
                indicator="cyan" 
                className="text-cyan"
              />
            </div>

            {/* 2. Eyebrow */}
            <div 
              className="mb-6 animate-hero-up"
              style={{ animationDelay: '120ms' }}
            >
              <p className="font-mono text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-text-muted">
                FULL STACK SOFTWARE ENGINEER <span className="text-cyan/60">/</span> PRODUCT BUILDER
              </p>
            </div>

            {/* 3. Main Editorial Headline (H1) */}
            <h1 className="font-display font-black tracking-[-0.035em] text-text-primary text-[2.75rem] sm:text-6xl md:text-7xl lg:text-7xl xl:text-[5.25rem] leading-[0.95] mb-8 select-none break-words">
              <span 
                className="block animate-hero-up"
                style={{ animationDelay: '180ms' }}
              >
                BUILDING
              </span>
              <span 
                className="block animate-hero-up"
                style={{ animationDelay: '250ms' }}
              >
                DIGITAL
              </span>
              <span 
                className="block text-text-primary animate-hero-up"
                style={{ animationDelay: '320ms' }}
              >
                SYSTEMS<span className="text-cyan">.</span>
              </span>
            </h1>

            {/* 4. Description */}
            <p 
              className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed font-normal max-w-xl mb-10 animate-hero-up"
              style={{ animationDelay: '400ms' }}
            >
              {identity.tagline}
            </p>

            {/* 5. CTA Buttons */}
            <div 
              className="flex flex-wrap items-center gap-4 w-full animate-hero-up"
              style={{ animationDelay: '480ms' }}
            >
              {/* Primary CTA */}
              <a
                href="#work"
                onClick={handleScrollToWork}
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-sm bg-card text-text-primary border border-cyan/60 font-mono text-xs font-bold tracking-[0.14em] uppercase transition-all duration-200 hover:border-cyan hover:shadow-glow-cyan hover:-translate-y-0.5 hover:translate-x-0.5 focus-ring select-none"
              >
                <span>EXPLORE MY WORK</span>
                <span className="text-cyan transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                  →
                </span>
              </a>

              {/* Resume CTA */}
              {identity.resumeUrl && (
                <a
                  href={identity.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-transparent border border-border text-text-secondary font-mono text-xs font-bold tracking-[0.14em] uppercase transition-all duration-200 hover:text-text-primary hover:border-cyan/50 hover:bg-cyan/5 focus-ring select-none"
                >
                  <span>RESUME</span>
                  <span className="text-cyan transition-transform duration-200 group-hover:-translate-y-0.5" aria-hidden="true">
                    ↓
                  </span>
                </a>
              )}

              {/* Github CTA */}
              <a
                href={identity.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-transparent border border-border text-text-secondary font-mono text-xs font-semibold tracking-[0.14em] uppercase transition-all duration-200 hover:text-text-primary hover:border-text-secondary hover:bg-card/40 focus-ring select-none"
              >
                <span>GITHUB</span>
                <span className="text-text-muted transition-colors hover:text-text-primary" aria-hidden="true">
                  ↗
                </span>
              </a>
            </div>

          </div>

          {/* ========================================================
              RIGHT COLUMN: Profile Photo & Developer Status Panel
             ======================================================== */}
          <div 
            className="lg:col-span-5 w-full animate-hero-right"
            style={{ animationDelay: '300ms' }}
          >
            <div className="relative group w-full max-w-sm mx-auto lg:max-w-none">
              {/* Corner crosshairs for technical precision */}
              <span className="absolute -top-1.5 -left-1.5 w-3 h-3 flex items-center justify-center text-[11px] text-cyan/70 font-mono select-none pointer-events-none leading-none z-10">+</span>
              <span className="absolute -top-1.5 -right-1.5 w-3 h-3 flex items-center justify-center text-[11px] text-cyan/70 font-mono select-none pointer-events-none leading-none z-10">+</span>
              <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 flex items-center justify-center text-[11px] text-cyan/70 font-mono select-none pointer-events-none leading-none z-10">+</span>
              <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 flex items-center justify-center text-[11px] text-cyan/70 font-mono select-none pointer-events-none leading-none z-10">+</span>

              {/* Identity Dossier Card */}
              <div className="bg-card rounded-md border border-border p-2 transition-all duration-300 group-hover:border-cyan/40 group-hover:shadow-glow-cyan shadow-card flex flex-col">
                
                {/* Photo Area */}
                {identity.profileImage && (
                  <div className={`w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/3] rounded-[4px] overflow-hidden relative mb-4 border border-border/50 transition-colors duration-700 ${theme === 'light' ? 'bg-[#FFFFFF]' : 'bg-black'}`}>
                    <div className="absolute inset-0 bg-cyan/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10 pointer-events-none" />
                    
                    {/* Transparent Profile Image */}
                    <img 
                      src={identity.profileImage} 
                      alt={`Profile of ${identity.name}`}
                      className="absolute inset-0 w-full h-full object-contain object-bottom pt-2 filter grayscale-[25%] contrast-[1.1] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                )}
                
                <div className="px-3 pb-3 sm:px-4 sm:pb-4 pt-1">
                  {/* Panel Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-border/80">
                    <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-[0.16em] uppercase text-text-primary select-none">
                      <span className="w-1.5 h-1.5 bg-cyan rounded-full" aria-hidden="true" />
                      <span>SYSTEM STATUS</span>
                    </div>
                    
                    <div 
                      className="flex items-center gap-2 font-mono text-[11px] tracking-wider uppercase text-green font-semibold select-none"
                      title="System is active and operational"
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green" />
                      </span>
                      <span>ONLINE</span>
                    </div>
                  </div>

                  {/* Panel Metrics & Status Rows */}
                  <div className="py-4 space-y-4">
                    
                    {/* Row 1: Current Focus */}
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-text-muted">
                        CURRENT FOCUS
                      </span>
                      <span className="font-sans text-sm font-semibold text-text-primary">
                        {SYSTEM_INFO.currentFocus}
                      </span>
                    </div>

                    {/* Row 2: Stack */}
                    <div className="flex flex-col gap-1 pt-1 border-t border-border-subtle">
                      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-text-muted">
                        STACK
                      </span>
                      <div className="flex items-center gap-2 font-mono text-xs text-cyan font-medium">
                        <span>{SYSTEM_INFO.stack}</span>
                      </div>
                    </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
    </section>
  );
}
