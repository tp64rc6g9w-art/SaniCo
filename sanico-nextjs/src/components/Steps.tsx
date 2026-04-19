import FadeUp from './FadeUp';
import Link from 'next/link';

const steps = [
  {
    title: 'Set up the operation',
    body: 'Register your LLC, secure liability insurance, and assemble the starter equipment kit. The guide walks you through every document, vendor, and budget item.',
    bullets: ['LLC formation walkthrough', 'Insurance + bonding checklist', 'Tiered equipment by phase'],
    timeline: 'Week 1–2',
  },
  {
    title: 'Land your first contracts',
    body: 'Execute the six client acquisition strategies: cold walk-ins with scripts, property manager relationships, local SEO, LinkedIn outreach, BNI networking, and RFPs.',
    bullets: ['Receptionist walk-in script', 'LinkedIn outreach template', 'Proposal and pricing workflow'],
    timeline: 'Week 3–8',
  },
  {
    title: 'Scale past your own labor',
    body: 'Use the hiring, onboarding, and operations systems to add crews. Replace yourself in the field and transition into the owner role managing contracts and growth.',
    bullets: ['When-to-hire framework', '90-day onboarding process', 'Revenue milestone roadmap'],
    timeline: 'Week 9+',
  },
];

export default function Steps() {
  return (
    <section className="steps-section" id="how" aria-label="How it works">
      <div className="container">
        <div className="text-center" style={{ maxWidth: 680, margin: '0 auto 8px' }}>
          <span className="eyebrow">How It Works</span>
          <div className="rule rule-center" />
          <h2 className="section-h2">Three stages. One clear path to recurring revenue.</h2>
          <p className="section-lede" style={{ margin: '0 auto' }}>
            The SaniCo system is sequenced so each phase builds on the last. You execute, land contracts,
            then scale beyond your own labor.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step, i) => (
            <FadeUp key={step.title} className="step-card" delay={i as 0|1|2}>
              <div className="step-num">{i + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
              <ul>
                {step.bullets.map(b => <li key={b}>{b}</li>)}
              </ul>
              <div className="step-card-timeline">{step.timeline}</div>
            </FadeUp>
          ))}
        </div>

        <div className="inline-cta">
          <h3>Every step is documented. Every template is included.</h3>
          <p>
            Stop piecing together advice from YouTube and Reddit. Get the complete operational system
            in one place for one payment.
          </p>
          <Link href="#offer" className="btn btn-primary">
            Get Instant Access — $97
            <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
