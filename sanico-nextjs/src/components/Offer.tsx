import Link from 'next/link';
import FadeUp from './FadeUp';

// Set NEXT_PUBLIC_CHECKOUT_URL in your .env.local file
const CHECKOUT_URL =
  process.env.NEXT_PUBLIC_CHECKOUT_URL ?? 'https://your-checkout-link.com/sanico-guide';

const valueItems = [
  {
    title: 'The Complete 14-Chapter Operational Guide',
    desc: 'From legal structure through scaling to multi-crew operations. Written for operators, not students.',
    price: '$197',
  },
  {
    title: 'Client Intake Form (Fillable)',
    desc: 'Structured intake document to capture every detail from a prospect before submitting a proposal.',
    price: '$29',
  },
  {
    title: 'Nightly Cleaning SOP Checklist',
    desc: 'Room-by-room operational checklist for crew accountability and client-facing quality assurance.',
    price: '$29',
  },
  {
    title: 'Startup Budget Planning Sheet',
    desc: 'Every cost category pre-populated. Track estimated vs. actual spend from day one.',
    price: '$29',
  },
  {
    title: 'Pricing Calculator (Formula + Fields)',
    desc: 'Input your data, output your monthly contract price and annual value at your target margin.',
    price: '$49',
  },
  {
    title: 'Employee Onboarding Checklist',
    desc: 'Complete new-hire process tracker ensuring every compliance, training, and authorization step is documented.',
    price: '$29',
  },
  {
    title: 'Monthly Revenue Planner',
    desc: 'Track MRR, contract status, and growth month-over-month across your entire client book.',
    price: '$29',
  },
];

const includes = [
  '14-chapter complete operational guide',
  '6 fillable business forms & templates',
  'Pricing formula with real-world walkthrough',
  'Client acquisition strategies & scripts',
  'Hiring, onboarding & team systems',
  'Scaling roadmap from $0 to $150K+/mo',
  'Contract clause guidance & legal checklist',
  'Instant PDF download, accessible on any device',
];

export default function Offer() {
  return (
    <section className="offer-section" id="offer">
      <div className="container">
        <span className="section-label">The Offer</span>
        <div className="rule" />
        <h2 className="section-h2" style={{ maxWidth: 560 }}>
          Everything you need to launch, price, and scale a corporate cleaning business.
        </h2>

        <div className="offer-wrapper">
          {/* ── Value stack ── */}
          <FadeUp className="offer-stack">
            <h3>What you receive with the Corporate Cleaning Startup Guide:</h3>
            {valueItems.map((item) => (
              <div key={item.title} className="value-item">
                <div className="value-label">
                  <strong>{item.title}</strong>
                  <span>{item.desc}</span>
                </div>
                <div className="value-price">{item.price}</div>
              </div>
            ))}
            <div className="offer-note">
              <p>
                <strong>Total documented value: $391.</strong> Every item in this package was built
                for practical use in a real commercial cleaning operation — not to inflate a value
                stack. The pricing formula, checklists, and templates are usable from the day you
                receive them.
              </p>
            </div>
          </FadeUp>

          {/* ── Offer card ── */}
          <div>
            <FadeUp delay={1} className="offer-card">
              <span className="offer-card-eyebrow">Corporate Cleaning Startup System</span>
              <h3>The Complete Operator&rsquo;s Roadmap</h3>
              <div className="offer-price-strike">Retail value: $391</div>
              <div className="offer-price">
                <sup>$</sup>97
              </div>
              <div className="offer-price-note">One-time payment. Instant digital access.</div>

              <div className="offer-includes">
                {includes.map((item) => (
                  <div key={item} className="offer-includes-item">
                    {item}
                  </div>
                ))}
              </div>

              <Link href={CHECKOUT_URL} className="btn-offer">
                Get Instant Access — $97
              </Link>
              <div className="offer-reassurance">
                Instant delivery via secure download link.<br />
                Accessible on desktop, tablet, or mobile.<br />
                Questions? Contact info@sanicogroup.com
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
