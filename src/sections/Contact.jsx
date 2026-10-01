import { useEffect, useRef, useState } from 'react';
import { SectionLabel } from '../components/ui/SectionLabel';
import { contactMeta as meta } from '../data/contactData';
import { identity } from '../data/identity';

/* ─────────────────────────────────────────────────────────────
   ICONS
   Inline SVGs — no external deps needed.
───────────────────────────────────────────────────────────── */
function ArrowRightIcon({ className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function ExternalArrowIcon({ className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}

function GithubIcon({ className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   VIEWPORT REVEAL HOOK
   Triggers once when the section enters the viewport.
   Respects prefers-reduced-motion by skipping the delay cascade.
───────────────────────────────────────────────────────────── */
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If motion is reduced, show immediately without animation
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/* ─────────────────────────────────────────────────────────────
   REVEAL WRAPPER
   Applies fade-up animation with a staggered delay.
   When reduced-motion is active, only opacity is used.
───────────────────────────────────────────────────────────── */
function Reveal({ children, delay = 0, className = '' }) {
  const { ref, visible } = useReveal(0.1);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(14px)',
        transition: `opacity 0.55s cubic-bezier(0.16,1,0.3,1) ${delay}ms,
                     transform 0.55s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECONDARY SOCIAL LINK
───────────────────────────────────────────────────────────── */
function SocialLink({ href, label, icon: Icon }) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group inline-flex items-center gap-2.5
                 font-mono text-xs font-semibold tracking-[0.16em] uppercase
                 text-text-secondary hover:text-text-primary
                 transition-colors duration-200
                 focus-ring rounded-sm py-1"
    >
      <Icon className="opacity-70 group-hover:opacity-100 transition-opacity" />
      <span>{label.replace('View on ', '').toUpperCase()}</span>
      <ExternalArrowIcon className="opacity-0 group-hover:opacity-70 -translate-x-0.5 group-hover:translate-x-0 transition-all duration-200" />
    </a>
  );
}

/* ─────────────────────────────────────────────────────────────
   CONTACT SECTION
───────────────────────────────────────────────────────────── */
export function Contact({ id = 'contact' }) {
  return (
    <section
      id={id}
      className="relative py-24 sm:py-32 lg:py-44 border-t border-border/70 scroll-mt-[72px] overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* ── Subtle Technical Grid ── */}
      <div
        className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none select-none
                   [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,black_30%,transparent_100%)]"
        aria-hidden="true"
      />

      {/* ── Very Subtle Cyan Radial Glow (behind heading area) ── */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[420px]
                   bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.055)_0%,transparent_70%)]
                   pointer-events-none select-none"
        aria-hidden="true"
      />

      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ════════════════════════════════════════════════════
            OUTER BORDERED CONTAINER
            One large open composition — not a card.
        ════════════════════════════════════════════════════ */}
        <div className="relative border border-border/60 p-8 sm:p-12 lg:p-16 xl:p-20
                        hover:border-border/80 transition-colors duration-500">

          {/* Corner decorations — four thin cyan accents */}
          {['top-0 left-0 border-t border-l', 'top-0 right-0 border-t border-r',
            'bottom-0 left-0 border-b border-l', 'bottom-0 right-0 border-b border-r'].map((pos, i) => (
            <div
              key={i}
              className={`absolute ${pos} w-5 h-5 border-cyan/30 pointer-events-none`}
              aria-hidden="true"
            />
          ))}

          {/* ── Status Indicator — top right inside container ── */}
          <div className="flex justify-end mb-10 sm:mb-12">
            <Reveal delay={400}>
              <div
                className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.18em]
                           text-text-muted uppercase select-none"
                title="Available for new projects"
              >
                <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                {meta.statusText}
              </div>
            </Reveal>
          </div>

          {/* ── Section Label ── */}
          <Reveal delay={0}>
            <div className="mb-8 sm:mb-10">
              <SectionLabel label={meta.sectionLabel} indicator="cyan" className="text-cyan" />
            </div>
          </Reveal>

          {/* ── Main Heading ── */}
          <Reveal delay={80}>
            <h2
              id="contact-heading"
              className="font-display font-black tracking-[-0.03em] leading-[1.0] select-none
                         text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem]
                         mb-8 sm:mb-10"
            >
              {/* Line 1 — white */}
              <span className="block text-text-primary">
                {meta.headingLine1}
              </span>
              {/* Line 2 — slightly brighter with cyan period */}
              <span className="block text-white">
                {meta.headingLine2}
                <span className="text-cyan">.</span>
              </span>
            </h2>
          </Reveal>

          {/* ── Description ── */}
          <Reveal delay={160}>
            <p className="font-sans text-base sm:text-lg lg:text-xl text-text-secondary
                          leading-relaxed max-w-lg mb-10 sm:mb-12">
              {meta.description}
            </p>
          </Reveal>

          {/* ── CTA Group ── */}
          <Reveal delay={240}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-14 sm:mb-16">

              {/* PRIMARY — mailto email */}
              <a
                href={`mailto:${identity.email}`}
                aria-label={`Send an email to ${identity.email}`}
                className="group inline-flex items-center gap-3
                           font-mono text-xs sm:text-sm font-bold tracking-[0.14em] uppercase
                           text-btn-text bg-cyan border border-cyan
                           px-7 py-4 rounded-sm
                           hover:bg-cyan/90 hover:border-cyan/90 hover:shadow-glow-cyan
                           hover:-translate-y-px
                           transition-all duration-200
                           focus-ring
                           select-none w-full sm:w-auto justify-center sm:justify-start"
              >
                {meta.primaryCTA}
                <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>

              {/* Thin divider (desktop only) */}
              <div className="hidden sm:block w-px h-6 bg-border/60" aria-hidden="true" />

              {/* SECONDARY SOCIAL LINKS */}
              <div className="flex items-center gap-5">
                <SocialLink
                  href={identity.github}
                  label="View on GitHub"
                  icon={GithubIcon}
                />
                <SocialLink
                  href={identity.linkedin}
                  label="View on LinkedIn"
                  icon={LinkedinIcon}
                />
              </div>
            </div>
          </Reveal>

          {/* ── Footer technical bar inside the container ── */}
          <Reveal delay={320}>
            <div className="pt-6 border-t border-border/50
                            flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3
                            font-mono text-[10px] text-text-muted tracking-wider uppercase select-none">
              <span>CONTACT // {identity.signatureMark}</span>
              <span className="text-cyan/60">{identity.email}</span>
            </div>
          </Reveal>

        </div>
        {/* /outer bordered container */}

      </div>
    </section>
  );
}
