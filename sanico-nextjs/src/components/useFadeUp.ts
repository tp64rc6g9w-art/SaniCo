'use client';

import { useEffect, useRef } from 'react';

/**
 * Attach this ref to any element that should fade up when it enters the viewport.
 * Usage:
 *   const ref = useFadeUp();
 *   <div ref={ref} className="fade-up fade-up-d1">...</div>
 *
 * Or use the <FadeUp> wrapper component below for convenience.
 */
export function useFadeUp() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!('IntersectionObserver' in window)) {
      el.classList.add('visible');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
