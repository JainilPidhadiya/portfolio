import { useState, useEffect, useCallback, useRef } from 'react';
import { cn } from '../../utils/cn';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { useTheme } from '../../hooks/useTheme';
import { identity } from '../../data/identity';

const NAV_ITEMS = [
  { id: 'work', label: 'WORK', href: '#work', number: '01' },
  { id: 'about', label: 'ABOUT', href: '#about', number: '02' },
  { id: 'stack', label: 'STACK', href: '#stack', number: '03' },
  { id: 'journey', label: 'JOURNEY', href: '#journey', number: '04' },
  { id: 'contact', label: 'CONTACT', href: '#contact', number: '05' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection(['work', 'about', 'stack', 'journey', 'contact']);

  const menuButtonRef = useRef(null);
  const closeButtonRef = useRef(null);
  const overlayRef = useRef(null);

  // Handle scroll detection for navbar background transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Escape key, focus trapping, and background scroll lock for mobile menu
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    // Prevent background scrolling
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus close button on open
    const focusTimer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      // Trap focus inside modal overlay
      if (e.key === 'Tab' && overlayRef.current) {
        const focusableElements = overlayRef.current.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      clearTimeout(focusTimer);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isMobileMenuOpen]);

  // Smooth scroll handler
  const handleNavClick = useCallback((e, targetId) => {
    e.preventDefault();
    
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      menuButtonRef.current?.focus();
    }

    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 72;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = Math.max(0, elementPosition - navOffset);

      window.scrollTo({
        top: offsetPosition,
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });

      if (window.history.pushState) {
        window.history.pushState(null, '', `#${targetId}`);
      }
    }
  }, [isMobileMenuOpen, prefersReducedMotion]);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 h-[72px] transition-all duration-300",
          isScrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border shadow-lg"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="max-w-[1280px] h-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Left: Author Name */}
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, 'about')}
            className="group font-display text-sm md:text-base font-bold tracking-tight text-text-primary hover:text-cyan transition-colors focus-ring py-2 rounded-sm select-none"
          >
            <span>{identity.name}</span>
          </a>

          {/* Desktop Navigation Links & Status Indicator */}
          <div className="hidden lg:flex items-center gap-8">
            <nav aria-label="Main Navigation" className="flex items-center gap-7">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={cn(
                      "group relative py-1 font-mono text-xs font-medium tracking-[0.14em] uppercase transition-colors focus-ring rounded-sm select-none",
                      isActive
                        ? "text-text-primary"
                        : "text-text-secondary hover:text-text-primary"
                    )}
                  >
                    <span>{item.label}</span>
                    
                    {/* Subtle cyan underline indicator on hover and active */}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute -bottom-1 left-0 right-0 h-[2px] bg-cyan rounded-full transition-all duration-200 pointer-events-none",
                        isActive
                          ? "opacity-100 scale-x-100 shadow-glow-cyan"
                          : "opacity-0 scale-x-0 group-hover:scale-x-100 group-hover:opacity-100"
                      )}
                    />
                  </a>
                );
              })}
            </nav>

            {/* Subtle Divider */}
            <div className="w-px h-3.5 bg-border/80" aria-hidden="true" />

            {/* Status Indicator: ● AVAILABLE */}
            <div 
              className="flex items-center gap-2 font-mono text-xs select-none"
              title="Available for full stack engineering roles"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green" />
              </span>
              <span className="text-[11px] font-medium tracking-[0.12em] text-text-muted">
                {identity.status.text.split(' ')[0]}
              </span>
            </div>

            {/* Theme Toggle Desktop */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              className="group relative flex items-center justify-center w-8 h-8 rounded-sm border border-border/80 bg-card hover:bg-card-hover hover:border-cyan/40 transition-colors focus-ring"
            >
              {theme === 'dark' ? (
                <svg className="w-3.5 h-3.5 text-text-secondary group-hover:text-cyan transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-3.5 h-3.5 text-text-secondary group-hover:text-cyan transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Right: Theme Toggle & Hamburger MENU Button */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              className="flex items-center justify-center w-8 h-8 rounded-sm border border-border/80 bg-card hover:bg-card-hover text-text-secondary transition-colors focus-ring"
            >
              {theme === 'dark' ? (
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-overlay"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-border bg-card/60 text-text-secondary hover:text-text-primary hover:border-cyan/40 font-mono text-xs font-medium tracking-[0.16em] uppercase focus-ring transition-colors"
            >
              <span>MENU</span>
              <span className="flex flex-col gap-1 w-3.5" aria-hidden="true">
                <span className="w-full h-px bg-current transition-colors" />
                <span className="w-full h-px bg-current transition-colors" />
              </span>
            </button>
          </div>

        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay */}
      <div
        ref={overlayRef}
        id="mobile-nav-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
        aria-hidden={!isMobileMenuOpen}
        inert={!isMobileMenuOpen ? "" : undefined}
        className={cn(
          "fixed inset-0 z-50 bg-background/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 transition-all duration-300 lg:hidden overflow-y-auto",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-2"
        )}
      >
        {/* Top Header inside overlay */}
        <div className="flex items-center justify-between border-b border-border/80 pb-5 shrink-0">
          <span className="font-display text-sm font-bold tracking-tight text-text-primary">
            {identity.name}
          </span>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeMobileMenu}
            aria-label="Close navigation menu"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm border border-border bg-card text-text-secondary hover:text-text-primary hover:border-cyan font-mono text-xs font-semibold tracking-wider uppercase focus-ring transition-colors"
          >
            <span>CLOSE</span>
            <span className="text-[10px] text-text-muted hidden sm:inline">(ESC)</span>
          </button>
        </div>

        {/* Navigation Items with Large Typography & Generous Spacing */}
        <nav aria-label="Mobile Navigation Links" className="my-auto py-10 flex flex-col gap-7 sm:gap-9 shrink-0">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.id)}
                className="group flex items-baseline gap-4 focus-ring rounded-sm py-1 transition-all hover:translate-x-1.5"
              >
                <span className="font-mono text-xs sm:text-sm text-cyan font-semibold tracking-widest select-none">
                  {item.number} /
                </span>
                <span 
                  className={cn(
                    "font-display text-3xl sm:text-5xl font-extrabold tracking-tight transition-colors",
                    isActive 
                      ? "text-cyan" 
                      : "text-text-primary group-hover:text-cyan"
                  )}
                >
                  {item.label}
                </span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-cyan ml-2 animate-pulse" aria-hidden="true" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Bottom Status & Info Bar */}
        <div className="pt-6 border-t border-border/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-xs text-text-muted shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green" />
            </span>
            <span className="text-text-secondary text-[11px] tracking-wider uppercase">
              {identity.status.text}
            </span>
          </div>
          <span className="text-[11px] tracking-widest text-text-muted uppercase">
            {identity.role}
          </span>
        </div>
      </div>
    </>
  );
}
