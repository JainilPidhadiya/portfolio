export function About({ id }) {
  return (
    <section id={id} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              I build across <br />
              the <span className="text-gradient">stack.</span>
            </h2>
            <div className="w-20 h-1.5 bg-accent-strong rounded-full" />
            <p className="text-xl md:text-2xl text-secondary font-medium leading-relaxed">
              My approach isn't just about writing code. It's about designing <strong className="text-primary font-bold">logical structures</strong> that handle data efficiently and present it beautifully.
            </p>
          </div>

          <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden group">
            {/* Decorative background flare */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent-purple/20 rounded-full blur-[80px] group-hover:bg-accent-primary/20 transition-colors duration-700" />
            
            <h3 className="text-2xl font-bold mb-10 relative z-10">Academic Foundation</h3>
            
            <div className="space-y-10 relative z-10">
              <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-accent-strong before:rounded-full before:shadow-[0_0_10px_rgba(14,165,233,0.5)]">
                <span className="inline-block px-3 py-1 bg-surface-raised rounded-full text-xs font-bold text-accent-strong mb-3 tracking-widest uppercase border border-border">Expected 2027</span>
                <h4 className="text-xl font-bold text-primary mb-1">Master of Computer Applications</h4>
                <p className="text-secondary font-medium">Dr. D. Y. Patil Vidyapeeth, Pune</p>
              </div>

              <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-surface-raised before:border-2 before:border-border before:rounded-full">
                <span className="inline-block px-3 py-1 bg-surface-raised rounded-full text-xs font-bold text-secondary mb-3 tracking-widest uppercase border border-border">2022 - 2025</span>
                <h4 className="text-xl font-bold text-primary mb-1">Bachelor of Computer Applications</h4>
                <p className="text-secondary font-medium mb-2">Veer Narmad South Gujarat University</p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-success/10 text-success rounded-lg font-bold text-sm">
                  <span>CGPA: 8.43</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
