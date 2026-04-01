import FadeUp from './FadeUp';

const cards = [
  {
    title: 'Real Numbers',
    body: (
      <>
        Every financial example in this guide is based on{' '}
        <strong>actual industry averages</strong> — real labor rates, real supply costs, real
        overhead ranges, real margin benchmarks. The pricing formula produces prices you can
        actually quote to clients and defend.
      </>
    ),
  },
  {
    title: 'Specific Systems',
    body: (
      <>
        The operations chapter does not say &ldquo;document your processes.&rdquo; It gives you{' '}
        <strong>the exact SOP structure</strong>, the four systems every operation needs, and
        scheduling guidance for a two-person crew servicing multiple accounts per evening.
      </>
    ),
  },
  {
    title: 'Concrete Scripts',
    body: (
      <>
        The client acquisition chapter includes{' '}
        <strong>
          a walk-in receptionist script, a LinkedIn message template, and a rebuttal to &ldquo;your
          competitor is cheaper&rdquo;
        </strong>{' '}
        — because knowing the strategy and knowing what to say are two different things.
      </>
    ),
  },
  {
    title: 'Decision Frameworks',
    body: (
      <>
        Every major decision — legal structure, when to hire, whether to expand geographically, how
        to respond to a pricing objection — is addressed with{' '}
        <strong>a framework, not a platitude</strong>. The guide respects your intelligence and your
        time.
      </>
    ),
  },
];

export default function NotFluff() {
  return (
    <section className="notfluff-section">
      <div className="container">
        <span className="section-label">What This Is — and What It Is Not</span>
        <div className="rule" />
        <h2 className="section-h2 section-h2-light" style={{ maxWidth: 620 }}>
          This is an operational system. Not a motivational ebook.
        </h2>
        <p className="section-body section-body-light" style={{ marginTop: 16, maxWidth: 580 }}>
          The commercial cleaning industry does not have a shortage of enthusiasm. It has a shortage
          of operators who understand pricing, systems, and client acquisition well enough to build
          real, lasting businesses.
        </p>
        <div className="notfluff-grid">
          {cards.map((card, i) => (
            <FadeUp key={card.title} className="nf-card" delay={(i % 4) as 0|1|2|3}>
              <h5>{card.title}</h5>
              <p>{card.body}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
