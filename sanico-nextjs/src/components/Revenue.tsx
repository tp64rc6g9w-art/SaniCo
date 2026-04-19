import Link from 'next/link';
import FadeUp from './FadeUp';

const rungs = [
  { stage: 'Month 1–3',   desc: <>Land your <strong>first contract</strong> as a solo operator</>,          val: '$3K / mo',     hero: false },
  { stage: 'Month 4–8',   desc: <>Scale to <strong>3 contracts</strong>, hire your first crew</>,            val: '$10K / mo',    hero: false },
  { stage: 'Month 9–14',  desc: <>Build to <strong>5 contracts</strong>, two crews running</>,                val: '$17K / mo',    hero: false },
  { stage: 'Year 2',      desc: <>Scale to <strong>8 contracts</strong>, 3–4 active crews</>,                 val: '$32K / mo',    hero: false },
  { stage: 'Year 2–3',    desc: <><strong>10+ contracts</strong>, full operation, operator role</>,           val: '$40K+ / mo',   hero: true  },
];

export default function Revenue() {
  return (
    <section className="revenue-section" aria-label="Revenue potential">
      <div className="container">
        <span className="eyebrow" style={{ color: '#C8A96E' }}>Revenue Potential</span>
        <div className="rule" />
        <h2 className="section-h2 light" style={{ maxWidth: 720 }}>
          The math behind a $10K&ndash;$40K per month cleaning business.
        </h2>
        <p className="section-lede light">
          This is not speculation. Industry-standard contract sizes and margin benchmarks. Every rung on this
          ladder is built on the exact systems, pricing formulas, and acquisition strategies inside the guide.
        </p>

        <div className="revenue-inner">
          <FadeUp className="revenue-copy">
            <p>
              Commercial cleaning contracts are <strong>fixed monthly agreements</strong>. Every client you
              sign adds a predictable line to your income. Every client you retain compounds your revenue base.
            </p>
            <p>
              A single mid-sized corporate contract at $3,500/month produces $42,000 per year &mdash; from one
              client. Five contracts at that rate produces $210,000 in annual revenue before a single add-on service.
            </p>
            <p>
              At ten contracts averaging $4,000/month, you&rsquo;re running a $480,000/year operation generating{' '}
              <strong>$12,800+/month in owner profit</strong> at standard industry margins.
            </p>
            <p className="revenue-disclaimer">
              Figures reflect industry-standard contract sizes and net profit margins. Individual results vary based
              on market, execution, and business conditions.
            </p>
            <div style={{ marginTop: 32 }}>
              <Link href="#offer" className="btn btn-primary">
                Get the Pricing Formula
                <span className="arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </FadeUp>

          <FadeUp className="revenue-ladder" delay={1}>
            {rungs.map((r) => (
              <div key={r.stage} className={`ladder-row${r.hero ? ' hero-row' : ''}`}>
                <div className="ladder-stage">{r.stage}</div>
                <div className="ladder-desc">{r.desc}</div>
                <div className="ladder-val">{r.val}</div>
              </div>
            ))}
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
