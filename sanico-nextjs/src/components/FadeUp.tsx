'use client';

import { useEffect, useRef } from 'react';

interface Props {
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4;
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  style?: React.CSSProperties;
  id?: string;
}

const delayClass = ['', 'd1', 'd2', 'd3', 'd4'];

export default function FadeUp({
  className = '',
  delay = 0,
  as: Tag = 'div',
  children,
  style,
  id,
}: Props) {
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

  const combined = ['fade-up', delayClass[delay], className].filter(Boolean).join(' ');

  // @ts-expect-error dynamic tag
  return <Tag ref={ref} className={combined} style={style} id={id}>{children}</Tag>;
}
