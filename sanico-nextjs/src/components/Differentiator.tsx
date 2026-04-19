export default function Differentiator() {
  const rows = [
    {
      feature: 'Industry-specific pricing formula',
      other: <><span className="diff-x">✕</span>Generic or missing</>,
      sani: <><span className="diff-check">✓</span>4-component formula with real 12,000 sq ft walkthrough</>,
    },
    {
      feature: 'Client acquisition scripts',
      other: <><span className="diff-x">✕</span>Vague advice, no scripts</>,
      sani: <><span className="diff-check">✓</span>Walk-in, LinkedIn, property manager scripts included</>,
    },
    {
      feature: 'Contract clause guidance',
      other: <><span className="diff-x">✕</span>Not addressed</>,
      sani: <><span className="diff-check">✓</span>Required clauses, net-30 terms, termination protection</>,
    },
    {
      feature: 'Ready-to-use business templates',
      other: <><span className="diff-x">✕</span>You build from scratch</>,
      sani: <><span className="diff-check">✓</span>6 fillable templates included</>,
    },
    {
      feature: 'Scaling roadmap',
      other: <><span className="diff-x">✕</span>Stops at solo operator</>,
      sani: <><span className="diff-check">✓</span>Phase 1–3 from $5K/mo to $200K+/mo</>,
    },
    {
      feature: 'Hiring &amp; onboarding systems',
      other: <><span className="diff-x">✕</span>"Just hire people"</>,
      sani: <><span className="diff-check">✓</span>Screening, training, compensation benchmarks</>,
    },
    {
      feature: 'Focus on corporate / commercial accounts',
      other: <><span className="diff-x">✕</span>Mixed with residential</>,
      sani: <><span className="diff-check">✓</span>Built entirely for corporate contract work</>,
    },
  ];

  return (
    <section className="diff-section" aria-label="How SaniCo compares">
      <div className="container">
        <span className="eyebrow">Why SaniCo Is Different</span>
        <div className="rule" />
        <h2 className="section-h2" style={{ maxWidth: 720 }}>
          Why this isn&rsquo;t just another cleaning business ebook.
        </h2>
        <p className="section-lede">
          Most online cleaning business content is written by people who never built one. SaniCo is the
          operational blueprint of an actual corporate cleaning company &mdash; everything distilled into
          one system.
        </p>

        <div className="diff-table">
          <div className="diff-row head">
            <div className="diff-cell">Feature</div>
            <div className="diff-cell">Generic Cleaning Advice</div>
            <div className="diff-cell gold">SaniCo System</div>
          </div>
          {rows.map((r, i) => (
            <div className="diff-row" key={i}>
              <div className="diff-cell feature" data-label="Feature">{r.feature}</div>
              <div className="diff-cell" data-label="Other">{r.other}</div>
              <div className="diff-cell gold" data-label="SaniCo">{r.sani}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
