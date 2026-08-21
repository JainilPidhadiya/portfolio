import { skills } from '../data/skills';
import { cn } from '../utils/cn';

export function Systems({ id }) {
  const categories = Object.entries(skills);

  return (
    <section id={id} className="py-32 relative border-y border-border bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
           <h2 className="text-4xl md:text-6xl font-black mb-6">Technical Ecosystem</h2>
           <p className="text-xl text-secondary font-medium">
             The paradigms and technologies that power my development workflow, from user interaction to data persistence.
           </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(([category, items], idx) => {
            const isInterface = category === 'INTERFACE';
            const isServer = category === 'SERVER';
            const isData = category === 'DATA';
            
            let colorClass = "bg-border";
            let textClass = "text-primary";
            
            if (isInterface) { colorClass = "bg-accent-primary"; textClass = "text-accent-primary"; }
            if (isServer) { colorClass = "bg-accent-purple"; textClass = "text-accent-purple"; }
            if (isData) { colorClass = "bg-success"; textClass = "text-success"; }

            return (
              <div 
                key={category} 
                className="glass-panel p-8 rounded-3xl relative group hover:border-accent-strong/50 transition-colors duration-300 flex flex-col"
              >
                {/* Visual Connector Logic */}
                <div className="mb-8 flex items-center justify-between">
                  <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center bg-surface-raised border border-border group-hover:scale-110 transition-transform", textClass)}>
                    <span className="font-black text-xl">0{idx + 1}</span>
                  </div>
                  <div className={cn("w-3 h-3 rounded-full shadow-[0_0_10px_currentColor]", colorClass)} />
                </div>
                
                <h3 className="text-2xl font-bold text-primary mb-6">{category}</h3>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {items.map((item) => (
                    <span 
                      key={item} 
                      className="px-3 py-1.5 bg-surface-raised border border-border rounded-lg text-sm font-semibold text-secondary group-hover:text-primary transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
