'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { trackScrollDepth, trackSectionView } from '@/lib/tracking';

interface ScrollTrackerProps {
  /** IDs das seções a serem rastreadas */
  sectionIds?: string[];
  /** Profundidades de scroll a serem rastreadas (em %) */
  scrollDepths?: number[];
}

export default function ScrollTracker({
  sectionIds = [],
  scrollDepths = [25, 50, 75, 90, 100],
}: ScrollTrackerProps) {
  const pathname = usePathname();
  const trackedDepths = useRef<Set<number>>(new Set());
  const trackedSections = useRef<Set<string>>(new Set());

  useEffect(() => {
    // Reset tracked items on page change
    trackedDepths.current = new Set();
    trackedSections.current = new Set();

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      // Track scroll depths
      scrollDepths.forEach((depth) => {
        if (scrollPercent >= depth && !trackedDepths.current.has(depth)) {
          trackedDepths.current.add(depth);
          trackScrollDepth(depth, pathname);
        }
      });

      // Track section views
      sectionIds.forEach((sectionId) => {
        if (trackedSections.current.has(sectionId)) return;

        const element = document.getElementById(sectionId);
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.5 && rect.bottom > 0;

        if (isVisible) {
          trackedSections.current.add(sectionId);
          trackSectionView(sectionId, pathname);
        }
      });
    };

    // Throttle scroll handler
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [pathname, sectionIds, scrollDepths]);

  return null; // Headless component
}

