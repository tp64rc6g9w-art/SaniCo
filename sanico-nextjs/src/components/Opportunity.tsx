import FadeUp from './FadeUp';

export default function Opportunity() {
  return (
    <section>
      <div className="container">
        <span className="section-label">The Opportunity</span>
        <div className="rule" />
        <h2 className="section-h2" style={{ maxWidth: 680 }}>
          Why Corporate Cleaning Is One of the Most Overlooked Contract Businesses in America
        </h2>
        <div className="opp-grid">
          <FadeUp className="opp-col">
            <h3>Every office building needs this service. Every single day.</h3>
            <p>
              Corporate cleaning is not a trend or a technology bet. Hospitals, corporate campuses,
              schools, property management companies, and government facilities need consistent,
              professional cleaning 52 weeks a year — regardless of economic conditions. When budgets
              tighten, companies outsource more, not less. This is a recession-resistant service
              business with contractual demand built in.
            </p>
            <p>
              Unlike residential cleaning — which is price-sensitive, transactional, and difficult to
              scale — commercial cleaning is secured through multi-month contracts, invoiced net-30,
              and generates 3–10× more revenue per visit. One mid-sized corporate contract at
              $3,500/month produces $42,000/year from a single client.
            </p>
            <div className="insight-box">
              <p>
                <strong>82% of commercial cleaning companies have fewer than 10 employees.</strong>{' '}
                This is not a market dominated by large corporations. Professionalism, systems, and
                reliable delivery beat size every time. You do not need to be large to win significant
                corporate contracts — you need to look and operate like a serious business.
              </p>
            </div>
          </FadeUp>

          <FadeUp className="opp-col" delay={1}>
            <h3>The business scales because of contracts, not because of your time.</h3>
            <p>
              The architecture of commercial cleaning is what makes it worth building. You win a
              contract. The contract pays a fixed monthly fee. Your crew delivers the service. You
              manage, sell, and optimize. As your contract base grows, you hire additional crews and
              layer in operations management. Over time, the business generates income without
              requiring your direct labor on every job.
            </p>
            <p>
              That is the distinction most aspiring operators miss: the goal is not to build a better
              cleaning routine. The goal is to build a contract portfolio, a staffed operation, and a
              recurring revenue base that you own and manage.
            </p>
            <p>
              The SaniCo Corporate Cleaning Startup Guide is built around this model from the first
              page. Every chapter — from pricing to hiring to scaling — is oriented around building a
              business that runs on contracts and systems, not just personal effort.
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
