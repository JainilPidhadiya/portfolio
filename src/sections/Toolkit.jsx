import { skills } from '../data/skills';

export function Toolkit({ id }) {
  // Combine all skills for a scrolling ticker or scattered landscape effect
  const allSkills = Object.values(skills).flat();

  return (
    <section id={id} className="py-32 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-6">Full Stack Toolkit</h2>
        <p className="text-xl text-secondary font-medium max-w-2xl mx-auto">
          The languages, libraries, and tools I use to turn ideas into production-ready software.
        </p>
      </div>

      <div className="relative w-full flex flex-col items-center justify-center gap-6 px-4">
        {/* We create a staggered "cloud" of tools */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
          {allSkills.map((skill, index) => {
            // Pseudo-random sizing/opacity based on index for a dynamic look
            const size = index % 3 === 0 ? 'text-2xl md:text-4xl' : index % 2 === 0 ? 'text-xl md:text-2xl' : 'text-lg md:text-xl';
            const opacity = index % 3 === 0 ? 'opacity-100' : 'opacity-70';
            const bgHover = index % 4 === 0 ? 'hover:bg-accent-primary hover:text-white' : index % 4 === 1 ? 'hover:bg-accent-purple hover:text-white' : 'hover:bg-accent-strong hover:text-white';
            
            return (
              <div 
                key={index} 
                className={`px-6 py-3 rounded-full glass-panel border border-border cursor-default transition-all duration-300 hover:scale-110 ${bgHover}`}
              >
                <span className={`font-black tracking-tighter ${size} ${opacity}`}>{skill}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
