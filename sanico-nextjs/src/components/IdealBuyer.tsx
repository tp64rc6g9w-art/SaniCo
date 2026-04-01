import FadeUp from './FadeUp';

const goodFits = [
  'Want a business with recurring, predictable monthly income — not one-off gigs',
  'Are willing to invest in professionalism: insurance, branding, systems, and real pricing',
  'Want to build something you can eventually manage rather than always perform personally',
  'Are drawn to service businesses with documented, contractual client relationships',
  'Have $500–$20,000 to invest in a properly set-up operation (depending on your phase)',
  'Want practical guidance — formulas, scripts, checklists — not theory',
  'Are already working in facilities, property management, or a related field and want to go independent',
];

const badFits = [
  'Are looking for a passive income stream that requires no active work or management',
  'Are unwilling to do outreach, follow up with prospects, or engage in professional client development',
  'Want a business that generates significant revenue within days rather than weeks or months',
  'Are not prepared to build real legal, insurance, and operational infrastructure',
  'Are looking primarily for a low-accountability side project rather than a serious business',
];

export default function IdealBuyer() {
  return (
    <section className="buyer-section">
      <div className="container">
        <span className="section-label">Who This Is For</span>
        <div className="rule" />
        <h2 className="section-h2" style={{ maxWidth: 580 }}>
          This system is built for operators who are serious about building a real business.
        </h2>
        <div className="buyer-cols">
          <FadeUp>
            <span className="buyer-col-label">This is the right fit if you —</span>
            <ul className="buyer-list">
              {goodFits.map((item) => (
                <li key={item} className="buyer-item">
                  <span className="buyer-check">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </FadeUp>

          <FadeUp delay={1}>
            <span className="buyer-col-label gray">This may not be the right fit if you —</span>
            <ul className="not-buyer-list">
              {badFits.map((item) => (
                <li key={item} className="buyer-item nope">
                  <span className="buyer-x">✗</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="insight-box" style={{ marginTop: 28 }}>
              <p>
                The cleaning industry rewards{' '}
                <strong>consistency, professionalism, and system-discipline</strong> above all else.
                Operators who commit to those qualities win contracts, retain clients, and build
                businesses with genuine long-term value.
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
