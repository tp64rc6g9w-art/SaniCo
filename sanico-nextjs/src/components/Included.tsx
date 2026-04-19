import FadeUp from './FadeUp';

const chapters = [
  {
    icon: '📊', meta: 'Chapter 02',
    title: 'Industry Overview & Market Opportunity',
    body: 'Market size, growth trajectory, client type breakdown, and why commercial cleaning beats residential at every income level.',
  },
  {
    icon: '🏗️', meta: 'Chapter 03',
    title: 'Business Model Breakdown',
    body: 'The three revenue pillars, Phase 1–3 growth model, team structures, and the exact focus at each revenue milestone.',
  },
  {
    icon: '⚖️', meta: 'Chapter 04',
    title: 'Legal Setup, Tools & Equipment',
    body: 'LLC vs. sole proprietor comparison, insurance and bonding requirements, tiered equipment list, and startup budgets from $500 to $120K+.',
  },
  {
    icon: '⚙️', meta: 'Chapter 05',
    title: 'Operations & Systems',
    body: 'The four core operating systems every cleaning company needs. Full nightly office SOP. Route optimization for crew-based operations.',
  },
  {
    icon: '🎯', meta: 'Chapter 06',
    title: 'Client Acquisition Playbook',
    body: 'Six proven strategies: walk-ins with scripts, property management relationships, Google Business Profile SEO, LinkedIn outreach, BNI, and RFPs.',
  },
  {
    icon: '🧮', meta: 'Chapter 07',
    title: 'Pricing Strategy & Formula',
    body: 'The four-component pricing formula with a real 12,000 sq ft office walkthrough. Add-on service pricing. Five rules that protect your margins.',
  },
  {
    icon: '🎨', meta: 'Chapter 08',
    title: 'Branding & Positioning',
    body: 'The five brand touch points corporate clients evaluate. How to look like a $1M company before you become one — without overspending on branding.',
  },
  {
    icon: '👥', meta: 'Chapters 09–10',
    title: 'Hiring, Team Building & Scaling',
    body: 'When to hire, where to find reliable staff, screening checklist, structured onboarding, and the revenue milestone roadmap from $5K to $200K/month.',
  },
  {
    icon: '📋', meta: 'Chapters 11–12',
    title: 'Financial Planning & Contracts',
    body: 'Healthy vs. struggling P&L snapshot. The five numbers every owner must track. Required contract clauses and pricing-objection rebuttals.',
  },
];

export default function Included() {
  return (
    <section className="included-section" id="whats-inside" aria-label="What's included in the guide">
      <div className="container">
        <div className="included-head">
          <div>
            <span className="eyebrow">What&rsquo;s Inside</span>
            <div className="rule" />
            <h2 className="section-h2">14 chapters. Built for operators, not readers.</h2>
          </div>
          <div>
            <span className="included-head-badge">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7l3 3 5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
              Practical, not theoretical
            </span>
            <p className="section-lede" style={{ marginTop: 16, fontSize: '0.98rem' }}>
              No motivational filler. Every section delivers specific operational frameworks, pricing examples,
              and step-by-step guidance you can apply immediately.
            </p>
          </div>
        </div>

        <div className="included-grid">
          {chapters.map((c, i) => (
            <FadeUp key={c.meta} className="included-card" delay={(i % 3) as 0|1|2}>
              <div className="included-icon">{c.icon}</div>
              <div className="included-meta">{c.meta}</div>
              <h4>{c.title}</h4>
              <p>{c.body}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
