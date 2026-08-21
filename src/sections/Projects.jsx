import { projects } from '../data/projects';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '../components/ui/Icons';
import { cn } from '../utils/cn';

export function Projects({ id }) {
  return (
    <section id={id} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="mb-20">
           <h2 className="text-4xl md:text-6xl font-black mb-6">Product Build Log</h2>
           <p className="text-xl text-secondary font-medium max-w-2xl">
             A record of systems I've architected, focusing on scalable backend logic and seamless user interfaces.
           </p>
        </div>

        <div className="space-y-32">
          {projects.map((project, idx) => {
            const isFeatured = project.featured;

            return (
              <div 
                key={project.id} 
                className={cn(
                  "relative group",
                  isFeatured ? "grid lg:grid-cols-12 gap-12 items-center" : "grid lg:grid-cols-2 gap-12 items-center"
                )}
              >
                {/* Visual Placeholder (Product Mockup) */}
                <div className={cn(
                  "relative z-10 w-full rounded-3xl overflow-hidden glass-panel border border-border group-hover:border-accent-strong/50 transition-colors duration-500 shadow-2xl",
                  isFeatured ? "lg:col-span-7 h-[400px] md:h-[500px]" : "h-[300px] md:h-[400px]"
                )}>
                  {/* Mock Browser/App Chrome */}
                  <div className="absolute top-0 left-0 right-0 h-12 bg-surface-raised border-b border-border flex items-center px-4 gap-2">
                     <div className="w-3 h-3 rounded-full bg-error/80" />
                     <div className="w-3 h-3 rounded-full bg-accent-strong/80" />
                     <div className="w-3 h-3 rounded-full bg-success/80" />
                     <div className="ml-4 px-4 py-1 rounded-md bg-surface text-xs font-mono text-secondary border border-border truncate max-w-[200px]">
                       {project.live ? new URL(project.live).hostname : `localhost:3000/${project.id}`}
                     </div>
                  </div>
                  
                  {/* CSS UI Wireframe based on project type */}
                  <div className="mt-12 h-full w-full bg-background p-6 flex flex-col">
                    {project.id === 'nsds-exim' && (
                      <div className="flex gap-6 h-full opacity-60">
                         {/* Sidebar */}
                         <div className="w-1/4 h-full bg-surface rounded-xl flex flex-col gap-3 p-4">
                            <div className="h-6 w-3/4 bg-surface-raised rounded-md mb-4" />
                            <div className="h-4 w-full bg-surface-raised rounded-md" />
                            <div className="h-4 w-5/6 bg-surface-raised rounded-md" />
                            <div className="h-4 w-4/6 bg-surface-raised rounded-md" />
                         </div>
                         {/* Main Content */}
                         <div className="flex-1 h-full flex flex-col gap-4">
                            <div className="flex gap-4">
                              <div className="h-24 flex-1 bg-surface rounded-xl border border-border" />
                              <div className="h-24 flex-1 bg-surface rounded-xl border border-border" />
                              <div className="h-24 flex-1 bg-surface rounded-xl border border-border" />
                            </div>
                            <div className="flex-1 bg-surface rounded-xl border border-border p-4">
                               <div className="h-4 w-1/4 bg-surface-raised rounded-md mb-6" />
                               <div className="h-2 w-full bg-surface-raised rounded-sm mb-3" />
                               <div className="h-2 w-full bg-surface-raised rounded-sm mb-3" />
                               <div className="h-2 w-3/4 bg-surface-raised rounded-sm" />
                            </div>
                         </div>
                      </div>
                    )}
                    {project.id === 'exam-portal' && (
                      <div className="flex flex-col items-center justify-center h-full opacity-60">
                        <div className="w-full max-w-md bg-surface rounded-2xl border border-border p-8 shadow-xl">
                          <div className="h-8 w-1/2 mx-auto bg-surface-raised rounded-lg mb-8" />
                          <div className="h-12 w-full bg-background rounded-lg border border-border mb-4" />
                          <div className="h-12 w-full bg-background rounded-lg border border-border mb-8" />
                          <div className="h-12 w-full bg-accent-strong/80 rounded-lg" />
                        </div>
                      </div>
                    )}
                    {project.id === 'spotify-clone' && (
                      <div className="flex h-full items-center justify-center opacity-60 gap-8">
                         <div className="w-32 h-32 rounded-full border-4 border-accent-purple border-t-transparent animate-spin" />
                         <div className="flex flex-col gap-4">
                           <div className="h-4 w-48 bg-surface-raised rounded-md" />
                           <div className="h-4 w-32 bg-surface-raised rounded-md" />
                           <div className="h-4 w-64 bg-accent-purple/50 rounded-md" />
                         </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Details */}
                <div className={cn(
                  "relative z-20 flex flex-col justify-center",
                  isFeatured ? "lg:col-span-5 lg:-ml-12 lg:bg-surface/95 lg:backdrop-blur-xl lg:p-10 lg:rounded-3xl lg:border lg:border-border lg:shadow-2xl" : ""
                )}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-metadata text-accent-strong text-xs">PROJECT_{String(idx + 1).padStart(2, '0')}</span>
                    {isFeatured && (
                      <span className="px-3 py-1 bg-accent-primary/10 text-accent-primary text-xs font-bold tracking-widest rounded-full border border-accent-primary/20 uppercase">
                        Featured Product
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-black text-primary mb-2 leading-tight">{project.title}</h3>
                  <p className="text-accent-primary text-sm font-bold tracking-wide uppercase mb-6">{project.category}</p>
                  
                  <div className="glass-panel p-6 rounded-2xl mb-6 shadow-lg">
                    <ul className="space-y-3">
                      {project.highlights.slice(0, 4).map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 text-secondary text-sm md:text-base font-medium">
                          <span className="mt-2 w-1.5 h-1.5 bg-accent-strong rounded-full shrink-0 shadow-[0_0_8px_rgba(14,165,233,0.8)]" />
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map(tech => (
                      <span key={tech} className="text-xs font-bold font-mono text-primary bg-surface-raised px-3 py-1.5 rounded-lg border border-border">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-6 mt-auto">
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold bg-white text-black px-5 py-2.5 rounded-full hover:bg-accent-strong hover:text-white transition-colors focus-ring outline-none">
                        <span>Live System</span>
                        <ExternalLink size={16} />
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className={cn(
                        "inline-flex items-center gap-2 text-sm font-bold transition-colors focus-ring outline-none px-5 py-2.5 rounded-full",
                        project.live ? "bg-surface-raised text-primary hover:bg-surface border border-border" : "bg-white text-black hover:bg-accent-strong hover:text-white"
                      )}>
                        <GithubIcon size={18} />
                        <span>Repository</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
