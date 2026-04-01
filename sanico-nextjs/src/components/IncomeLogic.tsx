import FadeUp from './FadeUp';

const rows = [
  { label: '3 contracts × $3,000/mo', val: '$9,000',  sub: 'MRR — Phase 1 solo operation',      highlight: false, total: false },
  { label: '5 contracts × $3,500/mo', val: '$17,500', sub: 'MRR — Small team, 1–2 crews',        highlight: false, total: false },
  { label: '8 contracts × $4,000/mo', val: '$32,000', sub: 'MRR — Scaled 3–4 crew operation',    highlight: false, total: false },
  { label: '10 contracts × $4,000/mo avg', val: '$40,000', sub: 'MRR — $12,800+/mo net at 32% margin', highlight: true, total: true },
];

export default function IncomeLogic() {
  return (
    <section className="income-section">
      <div className="container">
        <span className="section-label">The Income Logic</span>
        <div className="rule" />
        <div className="income-intro">
          <FadeUp>
            <h2 className="section-h2">
              The math behind a $10K–$40K/month recurring revenue operation.
            </h2>
            <p className="section-body" style={{ marginTop: 16 }}>
              This is not projection or speculation. It is arithmetic. Corporate cleaning contracts
              are fixed monthly agreements. The numbers compound as your client roster grows. The
              guide shows you exactly how to build toward each milestone — from your first contract
              to a fully staffed multi-crew operation.
            </p>
            <p className="section-body" style={{ marginTop: 16 }}>
              The most important concept in this business is not hustle — it is Monthly Recurring
              Revenue. Every contract you sign adds a fixed, predictable line to your income. Every
              contract you retain compounds your financial base. The system in this guide is designed
              to help you win contracts, retain them, and expand them over time.
            </p>
          </FadeUp>

          <FadeUp delay={1} className="income-visual">
            {rows.map((row) => (
              <div key={row.label} className={`income-row${row.total ? ' income-total' : ''}`}>
                <div className="income-row-label">{row.label}</div>
                <div>
                  <div className={`income-row-val${row.highlight ? ' highlight' : ''}`}>{row.val}</div>
                  <div className="income-row-sub">{row.sub}</div>
                </div>
              </div>
            ))}
            <div className="math-note">
              <p>
                Figures based on industry-standard contract sizes and net profit margins. Individual
                results vary based on market, execution, and business conditions.
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
