import { useState, useEffect } from 'react';

/**
 * Hook to track the currently active section using Intersection Observer.
 * Stable across renders and calculates the section closest to the top of viewport.
 */
export function useActiveSection(sectionIds = []) {
  const [activeSection, setActiveSection] = useState('');
  const idsKey = Array.isArray(sectionIds) ? sectionIds.join(',') : '';

  useEffect(() => {
    if (!idsKey) return;
    const ids = idsKey.split(',').filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // Select entry closest to the top of the viewport
          const topEntry = visibleEntries.reduce((prev, curr) => 
            Math.abs(curr.boundingClientRect.top) < Math.abs(prev.boundingClientRect.top) ? curr : prev
          );
          setActiveSection(topEntry.target.id);
        }
      },
      {
        rootMargin: '-15% 0px -50% 0px',
        threshold: [0, 0.2, 0.5],
      }
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [idsKey]);

  return activeSection;
}
