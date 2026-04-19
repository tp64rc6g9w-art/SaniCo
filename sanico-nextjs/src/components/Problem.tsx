import FadeUp from './FadeUp';

export default function Problem() {
  return (
    <section aria-label="Why other business models fail">
      <div className="container">
        <span className="eyebrow">The Problem With Most "Side Hustles"</span>
        <div className="rule" />
        <h2 className="section-h2" style={{ maxWidth: 720 }}>
          You don&rsquo;t need another saturated business model. You need one that pays you every month.
        </h2>
        <p className="section-lede">
          Most online &ldquo;business opportunities&rdquo; sell you the idea of freedom but deliver
          unpredictable, platform-dependent income. A commercial cleaning business is structurally
          different — it runs on signed contracts with real businesses that need the service 52 weeks a year.
        </p>

        <div className="problem-grid">
          <FadeUp className="problem-card old">
            <h3>The Side Hustle Trap</h3>
            <p>
              Dropshipping, print-on-demand, affiliate marketing, stock trading courses.
              Saturated markets, razor-thin margins, unpredictable revenue, platform risk
              that can end everything overnight. You work constantly and your income
              never stabilizes.
            </p>
          </FadeUp>
          <FadeUp className="problem-card new" delay={1}>
            <h3>The Contract-Based Business</h3>
            <p>
              One signed corporate cleaning contract pays you $1,500–$12,000 per month,
              every month, for years. Ten contracts become a $40,000/month recurring revenue
              operation with 32–38% net margins. You own the client relationships.
              No platforms, no algorithms, no ceiling.
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
