import { useState, useEffect } from 'react';

/**
 * Hook to track the currently active section using Intersection Observer
 */
export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first intersecting entry
        const intersectingEntry = entries.find((entry) => entry.isIntersecting);
        if (intersectingEntry) {
          setActiveSection(intersectingEntry.target.id);
        }
      },
      {
        rootMargin: '-20% 0px -60% 0px', // Adjust depending on when you want the section to become active
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionIds]);

  return activeSection;
}
