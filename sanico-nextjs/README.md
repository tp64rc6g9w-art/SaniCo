# SaniCo Business Solutions — Next.js Landing Page

Production-ready Next.js 14 landing page for the Corporate Cleaning Startup Guide.
App Router · TypeScript · next/font · CSS Modules-free (global CSS) · Zero runtime dependencies beyond React + Next.

---

## Project Structure

```
sanico-nextjs/
├── .env.example                    ← Copy to .env.local and fill in values
├── .gitignore
├── next-env.d.ts
├── next.config.js                  ← Security headers, caching rules
├── package.json
├── tsconfig.json
├── public/
│   └── images/                     ← Add og-image.jpg, favicons here
└── src/
    ├── app/
    │   ├── layout.tsx              ← Root layout: fonts, metadata, global CSS
    │   └── page.tsx                ← Page: imports all section components
    ├── components/
    │   ├── StickyNav.tsx           ← 'use client' — scroll-triggered nav
    │   ├── Hero.tsx                ← Hero section (server component)
    │   ├── StatsBand.tsx           ← 4-stat grid band
    │   ├── Opportunity.tsx         ← Two-column opportunity section
    │   ├── WrongBusinesses.tsx     ← 2×2 comparison cards (dark bg)
    │   ├── IncomeLogic.tsx         ← Income milestone rows
    │   ├── WhatsInside.tsx         ← 9-card chapter grid
    │   ├── Templates.tsx           ← 6-card templates grid (dark bg)
    │   ├── NotFluff.tsx            ← 4-card "not fluff" grid (dark bg)
    │   ├── IdealBuyer.tsx          ← Two-column buyer qualification
    │   ├── Proof.tsx               ← 3-card testimonial grid
    │   ├── Offer.tsx               ← Value stack + sticky offer card
    │   ├── FAQ.tsx                 ← 'use client' — accordion FAQ
    │   ├── FinalCTA.tsx            ← Closing CTA section
    │   ├── Footer.tsx              ← Footer
    │   ├── FadeUp.tsx              ← 'use client' — scroll-animate wrapper
    │   └── useFadeUp.ts            ← IntersectionObserver hook (optional)
    └── styles/
        └── globals.css             ← All styles (full port from static site)
```

---

## Quick Start

### 1. Install dependencies

```bash
cd sanico-nextjs
npm install
```

### 2. Configure environment variables

```bash
cp .env.example .env.local
```

Open `.env.local` and set:

```env
NEXT_PUBLIC_CHECKOUT_URL=https://your-actual-checkout-link.com/sanico-guide
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Build for production

```bash
npm run build
npm run start
```

---

## Before Going Live

### ✅ Checklist

- [ ] Set `NEXT_PUBLIC_CHECKOUT_URL` in `.env.local` (and in your hosting provider's env settings)
- [ ] Set `NEXT_PUBLIC_SITE_URL` to your production domain
- [ ] Add images to `public/images/`:
  - `og-image.jpg` — 1200×630px, used for social sharing previews
  - `favicon-32.png` — 32×32px browser tab icon
  - `favicon-16.png` — 16×16px browser tab icon
  - `apple-touch-icon.png` — 180×180px iOS home screen icon
- [ ] Update favicon links in `src/app/layout.tsx` (currently pointing to `/images/favicon-*.png`)
- [ ] Replace the three testimonial placeholder cards in `src/components/Proof.tsx` with real verified testimonials
- [ ] Update the copyright year and contact details in `src/components/Footer.tsx`
- [ ] Update domain throughout (currently `sanicogroup.com`) — your `.env.local` handles metadata, but also check `next.config.js` redirects if needed

---

## Deploying to Vercel (Recommended — 5 minutes)

Vercel is the natural home for Next.js (same company).

### Option A — Vercel Dashboard (no CLI needed)

1. Push this folder to a GitHub, GitLab, or Bitbucket repo
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import your repo
3. Vercel auto-detects Next.js — no build config needed
4. Add your environment variables under **Settings → Environment Variables**:
   - `NEXT_PUBLIC_CHECKOUT_URL`
   - `NEXT_PUBLIC_SITE_URL`
5. Add your custom domain under **Settings → Domains**
6. Deploy — SSL is provisioned automatically

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel                    # follows prompts, deploys to preview URL
vercel --prod             # deploys to production
```

Set env vars via CLI:
```bash
vercel env add NEXT_PUBLIC_CHECKOUT_URL
vercel env add NEXT_PUBLIC_SITE_URL
```

---

## Deploying to Netlify

1. Push to GitHub
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site → Import from Git**
3. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
4. Install the [Netlify Next.js plugin](https://github.com/netlify/netlify-plugin-nextjs) — Netlify usually installs it automatically for Next.js projects
5. Add env vars under **Site settings → Environment variables**
6. Add your custom domain under **Domain management**

---

## Adding Analytics

Paste your analytics snippet inside `src/app/layout.tsx`, just before `</body>`:

### Google Analytics 4
```tsx
// In layout.tsx, add to the <head> via next/script or metadata
import Script from 'next/script'

// Inside <body>, before children:
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
<Script id="gtag-init" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### Meta Pixel
```tsx
<Script id="fb-pixel" strategy="afterInteractive">
  {`
    !function(f,b,e,v,n,t,s){...}(window,document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', 'YOUR_PIXEL_ID');
    fbq('track', 'PageView');
  `}
</Script>
```

---

## Architecture Notes

### Why `'use client'` is scoped tightly
Only three components use `'use client'`:
- `StickyNav` — needs `window.scrollY`
- `FadeUp` — needs `IntersectionObserver`
- `FAQ` — needs `useState` for accordion

Everything else is a **React Server Component** (RSC) by default, which means:
- Zero JS shipped for those sections
- Full static rendering at build time
- Faster Time to First Byte (TTFB) and Largest Contentful Paint (LCP)

### Fonts
Fonts are loaded via `next/font/google` in `layout.tsx`, which:
- Self-hosts the fonts (no external Google Fonts request at runtime)
- Eliminates layout shift (font CSS is inlined)
- Passes Core Web Vitals with no additional config

### CSS approach
All styles live in `src/styles/globals.css` (a direct 1:1 port from the static site).
This keeps the migration simple and the styles identical to the original design.
If you later want to add component-level styles, CSS Modules (`.module.css`) work natively in Next.js.

---

## Support

SaniCo Business Solutions  
www.sanicogroup.com · info@sanicogroup.com
