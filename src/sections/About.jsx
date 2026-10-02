import { SectionLabel } from '../components/ui/SectionLabel';

import { identity } from '../data/identity';

// Editable profile information data
const PROFILE_DATA = {
  intro: identity.tagline,
  items: [
    {
      label: "FOCUS",
      value: "Full Stack Software Engineering",
    },
    {
      label: "CURRENTLY",
      value: "Building + experimenting",
    },
    {
      label: "BASED IN",
      value: identity.location,
    },
    {
      label: "INTERESTS",
      value: "Web · AI · Systems · UI",
    },
  ],
};

export function About({ id = 'about' }) {
  return (
    <section
      id={id}
      className="relative py-16 lg:py-24 border-t border-border/70 scroll-mt-[72px] overflow-hidden"
    >
      {/* Subtle Technical Grid Overlay Continuation */}
      <div 
        className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none select-none [mask-image:linear-gradient(to_bottom,black_10%,transparent_90%)]"
        aria-hidden="true"
      />

      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-20 xl:gap-24 items-start">
          
          {/* ========================================================
              LEFT COLUMN (~45%): Section Label & Large Editorial H2
             ======================================================== */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            
            {/* 1. Section Label */}
            <div className="mb-6">
              <SectionLabel 
                label="02 / PROFILE" 
                indicator="cyan"
                className="text-cyan"
              />
            </div>

            {/* 2. Main Editorial Heading (H2) */}
            <h2 className="font-display font-black tracking-[-0.03em] text-text-primary text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.04] select-none break-words">
              <span className="block">I DON'T JUST</span>
              <span className="block text-text-secondary">WRITE CODE.</span>
              <span className="block text-text-primary mt-1">
                I BUILD SYSTEMS<span className="text-cyan">.</span>
              </span>
            </h2>

            {/* 3. Small Cyan Accent Line */}
            <div 
              className="w-12 h-[2px] bg-cyan mt-6 lg:mt-8 rounded-full shadow-glow-cyan" 
              aria-hidden="true" 
            />


          </div>

          {/* ========================================================
              RIGHT COLUMN (~55%): Introduction & Profile Information Rows
             ======================================================== */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* 4. Concise Introduction */}
            <p className="font-sans text-lg sm:text-xl lg:text-[1.35rem] text-text-secondary leading-relaxed font-normal mb-12 sm:mb-16 max-w-2xl">
              {PROFILE_DATA.intro}
            </p>

            {/* 5. Profile Information: Subtle Rows with Thin Borders */}
            <div className="w-full flex flex-col border-t border-border/80">
              {PROFILE_DATA.items.map((item, index) => (
                <div
                  key={item.label}
                  className="group py-5 sm:py-6 border-b border-border/80 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 sm:gap-6 transition-colors duration-200 hover:border-cyan/30"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  {/* Monospace Uppercase Label */}
                  <span className="font-mono text-xs text-text-muted tracking-[0.2em] uppercase select-none group-hover:text-cyan transition-colors">
                    {item.label}
                  </span>

                  {/* Value */}
                  <span className="font-sans text-base sm:text-lg font-semibold text-text-primary tracking-tight">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* 6. Resume Button & Technical Sub-label */}
            <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              
              {identity.resumeUrl && (
                <a
                  href={identity.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-sm bg-card text-text-primary border border-cyan/60 font-mono text-xs font-bold tracking-[0.14em] uppercase transition-all duration-200 hover:border-cyan hover:shadow-glow-cyan hover:-translate-y-0.5 focus-ring select-none"
                >
                  <span>DOWNLOAD RESUME</span>
                  <svg className="w-3.5 h-3.5 text-cyan transition-transform duration-200 group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              )}

              <div className="flex items-center gap-4 font-mono text-[10px] tracking-[0.16em] text-text-muted/70 uppercase select-none w-full sm:w-auto justify-between sm:justify-end">
                <span>STATUS: {identity.status.text}</span>
                <span className="text-cyan/70 hidden sm:inline">FULL STACK FOCUS</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
