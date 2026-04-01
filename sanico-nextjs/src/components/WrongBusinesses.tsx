import FadeUp from './FadeUp';

const cards = [
  {
    variant: 'bad' as const,
    label: 'What Most People Try',
    title: 'Online business models with saturated markets',
    items: [
      'High competition, thin margins',
      'Platform-dependent, algorithm-driven',
      'Revenue is inconsistent month to month',
      'No real relationship with the customer',
      'Easy to replicate, hard to differentiate',
      'No recurring contract structure',
    ],
    delay: 0,
  },
  {
    variant: 'good' as const,
    label: 'What SaniCo Teaches You to Build',
    title: 'A contract-based corporate cleaning operation',
    items: [
      'Recurring monthly contracts from corporate clients',
      'Revenue is predictable and forecastable',
      'Low startup cost relative to income potential',
      'No platform risk — you own your client relationships',
      'Scalable through systems and staff, not just hours',
      '85%+ of industry revenue is recurring in nature',
    ],
    delay: 1,
  },
  {
    variant: 'bad' as const,
    label: 'Residential Cleaning',
    title: 'Higher volume, lower return',
    items: [
      'Smaller jobs, lower revenue per visit',
      'High client turnover',
      'No contract protection',
      'Price-competitive at every level',
      'Hard to systematize or scale profitably',
    ],
    delay: 0,
  },
  {
    variant: 'good' as const,
    label: 'Commercial / Corporate Cleaning',
    title: 'Fewer clients, more revenue, contract security',
    items: [
      '$1,500–$12,000 per client per month',
      'Multi-month contractual agreements',
      'Net-30 invoicing with corporate accounts',
      'Serves 880,000+ businesses nationwide',
      'Scale through crew expansion, not owner hours',
    ],
    delay: 2,
  },
];

export default function WrongBusinesses() {
  return (
    <section className="section-dark">
      <div className="container">
        <span className="section-label">The Real Comparison</span>
        <div className="rule" />
        <h2 className="section-h2 section-h2-light" style={{ maxWidth: 680 }}>
          Most people chase business models that are oversaturated, unpredictable, and hard to scale.
        </h2>
        <p className="section-body section-body-light" style={{ maxWidth: 600, marginTop: 16 }}>
          The same entrepreneurial energy being spent on print-on-demand shops, affiliate marketing
          funnels, and drop-shipping stores would produce significantly better financial outcomes
          applied to a contract-based service business in a market with genuine, recurring demand.
        </p>
        <div className="wrong-grid">
          {cards.map((card) => (
            <FadeUp key={card.label} className={`wrong-card ${card.variant}`} delay={card.delay as 0|1|2}>
              <div className={`wrong-card-label ${card.variant === 'good' ? 'label-good' : 'label-bad'}`}>
                {card.label}
              </div>
              <h4>{card.title}</h4>
              <ul>
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
