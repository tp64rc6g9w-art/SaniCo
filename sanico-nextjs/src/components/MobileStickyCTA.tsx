'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`mobile-sticky-cta${visible ? ' visible' : ''}`}
      aria-hidden={!visible}
    >
      <Link href="#offer">
        <span>Get Instant Access →</span>
        <span className="price">$97</span>
      </Link>
    </div>
  );
}
