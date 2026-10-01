import { useState, useCallback } from 'react';
import { SectionLabel } from '../components/ui/SectionLabel';
import { projectsData } from '../data/projectsData';
import { identity } from '../data/identity';

/**
 * Refined Project Visual Frame
 * Supports images with a graceful fallback to a high-precision technical schematic.
 */
function ProjectVisual({ project, isPriority = false }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative group w-full h-full flex flex-col">
      {/* Corner crosshairs for technical precision */}
      <span className="absolute -top-1.5 -left-1.5 w-3 h-3 flex items-center justify-center text-[10px] text-cyan/70 font-mono select-none pointer-events-none z-10">+</span>
      <span className="absolute -top-1.5 -right-1.5 w-3 h-3 flex items-center justify-center text-[10px] text-cyan/70 font-mono select-none pointer-events-none z-10">+</span>
      <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 flex items-center justify-center text-[10px] text-cyan/70 font-mono select-none pointer-events-none z-10">+</span>
      <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 flex items-center justify-center text-[10px] text-cyan/70 font-mono select-none pointer-events-none z-10">+</span>

      <div className="w-full h-full min-h-[260px] sm:min-h-[340px] lg:min-h-[380px] bg-background-secondary rounded-sm border border-border transition-all duration-300 group-hover:border-cyan/40 group-hover:shadow-glow-cyan shadow-card flex flex-col overflow-hidden relative">
        
        {/* Frame Top Header */}
        <div className="h-10 px-4 border-b border-border/80 bg-background/90 flex items-center justify-between font-mono text-[11px] text-text-muted select-none">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1A233A] border border-border" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#1A233A] border border-border" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#1A233A] border border-border" />
            <span className="ml-2 text-text-secondary text-[10px] truncate max-w-[180px] sm:max-w-xs">
              {project.liveUrl || project.githubUrl || `${project.id}.system`}
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            {project.liveUrl ? (
              <span className="inline-flex items-center gap-1.5 text-green text-[10px] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
                LIVE
              </span>
            ) : (
              <span className="text-text-muted text-[10px]">
                BUILD // REPO
              </span>
            )}
          </div>
        </div>

        {/* Visual Content Body */}
        <div className="flex-1 relative overflow-hidden bg-[#0A1022] flex items-center justify-center p-6">
          {project.image && !imgError ? (
            <img 
              src={project.image} 
              alt={`${project.name} Interface Screenshot`}
              loading={isPriority ? "eager" : "lazy"}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover rounded-sm transition-transform duration-500 group-hover:scale-[1.01]" 
            />
          ) : (
            /* High-precision technical schematic placeholder */
            <div className="w-full h-full flex flex-col justify-between py-2 font-mono text-xs select-none">
              
              {/* Schematic Header */}
              <div className="flex items-center justify-between border-b border-border-subtle pb-3">
                <span className="text-cyan text-[11px] font-bold tracking-widest">
                  SYS.SPEC // {project.number} <span className="opacity-40 hidden sm:inline-block ml-2">{identity.signatureMark}</span>
                </span>
                <span className="text-text-muted text-[10px]">
                  {project.technologies.slice(0, 3).join(' · ')}
                </span>
              </div>

              {/* Central Architectural Blueprint Nodes */}
              <div className="my-auto py-6 flex flex-col gap-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="p-3 border border-border bg-background rounded-sm flex-1 text-center">
                    <span className="text-[10px] text-text-muted block">INTERFACE</span>
                    <span className="text-text-primary text-xs font-bold">{project.technologies[0]}</span>
                  </div>
                  <div className="w-8 h-px bg-cyan/50 shrink-0" />
                  <div className="p-3 border border-cyan/40 bg-background-secondary rounded-sm flex-1 text-center shadow-glow-cyan">
                    <span className="text-[10px] text-cyan block">APPLICATION</span>
                    <span className="text-text-primary text-xs font-bold">API CONTROLLER</span>
                  </div>
                  <div className="w-8 h-px bg-cyan/50 shrink-0" />
                  <div className="p-3 border border-border bg-background rounded-sm flex-1 text-center">
                    <span className="text-[10px] text-text-muted block">STORAGE</span>
                    <span className="text-text-primary text-xs font-bold">{project.technologies[3] || "DATABASE"}</span>
                  </div>
                </div>

                <div className="text-center font-mono text-[11px] text-text-secondary mt-2">
                  <span className="text-text-muted">ARCHITECTURE:</span> {project.category}
                </div>
              </div>

              {/* Schematic Footer */}
              <div className="flex items-center justify-between border-t border-border-subtle pt-3 text-[10px] text-text-muted">
                <span>STATUS: VERIFIED PIPELINE</span>
                <span className="text-cyan group-hover:underline">VIEW CASE STUDY ↓</span>
              </div>

            </div>
          )}

          {/* Hover Overlay Hint - Clickable */}
          <a 
            href={project.liveUrl || project.githubUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 bg-background/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none group-hover:pointer-events-auto focus-ring"
            aria-label={`View details for ${project.name}`}
          >
            <span className="px-4 py-2 rounded-sm bg-card border border-cyan text-cyan font-mono text-xs font-bold tracking-widest uppercase shadow-glow-cyan transition-transform group-hover:scale-105">
              {project.liveUrl ? "LIVE DEPLOYMENT ↗" : "INSPECT DETAILS ↗"}
            </span>
          </a>

        </div>

      </div>
    </div>
  );
}

export function Work({ id = 'work' }) {
  // Track open state of case studies by project ID
  const [openStudies, setOpenStudies] = useState({});

  const toggleCaseStudy = useCallback((projectId) => {
    setOpenStudies(prev => {
      const isOpening = !prev[projectId];
      
      // If we are opening it, scroll it into view after a short delay to let it render
      if (isOpening) {
        setTimeout(() => {
          const element = document.getElementById(`case-study-${projectId}`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        }, 50);
      }

      return {
        ...prev,
        [projectId]: isOpening
      };
    });
  }, []);

  return (
    <section
      id={id}
      className="relative py-24 sm:py-32 lg:py-40 border-t border-border/70 scroll-mt-[72px] overflow-hidden"
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
        <div className="flex flex-col items-start mb-20 lg:mb-28 max-w-3xl">
          <div className="mb-4">
            <SectionLabel 
              label="04 / SELECTED WORK" 
              indicator="cyan" 
              className="text-cyan"
            />
          </div>

          <h2 className="font-display font-black tracking-[-0.03em] text-text-primary text-4xl sm:text-5xl lg:text-6xl leading-[1.02] mb-6 select-none">
            BUILT, SHIPPED,<br />
            AND STILL ITERATING<span className="text-cyan">.</span>
          </h2>

          <p className="font-sans text-base sm:text-lg lg:text-xl text-text-secondary leading-relaxed font-normal">
            A selection of products, experiments, and systems I've worked on.
          </p>
        </div>

        {/* ========================================================
            EDITORIAL CASE STUDY PROJECTS LIST
           ======================================================== */}
        <div className="flex flex-col gap-28 sm:gap-36 lg:gap-44">
          {projectsData.map((project, index) => {
            const isCaseStudyOpen = !!openStudies[project.id];
            const layoutType = index % 3; // 0: Left content/Right visual, 1: Left visual/Right content, 2: Full-width

            return (
              <article
                key={project.id}
                className="w-full flex flex-col pt-8 border-t border-border/70 first:border-t-0 first:pt-0"
              >
                
                {/* ----------------------------------------------------
                    LAYOUT TYPE 0: Left Content, Right Visual
                   ---------------------------------------------------- */}
                {layoutType === 0 && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-start">
                    
                    {/* Left: Content Block */}
                    <div className="lg:col-span-6 flex flex-col items-start order-2 lg:order-1">
                      {/* Project Number & Category */}
                      <div className="flex items-center gap-3 mb-4 font-mono text-xs select-none">
                        <span className="text-cyan font-bold tracking-widest">{project.number}</span>
                        <span className="text-border">/</span>
                        <span className="text-text-muted tracking-[0.16em] uppercase">{project.category}</span>
                      </div>

                      {/* Project Name (H3) */}
                      <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-text-primary mb-5 select-none">
                        {project.name}
                      </h3>

                      {/* Description */}
                      <p className="font-sans text-base sm:text-lg text-text-secondary leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Technology Tags */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.technologies.map(tech => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-sm bg-card border border-border/80 font-mono text-xs text-text-secondary select-none"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex flex-wrap items-center gap-4 mb-6">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-cyan text-btn-text font-mono text-xs font-bold tracking-wider uppercase hover:bg-cyan/90 hover:shadow-glow-cyan transition-all focus-ring select-none"
                          >
                            <span>LIVE PROJECT</span>
                            <span aria-hidden="true">↗</span>
                          </a>
                        )}

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-card border border-border text-text-secondary font-mono text-xs font-semibold tracking-wider uppercase hover:text-text-primary hover:border-cyan/50 hover:bg-card-hover transition-all focus-ring select-none"
                          >
                            <span>SOURCE CODE</span>
                            <span aria-hidden="true">↗</span>
                          </a>
                        )}

                        {/* Expand Case Study Trigger */}
                        <button
                          type="button"
                          onClick={() => toggleCaseStudy(project.id)}
                          aria-expanded={isCaseStudyOpen}
                          aria-controls={`case-study-${project.id}`}
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm border border-border-subtle bg-transparent text-text-muted hover:text-cyan hover:border-cyan/40 font-mono text-xs font-semibold tracking-wider uppercase transition-colors focus-ring select-none"
                        >
                          <span>{isCaseStudyOpen ? "COLLAPSE CASE STUDY" : "VIEW CASE STUDY"}</span>
                          <span className="font-bold">{isCaseStudyOpen ? "−" : "+"}</span>
                        </button>
                      </div>
                    </div>

                    {/* Right: Visual Block */}
                    <div className="lg:col-span-6 w-full order-1 lg:order-2">
                      <ProjectVisual project={project} isPriority={index === 0} />
                    </div>

                  </div>
                )}

                {/* ----------------------------------------------------
                    LAYOUT TYPE 1: Left Visual, Right Content (Reversed)
                   ---------------------------------------------------- */}
                {layoutType === 1 && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-start">
                    
                    {/* Left: Visual Block */}
                    <div className="lg:col-span-6 w-full order-1 lg:order-1">
                      <ProjectVisual project={project} />
                    </div>

                    {/* Right: Content Block */}
                    <div className="lg:col-span-6 flex flex-col items-start order-2 lg:order-2">
                      {/* Project Number & Category */}
                      <div className="flex items-center gap-3 mb-4 font-mono text-xs select-none">
                        <span className="text-cyan font-bold tracking-widest">{project.number}</span>
                        <span className="text-border">/</span>
                        <span className="text-text-muted tracking-[0.16em] uppercase">{project.category}</span>
                      </div>

                      {/* Project Name (H3) */}
                      <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-text-primary mb-5 select-none">
                        {project.name}
                      </h3>

                      {/* Description */}
                      <p className="font-sans text-base sm:text-lg text-text-secondary leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Technology Tags */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.technologies.map(tech => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-sm bg-card border border-border/80 font-mono text-xs text-text-secondary select-none"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex flex-wrap items-center gap-4 mb-6">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-cyan text-btn-text font-mono text-xs font-bold tracking-wider uppercase hover:bg-cyan/90 hover:shadow-glow-cyan transition-all focus-ring select-none"
                          >
                            <span>LIVE PROJECT</span>
                            <span aria-hidden="true">↗</span>
                          </a>
                        )}

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-card border border-border text-text-secondary font-mono text-xs font-semibold tracking-wider uppercase hover:text-text-primary hover:border-cyan/50 hover:bg-card-hover transition-all focus-ring select-none"
                          >
                            <span>SOURCE CODE</span>
                            <span aria-hidden="true">↗</span>
                          </a>
                        )}

                        {/* Expand Case Study Trigger */}
                        <button
                          type="button"
                          onClick={() => toggleCaseStudy(project.id)}
                          aria-expanded={isCaseStudyOpen}
                          aria-controls={`case-study-${project.id}`}
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm border border-border-subtle bg-transparent text-text-muted hover:text-cyan hover:border-cyan/40 font-mono text-xs font-semibold tracking-wider uppercase transition-colors focus-ring select-none"
                        >
                          <span>{isCaseStudyOpen ? "COLLAPSE CASE STUDY" : "VIEW CASE STUDY"}</span>
                          <span className="font-bold">{isCaseStudyOpen ? "−" : "+"}</span>
                        </button>
                      </div>
                    </div>

                  </div>
                )}

                {/* ----------------------------------------------------
                    LAYOUT TYPE 2: Wider Full-Width Case Presentation
                   ---------------------------------------------------- */}
                {layoutType === 2 && (
                  <div className="flex flex-col gap-8">
                    
                    {/* Header Row */}
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                      <div>
                        <div className="flex items-center gap-3 mb-3 font-mono text-xs select-none">
                          <span className="text-cyan font-bold tracking-widest">{project.number}</span>
                          <span className="text-border">/</span>
                          <span className="text-text-muted tracking-[0.16em] uppercase">{project.category}</span>
                        </div>
                        <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-text-primary select-none">
                          {project.name}
                        </h3>
                      </div>

                      {/* Action Links in Header for full-width layout */}
                      <div className="flex flex-wrap items-center gap-4">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-cyan text-btn-text font-mono text-xs font-bold tracking-wider uppercase hover:bg-cyan/90 hover:shadow-glow-cyan transition-all focus-ring select-none"
                          >
                            <span>LIVE PROJECT</span>
                            <span aria-hidden="true">↗</span>
                          </a>
                        )}

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-card border border-border text-text-secondary font-mono text-xs font-semibold tracking-wider uppercase hover:text-text-primary hover:border-cyan/50 hover:bg-card-hover transition-all focus-ring select-none"
                          >
                            <span>SOURCE CODE</span>
                            <span aria-hidden="true">↗</span>
                          </a>
                        )}

                        <button
                          type="button"
                          onClick={() => toggleCaseStudy(project.id)}
                          aria-expanded={isCaseStudyOpen}
                          aria-controls={`case-study-${project.id}`}
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm border border-border-subtle bg-transparent text-text-muted hover:text-cyan hover:border-cyan/40 font-mono text-xs font-semibold tracking-wider uppercase transition-colors focus-ring select-none"
                        >
                          <span>{isCaseStudyOpen ? "COLLAPSE CASE STUDY" : "VIEW CASE STUDY"}</span>
                          <span className="font-bold">{isCaseStudyOpen ? "−" : "+"}</span>
                        </button>
                      </div>
                    </div>

                    {/* Wide Visual Container */}
                    <div className="w-full">
                      <ProjectVisual project={project} />
                    </div>

                    {/* Description & Tech Tags below full-width visual */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                      <p className="lg:col-span-8 font-sans text-base sm:text-lg text-text-secondary leading-relaxed">
                        {project.description}
                      </p>
                      <div className="lg:col-span-4 flex flex-wrap gap-2">
                        {project.technologies.map(tech => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-sm bg-card border border-border/80 font-mono text-xs text-text-secondary select-none"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                )}

                {/* ====================================================
                    EXPANDABLE CASE STUDY DRAWER
                    Reveals: THE PROBLEM, THE BUILD, and RESULT (if available)
                   ==================================================== */}
                {isCaseStudyOpen && (
                  <div
                    id={`case-study-${project.id}`}
                    className="mt-8 pt-8 border-t border-border/80 bg-background-secondary/70 rounded-sm p-6 sm:p-8 animate-hero-up border border-border"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      
                      {/* THE PROBLEM */}
                      <div className="flex flex-col gap-2">
                        <span className="font-mono text-[10px] text-cyan uppercase tracking-[0.2em] font-bold select-none">
                          THE PROBLEM
                        </span>
                        <p className="font-sans text-sm text-text-secondary leading-relaxed font-normal">
                          {project.problem}
                        </p>
                      </div>

                      {/* THE BUILD */}
                      <div className="flex flex-col gap-2 border-t md:border-t-0 md:border-l border-border/80 pt-6 md:pt-0 md:pl-8">
                        <span className="font-mono text-[10px] text-cyan uppercase tracking-[0.2em] font-bold select-none">
                          THE BUILD
                        </span>
                        <p className="font-sans text-sm text-text-secondary leading-relaxed font-normal">
                          {project.solution}
                        </p>
                      </div>

                      {/* RESULT (Only if real information exists) */}
                      {project.result && (
                        <div className="flex flex-col gap-2 border-t md:border-t-0 md:border-l border-border/80 pt-6 md:pt-0 md:pl-8">
                          <span className="font-mono text-[10px] text-green uppercase tracking-[0.2em] font-bold select-none">
                            RESULT
                          </span>
                          <p className="font-sans text-sm text-text-secondary leading-relaxed font-normal">
                            {project.result}
                          </p>
                        </div>
                      )}

                    </div>
                  </div>
                )}

              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
