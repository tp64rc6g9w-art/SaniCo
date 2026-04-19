import FadeUp from './FadeUp';

const templates = [
  {
    icon: '📝', badge: 'Fillable Form',
    title: 'Client Intake Form',
    body: 'Capture every detail before a proposal — square footage, frequency, budget, decision timeline, current vendor.',
  },
  {
    icon: '✅', badge: 'Operational SOP',
    title: 'Nightly Cleaning Checklist',
    body: 'Room-by-room SOP for reception, restrooms, workstations, and break rooms. Crew sign-off included.',
  },
  {
    icon: '💰', badge: 'Financial Template',
    title: 'Startup Budget Sheet',
    body: 'Every startup expense category with estimated ranges and columns for actual cost and vendor tracking.',
  },
  {
    icon: '🧮', badge: 'Pricing Tool',
    title: 'Pricing Calculator',
    body: 'Input square footage, crew size, labor rate, and margin — output your monthly contract price and annual value.',
  },
  {
    icon: '👤', badge: 'HR Template',
    title: 'Employee Onboarding Checklist',
    body: 'New-hire tracker: paperwork, equipment training, shadow shifts, client protocol, authorization sign-offs.',
  },
  {
    icon: '📈', badge: 'Revenue Tracker',
    title: 'Monthly Revenue Planner',
    body: 'Track every contract and income stream. Monitor MRR, growth, and contract status across your roster.',
  },
];

export default function Templates() {
  return (
    <section className="templates-section" aria-label="Included business templates">
      <div className="container">
        <div className="templates-head">
          <span className="eyebrow">Included Templates &amp; Tools</span>
          <div className="rule" />
          <h2 className="section-h2 light">Six ready-to-use documents. Start running a business on day one.</h2>
          <p className="section-lede light" style={{ marginTop: 12 }}>
            You do not start from a blank page. Every operational document you need to launch professionally —
            from your first client meeting to your first payroll — is formatted and ready to customize.
          </p>
        </div>
        <div className="templates-grid">
          {templates.map((t, i) => (
            <FadeUp key={t.title} className="template-card" delay={(i % 3) as 0|1|2}>
              <span className="template-icon" aria-hidden="true">{t.icon}</span>
              <h5>{t.title}</h5>
              <p>{t.body}</p>
              <span className="template-badge">{t.badge}</span>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
