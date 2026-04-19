import FadeUp from './FadeUp';

const reasons = [
  {
    num: '82', suf: '%',
    title: 'Small operators dominate',
    body: '82% of commercial cleaning companies have fewer than 10 employees. You are not competing against corporations — you are competing against small operators who mostly lack systems, branding, and pricing discipline.',
  },
  {
    num: '880K', suf: '+',
    title: 'Businesses need this service',
    body: 'Offices, medical facilities, property managers, retail, schools, and government buildings — all require professional cleaning year-round. Recession-resistant demand. Outsourcing accelerates when economies tighten.',
  },
  {
    num: '$94', suf: 'B by 2030',
    title: 'Market is expanding',
    body: 'The U.S. commercial cleaning market is projected to grow from $74B today to $94B by 2030 — driven by workplace hygiene standards, commercial real estate growth, and the outsourcing trend.',
  },
];

export default function WhyNow() {
  return (
    <section className="why-now" id="why-now" aria-label="Why commercial cleaning, why now">
      <div className="container">
        <span className="eyebrow">The Opportunity</span>
        <div className="rule" />
        <h2 className="section-h2" style={{ maxWidth: 720 }}>
          Why commercial cleaning. Why now.
        </h2>
        <p className="section-lede">
          This is one of the most overlooked service businesses in America — which is exactly why it remains
          accessible to new operators who do it professionally.
        </p>

        <div className="why-now-grid">
          {reasons.map((r, i) => (
            <FadeUp key={r.title} className="why-card" delay={i as 0|1|2}>
              <div className="why-card-num">{r.num}<span>{r.suf}</span></div>
              <h3>{r.title}</h3>
              <p>{r.body}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
