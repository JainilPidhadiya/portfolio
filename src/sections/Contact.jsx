import { Button } from '../components/ui/Button';
import { GithubIcon, LinkedinIcon } from '../components/ui/Icons';
import { Mail } from 'lucide-react';

export function Contact({ id }) {
  return (
    <section id={id} className="py-40 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-gradient-to-r from-accent-primary/10 via-accent-purple/10 to-accent-strong/10 rounded-[100%] blur-[100px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
        
        <div className="mb-16">
           <span className="inline-block px-4 py-1.5 rounded-full bg-surface-raised border border-border text-xs font-bold text-accent-primary tracking-widest uppercase mb-8">
             System Complete
           </span>
           <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-black leading-[1.1] tracking-tighter mb-8">
             HAVE AN IDEA? <br />
             <span className="text-gradient">LET'S BUILD</span> <br />
             THE NEXT SYSTEM.
           </h2>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
          <Button href="mailto:jainilpidhadiya@gmail.com" variant="primary" className="w-full sm:w-auto text-lg py-5 px-10">
            <Mail className="mr-3" size={24} />
            jainilpidhadiya@gmail.com
          </Button>
        </div>

        <div className="flex items-center justify-center gap-10">
          <a href="https://github.com/Jainil05" target="_blank" rel="noopener noreferrer" className="p-4 bg-surface-raised border border-border rounded-full text-secondary hover:text-white hover:bg-accent-strong hover:border-accent-strong hover:scale-110 transition-all focus-ring outline-none shadow-lg" aria-label="GitHub Profile">
            <GithubIcon size={32} />
          </a>
          <a href="https://www.linkedin.com/in/jainil-pidhadiya-09332725b/" target="_blank" rel="noopener noreferrer" className="p-4 bg-surface-raised border border-border rounded-full text-secondary hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] hover:scale-110 transition-all focus-ring outline-none shadow-lg" aria-label="LinkedIn Profile">
            <LinkedinIcon size={32} />
          </a>
        </div>
      </div>
    </section>
  );
}
