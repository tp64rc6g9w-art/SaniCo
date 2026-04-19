import FadeUp from './FadeUp';

const yes = [
  'You want recurring, predictable monthly income — not one-off gigs',
  'You\u2019re willing to invest in professionalism: insurance, systems, branding',
  'You want a business you can eventually manage, not always perform personally',
  'You\u2019re comfortable doing direct outreach to land your first clients',
  'You have $500–$2,000 to invest in Phase 1 equipment and licensing',
  'You work full-time and want to build this on evenings and weekends',
  'You\u2019re tired of online hustle culture and want something real',
];

const no = [
  'You\u2019re looking for a fully passive business with zero outreach',
  'You want revenue within days rather than weeks',
  'You\u2019re not prepared to build legal, insurance, and operational infrastructure',
  'You\u2019re looking primarily for a low-accountability side project',
  'You want a business that doesn\u2019t involve interacting with clients',
];

export default function Buyer() {
  return (
    <section className="buyer-section" aria-label="Who this is for">
      <div className="container">
        <span className="eyebrow">Who This Is For</span>
        <div className="rule" />
        <h2 className="section-h2" style={{ maxWidth: 680 }}>
          This system is built for operators who are serious about building something real.
        </h2>
        <p className="section-lede">
          You don&rsquo;t need experience in cleaning or business. You do need the discipline to follow a system,
          the willingness to do outreach, and the patience to build a contract base that compounds over time.
        </p>

        <div className="buyer-grid">
          <FadeUp className="buyer-col yes">
            <h3>
              <span className="buyer-check-lg">✓</span>
              This is for you if&hellip;
            </h3>
            <ul className="buyer-list">
              {yes.map(item => <li key={item} className="buyer-item">{item}</li>)}
            </ul>
          </FadeUp>

          <FadeUp className="buyer-col no" delay={1}>
            <h3>
              <span className="buyer-x-lg">✕</span>
              This isn&rsquo;t for you if&hellip;
            </h3>
            <ul className="buyer-list">
              {no.map(item => <li key={item} className="buyer-item">{item}</li>)}
            </ul>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
