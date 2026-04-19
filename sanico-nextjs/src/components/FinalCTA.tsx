import Link from 'next/link';
import { CHECKOUT_URL } from '@/lib/config';

export default function FinalCTA() {
  return (
    <section className="final-cta" aria-label="Get started">
      <div className="final-cta-grid" aria-hidden="true" />
      <div className="container">
        <div className="final-cta-eyebrow">Your Next Move</div>
        <h2>
          The business is built <span>one contract at a time</span>.<br />
          This is how you build the first one.
        </h2>
        <p>
          Every large cleaning company started with a single client. The market is there. The system works.
          The question is whether you execute this year — or watch another year pass.
        </p>
        <div className="final-cta-buttons">
          <Link href={CHECKOUT_URL} className="btn btn-primary" style={{ fontSize: '1.02rem', padding: '20px 44px' }}>
            Get the Complete System — $97
            <span className="arrow" aria-hidden="true">→</span>
          </Link>
          <div className="final-cta-micro">
            Instant digital access <span>·</span> All 6 templates included <span>·</span> One-time payment
          </div>
        </div>
      </div>
    </section>
  );
}
