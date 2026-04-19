import FadeUp from './FadeUp';

const testimonials = [
  {
    initials: 'DM',
    quote: 'The pricing formula alone was worth the price. I had been guessing at my rates for two years and wondering why I was always stretched thin. This showed me exactly where the money was going — and how to fix it.',
    name: 'D. Marshall',
    role: 'Commercial Cleaning Operator, Texas',
  },
  {
    initials: 'TO',
    quote: 'I launched with zero industry experience. The SOP structure and hiring checklist helped me onboard my first two employees without chaos. We signed our third contract in week nine.',
    name: 'T. Okafor',
    role: 'First-Time Business Owner, Georgia',
  },
  {
    initials: 'MR',
    quote: 'The property management chapter changed my strategy completely. Two months after reading it, I had a meeting with a property manager who oversees 14 commercial buildings in my city.',
    name: 'M. Reyes',
    role: 'Owner, MR Facility Services, Florida',
  },
];

export default function Proof() {
  return (
    <section className="proof-section" aria-label="What operators are saying">
      <div className="container">
        <div className="text-center" style={{ maxWidth: 620, margin: '0 auto 16px' }}>
          <span className="eyebrow">Results in the Field</span>
          <div className="rule rule-center" />
          <h2 className="section-h2">Built by operators. Used by operators.</h2>
          <p className="section-lede" style={{ margin: '0 auto' }}>
            Real feedback from early SaniCo users who applied the system to their own markets.
          </p>
        </div>

        <div className="proof-grid">
          {testimonials.map((t, i) => (
            <FadeUp key={t.name} className="proof-card" delay={i as 0|1|2}>
              <span className="proof-quote-mark" aria-hidden="true">&ldquo;</span>
              <div className="proof-stars" aria-label="5 out of 5 stars">★★★★★</div>
              <p className="proof-quote">{t.quote}</p>
              <div className="proof-attr">
                <div className="proof-avatar" aria-hidden="true">{t.initials}</div>
                <div className="proof-attr-text">
                  <span className="proof-attr-name">{t.name}</span>
                  <span className="proof-attr-role">{t.role}</span>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
        <p className="proof-note">
          Testimonials reflect early user feedback. Individual results vary based on market and execution.
        </p>
      </div>
    </section>
  );
}
