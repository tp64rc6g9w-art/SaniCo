export default function TrustStrip() {
  const items = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <path d="M11 2l2.5 5.5L19 8.3l-4 4 1 5.7-5-2.7-5 2.7 1-5.7-4-4 5.5-.8L11 2z" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      ),
      label: 'Built by Active Operators',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <rect x="3" y="4" width="16" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M3 8h16" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      ),
      label: 'Real Pricing Formulas',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <path d="M4 11l4 4 10-10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      ),
      label: '6 Ready-Made Templates',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M11 6v5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      label: 'Instant Digital Access',
    },
  ];

  return (
    <section className="trust-strip" aria-label="What you get">
      <div className="container">
        <div className="trust-strip-label">Trusted foundation for serious operators</div>
        <div className="trust-strip-items">
          {items.map(item => (
            <div key={item.label} className="trust-strip-item">
              {item.icon}
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
