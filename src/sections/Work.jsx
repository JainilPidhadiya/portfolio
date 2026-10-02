import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { SectionLabel } from '../components/ui/SectionLabel';
import { projectsData } from '../data/projectsData';

function ProjectVisual({ project, isPriority = false }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative w-full h-full bg-[#0A1022] overflow-hidden flex items-center justify-center border-b border-border/50">
      {project.liveUrl ? (
        <div className="w-full h-full flex flex-col bg-background-secondary overflow-hidden">
          {/* macOS style browser header */}
          <div className="h-6 sm:h-8 bg-[#1A1A1A] flex items-center px-2 sm:px-3 gap-1.5 shrink-0 border-b border-border/80">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500/80" />
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-500/80" />
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500/80" />
            <div className="ml-2 sm:ml-4 text-[7px] sm:text-[9px] text-text-muted font-mono bg-background/50 px-2 py-0.5 rounded-sm truncate max-w-[120px] sm:max-w-[200px]">
              {project.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}
            </div>
            {isPriority && (
              <div className="ml-auto flex items-center gap-1.5 text-cyan text-[8px] font-mono tracking-widest uppercase">
                <span className="w-1.5 h-1.5 bg-cyan rounded-full animate-pulse" />
                INTERACTIVE
              </div>
            )}
          </div>
          {/* Iframe Container */}
          <div className="flex-1 relative overflow-hidden bg-white pointer-events-none">
            <iframe 
              src={project.liveUrl} 
              tabIndex={-1}
              scrolling="no"
              className="absolute top-0 left-0 w-[400%] h-[400%] sm:w-[200%] sm:h-[200%] origin-top-left scale-25 sm:scale-50 border-0 pointer-events-none select-none"
              title={`${project.name} live preview`}
              sandbox="allow-same-origin allow-scripts"
            />
          </div>
        </div>
      ) : project.image && !imgError ? (
        <img 
          src={project.image} 
          alt={`${project.name} Screenshot`}
          loading={isPriority ? "eager" : "lazy"}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" 
        />
      ) : (
        /* High-precision technical schematic placeholder */
        <div className="w-full h-full flex flex-col justify-between p-4 sm:p-6 font-mono text-xs select-none">
          {/* Schematic Header */}
          <div className="flex items-center justify-between border-b border-border/40 pb-3">
            <span className="text-cyan text-[10px] font-bold tracking-widest">
              SYS.SPEC // {project.number}
            </span>
            <span className="text-text-muted text-[9px] tracking-wider uppercase">
              {project.technologies.slice(0, 2).join(' · ')}
            </span>
          </div>

          {/* Central Architectural Blueprint Nodes */}
          <div className="my-auto py-4 flex flex-col gap-3">
            <div className="flex items-center justify-between gap-2 sm:gap-4">
              <div className="p-2 sm:p-3 border border-border bg-background/50 rounded-sm flex-1 text-center backdrop-blur-sm">
                <span className="text-[8px] sm:text-[9px] text-text-muted block mb-1">INTERFACE</span>
                <span className="text-text-primary text-[10px] sm:text-xs font-bold truncate">{project.technologies[0]}</span>
              </div>
              <div className="w-4 sm:w-8 h-px bg-cyan/30 shrink-0" />
              <div className="p-2 sm:p-3 border border-cyan/40 bg-background-secondary rounded-sm flex-1 text-center shadow-glow-cyan">
                <span className="text-[8px] sm:text-[9px] text-cyan block mb-1">CONTROLLER</span>
                <span className="text-text-primary text-[10px] sm:text-xs font-bold">API</span>
              </div>
              <div className="w-4 sm:w-8 h-px bg-cyan/30 shrink-0" />
              <div className="p-2 sm:p-3 border border-border bg-background/50 rounded-sm flex-1 text-center backdrop-blur-sm">
                <span className="text-[8px] sm:text-[9px] text-text-muted block mb-1">STORAGE</span>
                <span className="text-text-primary text-[10px] sm:text-xs font-bold truncate">{project.technologies[3] || "DB"}</span>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Overlay gradient for text readability if we put text on top, but here it's just visual */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
    </div>
  );
}

export function Work({ id = 'work' }) {
  const [activeProject, setActiveProject] = useState(null);

  const openProject = (project) => {
    setActiveProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setActiveProject(null);
    document.body.style.overflow = '';
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && activeProject) closeProject();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProject]);

  return (
    <section
      id={id}
      className="relative py-16 lg:py-24 border-t border-border/70 scroll-mt-[72px]"
    >
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col items-start mb-16 max-w-3xl">
          <div className="mb-4">
            <SectionLabel label="04 / SELECTED WORK" indicator="cyan" className="text-cyan" />
          </div>
          <h2 className="font-display font-black tracking-[-0.03em] text-text-primary text-4xl sm:text-5xl lg:text-6xl leading-[1.02] mb-6 select-none">
            BUILT, SHIPPED,<br />
            AND STILL ITERATING<span className="text-cyan">.</span>
          </h2>
          <p className="font-sans text-base sm:text-lg lg:text-xl text-text-secondary leading-relaxed font-normal">
            A selection of products, experiments, and systems I've worked on.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projectsData.map((project, index) => (
            <button
              key={project.id}
              onClick={() => openProject(project)}
              className="group text-left relative flex flex-col bg-card rounded-md border border-border overflow-hidden transition-all duration-300 hover:border-cyan/50 hover:shadow-glow-cyan focus-ring"
              aria-label={`View details for ${project.name}`}
            >
              <div className="h-48 sm:h-56 w-full shrink-0">
                <ProjectVisual project={project} isPriority={index < 2} />
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3 font-mono text-[10px] uppercase select-none">
                  <div className="flex items-center gap-3">
                    <span className="text-cyan font-bold tracking-widest">{project.number}</span>
                    {project.liveUrl && (
                      <span className="inline-flex items-center gap-1.5 text-green font-semibold" title="Live Deployment">
                        <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
                        LIVE
                      </span>
                    )}
                  </div>
                  <span className="text-text-muted tracking-wider">{project.category}</span>
                </div>
                
                <h3 className="font-display text-xl font-bold text-text-primary mb-3 line-clamp-1 group-hover:text-cyan transition-colors">
                  {project.name}
                </h3>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span key={tech} className="px-2 py-1 bg-background border border-border/80 rounded-sm font-mono text-[9px] text-text-secondary">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 font-mono text-[9px] text-text-muted self-center">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal Overlay via Portal */}
      {activeProject && typeof document !== 'undefined' && createPortal(
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-12"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-background/90 backdrop-blur-sm animate-fade-in"
            onClick={closeProject}
          />
          
          {/* Modal Content Card */}
          <div 
            className="relative w-full max-w-4xl max-h-full overflow-y-auto bg-card border border-border/80 rounded-lg shadow-2xl animate-fade-in-up"
          >
            {/* Close Button */}
            <button 
              onClick={closeProject}
              className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-background/50 backdrop-blur-md border border-border text-text-secondary hover:text-text-primary hover:bg-background transition-colors focus-ring"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Modal Hero Image */}
            <div className="w-full h-56 sm:h-72 lg:h-96 relative bg-[#0A1022]">
              <ProjectVisual project={activeProject} isPriority={true} />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
            </div>

            {/* Modal Body */}
            <div className="px-6 py-8 sm:px-10 sm:py-12 relative -mt-20">
              <div className="flex flex-col gap-6">
                
                {/* Header info */}
                <div>
                  <div className="flex items-center gap-3 mb-4 font-mono text-xs select-none">
                    <span className="text-cyan font-bold tracking-widest">{activeProject.number}</span>
                    <span className="text-border">/</span>
                    <span className="text-text-muted tracking-[0.16em] uppercase">{activeProject.category}</span>
                  </div>
                  <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-text-primary">
                    {activeProject.name}
                  </h3>
                </div>

                <p className="font-sans text-base sm:text-lg text-text-secondary leading-relaxed">
                  {activeProject.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 py-4 border-y border-border/50">
                  {activeProject.technologies.map(tech => (
                    <span key={tech} className="px-2.5 py-1 rounded-sm bg-background border border-border font-mono text-xs text-text-secondary">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Case Study Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-[10px] text-cyan uppercase tracking-[0.2em] font-bold">THE PROBLEM</span>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">{activeProject.problem}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-[10px] text-cyan uppercase tracking-[0.2em] font-bold">THE BUILD</span>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">{activeProject.solution}</p>
                  </div>
                  {activeProject.result && (
                    <div className="flex flex-col gap-2 md:col-span-2">
                      <span className="font-mono text-[10px] text-green uppercase tracking-[0.2em] font-bold">RESULT</span>
                      <p className="font-sans text-sm text-text-secondary leading-relaxed">{activeProject.result}</p>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-4 pt-6 mt-2 border-t border-border/50">
                  {activeProject.liveUrl && (
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-cyan text-btn-text font-mono text-xs font-bold tracking-wider uppercase hover:bg-cyan/90 transition-all focus-ring"
                    >
                      <span>LIVE PROJECT</span>
                      <span>↗</span>
                    </a>
                  )}
                  {activeProject.githubUrl && (
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-background border border-border text-text-secondary font-mono text-xs font-semibold tracking-wider uppercase hover:text-text-primary hover:border-cyan/50 transition-all focus-ring"
                    >
                      <span>SOURCE CODE</span>
                      <span>↗</span>
                    </a>
                  )}
                </div>

              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
