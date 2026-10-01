import { useEffect, useState } from 'react';
import { identity } from '../../data/identity';

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING INTERFACE');
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Check if user prefers reduced motion or has already seen the loader
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasLoaded = sessionStorage.getItem('hasLoaded');

    if (prefersReducedMotion || hasLoaded) {
      setIsVisible(false);
      setShouldRender(false);
      return;
    }

    sessionStorage.setItem('hasLoaded', 'true');
    document.body.style.overflow = 'hidden';

    // Sequence timing
    // 0ms: Initial display
    // 200ms: Progress starts
    // 700ms: Progress reaches 100%
    // 900ms: Slide out starts
    // 1400ms: Component unmounts

    const progressInterval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return p + 4; // 25ms * 25 steps = ~625ms to reach 100
      });
    }, 25);

    const textTimeouts = [
      setTimeout(() => setStatusText('LOADING COMPONENTS'), 250),
      setTimeout(() => setStatusText('CONNECTING SYSTEMS'), 500),
      setTimeout(() => setStatusText('READY'), 750)
    ];

    const hideTimeout = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = ''; // Unlock scroll
    }, 950);

    const removeTimeout = setTimeout(() => {
      setShouldRender(false);
    }, 1450); // wait for 500ms slide-up transition

    return () => {
      clearInterval(progressInterval);
      textTimeouts.forEach(clearTimeout);
      clearTimeout(hideTimeout);
      clearTimeout(removeTimeout);
      document.body.style.overflow = '';
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-6 w-full max-w-[280px] sm:max-w-xs animate-fade-in">
        
        {/* Identity Mark */}
        <div className="font-mono text-xs tracking-[0.2em] text-cyan mb-2">
          {identity.signatureMark}
        </div>

        {/* System Initializing */}
        <div className="font-mono text-[10px] text-text-muted tracking-widest uppercase">
          SYSTEM / INITIALIZING
        </div>

        {/* Name */}
        <div className="font-display text-xl sm:text-2xl font-black tracking-tight text-text-primary text-center">
          {identity.name}
        </div>

        {/* Progress Line */}
        <div className="w-full h-[1px] bg-border relative overflow-hidden mt-2">
          <div 
            className="absolute top-0 left-0 h-full bg-cyan transition-all duration-75 ease-linear shadow-glow-cyan"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Micro Text */}
        <div className="font-mono text-[9px] text-text-muted tracking-widest uppercase mt-4 min-h-[16px]">
          {statusText}
        </div>

      </div>
    </div>
  );
}
