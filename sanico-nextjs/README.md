# SaniCo v3 — Conversion-Optimized Next.js Landing Page

Production-ready Next.js 14 landing page rebuilt from the ground up for paid traffic conversion
and SEO performance.

**What's new in v3:**
- Complete information architecture redesigned for cold paid-ad traffic
- Strengthened SEO foundation (metadata, Product + FAQ JSON-LD schema, semantic HTML)
- New sections: announcement bar, trust strip, problem/opportunity, revenue ladder, 3-step "how it works," inline CTA, differentiator table, mobile sticky CTA
- Premium visual system with animated hero dashboard, gold-accent design language, and refined typography
- Full mobile-first responsive behavior with mobile-specific bottom sticky CTA

---

## Project Structure

```
sanico-nextjs/
├── .env.example                 ← Copy to .env.local and set your URLs
├── .gitignore
├── next.config.js               ← Security headers, caching
├── next-env.d.ts
├── package.json
├── tsconfig.json
├── public/images/               ← Add og-image.jpg + favicons here
└── src/
    ├── app/
    │   ├── layout.tsx           ← SEO metadata + JSON-LD schemas
    │   └── page.tsx             ← 15-section composition
    ├── components/              ← 20 components (see below)
    ├── lib/
    │   └── config.ts            ← CHECKOUT_URL, PRICE, RETAIL_PRICE
    └── styles/
        └── globals.css          ← Full design system (1,400 lines)
```

### Components

| Component | Purpose |
|---|---|
| `AnnounceBar` | Top urgency strip — launch pricing callout |
| `StickyNav` | Fixed nav that appears after scroll, with brand + CTA |
| `MobileStickyCTA` | Bottom-anchored CTA for mobile (≤900px) after scroll |
| `Hero` | Animated business dashboard + persuasive headline |
| `TrustStrip` | Credibility row with 4 trust signals |
| `StatsBand` | 4 industry statistics on dark background |
| `Problem` | Old path vs. new path — repositions buyer mindset |
| `WhyNow` | 3 data-backed opportunity cards |
| `Revenue` | Revenue ladder + income math |
| `Steps` | 3-step "how it works" with inline CTA block |
| `Included` | 9-chapter breakdown with "practical not theoretical" badge |
| `Templates` | 6 business templates included |
| `Differentiator` | Comparison table: generic advice vs. SaniCo |
| `Buyer` | Yes/no qualifier columns |
| `Proof` | 3 testimonial cards with avatar initials |
| `Offer` | Value stack + sticky offer card with save pill |
| `FAQ` | Accordion with 10 questions (aligned with JSON-LD schema) |
| `FinalCTA` | Emotionally-anchored closer with large CTA |
| `Footer` | Structured footer with SEO-friendly anchor links |
| `FadeUp` | Scroll-triggered animation wrapper |

---

## Quick Start

```bash
cd sanico-nextjs
npm install
cp .env.example .env.local
# Edit .env.local — set NEXT_PUBLIC_CHECKOUT_URL and NEXT_PUBLIC_SITE_URL
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Environment variables

Set these in `.env.local` (locally) and in your hosting provider's dashboard (production):

```env
NEXT_PUBLIC_CHECKOUT_URL=https://your-stripe-or-gumroad-link.com
NEXT_PUBLIC_SITE_URL=https://sanicogroup.com
```

---

## Before Going Live

### Content checklist
- [ ] Set `NEXT_PUBLIC_CHECKOUT_URL` to your real payment processor link
- [ ] Set `NEXT_PUBLIC_SITE_URL` to your production domain (used for canonical + OG URLs)
- [ ] Add `public/images/og-image.jpg` (1200×630) for social sharing
- [ ] Add favicons to `public/images/` (favicon-16.png, favicon-32.png, apple-touch-icon.png)
- [ ] Replace the three testimonial cards in `src/components/Proof.tsx` once you have verified reviews
- [ ] Update the announcement bar text in `src/components/AnnounceBar.tsx` if needed
- [ ] Review the FAQ in `src/components/FAQ.tsx` — keep it aligned with your actual refund policy

### SEO checklist
- [ ] Confirm `<title>` and meta description in `src/app/layout.tsx`
- [ ] Verify JSON-LD schemas render correctly (view source on production)
- [ ] Submit `sitemap.xml` to Google Search Console once deployed
- [ ] Set up Google Analytics 4 and Meta Pixel via `next/script` in `layout.tsx`
- [ ] Test Core Web Vitals with Lighthouse (should score 95+)

---

## Deploying to Vercel

1. Push to GitHub
2. Import at [vercel.com](https://vercel.com) → auto-detects Next.js
3. Add env vars under **Settings → Environment Variables**
4. Add your custom domain under **Settings → Domains**
5. SSL is provisioned automatically

## Deploying to Netlify

Build command: `npm run build` — Publish directory: `.next`. The Netlify Next.js plugin is auto-installed.

---

## Analytics Setup

Add this before `</body>` in `layout.tsx`:

```tsx
import Script from 'next/script';

// Inside the <body>:
<Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
<Script id="gtag-init" strategy="afterInteractive">
  {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date()); gtag('config','G-XXXXXXXXXX');`}
</Script>
```

---

## Support

SaniCo Business Solutions · www.sanicogroup.com · info@sanicogroup.com
