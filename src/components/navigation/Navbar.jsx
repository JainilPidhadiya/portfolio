import { useState, useEffect } from 'react';
import { cn } from '../../utils/cn';
import { navigation } from '../../data/navigation';
import { useActiveSection } from '../../hooks/useActiveSection';
import { Menu, X } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(navigation.map(n => n.id));
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/70 backdrop-blur-xl border-b border-border py-4 shadow-lg shadow-background/50" : "bg-transparent py-6 md:py-8"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <a href="#home" className="text-2xl font-black tracking-tighter focus-ring outline-none flex items-center gap-1">
          <span className="w-3 h-3 bg-accent-strong rounded-full animate-pulse-slow"></span>
          <span>JAINIL<span className="text-accent-strong">.</span></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-surface-raised/50 border border-border rounded-full px-2 py-1 backdrop-blur-md">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={cn(
                "text-sm font-semibold tracking-wide transition-all focus-ring outline-none px-5 py-2 rounded-full",
                activeSection === item.id 
                  ? "bg-accent-strong text-white shadow-md shadow-accent-strong/20" 
                  : "text-secondary hover:text-primary hover:bg-surface"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA (Desktop only) */}
        <div className="hidden md:block">
          <a href="#contact" className="text-sm font-bold text-primary hover:text-accent-primary transition-colors focus-ring outline-none">
            Let's Talk &rarr;
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden p-2 text-primary focus-ring outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
            className="md:hidden absolute top-full left-0 right-0 bg-surface/95 backdrop-blur-2xl border-b border-border shadow-2xl overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-2">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-xl font-bold p-4 block transition-colors focus-ring outline-none rounded-2xl",
                    activeSection === item.id ? "bg-accent-strong/10 text-accent-strong" : "text-primary hover:bg-surface-raised"
                  )}
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 w-full bg-accent-strong text-white p-4 rounded-2xl text-center font-bold text-xl"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
