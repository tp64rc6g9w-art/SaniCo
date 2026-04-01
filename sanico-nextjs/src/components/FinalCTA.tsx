import Link from 'next/link';

const CHECKOUT_URL =
  process.env.NEXT_PUBLIC_CHECKOUT_URL ?? 'https://your-checkout-link.com/sanico-guide';

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container">
        <h2>
          The business is built one contract at a time.<br />
          <span>This is how you build the first one.</span>
        </h2>
        <p>
          You now have a clear picture of what is inside. The formulas are real. The systems work.
          The market is large and growing. The question is whether you are going to execute on it.
        </p>
        <div className="final-cta-group">
          <Link
            href={CHECKOUT_URL}
            className="btn-primary"
            style={{ fontSize: '1rem', padding: '18px 40px' }}
          >
            Get the Corporate Cleaning Startup System — $97
            <span className="arrow" aria-hidden="true">→</span>
          </Link>
          <div className="final-cta-meta">
            Instant PDF access · All 6 templates included · One-time payment
          </div>
        </div>
      </div>
    </section>
  );
}
