import { experience } from '../data/experience';

export function Experience({ id }) {
  return (
    <section id={id} className="py-32 bg-surface/30 border-y border-border relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row gap-16">
        
        <div className="md:w-1/3">
           <h2 className="text-4xl md:text-5xl font-black mb-6">Career <br/> Milestone.</h2>
           <p className="text-lg text-secondary font-medium">
             Real-world development experience, focusing on shipping client-facing products and improving UI systems.
           </p>
        </div>

        <div className="md:w-2/3">
          <div className="space-y-12">
            {experience.map((exp) => (
              <div key={exp.id} className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden group hover:border-accent-primary/50 transition-colors duration-500">
                {/* Decorative glowing orb */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent-strong/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 group-hover:bg-accent-primary/20 transition-colors duration-700" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center px-4 py-1.5 bg-surface-raised border border-border rounded-full text-xs font-bold text-accent-strong mb-6 tracking-widest uppercase">
                    {exp.duration}
                  </div>
                  
                  <h3 className="text-3xl font-black text-primary mb-2">{exp.company}</h3>
                  <h4 className="text-xl text-secondary font-semibold mb-8">{exp.role}</h4>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    {exp.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-accent-primary rounded-full shrink-0" />
                        <span className="text-secondary font-medium text-sm leading-relaxed">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
