import FadeUp from './FadeUp';

const stats = [
  { num: '$74', suf: 'B+', label: 'U.S. commercial cleaning market — 2024' },
  { num: '4.8', suf: '%',  label: 'Annual industry growth rate' },
  { num: '85',  suf: '%',  label: 'Revenue from recurring monthly contracts' },
  { num: '28–38', suf: '%', label: 'Average net profit margin' },
];

export default function StatsBand() {
  return (
    <section className="stats-band" aria-label="Industry statistics">
      <div className="container">
        <div className="stats-band-title">The Industry by the Numbers</div>
        <div className="stats-grid">
          {stats.map((s, i) => (
            <FadeUp key={s.label} className="stat-cell" delay={i as 0|1|2|3}>
              <div className="stat-num">{s.num}<span>{s.suf}</span></div>
              <div className="stat-label">{s.label}</div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
