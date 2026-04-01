'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

function Sparkline({ values, color = '#C8A96E' }: { values: number[]; color?: string }) {
  const w = 80, h = 28;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const pts = values.map((v, i) => {
    const x = (i / (values.length - 1)) * w;
    const y = h - ((v - min) / (max - min)) * (h - 6) - 3;
    return `${x},${y}`;
  }).join(' ');
  const lastPt = pts.split(' ').at(-1)!.split(',');
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none">
      <polyline points={pts} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
      <circle cx={lastPt[0]} cy={lastPt[1]} r="3" fill={color} />
    </svg>
  );
}

function RevenueChart() {
  const bars = [
    { label: 'Mo 1',  pct: 12,  active: false },
    { label: 'Mo 3',  pct: 28,  active: false },
    { label: 'Mo 6',  pct: 52,  active: false },
    { label: 'Mo 9',  pct: 74,  active: false },
    { label: 'Mo 12', pct: 100, active: true  },
  ];
  return (
    <div style={{ display:'flex', alignItems:'flex-end', gap:7, height:60 }}>
      {bars.map(b => (
        <div key={b.label} style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', gap:5 }}>
          <div style={{
            width:'100%',
            height: `${b.pct * 0.6}px`,
            background: b.active
              ? 'linear-gradient(180deg,#E2C98A 0%,#C8A96E 100%)'
              : 'rgba(200,169,110,0.22)',
            borderRadius:'3px 3px 0 0',
          }} />
          <span style={{ fontSize:'0.52rem', color:'rgba(255,255,255,0.3)', fontFamily:'var(--ff-mono)', letterSpacing:'0.04em', whiteSpace:'nowrap' }}>
            {b.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  const dashRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = dashRef.current?.querySelectorAll<HTMLElement>('.hdash-card');
    cards?.forEach((el, i) => {
      setTimeout(() => el.classList.add('hdash-in'), 200 + i * 130);
    });
  }, []);

  return (
    <section className="hero hero-v2" id="top">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="hero-orb hero-orb-1" aria-hidden="true" />
      <div className="hero-orb hero-orb-2" aria-hidden="true" />

      <div className="container hero-v2-inner">

        {/* ── LEFT: copy ── */}
        <div className="hero-copy">
          <div className="hero-eyebrow">SaniCo Business Solutions — Official Launch System</div>
          <h1>
            Build a Contract-Based Corporate Cleaning Business That{' '}
            <em>Pays You Every Month.</em>
          </h1>
          <p className="hero-sub">
            The $74B commercial cleaning market runs on recurring contracts, not one-off jobs.
            This complete startup system shows you exactly how to enter it, price it correctly,
            land corporate accounts, and build a team — so the business scales without you doing
            the cleaning.
          </p>
          <div className="hero-cta-group">
            <Link href="#offer" className="btn-primary">
              Get the Complete System
              <span className="arrow" aria-hidden="true">→</span>
            </Link>
            <Link href="#whats-inside" className="btn-ghost">
              See What&rsquo;s Inside ↓
            </Link>
          </div>
          <div className="hero-trust">
            <div className="trust-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 1L10.163 5.382L15 6.09L11.5 9.494L12.326 14.31L8 12.032L3.674 14.31L4.5 9.494L1 6.09L5.837 5.382L8 1Z" fill="#C8A96E"/>
              </svg>
              340+ pages of operational content
            </div>
            <div className="trust-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M13.5 2.5H2.5C1.948 2.5 1.5 2.948 1.5 3.5V12.5C1.5 13.052 1.948 13.5 2.5 13.5H13.5C14.052 13.5 14.5 13.052 14.5 12.5V3.5C14.5 2.948 14.052 2.5 13.5 2.5Z" stroke="#8A9AB0" strokeWidth="1.2"/>
                <path d="M1.5 6.5H14.5" stroke="#8A9AB0" strokeWidth="1.2"/>
              </svg>
              6 fillable business templates
            </div>
            <div className="trust-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <circle cx="8" cy="8" r="6.5" stroke="#8A9AB0" strokeWidth="1.2"/>
                <path d="M5.5 8L7 9.5L10.5 6" stroke="#8A9AB0" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
              Instant digital delivery
            </div>
            <div className="trust-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 1.5L9.545 5.545L14 6.09L10.9 9.09L11.708 13.5L8 11.41L4.292 13.5L5.1 9.09L2 6.09L6.455 5.545L8 1.5Z" stroke="#8A9AB0" strokeWidth="1.2" fill="none"/>
              </svg>
              Built by operators, not theorists
            </div>
          </div>
        </div>

        {/* ── RIGHT: animated business dashboard ── */}
        <div className="hero-dashboard" ref={dashRef} aria-hidden="true">

          {/* Card 1 — MRR */}
          <div className="hdash-card hdash-mrr">
            <div className="hdash-label">Monthly Recurring Revenue</div>
            <div className="hdash-big">$40,000</div>
            <div className="hdash-sub">10 active contracts · growing</div>
            <div className="hdash-mrr-footer">
              <span className="hdash-pill">↑ 18% vs last month</span>
              <Sparkline values={[10, 16, 22, 19, 27, 33, 40]} />
            </div>
          </div>

          {/* Card 2 — Revenue chart */}
          <div className="hdash-card hdash-chart">
            <div className="hdash-label">12-Month Revenue Trajectory</div>
            <RevenueChart />
            <div className="hdash-chart-footer">
              <span>Month 1</span><span style={{ color:'#C8A96E', fontWeight:600 }}>$40K / mo</span>
            </div>
          </div>

          {/* Cards 3 + 4 — mini stats */}
          <div className="hdash-mini-row">
            <div className="hdash-card hdash-mini">
              <div className="hdash-label">Net Margin</div>
              <div className="hdash-big hdash-big-sm">32–38%</div>
              <div className="hdash-sub">after all expenses</div>
            </div>
            <div className="hdash-card hdash-mini">
              <div className="hdash-label">Avg Contract</div>
              <div className="hdash-big hdash-big-sm">$4,000</div>
              <div className="hdash-sub">per month, recurring</div>
            </div>
          </div>

          {/* Card 5 — contract pipeline */}
          <div className="hdash-card hdash-pipeline">
            <div className="hdash-label">Active Contract Pipeline</div>
            {[
              { name:'Meridian Office Park',    val:'$4,200/mo',  live:true  },
              { name:'Northgate Medical Ctr',   val:'$6,800/mo',  live:true  },
              { name:'Summit Property Group',   val:'$11,400/mo', live:true  },
              { name:'Tech Campus Complex',     val:'$3,600/mo',  live:false },
            ].map(c => (
              <div key={c.name} className="hdash-row">
                <span className={`hdash-dot ${c.live ? 'dot-live' : 'dot-prospect'}`} />
                <span className="hdash-client">{c.name}</span>
                <span className="hdash-val">{c.val}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
