import Link from 'next/link';

export default function AnnounceBar() {
  return (
    <div className="announce-bar" role="region" aria-label="Announcement">
      <span>🔥 Launch Pricing: <strong>75% off</strong> the full system —</span>
      <span className="announce-sep">·</span>
      <Link href="#offer" style={{ textDecoration: 'underline', color: '#E2C98A' }}>
        Claim $97 price before it increases
      </Link>
    </div>
  );
}
