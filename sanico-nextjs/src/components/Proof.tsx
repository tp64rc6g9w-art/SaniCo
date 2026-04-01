import FadeUp from './FadeUp';

const testimonials = [
  {
    quote:
      '"The pricing formula alone was worth the purchase. I had been guessing at my rates for two years and wondering why I was always stretched thin. This showed me exactly where the money was going — and how to fix it."',
    attr: 'D. Marshall — Commercial Cleaning Operator, Texas',
  },
  {
    quote:
      '"I launched with zero industry experience. The SOP structure and hiring checklist helped me onboard my first two employees without chaos. We signed our third contract in week nine."',
    attr: 'T. Okafor — First-Time Business Owner, Georgia',
  },
  {
    quote:
      '"The section on property management companies changed my strategy completely. Two months after reading it, I had a meeting with a property manager who oversees 14 commercial buildings in my city."',
    attr: 'M. Reyes — Owner, MR Facility Services, Florida',
  },
];

export default function Proof() {
  return (
    <section className="proof-section">
      <div className="container">
        <div className="text-center" style={{ maxWidth: 560, margin: '0 auto 16px' }}>
          <span className="section-label">Results in the Field</span>
          <div className="rule rule-center" />
          <h2 className="section-h2">Built by operators who lived this roadmap.</h2>
        </div>
        <div className="proof-grid">
          {testimonials.map((t, i) => (
            <FadeUp key={t.attr} className="proof-card" delay={(i % 3) as 0|1|2}>
              <div className="proof-stars">★★★★★</div>
              <p className="proof-quote">{t.quote}</p>
              <div className="proof-attr">
                {t.attr}
                <span className="proof-placeholder-note">[replace with verified testimonial]</span>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
