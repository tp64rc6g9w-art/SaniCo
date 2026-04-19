'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'Do I need prior cleaning or business experience to start a commercial cleaning business?',
    a: 'No. The system is written from first principles — it walks you through legal structure, equipment, pricing, hiring, and operations without assuming any industry background. Most successful operators had no cleaning experience before launching.',
  },
  {
    q: 'How much money do I need to start?',
    a: 'As a solo Phase 1 operator focused on landing your first contract, realistic startup costs are $500–$1,200 for equipment and supplies, $800–$2,400/year for liability insurance, and $50–$500 for LLC formation. Most operators begin Phase 1 and fund Phase 2 (vehicle, additional equipment) from their first contract revenue.',
  },
  {
    q: 'How long does it take to land the first commercial cleaning client?',
    a: 'Industry data suggests 6–12 weeks from initial outreach to signed contract, with a typical proposal-to-close ratio around 1 in 8. Operators who consistently execute the walk-in and property manager strategies often close their first contract in 5–6 weeks.',
  },
  {
    q: 'Can I run this business part-time while keeping my job?',
    a: 'Yes. Commercial cleaning contracts are typically serviced in evening hours (4 PM to midnight), which fits around a full-time day job. Many operators build the business on nights and weekends before transitioning full-time once recurring contract revenue justifies it.',
  },
  {
    q: 'How much can a commercial cleaning business realistically make?',
    a: 'Individual results vary, but industry data shows corporate cleaning contracts range from $1,500–$12,000/month per client. A portfolio of 10 contracts averaging $4,000/month generates $40,000 in MRR, with 28–38% net margins after labor, supplies, and overhead. The guide includes the exact pricing formula used to calculate profitable contract rates.',
  },
  {
    q: 'Do I have to do the cleaning myself forever?',
    a: 'No — and the system is built to get you out of the field as fast as possible. You start solo to learn operations and fund your first hire. The hiring chapter covers exactly when to hire, how to screen, and how to onboard crews. By Phase 2, most operators manage rather than clean.',
  },
  {
    q: 'Is this just a PDF or is there more?',
    a: 'The core is a 340+ page PDF with 14 chapters plus six fillable business templates. The value is in the operational depth — real pricing formulas, specific acquisition scripts, SOP structures, and financial planning frameworks you can apply from day one. No fluff, no filler.',
  },
  {
    q: 'What kinds of commercial cleaning clients does the system focus on?',
    a: 'Five primary categories: corporate offices, medical facilities, property management companies, retail and showrooms, and schools/government buildings. The most accessible entry points for new operators are corporate offices and property managers. Each type has distinct requirements, contract values, and service expectations — all covered in detail.',
  },
  {
    q: 'Does the pricing guidance work outside major metro areas?',
    a: 'Yes. The pricing formula uses your actual local inputs — your labor rate, your overhead, your supply costs — to produce a price appropriate for your specific market. It is not a national average. Operators in rural, suburban, and mid-sized markets use the same framework successfully.',
  },
  {
    q: 'What if I decide this isn\u2019t for me after buying?',
    a: 'If you\u2019re not satisfied, contact support within the refund window stated at checkout and you\u2019ll receive a full refund. The system is designed to deliver enough value in the first few chapters that most buyers recognize the fit quickly.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0); // first FAQ open by default
  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <section className="faq-section" id="faq" aria-label="Frequently asked questions">
      <div className="container">
        <div className="faq-head">
          <span className="eyebrow">Questions &amp; Answers</span>
          <div className="rule" />
          <h2 className="section-h2">Common questions, answered directly.</h2>
          <p className="section-lede" style={{ marginTop: 12 }}>
            Before you decide — here&rsquo;s what most people ask about starting a commercial cleaning business and using the SaniCo system.
          </p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={faq.q} className={`faq-item${open === i ? ' open' : ''}`}>
              <button
                className="faq-q"
                onClick={() => toggle(i)}
                aria-expanded={open === i}
                aria-controls={`faq-a-${i}`}
              >
                {faq.q}
                <span className="faq-q-icon" aria-hidden="true">+</span>
              </button>
              <div className="faq-a" id={`faq-a-${i}`} role="region">{faq.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
