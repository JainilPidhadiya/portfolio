import { useState, useCallback } from 'react';
import { SectionLabel } from '../components/ui/SectionLabel';
import { technologyCategories } from '../data/technologyCategories';
import { cn } from '../utils/cn';
import { identity } from '../data/identity';

function TechIcon({ tech }) {
  if (tech.svgPath) {
    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox={tech.viewBox || "0 0 640 640"} 
        className="w-3.5 h-3.5 fill-current shrink-0 inline-block" 
        aria-hidden="true"
      >
        <path d={tech.svgPath} />
      </svg>
    );
  }
  
  if (tech.icon) {
    return (
      <span 
        className="w-3.5 h-3.5 bg-current shrink-0 inline-block" 
        style={{
          maskImage: `url(https://cdn.simpleicons.org/${tech.icon})`,
          WebkitMaskImage: `url(https://cdn.simpleicons.org/${tech.icon})`,
          maskSize: 'contain',
          WebkitMaskSize: 'contain',
          maskPosition: 'center',
          WebkitMaskPosition: 'center',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat'
        }} 
        aria-hidden="true"
      />
    );
  }
  
  return null;
}

export function Stack({ id = 'stack' }) {
  // Active hovered/focused technology
  const [activeTech, setActiveTech] = useState(null);

  // Mobile accordion active category (default to 'frontend')
  const [expandedCategory, setExpandedCategory] = useState('frontend');

  // Find active category based on hovered tech
  const activeCategory = activeTech
    ? technologyCategories.find(cat => cat.technologies.some(t => t.id === activeTech.id))
    : null;

  const handleTechHover = useCallback((tech) => {
    setActiveTech(tech);
  }, []);

  const handleTechLeave = useCallback(() => {
    setActiveTech(null);
  }, []);

  const toggleCategory = useCallback((categoryId) => {
    setExpandedCategory(prev => prev === categoryId ? null : categoryId);
  }, []);

  return (
    <section
      id={id}
      className="relative py-16 lg:py-24 border-t border-border/70 scroll-mt-[72px] overflow-hidden"
    >
      {/* Background Subtle Technical Grid */}
      <div
        className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none select-none [mask-image:radial-gradient(ellipse_at_center,rgba(0,0,0,0.5)_20%,rgba(0,0,0,1)_100%)]"
        aria-hidden="true"
      />

      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ========================================================
            SECTION HEADER
           ======================================================== */}
        <div className="flex flex-col items-start mb-16 lg:mb-20 max-w-3xl">
          <div className="mb-4">
            <SectionLabel
              label="03 / TECHNICAL ECOSYSTEM"
              indicator="cyan"
              className="text-cyan"
            />
          </div>

          <h2 className="font-display font-black tracking-[-0.03em] text-text-primary text-4xl sm:text-5xl lg:text-6xl leading-[1.02] mb-6 select-none">
            THE TOOLS<br />
            BEHIND THE BUILDS<span className="text-cyan">.</span>
          </h2>

          <p className="font-sans text-base sm:text-lg lg:text-xl text-text-secondary leading-relaxed font-normal">
            Technologies I use to design, build, and ship digital products.
          </p>
        </div>

        {/* ========================================================
            DESKTOP LAYOUT (>= 1024px): 
            Interactive Ecosystem Diagram (Left) + Explanatory Panel (Right)
           ======================================================== */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 xl:gap-12 items-start">

          {/* LEFT: Technical Ecosystem Diagram (8 Cols) */}
          <div className="lg:col-span-8 relative bg-card/60 rounded-md border border-border p-6 xl:p-8 min-h-[580px] flex flex-col justify-between overflow-hidden shadow-card">

            {/* Corner Crosshairs */}
            <span className="absolute -top-1.5 -left-1.5 w-3 h-3 flex items-center justify-center text-[11px] text-cyan/70 font-mono select-none pointer-events-none z-10">+</span>
            <span className="absolute -top-1.5 -right-1.5 w-3 h-3 flex items-center justify-center text-[11px] text-cyan/70 font-mono select-none pointer-events-none z-10">+</span>
            <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 flex items-center justify-center text-[11px] text-cyan/70 font-mono select-none pointer-events-none z-10">+</span>
            <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 flex items-center justify-center text-[11px] text-cyan/70 font-mono select-none pointer-events-none z-10">+</span>


            {/* 3-Row Grid Ecosystem Architecture */}
            <div className="flex-1 flex flex-col justify-between gap-6 relative z-10 py-2">

              {/* TOP ROW: FRONTEND (Wide System Layer) */}
              {(() => {
                const cat = technologyCategories.find(c => c.id === 'frontend');
                const isCatActive = activeCategory?.id === 'frontend';
                return (
                  <div className={cn(
                    "p-4 rounded border transition-all duration-300 relative",
                    isCatActive
                      ? "border-cyan/50 bg-background-secondary shadow-glow-cyan"
                      : "border-border/70 bg-background/70 hover:border-border"
                  )}>
                    <div className="flex items-center justify-between mb-3 select-none">
                      <span className={cn(
                        "font-mono text-xs font-bold tracking-[0.18em] transition-colors",
                        isCatActive ? "text-cyan" : "text-text-secondary"
                      )}>
                        {cat.name}
                      </span>
                      <span className="font-mono text-[10px] text-text-muted tracking-wider">CLIENT LAYER</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {cat.technologies.map(tech => {
                        const isTechActive = activeTech?.id === tech.id;
                        return (
                          <button
                            key={tech.id}
                            type="button"
                            onMouseEnter={() => handleTechHover(tech)}
                            onMouseLeave={handleTechLeave}
                            onFocus={() => handleTechHover(tech)}
                            onBlur={handleTechLeave}
                            aria-label={`${tech.name} - ${cat.name}`}
                            className={cn(
                              "flex items-center gap-2 px-3 py-1.5 rounded-sm font-mono text-xs font-medium border transition-all duration-200 select-none focus-ring",
                              isTechActive
                                ? "bg-cyan text-btn-text border-cyan font-bold shadow-glow-cyan -translate-y-0.5"
                                : "bg-card text-text-secondary border-border/80 hover:text-text-primary hover:border-cyan/50"
                            )}
                          >
                            <TechIcon tech={tech} />
                            {tech.name}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })()}

              {/* MIDDLE ROW: DESIGN (Left) <---> CENTRAL NODE <---> BACKEND (Right) */}
              <div className="grid grid-cols-12 gap-4 items-center">

                {/* Middle Left: DESIGN */}
                {(() => {
                  const cat = technologyCategories.find(c => c.id === 'design');
                  const isCatActive = activeCategory?.id === 'design';
                  return (
                    <div className={cn(
                      "col-span-3 p-3.5 rounded border transition-all duration-300",
                      isCatActive
                        ? "border-orange-500/50 bg-background-secondary shadow-[0_0_15px_rgba(249,115,22,0.15)]"
                        : "border-border/70 bg-background/70 hover:border-border"
                    )}>
                      <div className="flex items-center justify-between mb-2.5 select-none">
                        <span className={cn(
                          "font-mono text-xs font-bold tracking-[0.16em] transition-colors",
                          isCatActive ? "text-orange-500" : "text-text-secondary"
                        )}>
                          {cat.name}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {cat.technologies.map(tech => {
                          const isTechActive = activeTech?.id === tech.id;
                          return (
                            <button
                              key={tech.id}
                              type="button"
                              onMouseEnter={() => handleTechHover(tech)}
                              onMouseLeave={handleTechLeave}
                              onFocus={() => handleTechHover(tech)}
                              onBlur={handleTechLeave}
                              aria-label={`${tech.name} - ${cat.name}`}
                              className={cn(
                                "flex items-center gap-2 px-3 py-1.5 rounded-sm font-mono text-xs font-medium border transition-all duration-200 select-none focus-ring",
                                isTechActive
                                  ? "bg-orange-500 text-white border-orange-500 font-bold shadow-[0_0_10px_rgba(249,115,22,0.3)] -translate-y-0.5"
                                  : "bg-card text-text-secondary border-border/80 hover:text-text-primary hover:border-orange-500/50"
                              )}
                            >
                              <TechIcon tech={tech} />
                              {tech.name}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })()}

                {/* Middle Center: CENTRAL FULL STACK NODE */}
                <div className="col-span-4 flex flex-col items-center justify-center">
                  <div className={cn(
                    "px-5 py-3.5 rounded-sm border-2 transition-all duration-300 text-center select-none shadow-card",
                    activeCategory
                      ? "border-cyan bg-background-secondary shadow-glow-cyan"
                      : "border-cyan/50 bg-card hover:border-cyan hover:shadow-glow-cyan"
                  )}>
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan" />
                      </span>
                      <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-cyan font-bold">
                        CORE ARCHITECTURE
                      </span>
                    </div>
                    <span className="font-display text-sm font-black tracking-tight text-text-primary">
                      FULL STACK
                    </span>
                  </div>
                </div>

                {/* Middle Right: BACKEND */}
                {(() => {
                  const cat = technologyCategories.find(c => c.id === 'backend');
                  const isCatActive = activeCategory?.id === 'backend';
                  return (
                    <div className={cn(
                      "col-span-5 p-3.5 rounded border transition-all duration-300",
                      isCatActive
                        ? "border-orange-500/50 bg-background-secondary shadow-[0_0_15px_rgba(249,115,22,0.15)]"
                        : "border-border/70 bg-background/70 hover:border-border"
                    )}>
                      <div className="flex items-center justify-between mb-2.5 select-none">
                        <span className={cn(
                          "font-mono text-xs font-bold tracking-[0.16em] transition-colors",
                          isCatActive ? "text-orange-500" : "text-text-secondary"
                        )}>
                          {cat.name}
                        </span>
                        <span className="font-mono text-[10px] text-text-muted tracking-wider">API LAYER</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {cat.technologies.map(tech => {
                          const isTechActive = activeTech?.id === tech.id;
                          return (
                            <button
                              key={tech.id}
                              type="button"
                              onMouseEnter={() => handleTechHover(tech)}
                              onMouseLeave={handleTechLeave}
                              onFocus={() => handleTechHover(tech)}
                              onBlur={handleTechLeave}
                              aria-label={`${tech.name} - ${cat.name}`}
                              className={cn(
                                "flex items-center gap-2 px-3 py-1.5 rounded-sm font-mono text-xs font-medium border transition-all duration-200 select-none focus-ring",
                                isTechActive
                                  ? "bg-orange-500 text-white border-orange-500 font-bold shadow-[0_0_10px_rgba(249,115,22,0.3)] -translate-y-0.5"
                                  : "bg-card text-text-secondary border-border/80 hover:text-text-primary hover:border-orange-500/50"
                              )}
                            >
                              <TechIcon tech={tech} />
                              {tech.name}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })()}

              </div>

              {/* BOTTOM ROW: TOOLS (Left) + DATABASE (Right) */}
              <div className="grid grid-cols-12 gap-4">

                {/* Bottom Left: TOOLS */}
                {(() => {
                  const cat = technologyCategories.find(c => c.id === 'tools');
                  const isCatActive = activeCategory?.id === 'tools';
                  return (
                    <div className={cn(
                      "col-span-7 p-3.5 rounded border transition-all duration-300",
                      isCatActive
                        ? "border-green/50 bg-background-secondary"
                        : "border-border/70 bg-background/70 hover:border-border"
                    )}>
                      <div className="flex items-center justify-between mb-2.5 select-none">
                        <span className={cn(
                          "font-mono text-xs font-bold tracking-[0.16em] transition-colors",
                          isCatActive ? "text-green" : "text-text-secondary"
                        )}>
                          {cat.name}
                        </span>
                        <span className="font-mono text-[10px] text-text-muted tracking-wider">DEV ENVIRONMENT</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {cat.technologies.map(tech => {
                          const isTechActive = activeTech?.id === tech.id;
                          return (
                            <button
                              key={tech.id}
                              type="button"
                              onMouseEnter={() => handleTechHover(tech)}
                              onMouseLeave={handleTechLeave}
                              onFocus={() => handleTechHover(tech)}
                              onBlur={handleTechLeave}
                              aria-label={`${tech.name} - ${cat.name}`}
                              className={cn(
                                "flex items-center gap-2 px-3 py-1.5 rounded-sm font-mono text-xs font-medium border transition-all duration-200 select-none focus-ring",
                                isTechActive
                                  ? "bg-green text-btn-text border-green font-bold -translate-y-0.5"
                                  : "bg-card text-text-secondary border-border/80 hover:text-text-primary hover:border-green/50"
                              )}
                            >
                              <TechIcon tech={tech} />
                              {tech.name}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })()}

                {/* Bottom Right: DATABASE */}
                {(() => {
                  const cat = technologyCategories.find(c => c.id === 'database');
                  const isCatActive = activeCategory?.id === 'database';
                  return (
                    <div className={cn(
                      "col-span-5 p-3.5 rounded border transition-all duration-300",
                      isCatActive
                        ? "border-violet/50 bg-background-secondary"
                        : "border-border/70 bg-background/70 hover:border-border"
                    )}>
                      <div className="flex items-center justify-between mb-2.5 select-none">
                        <span className={cn(
                          "font-mono text-xs font-bold tracking-[0.16em] transition-colors",
                          isCatActive ? "text-violet" : "text-text-secondary"
                        )}>
                          {cat.name}
                        </span>
                        <span className="font-mono text-[10px] text-text-muted tracking-wider">DATA LAYER</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {cat.technologies.map(tech => {
                          const isTechActive = activeTech?.id === tech.id;
                          return (
                            <button
                              key={tech.id}
                              type="button"
                              onMouseEnter={() => handleTechHover(tech)}
                              onMouseLeave={handleTechLeave}
                              onFocus={() => handleTechHover(tech)}
                              onBlur={handleTechLeave}
                              aria-label={`${tech.name} - ${cat.name}`}
                              className={cn(
                                "flex items-center gap-2 px-3 py-1.5 rounded-sm font-mono text-xs font-medium border transition-all duration-200 select-none focus-ring",
                                isTechActive
                                  ? "bg-violet text-btn-text border-violet font-bold -translate-y-0.5"
                                  : "bg-card text-text-secondary border-border/80 hover:text-text-primary hover:border-violet/50"
                              )}
                            >
                              <TechIcon tech={tech} />
                              {tech.name}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })()}

              </div>

            </div>

            {/* Bottom Status Ticker */}
            <div className="border-t border-border/70 pt-3 mt-4 flex items-center justify-between font-mono text-[10px] text-text-muted select-none">
              <span>ACTIVE SYSTEM: {activeTech ? activeTech.name.toUpperCase() : "FULL PIPELINE CONNECTED"}</span>
              <span className="text-cyan/70">16 INTEGRATED TOOLS</span>
            </div>

          </div>

          {/* RIGHT: Explanatory Panel (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">

            {/* Live Node Inspector / System Card */}
            <div className="bg-card rounded-md border border-border p-6 shadow-card transition-all duration-300">

              <div className="flex items-center justify-between pb-4 border-b border-border/80 mb-5">
                <span className="font-mono text-xs font-bold tracking-[0.16em] uppercase text-text-primary">
                  {activeTech ? "NODE INSPECTOR" : "SYSTEM OVERVIEW"}
                </span>
                <span className={cn(
                  "font-mono text-[10px] tracking-wider uppercase font-semibold",
                  activeTech ? "text-cyan" : "text-green"
                )}>
                  {activeTech ? "CONNECTED" : "ONLINE"}
                </span>
              </div>

              {activeTech ? (
                /* Dynamic Inspection Mode */
                <div className="space-y-4 animate-hero-up">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted block mb-1">
                      SELECTED TECHNOLOGY
                    </span>
                    <span className="font-display text-2xl font-black text-text-primary">
                      {activeTech.name}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-border-subtle">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted block mb-1">
                      DOMAIN CATEGORY
                    </span>
                    <span className="font-mono text-xs font-semibold text-cyan uppercase tracking-wider">
                      {activeCategory?.name}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-border-subtle">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted block mb-1">
                      ARCHITECTURAL ROLE
                    </span>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed font-normal">
                      "{activeTech.description}"
                    </p>
                  </div>
                </div>
              ) : (
                /* Resting System State */
                <div className="space-y-4">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted block mb-1">
                      SYSTEM
                    </span>
                    <span className="font-sans text-base font-semibold text-text-primary">
                      FULL STACK
                    </span>
                  </div>

                  <div className="pt-2 border-t border-border-subtle">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted block mb-1">
                      LAYERS
                    </span>
                    <span className="font-mono text-xs text-cyan font-medium leading-relaxed">
                      Frontend · Backend · Data · Tools · Design
                    </span>
                  </div>

                  <div className="pt-2 border-t border-border-subtle">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted block mb-1">
                      FOCUS
                    </span>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">
                      Building useful digital products with end-to-end cohesion.
                    </p>
                  </div>
                </div>
              )}

              {/* Quick Hint */}
              <div className="pt-4 border-t border-border/80 mt-5 font-mono text-[10px] text-text-muted/80 leading-relaxed select-none">
                Hover or press Tab through technology nodes to trace their system domain.
              </div>

            </div>

            {/* Compact Technical Card */}
            <div className="bg-background-secondary rounded-md border border-border/60 p-5 font-mono text-xs text-text-secondary">
              <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted block mb-2">
                SYSTEM PHILOSOPHY
              </span>
              <p className="text-xs leading-relaxed text-text-secondary font-normal">
                Tools are chosen for reliability, composability, and developer velocity rather than hype.
              </p>
            </div>

          </div>

        </div>

        {/* ========================================================
            MOBILE & TABLET ACCORDION LAYOUT (< 1024px):
            Clean expandable category list
           ======================================================== */}
        <div className="lg:hidden flex flex-col gap-4">
          {technologyCategories.map((category) => {
            const isExpanded = expandedCategory === category.id;
            return (
              <div
                key={category.id}
                className={cn(
                  "rounded-md border transition-all duration-300 overflow-hidden",
                  isExpanded
                    ? "bg-background-secondary border-cyan/40 shadow-glow-cyan"
                    : "bg-card border-border/80"
                )}
              >
                {/* Category Accordion Header */}
                <button
                  type="button"
                  onClick={() => toggleCategory(category.id)}
                  aria-expanded={isExpanded}
                  aria-controls={`mobile-tech-${category.id}`}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left focus-ring select-none"
                >
                  <div className="flex items-center gap-3">
                    <span className={cn(
                      "w-2 h-2 rounded-full transition-colors",
                      isExpanded ? "bg-cyan" : "bg-text-muted"
                    )} />
                    <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.16em] uppercase text-text-primary">
                      {category.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 font-mono text-xs">
                    <span className="text-text-muted text-[11px]">
                      [{category.technologies.length}]
                    </span>
                    <span className={cn(
                      "text-cyan transition-transform duration-200 text-sm font-bold",
                      isExpanded && "rotate-45"
                    )}>
                      +
                    </span>
                  </div>
                </button>

                {/* Category Content: Technologies with Descriptions */}
                {isExpanded && (
                  <div
                    id={`mobile-tech-${category.id}`}
                    className="px-4 pb-5 sm:px-5 sm:pb-6 border-t border-border-subtle pt-4 flex flex-col gap-3 animate-hero-up"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {category.technologies.map(tech => (
                        <div
                          key={tech.id}
                          className="p-3 rounded-sm bg-card border border-border/70 flex flex-col gap-1"
                        >
                          <span className="font-mono text-xs font-bold text-text-primary flex items-center gap-2">
                            <TechIcon tech={tech} />
                            {tech.name}
                          </span>
                          <span className="font-sans text-[11px] text-text-secondary leading-snug">
                            {tech.description}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
