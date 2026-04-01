'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function StickyNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky-bar${visible ? ' visible' : ''}`}
      id="stickyBar"
      role="navigation"
      aria-label="Quick access"
    >
      <div className="sticky-bar-brand">
        Sani<span>Co</span> Business Solutions
      </div>
      <Link href="#offer" className="btn-sticky">
        Get Instant Access →
      </Link>
    </nav>
  );
}
