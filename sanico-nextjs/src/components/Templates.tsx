import FadeUp from './FadeUp';

const templates = [
  {
    icon: '📝', badge: 'Fillable Form',
    title: 'Client Intake Form',
    body: 'Capture every detail before a proposal — square footage, frequency, budget, decision timeline, and current vendor situation.',
  },
  {
    icon: '✅', badge: 'Operational SOP',
    title: 'Nightly Cleaning Checklist',
    body: 'Room-by-room, task-by-task SOP checklist for reception, restrooms, workstations, and break rooms. Crew sign-off included.',
  },
  {
    icon: '💰', badge: 'Financial Template',
    title: 'Startup Budget Sheet',
    body: 'Every startup expense category pre-listed with estimated ranges and columns for actual cost and vendor tracking.',
  },
  {
    icon: '🧮', badge: 'Pricing Tool',
    title: 'Pricing Calculator',
    body: 'Input your square footage, crew size, labor rate, and desired margin — output your monthly contract price and annual contract value.',
  },
  {
    icon: '👤', badge: 'HR Template',
    title: 'Employee Onboarding Checklist',
    body: 'Full new-hire onboarding tracker: paperwork, equipment training, shadow shifts, client protocol, and authorization sign-offs.',
  },
  {
    icon: '📈', badge: 'Revenue Tracker',
    title: 'Monthly Revenue Planner',
    body: 'Track every contract and income stream. Monitor MRR, month-over-month growth, and contract status across your entire client roster.',
  },
];

export default function Templates() {
  return (
    <section className="templates-section">
      <div className="container">
        <div className="templates-intro">
          <span className="section-label">Included Templates &amp; Tools</span>
          <div className="rule" />
          <h2 className="section-h2 section-h2-light">
            Six ready-to-use business documents included.
          </h2>
          <p className="section-body section-body-light">
            You do not start from a blank page. Every operational document you need to launch
            professionally — from your first client meeting to your first payroll — is formatted,
            structured, and ready to customize.
          </p>
        </div>
        <div className="templates-grid">
          {templates.map((t, i) => (
            <FadeUp key={t.title} className="template-card" delay={(i % 3) as 0|1|2}>
              <span className="template-card-icon">{t.icon}</span>
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
