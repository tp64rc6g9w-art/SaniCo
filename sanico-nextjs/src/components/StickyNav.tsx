'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function StickyNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`sticky-bar${visible ? ' visible' : ''}`}
      aria-label="Primary"
    >
      <div className="sticky-bar-brand">
        Sani<span>Co</span>
      </div>
      <div className="sticky-bar-right">
        <div className="sticky-bar-price"><s>$391</s>$97</div>
        <Link href="#offer" className="btn-sticky">Get Instant Access →</Link>
      </div>
    </nav>
  );
}
