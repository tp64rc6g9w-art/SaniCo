'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'Do I need prior cleaning or business experience to use this guide?',
    a: 'No. The guide is written from first principles, assuming you are starting without industry background. It walks through legal structure, equipment selection, pricing, hiring, and operations in full detail. Prior business experience is helpful but not required — the guide is designed to fill the knowledge gaps that most new operators face.',
  },
  {
    q: 'How much startup capital do I actually need?',
    a: 'The guide covers this in detail. As a solo Phase 1 operator focused on landing your first contract, the realistic startup cost is $500–$1,200 for equipment and supplies, plus $800–$2,400/year for liability insurance, and $50–$500 for LLC formation depending on your state. Most operators begin Phase 1 and fund the expansion to Phase 2 (vehicles, additional equipment) from contract revenue. A full startup budget template is included.',
  },
  {
    q: 'How long does it realistically take to land the first client?',
    a: "The guide's 90-day action plan maps to a first contract within 5–6 weeks for operators who execute the client acquisition strategies consistently. Industry data suggests an average of 6–12 weeks from initial outreach to signed contract, with a typical proposal-to-close ratio of around 1 in 8. The cold walk-in strategy and property management relationship approach tend to produce the fastest early results.",
  },
  {
    q: 'Can I build this business while still working a full-time job?',
    a: 'Yes — and many operators do exactly this. Commercial cleaning contracts are typically serviced in the evening hours (4 pm–midnight), which allows you to run the business nights and weekends in the early stages. The goal is to reach a point where contract revenue justifies the transition to full-time. The guide specifically addresses the Phase 1 solo operator approach with that timeline in mind.',
  },
  {
    q: 'Is this just a PDF, or is there more to it?',
    a: 'The core guide is a comprehensive PDF — the format that allows you to download, annotate, print, and use on any device. It includes 14 full chapters plus six fillable forms and templates. What makes it more than a standard document is the operational depth: real pricing formulas, specific acquisition scripts, complete SOP structures, and financial planning frameworks you can put into immediate use.',
  },
  {
    q: 'Do I need to do the cleaning myself, or can I hire staff immediately?',
    a: 'The guide recommends starting as a solo operator for your first one to three contracts. This allows you to understand the service firsthand, build quality standards, and fund your first hire from contract revenue — rather than taking on payroll before you have stable income. The hiring and onboarding chapter covers exactly when and how to make your first hire, including the specific indicators that signal you are ready.',
  },
  {
    q: 'What kinds of businesses does this guide focus on as clients?',
    a: 'The guide focuses primarily on five client types: corporate offices, medical facilities, property managers, retail and showrooms, and schools and government buildings. The most accessible entry point for new operators is typically corporate offices and property management companies. Each client type has distinct requirements, average monthly contract values, and service expectations — all covered in detail in the industry chapter.',
  },
  {
    q: 'Is the pricing guidance applicable outside major metro areas?',
    a: 'Yes. The pricing formula is built on your actual cost inputs — your local labor rate, your local overhead, your specific supply costs. It produces a price that is appropriate for your market, not a national average. The guide acknowledges regional variation and instructs you to base your numbers on your specific cost structure, which makes the formula valid in any market.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-intro">
          <span className="section-label">Frequently Asked Questions</span>
          <div className="rule" />
          <h2 className="section-h2">Common questions, answered directly.</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={faq.q} className={`faq-item${openIndex === i ? ' open' : ''}`}>
              <button
                className="faq-q"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                {faq.q}
                <span className="faq-q-icon" aria-hidden="true">+</span>
              </button>
              <div className="faq-a">{faq.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
