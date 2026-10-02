import { useEffect, useRef, useState } from 'react';
import { SectionLabel } from '../components/ui/SectionLabel';
import { contactMeta as meta } from '../data/contactData';
import { identity } from '../data/identity';

/* ─────────────────────────────────────────────────────────────
   ICONS
───────────────────────────────────────────────────────────── */
function ArrowRightIcon({ className = '' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function ArrowUpRightIcon({ className = '' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}

function CopyIcon({ className = '' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon({ className = '' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function MapPinIcon({ className = '' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function GithubIcon({ className = '' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className = '' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   VIEWPORT REVEAL HOOK
───────────────────────────────────────────────────────────── */
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold });
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function Reveal({ children, delay = 0, className = '' }) {
  const { ref, visible } = useReveal(0.1);
  return (
    <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(14px)', transition: `opacity 0.55s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.55s cubic-bezier(0.16,1,0.3,1) ${delay}ms` }}>
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   CONTACT SECTION
───────────────────────────────────────────────────────────── */
export function Contact({ id = 'contact' }) {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(identity.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${identity.email}`, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id={id} className="relative py-16 lg:py-24 border-t border-border/70 scroll-mt-[72px] overflow-hidden bg-background-primary" aria-labelledby="contact-heading">
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none select-none [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,black_30%,transparent_100%)]" aria-hidden="true" />

      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <SectionLabel label="06 / CONTACT" indicator="cyan" className="text-cyan" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── Left Column: Bento Cards ── */}
          <div className="flex flex-col gap-4">

            {/* Status Card */}
            <Reveal delay={0}>
              <div className="bg-background-secondary/50 border border-border/60 p-6 sm:p-8 rounded-2xl hover:border-border/80 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-70" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-blue-500" />
                  </span>
                  <span className="font-semibold text-blue-500 text-lg">Available for new roles</span>
                </div>
                <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
                  Open to high-impact Full-Stack Engineering, Shopify Developer roles worldwide.
                </p>
              </div>
            </Reveal>

            {/* Email Card */}
            <Reveal delay={100}>
              <div className="bg-background-secondary/50 border border-border/60 p-6 sm:p-8 rounded-2xl hover:border-border/80 transition-colors flex flex-col justify-center">
                <span className="text-sm text-text-muted font-medium mb-3">Direct Email</span>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-lg sm:text-xl font-bold text-text-primary truncate">{identity.email}</span>
                  <button
                    onClick={handleCopyEmail}
                    className="flex-shrink-0 p-2.5 rounded-lg border border-border/80 text-text-secondary hover:text-text-primary hover:bg-background-secondary transition-all active:scale-95"
                    aria-label="Copy email to clipboard"
                  >
                    {copied ? <CheckIcon className="text-green-500" /> : <CopyIcon />}
                  </button>
                </div>
              </div>
            </Reveal>

            {/* Location Card */}
            <Reveal delay={200}>
              <div className="bg-background-secondary/50 border border-border/60 p-6 sm:p-8 rounded-2xl hover:border-border/80 transition-colors flex items-center gap-5">
                <div className="p-3 bg-background-secondary border border-border/80 rounded-xl text-text-secondary">
                  <MapPinIcon />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-text-muted font-medium mb-1">Location</span>
                  <span className="text-base sm:text-lg font-bold text-text-primary">Surat / Pune, India (IST / UTC+5:30)</span>
                </div>
              </div>
            </Reveal>

            {/* Socials Group */}
            <Reveal delay={300}>
              <div className="mt-4">
                <span className="text-sm text-text-muted font-medium mb-4 block ml-2">Professional Networks</span>
                <div className="grid grid-cols-2 gap-4">
                  <a href={identity.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between bg-background-secondary/50 border border-border/60 p-4 sm:p-5 rounded-2xl hover:border-border/80 hover:bg-background-secondary transition-all">
                    <div className="flex items-center gap-3 text-text-primary font-semibold">
                      <LinkedinIcon className="text-[#0A66C2]" />
                      LinkedIn
                    </div>
                    <ArrowUpRightIcon className="text-text-muted group-hover:text-text-primary transition-colors" />
                  </a>

                  <a href={identity.github} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between bg-background-secondary/50 border border-border/60 p-4 sm:p-5 rounded-2xl hover:border-border/80 hover:bg-background-secondary transition-all">
                    <div className="flex items-center gap-3 text-text-primary font-semibold">
                      <GithubIcon />
                      GitHub
                    </div>
                    <ArrowUpRightIcon className="text-text-muted group-hover:text-text-primary transition-colors" />
                  </a>
                </div>
              </div>
            </Reveal>

          </div>

          {/* ── Right Column: The Form ── */}
          <Reveal delay={400} className="w-full h-full">
            <div className="bg-card border border-border/60 p-8 sm:p-10 rounded-2xl h-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative">

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Honeypot & Config for FormSubmit */}
                <input type="text" name="_honey" style={{ display: 'none' }} />
                <input type="hidden" name="_captcha" value="false" />

                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-semibold text-text-secondary">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    disabled={status === 'sending'}
                    placeholder="Enter your name"
                    className="bg-background-secondary border border-border/80 rounded-xl px-5 py-4 text-base font-sans text-text-primary placeholder:text-text-muted focus:border-cyan focus:ring-1 focus:ring-cyan/50 transition-all outline-none disabled:opacity-50"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-semibold text-text-secondary">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled={status === 'sending'}
                    placeholder="Enter your email id"
                    className="bg-background-secondary border border-border/80 rounded-xl px-5 py-4 text-base font-sans text-text-primary placeholder:text-text-muted focus:border-cyan focus:ring-1 focus:ring-cyan/50 transition-all outline-none disabled:opacity-50"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="_subject" className="text-sm font-semibold text-text-secondary">Subject</label>
                  <input
                    type="text"
                    id="_subject"
                    name="_subject"
                    required
                    disabled={status === 'sending'}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="bg-background-secondary border border-border/80 rounded-xl px-5 py-4 text-base font-sans text-text-primary placeholder:text-text-muted focus:border-cyan focus:ring-1 focus:ring-cyan/50 transition-all outline-none disabled:opacity-50"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-semibold text-text-secondary">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    disabled={status === 'sending'}
                    placeholder="Type your message here..."
                    rows="4"
                    className="bg-background-secondary border border-border/80 rounded-xl px-5 py-4 text-base font-sans text-text-primary placeholder:text-text-muted focus:border-cyan focus:ring-1 focus:ring-cyan/50 transition-all outline-none resize-none disabled:opacity-50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="mt-2 group relative inline-flex items-center justify-center font-semibold text-sm text-white bg-blue-600 border border-blue-600 px-6 py-4 rounded-xl transition-all duration-300 focus-ring select-none w-full disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
                >
                  {/* Subtle background glow effect on hover */}
                  <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  {status === 'idle' && (
                    <div className="relative flex items-center justify-center overflow-hidden w-full">
                      {/* Default Text (Slides up and out) */}
                      <span className="block transition-transform duration-500 cubic-bezier(0.87, 0, 0.13, 1) group-hover:-translate-y-[150%]">
                        Send Message
                      </span>
                      {/* Hover Text & Icon (Slides up and in) */}
                      <span className="absolute flex items-center gap-2 transition-transform duration-500 cubic-bezier(0.87, 0, 0.13, 1) translate-y-[150%] group-hover:translate-y-0">
                        Send Message 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse">
                          <line x1="22" y1="2" x2="11" y2="13" />
                          <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                      </span>
                    </div>
                  )}
                  
                  {status === 'sending' && (
                    <span className="relative z-10 flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Transmitting...
                    </span>
                  )}
                  
                  {status === 'success' && (
                    <span className="relative z-10 flex items-center gap-2 text-green-300">
                      <CheckIcon /> Message Received!
                    </span>
                  )}
                  
                  {status === 'error' && (
                    <span className="relative z-10 text-red-100">Transmission Failed</span>
                  )}
                </button>
              </form>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}
