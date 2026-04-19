import Link from 'next/link';
import FadeUp from './FadeUp';
import { CHECKOUT_URL } from '@/lib/config';

const values = [
  { strong: 'The Complete 14-Chapter Operational Guide',   desc: 'From legal structure to scaling to multi-crew operations. 340+ pages written for operators.', price: '$197' },
  { strong: 'Client Intake Form (Fillable)',               desc: 'Structured intake doc to capture every detail before submitting a proposal.', price: '$29' },
  { strong: 'Nightly Cleaning SOP Checklist',              desc: 'Room-by-room operational checklist for crew accountability and client-facing QC.', price: '$29' },
  { strong: 'Startup Budget Planning Sheet',               desc: 'Every cost category pre-populated. Track estimated vs. actual spend from day one.', price: '$29' },
  { strong: 'Pricing Calculator (Formula + Fields)',       desc: 'Input your data, output monthly contract price and annual value at your target margin.', price: '$49' },
  { strong: 'Employee Onboarding Checklist',               desc: 'Complete new-hire tracker — compliance, training, and authorization steps documented.', price: '$29' },
  { strong: 'Monthly Revenue Planner',                     desc: 'Track MRR, contract status, and growth month-over-month across your entire client book.', price: '$29' },
];

const includes = [
  '14-chapter complete operational guide',
  '6 fillable business forms & templates',
  'Pricing formula with real-world walkthrough',
  'Client acquisition strategies & scripts',
  'Hiring, onboarding & team systems',
  'Scaling roadmap from $0 to $150K+/mo',
  'Contract clause guidance & legal checklist',
  'Instant PDF download — any device',
];

export default function Offer() {
  return (
    <section className="offer-section" id="offer" aria-label="Get the system">
      <div className="container">
        <div className="offer-head">
          <span className="eyebrow">The Offer</span>
          <div className="rule" />
          <h2 className="section-h2">Everything you need to launch, price, and scale — in one package.</h2>
          <p className="section-lede" style={{ marginTop: 12 }}>
            No upsells. No subscriptions. No &ldquo;masterclasses&rdquo; locked behind a sales call. One payment,
            immediate access, and the full system is yours.
          </p>
        </div>

        <div className="offer-grid">

          <FadeUp className="offer-stack">
            <h3>What&rsquo;s included:</h3>
            {values.map(v => (
              <div key={v.strong} className="value-row">
                <div className="value-label">
                  <strong>{v.strong}</strong>
                  <span>{v.desc}</span>
                </div>
                <div className="value-price">{v.price}</div>
              </div>
            ))}
            <div className="offer-total">
              <div className="offer-total-label">Documented value</div>
              <div className="offer-total-price">$391</div>
            </div>
          </FadeUp>

          <div>
            <FadeUp className="offer-card" delay={1}>
              <span className="offer-card-tag">⚡ Launch Pricing</span>
              <h3>The Corporate Cleaning Startup System</h3>

              <div className="offer-price-strike">Retail: $391</div>
              <div className="offer-price-main">
                <span className="amount"><sup>$</sup>97</span>
                <span className="save">Save $294</span>
              </div>
              <div className="offer-price-sub">One-time payment · Instant digital access</div>

              <div className="offer-includes-list">
                {includes.map(item => (
                  <div key={item} className="offer-includes-row">{item}</div>
                ))}
              </div>

              <Link href={CHECKOUT_URL} className="btn-offer">
                Get Instant Access — $97 →
              </Link>

              <div className="offer-guarantee">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                  <path d="M11 2l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V5l7-3z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M8 11l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                Secure checkout · Instant download · Access on any device
              </div>
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  );
}
