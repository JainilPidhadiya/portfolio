import { SectionLabel } from '../components/ui/SectionLabel';
import { journeyData } from '../data/journeyData';
import { identity } from '../data/identity';

export function Journey({ id = 'journey' }) {
  return (
    <section
      id={id}
      className="relative py-16 lg:py-24 border-t border-border/70 scroll-mt-[72px] overflow-hidden"
    >
      {/* Background Subtle Technical Grid Overlay */}
      <div 
        className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none select-none [mask-image:radial-gradient(ellipse_at_center,rgba(0,0,0,0.5)_20%,rgba(0,0,0,1)_100%)]"
        aria-hidden="true"
      />

      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
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

          <p className="font-sans text-base sm:text-lg lg:text-xl text-text-secondary leading-relaxed font-normal max-w-2xl">
            A timeline of things I've built, learned, and explored.
          </p>
        </div>

        {/* ========================================================
            ALTERNATING TIMELINE (Center line on Desktop, Left on Mobile)
           ======================================================== */}
        <div className="relative w-full max-w-5xl mx-auto">
          
          {/* Continuous Vertical Timeline Line */}
          <div 
            className="absolute left-[27px] md:left-1/2 top-4 bottom-4 w-px bg-border/80 md:-translate-x-1/2" 
            aria-hidden="true" 
          />

          <div className="flex flex-col gap-12 sm:gap-16 relative">
            {journeyData.map((item, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={item.id}
                  className={`group relative flex flex-col md:flex-row items-start md:items-center w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  
                  {/* Timeline Node Icon (Centered on Desktop, Left on Mobile) */}
                  <div 
                    className="absolute left-[27px] md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full border border-border/90 bg-background group-hover:border-cyan group-hover:shadow-glow-cyan group-hover:bg-background-secondary transition-all duration-200 z-10 flex items-center justify-center shrink-0 select-none"
                    aria-hidden="true"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-text-muted group-hover:bg-cyan transition-colors" />
                  </div>

                  {/* Empty space for the opposite side on desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content Container */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-12 lg:pr-16 md:text-right' : 'md:pl-12 lg:pl-16 md:text-left'}`}>
                    
                    <div className="p-6 sm:p-8 rounded-2xl border border-transparent hover:border-border/70 hover:bg-card/40 transition-all duration-300 flex flex-col gap-4">
                      
                      {/* Top Row: Date & Category Tag */}
                      <div className={`flex flex-wrap items-center gap-3 select-none ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                        <span className="font-mono text-xs font-semibold text-text-muted tracking-wider">
                          {item.date}
                        </span>
                        <span className="font-mono text-[10px] text-cyan font-bold tracking-[0.18em] uppercase px-2 py-0.5 rounded-sm bg-card border border-border/80">
                          {item.category}
                        </span>
                      </div>

                      {/* Title */}
                      <div>
                        {item.url ? (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 group/link focus-ring rounded-sm ${isEven ? 'md:flex-row-reverse' : ''}`}
                          >
                            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-text-primary group-hover:text-cyan transition-colors">
                              {item.title}
                            </h3>
                            <span className="text-text-muted group-hover/link:text-cyan text-sm transition-colors" aria-hidden="true">
                              ↗
                            </span>
                          </a>
                        ) : (
                          <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-text-primary group-hover:text-text-primary transition-colors">
                            {item.title}
                          </h3>
                        )}
                      </div>

                      {/* Description */}
                      <p className="font-sans text-base text-text-secondary leading-relaxed font-normal">
                        {item.description}
                      </p>

                      {/* Technologies */}
                      {item.technologies && item.technologies.length > 0 && (
                        <div className={`pt-2 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 font-mono text-xs text-text-muted ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
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
                  </div>

                </div>
              );
            })}
          </div>

        </div>



      </div>
    </section>
  );
}
