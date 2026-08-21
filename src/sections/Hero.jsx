import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { useReducedMotion } from '../hooks/useReducedMotion';

export function Hero({ id }) {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id={id} className="min-h-screen relative flex items-center pt-24 pb-16 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-strong/20 rounded-full blur-[120px] pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <motion.div 
          className="flex flex-col items-start"
          initial="hidden"
          animate={mounted ? "show" : "hidden"}
          variants={{
            show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
          }}
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-panel mb-8 border-accent-strong/30">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
            </span>
            <span className="text-sm font-semibold tracking-wide">Available for new challenges</span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl md:text-7xl lg:text-display font-black leading-[1.1] mb-6">
            Idea to <br/>
            <span className="text-gradient">Product.</span>
          </motion.h1>

          <motion.h2 variants={fadeUp} className="text-xl md:text-2xl text-secondary max-w-lg mb-10 leading-relaxed font-medium">
            I am <strong className="text-primary font-bold">Jainil Pidhadiya</strong>. A Full Stack Developer engineering complete digital systems from interface to database.
          </motion.h2>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
            <Button href="#projects" variant="primary">
              Explore Products
            </Button>
            <Button href="#contact" variant="secondary">
              Let's Connect
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Visual System */}
        <motion.div 
          className="hidden lg:flex relative h-[600px] w-full items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {/* Central Line */}
          <div className="absolute top-10 bottom-10 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-transparent via-accent-strong/50 to-transparent" />

          <div className="relative w-full max-w-md space-y-8">
            
            {/* Interface Node */}
            <motion.div 
              className="glass-panel p-6 rounded-2xl relative ml-auto mr-12 w-64"
              animate={prefersReducedMotion ? {} : { y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute right-[-3.5rem] top-1/2 -translate-y-1/2 w-12 h-0.5 bg-accent-strong/50" />
              <div className="absolute right-[-4rem] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent-primary shadow-[0_0_15px_rgba(56,189,248,0.8)]" />
              <h3 className="text-sm font-bold text-accent-primary mb-1 uppercase tracking-widest">Interface</h3>
              <p className="text-xl font-bold">React.js</p>
            </motion.div>

            {/* Logic Node */}
            <motion.div 
              className="glass-panel p-6 rounded-2xl relative mr-auto ml-12 w-64"
              animate={prefersReducedMotion ? {} : { y: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="absolute left-[-3.5rem] top-1/2 -translate-y-1/2 w-12 h-0.5 bg-accent-purple/50" />
              <div className="absolute left-[-4rem] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent-purple shadow-[0_0_15px_rgba(139,92,246,0.8)]" />
              <h3 className="text-sm font-bold text-accent-purple mb-1 uppercase tracking-widest">Logic</h3>
              <p className="text-xl font-bold">Node + Express</p>
            </motion.div>

            {/* Data Node */}
            <motion.div 
              className="glass-panel p-6 rounded-2xl relative ml-auto mr-12 w-64"
              animate={prefersReducedMotion ? {} : { y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              <div className="absolute right-[-3.5rem] top-1/2 -translate-y-1/2 w-12 h-0.5 bg-success/50" />
              <div className="absolute right-[-4rem] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-success shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
              <h3 className="text-sm font-bold text-success mb-1 uppercase tracking-widest">Data</h3>
              <p className="text-xl font-bold">MongoDB / MySQL</p>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
