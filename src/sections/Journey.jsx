import { SectionLabel } from '../components/ui/SectionLabel';
import { journeyData } from '../data/journeyData';
import { identity } from '../data/identity';

export function Journey({ id = 'journey' }) {
  return (
    <section
      id={id}
      className="relative py-24 sm:py-32 lg:py-40 border-t border-border/70 scroll-mt-[72px] overflow-hidden"
    >
      {/* Background Subtle Technical Grid Overlay */}
      <div 
        className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none select-none [mask-image:radial-gradient(ellipse_at_center,rgba(0,0,0,0.5)_20%,rgba(0,0,0,1)_100%)]"
        aria-hidden="true"
      />

      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================
            SECTION HEADER
           ======================================================== */}
        <div className="flex flex-col items-start mb-20 lg:mb-28 max-w-3xl">
          <div className="mb-4">
            <SectionLabel 
              label="05 / BUILD LOG" 
              indicator="cyan" 
              className="text-cyan"
            />
          </div>

          <h2 className="font-display font-black tracking-[-0.03em] text-text-primary text-4xl sm:text-5xl lg:text-6xl leading-[1.02] mb-6 select-none">
            THE SYSTEM<br />
            KEEPS EVOLVING<span className="text-cyan">.</span>
          </h2>

          <p className="font-sans text-base sm:text-lg lg:text-xl text-text-secondary leading-relaxed font-normal">
            A timeline of things I've built, learned, and explored.
          </p>
        </div>

        {/* ========================================================
            SINGLE-SIDED ENGINEERING CHANGELOG TIMELINE
           ======================================================== */}
        <div className="relative max-w-4xl ml-2 sm:ml-4">
          
          {/* Continuous Vertical Timeline Line */}
          <div 
            className="absolute left-[7px] sm:left-[11px] top-6 bottom-6 w-px bg-border/80" 
            aria-hidden="true" 
          />

          <ol className="flex flex-col gap-10 sm:gap-12 relative">
            {journeyData.map((item, index) => {
              return (
                <li
                  key={item.id}
                  className="group relative flex items-start"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  
                  {/* Timeline Node Icon (Mathematically centered on line) */}
                  <div 
                    className="absolute left-[7px] sm:left-[11px] top-6 -translate-x-1/2 w-3.5 h-3.5 rounded-full border border-border/90 bg-background group-hover:border-cyan group-hover:shadow-glow-cyan group-hover:bg-background-secondary transition-all duration-200 z-10 flex items-center justify-center shrink-0 select-none"
                    aria-hidden="true"
                  >
                    <span className="w-1 h-1 rounded-full bg-text-muted group-hover:bg-cyan transition-colors" />
                  </div>

                  {/* Content Container to the Right */}
                  <div className="ml-8 sm:ml-12 w-full p-5 sm:p-6 rounded-sm border border-transparent hover:border-border/70 hover:bg-card/40 transition-all duration-200 flex flex-col gap-3">
                    
                    {/* Top Row: Date & Category Tag */}
                    <div className="flex flex-wrap items-center justify-between gap-3 select-none">
                      <span className="font-mono text-xs font-semibold text-text-muted tracking-wider">
                        {item.date}
                      </span>
                      <span className="font-mono text-[10px] text-cyan font-bold tracking-[0.18em] uppercase px-2 py-0.5 rounded-sm bg-card border border-border/80">
                        {item.category}
                      </span>
                    </div>

                    {/* Title (Optionally linked if URL exists) */}
                    <div>
                      {item.url ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 group/link focus-ring rounded-sm"
                        >
                          <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-text-primary group-hover:text-cyan transition-colors">
                            {item.title}
                          </h3>
                          <span className="text-text-muted group-hover/link:text-cyan text-sm transition-colors" aria-hidden="true">
                            ↗
                          </span>
                        </a>
                      ) : (
                        <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-text-primary group-hover:text-text-primary transition-colors">
                          {item.title}
                        </h3>
                      )}
                    </div>

                    {/* Description */}
                    <p className="font-sans text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
                      {item.description}
                    </p>

                    {/* Technologies / Keywords */}
                    {item.technologies && item.technologies.length > 0 && (
                      <div className="pt-2 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 font-mono text-xs text-text-muted">
                        {item.technologies.map((tech, idx) => (
                          <span key={tech} className="flex items-center gap-2.5">
                            <span className="text-text-muted/80 group-hover:text-text-secondary transition-colors">
                              {tech}
                            </span>
                            {idx < item.technologies.length - 1 && (
                              <span className="text-border" aria-hidden="true">·</span>
                            )}
                          </span>
                        ))}
                      </div>
                    )}

                  </div>

                </li>
              );
            })}
          </ol>

        </div>

        {/* Footer Technical Note */}
        <div className="mt-20 pt-6 border-t border-border/70 flex items-center justify-between font-mono text-[10px] text-text-muted tracking-wider uppercase select-none">
          <span>CHANGELOG // PERSISTENT COMMIT HISTORY // <span className="opacity-40">{identity.signatureMark}</span></span>
          <span className="text-cyan/70">CONTINUOUS ITERATION</span>
        </div>

      </div>
    </section>
  );
}
