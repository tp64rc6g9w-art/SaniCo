import FadeUp from './FadeUp';

const chapters = [
  {
    icon: '📊', ch: 'Ch. 02',
    title: 'Industry Overview & Opportunity',
    body: 'Market size, growth trajectory, client type breakdown, and why commercial beats residential at every income level. Includes client type comparison table with average monthly contract ranges.',
  },
  {
    icon: '🏗️', ch: 'Ch. 03',
    title: 'Business Model Breakdown',
    body: 'The three revenue pillars (recurring contracts, deep-clean services, on-demand). Phase 1 through Phase 3 growth model with revenue ranges, team structure, and key focus at each stage.',
  },
  {
    icon: '⚖️', ch: 'Ch. 04',
    title: 'Startup Setup — Legal, Tools & Equipment',
    body: 'LLC vs. sole proprietor comparison, insurance and bonding requirements, tiered equipment list by phase, and a complete startup budget snapshot from $500 to $120,000+.',
  },
  {
    icon: '⚙️', ch: 'Ch. 05',
    title: 'Operations & Systems',
    body: 'The four core operating systems every cleaning company needs. Full nightly office cleaning SOP. Route optimization strategy and scheduling guidance for crew-based operations.',
  },
  {
    icon: '🎯', ch: 'Ch. 06',
    title: 'How to Find Clients',
    body: 'Six proven acquisition strategies: cold walk-ins (with script), property management relationships, Google Business Profile SEO, LinkedIn direct outreach, BNI networking, and RFP submissions.',
  },
  {
    icon: '🧮', ch: 'Ch. 07',
    title: 'Pricing Strategy',
    body: 'The four-component pricing formula. Step-by-step walkthrough for a real 12,000 sq ft office. Full add-on service pricing guide. Five pricing rules that protect your margins at every growth stage.',
  },
  {
    icon: '🎨', ch: 'Ch. 08',
    title: 'Branding & Positioning',
    body: 'The five brand touch points corporate clients actually evaluate. Positioning differentiator strategy. How to look like a $1M company before you become one — without overspending on branding.',
  },
  {
    icon: '👥', ch: 'Ch. 09–10',
    title: 'Hiring, Teams & Scaling',
    body: 'When to hire, where to find reliable staff, pre-interview screening checklist, structured onboarding program, compensation ranges by role, and the revenue milestone roadmap from $5K to $200K/month.',
  },
  {
    icon: '📋', ch: 'Ch. 11–12',
    title: 'Financial Planning & Contracts',
    body: 'P&L snapshot comparing healthy vs. struggling operations. The five numbers every owner must track. Required contract clauses for corporate accounts. How to respond when prospects say your competitor is cheaper.',
  },
];

export default function WhatsInside() {
  return (
    <section id="whats-inside">
      <div className="container">
        <div className="text-center" style={{ maxWidth: 640, margin: '0 auto' }}>
          <span className="section-label">What's Inside the Guide</span>
          <div className="rule rule-center" />
          <h2 className="section-h2">14 chapters built for operators, not readers.</h2>
          <p className="section-body">
            Every section is written with a practical orientation. Not motivational overview. Not
            vague strategy. Specific operational frameworks, real pricing examples, and exact
            step-by-step guidance you can apply immediately.
          </p>
        </div>
        <div className="inside-grid">
          {chapters.map((c, i) => (
            <FadeUp key={c.ch} className="inside-card" delay={(i % 3) as 0|1|2}>
              <div className="inside-icon">{c.icon}</div>
              <div className="chapter-num">{c.ch}</div>
              <h4>{c.title}</h4>
              <p>{c.body}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
