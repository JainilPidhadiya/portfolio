import { useState, useEffect, useCallback } from 'react';
import { cn } from '../../utils/cn';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { identity } from '../../data/identity';

/* ─────────────────────────────────────────────────────────────
   FOOTER CONFIGURATION
   Edit here — do not scatter values in JSX.
───────────────────────────────────────────────────────────── */
const FOOTER_CONFIG = {
  /** Actual stack — sourced from package.json deps */
  builtWith: 'React + Vite + Tailwind CSS',
};

const NAV_LINKS = [
  { label: 'WORK',    href: '#work' },
  { label: 'ABOUT',   href: '#about' },
  { label: 'STACK',   href: '#stack' },
  { label: 'JOURNEY', href: '#journey' },
  { label: 'CONTACT', href: '#contact' },
];

/* ─────────────────────────────────────────────────────────────
   SMOOTH SCROLL HELPER
───────────────────────────────────────────────────────────── */
function scrollToId(id, prefersReducedMotion) {
  const el = document.getElementById(id);
  if (!el) return;
  const navOffset = 72;
  const top = el.getBoundingClientRect().top + window.scrollY - navOffset;
  window.scrollTo({ top: Math.max(0, top), behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  if (window.history.pushState) {
    window.history.pushState(null, '', `#${id}`);
  }
}

/* ─────────────────────────────────────────────────────────────
   BACK-TO-TOP BUTTON
───────────────────────────────────────────────────────────── */
function BackToTop({ prefersReducedMotion }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    if (window.history.pushState) {
      window.history.pushState(null, '', window.location.pathname);
    }
  }, [prefersReducedMotion]);

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Back to top"
      className={cn(
        'fixed bottom-6 left-6 z-50 sm:bottom-8 sm:left-8',
        'group flex items-center gap-2 px-4 py-2.5',
        'bg-background-secondary/90 backdrop-blur-md border border-border/80 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.4)]',
        'font-mono text-[10px] font-bold tracking-[0.16em] uppercase select-none',
        'text-text-secondary hover:text-cyan hover:border-cyan/50 hover:shadow-glow-cyan hover:-translate-y-1',
        'transition-all duration-300 focus-ring',
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none',
      )}
    >
      <span
        aria-hidden="true"
        className="text-sm leading-none group-hover:animate-bounce text-cyan"
      >
        ↑
      </span>
      <span>TOP</span>
    </button>
  );
}

/* ─────────────────────────────────────────────────────────────
   SOCIAL LINK
───────────────────────────────────────────────────────────── */
function SocialLink({ href, label, children }) {
  if (!href) return null;
  const isExternal = !href.startsWith('mailto:');
  return (
    <a
      href={href}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      aria-label={label}
      className="group inline-flex items-center gap-1.5
                 font-mono text-[11px] font-medium tracking-[0.14em] uppercase
                 text-text-muted hover:text-text-primary
                 transition-colors duration-200 focus-ring rounded-sm py-1"
    >
      {children}
      <span
        aria-hidden="true"
        className="text-text-muted/50 group-hover:text-cyan group-hover:translate-x-0.5
                   transition-all duration-200"
      >
        ↗
      </span>
    </a>
  );
}

/* ─────────────────────────────────────────────────────────────
   FOOTER COMPONENT
───────────────────────────────────────────────────────────── */
export function Footer() {
  const prefersReducedMotion = useReducedMotion();

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    scrollToId(id, prefersReducedMotion);
  }, [prefersReducedMotion]);

  const year = new Date().getFullYear();

  return (
    <footer
      aria-label="Site footer"
      className="relative border-t border-border/60 bg-background"
    >
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ══════════════════════════════════════════
            MAIN FOOTER BODY
            Three columns on desktop, stacked on mobile
        ══════════════════════════════════════════ */}
        <div className="py-12 sm:py-14 lg:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">

          {/* ── LEFT: Identity ── */}
          <div className="flex flex-col gap-2">
            <span className="font-display text-sm font-bold tracking-tight text-text-primary select-none">
              {identity.name}
            </span>
            <span className="font-mono text-[11px] text-text-muted tracking-[0.16em] uppercase select-none">
              {identity.role}
            </span>
          </div>

          {/* ── CENTER: Navigation ── */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap sm:flex-col gap-x-6 gap-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="group inline-flex items-center gap-1.5
                               font-mono text-[11px] font-medium tracking-[0.14em] uppercase
                               text-text-muted hover:text-text-primary
                               transition-colors duration-200 focus-ring rounded-sm py-0.5"
                  >
                    <span
                      aria-hidden="true"
                      className="w-3 h-px bg-border/60 group-hover:w-4 group-hover:bg-cyan/60
                                 transition-all duration-200 hidden sm:block"
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── RIGHT: Social / Contact ── */}
          <div className="flex flex-col gap-3">
            <SocialLink
              href={identity.github}
              label="Visit GitHub profile (opens in new tab)"
            >
              GITHUB
            </SocialLink>
            <SocialLink
              href={identity.linkedin}
              label="Visit LinkedIn profile (opens in new tab)"
            >
              LINKEDIN
            </SocialLink>
            <SocialLink
              href={identity.email ? `mailto:${identity.email}` : null}
              label={`Send email to ${identity.email}`}
            >
              EMAIL
            </SocialLink>
          </div>

        </div>

        {/* ══════════════════════════════════════════
            BOTTOM BAR
            Copyright · Built With · Back to Top
        ══════════════════════════════════════════ */}
        <div
          className="py-5 border-t border-border/40
                     flex flex-col sm:flex-row items-start sm:items-center justify-between
                     gap-4 sm:gap-6"
        >
          {/* Left: copyright + built-with */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5
                          font-mono text-[10px] text-text-muted tracking-wider uppercase select-none">
            <span>&copy; {year} {identity.name}</span>
            <span className="hidden sm:inline text-border/60" aria-hidden="true">·</span>
            <span className="text-text-muted/60">
              BUILT WITH{' '}
              <span className="text-text-muted">{FOOTER_CONFIG.builtWith}</span>
            </span>
          </div>

          {/* Right: back to top */}
          <BackToTop prefersReducedMotion={prefersReducedMotion} />
        </div>

      </div>
    </footer>
  );
}
