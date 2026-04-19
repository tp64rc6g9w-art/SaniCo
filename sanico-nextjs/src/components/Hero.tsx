'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

function Sparkline({ values, color = '#C8A96E' }: { values: number[]; color?: string }) {
  const w = 80, h = 26;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const pts = values.map((v, i) => {
    const x = (i / (values.length - 1)) * w;
    const y = h - ((v - min) / (max - min || 1)) * (h - 6) - 3;
    return `${x},${y}`;
  }).join(' ');
  const last = pts.split(' ').at(-1)!.split(',');
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none" aria-hidden="true">
      <polyline points={pts} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={last[0]} cy={last[1]} r="3" fill={color} />
    </svg>
  );
}

function BarChart() {
  const bars = [
    { label: 'Mo 1',  pct: 12,  active: false },
    { label: 'Mo 3',  pct: 28,  active: false },
    { label: 'Mo 6',  pct: 52,  active: false },
    { label: 'Mo 9',  pct: 74,  active: false },
    { label: 'Mo 12', pct: 100, active: true  },
  ];
  return (
    <div style={{ display:'flex', alignItems:'flex-end', gap:7, height:58 }} aria-hidden="true">
      {bars.map(b => (
        <div key={b.label} style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', gap:4 }}>
          <div style={{
            width:'100%',
            height: `${b.pct * 0.58}px`,
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
      setTimeout(() => el.classList.add('in'), 200 + i * 140);
    });
  }, []);

  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="container hero-inner">

        {/* ── LEFT: copy ── */}
        <div className="hero-copy">
          <div className="hero-eyebrow">
            The Corporate Cleaning Startup System
          </div>

          <h1>
            Start a Commercial Cleaning Business That{' '}
            <em>Pays You Every Month.</em>
          </h1>

          <p className="hero-sub">
            Build a contract-based cleaning business with recurring monthly revenue from corporate clients —
            even if you&rsquo;ve never owned a business or picked up a mop. Complete system, pricing formulas,
            client acquisition scripts, and 6 ready-to-use business templates.
          </p>

          <div className="hero-chips">
            <span className="hero-chip">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
              </svg>
              Recurring monthly contracts
            </span>
            <span className="hero-chip">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
              </svg>
              Low startup cost
            </span>
            <span className="hero-chip">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
              </svg>
              Scales without your labor
            </span>
          </div>

          <div className="hero-cta-group">
            <Link href="#offer" className="btn btn-primary">
              Get the Complete System — $97
              <span className="arrow" aria-hidden="true">→</span>
            </Link>
            <Link href="#how" className="btn btn-secondary">
              How It Works
            </Link>
          </div>

          <div className="hero-micro">
            <div className="hero-micro-item">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.3"/>
                <path d="M5 7l1.5 1.5L9 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
              Instant digital delivery
            </div>
            <div className="hero-micro-item">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 4.5h8M3 7h8M3 9.5h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
              340+ pages + 6 templates
            </div>
            <div className="hero-micro-item">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M7 1.5l1.7 3.4 3.8.5-2.75 2.65.65 3.75L7 10l-3.4 1.8.65-3.75L1.5 5.4l3.8-.5L7 1.5z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              </svg>
              Built by active operators
            </div>
          </div>
        </div>

        {/* ── RIGHT: animated dashboard ── */}
        <div className="hero-dashboard" ref={dashRef} aria-label="Example business dashboard">

          <div className="hdash-card hdash-mrr">
            <div className="hdash-label">Monthly Recurring Revenue</div>
            <div className="hdash-big">$40,000</div>
            <div className="hdash-sub">10 active contracts · growing</div>
            <div className="hdash-mrr-footer">
              <span className="hdash-pill">↑ 18% MoM</span>
              <Sparkline values={[10, 16, 22, 19, 27, 33, 40]} />
            </div>
          </div>

          <div className="hdash-card">
            <div className="hdash-label">12-Month Revenue Trajectory</div>
            <BarChart />
            <div className="hdash-chart-footer">
              <span>Month 1</span>
              <span style={{ color:'#C8A96E', fontWeight:600 }}>$40K / mo</span>
            </div>
          </div>

          <div className="hdash-mini-row">
            <div className="hdash-card">
              <div className="hdash-label">Net Margin</div>
              <div className="hdash-big hdash-big-sm">32–38%</div>
              <div className="hdash-sub" style={{ marginBottom: 0 }}>after all expenses</div>
            </div>
            <div className="hdash-card">
              <div className="hdash-label">Avg Contract</div>
              <div className="hdash-big hdash-big-sm">$4,000</div>
              <div className="hdash-sub" style={{ marginBottom: 0 }}>per month, recurring</div>
            </div>
          </div>

          <div className="hdash-card">
            <div className="hdash-label">Active Contract Pipeline</div>
            {[
              { name:'Meridian Office Park',   val:'$4,200/mo',  live:true  },
              { name:'Northgate Medical Ctr',  val:'$6,800/mo',  live:true  },
              { name:'Summit Property Group',  val:'$11,400/mo', live:true  },
              { name:'Tech Campus Complex',    val:'$3,600/mo',  live:false },
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
