import FadeUp from './FadeUp';

const stats = [
  { num: '$74', suffix: 'B+', label: 'U.S. commercial cleaning market — 2024' },
  { num: '4.8', suffix: '%',  label: 'Annual industry growth rate, projected to $94B by 2030' },
  { num: '85',  suffix: '%',  label: 'Revenue from recurring monthly contracts' },
  { num: '28–38', suffix: '%', label: 'Average net profit margin for well-run operations' },
];

export default function StatsBand() {
  return (
    <div className="stats-band">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <FadeUp key={s.label} className="stat-cell" delay={i as 0|1|2|3}>
              <div className="stat-num">
                {s.num}<span>{s.suffix}</span>
              </div>
              <div className="stat-label">{s.label}</div>
            </FadeUp>
          ))}
        </div>
      </div>
    </div>
  );
}
