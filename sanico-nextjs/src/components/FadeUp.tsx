'use client';

import { useEffect, useRef } from 'react';

interface Props {
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4;
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const delayClass: Record<number, string> = {
  0: 'fade-up',
  1: 'fade-up fade-up-d1',
  2: 'fade-up fade-up-d2',
  3: 'fade-up fade-up-d3',
  4: 'fade-up fade-up-d4',
};

export default function FadeUp({
  className = '',
  delay = 0,
  as: Tag = 'div',
  children,
  style,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) { el.classList.add('visible'); return; }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const combined = [delayClass[delay], className].filter(Boolean).join(' ');

  // @ts-expect-error dynamic tag
  return <Tag ref={ref} className={combined} style={style}>{children}</Tag>;
}
