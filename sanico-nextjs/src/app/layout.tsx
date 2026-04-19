import type { Metadata, Viewport } from 'next';
import { Playfair_Display, DM_Sans, DM_Mono } from 'next/font/google';
import Script from 'next/script';
import '@/styles/globals.css';

/* ── FONTS ── */
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
});
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});
const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://sanicogroup.com';

/* ── SEO METADATA ── */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'How to Start a Commercial Cleaning Business | SaniCo Startup System',
  description:
    'The proven system for starting a corporate cleaning business with recurring monthly contracts. Complete pricing formulas, client acquisition scripts, operational SOPs, and 6 business templates. Build $10K–$40K/month in contract revenue.',
  keywords: [
    'how to start a commercial cleaning business',
    'corporate cleaning business startup',
    'commercial cleaning contracts',
    'recurring revenue cleaning business',
    'office cleaning business guide',
    'janitorial business startup',
    'commercial cleaning business plan',
    'how to get commercial cleaning clients',
    'cleaning business pricing',
  ],
  authors: [{ name: 'SaniCo Business Solutions' }],
  creator: 'SaniCo Business Solutions',
  publisher: 'SaniCo Business Solutions',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${SITE_URL}/`,
    siteName: 'SaniCo Business Solutions',
    title: 'Start a Corporate Cleaning Business That Pays You Every Month',
    description:
      'The complete system for launching a contract-based cleaning business. Pricing formulas, acquisition scripts, SOPs, 6 templates. Built for operators, not students.',
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'SaniCo Corporate Cleaning Startup System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Start a Corporate Cleaning Business That Pays You Every Month',
    description:
      'The complete system for launching a contract-based cleaning business. $10K–$40K/month in recurring revenue.',
    images: [`${SITE_URL}/images/og-image.jpg`],
  },
  icons: {
    icon: [
      { url: '/images/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/images/apple-touch-icon.png', sizes: '180x180' }],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A1322',
};

/* ── JSON-LD structured data ── */
const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'SaniCo Corporate Cleaning Startup System',
  description:
    'Complete roadmap and business templates for launching a commercial cleaning business with recurring monthly contracts.',
  brand: { '@type': 'Brand', name: 'SaniCo Business Solutions' },
  offers: {
    '@type': 'Offer',
    url: `${SITE_URL}/#offer`,
    priceCurrency: 'USD',
    price: '97',
    availability: 'https://schema.org/InStock',
    itemCondition: 'https://schema.org/NewCondition',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '100',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need prior cleaning or business experience to start a commercial cleaning business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No prior experience is required. The system is written from first principles and walks through legal structure, equipment, pricing, hiring, and operations. Most operators who launch successfully have no cleaning industry background before starting.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much money do I need to start a commercial cleaning business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As a solo Phase 1 operator focused on landing your first contract, the realistic startup cost is $500–$1,200 for equipment and supplies, $800–$2,400/year for liability insurance, and $50–$500 for LLC formation depending on your state. Most operators fund expansion from their first contract revenue.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much can a commercial cleaning business make?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Individual results vary, but industry data shows mid-sized corporate cleaning contracts range from $1,500–$12,000 per month, with net profit margins of 28–38% for well-run operations. A portfolio of 10 contracts averaging $4,000/month generates $40,000 in monthly recurring revenue.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to land the first commercial cleaning client?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The typical timeline from first outreach to signed contract is 6–12 weeks. Operators who execute the system consistently often secure their first contract within 5–6 weeks using walk-in outreach and property management relationships.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I run a commercial cleaning business part-time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Most commercial cleaning contracts are serviced in evening hours (4 PM to midnight), which fits around a full-time day job. Many operators build the business on nights and weekends before transitioning full-time once contract revenue justifies it.',
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body>
        {children}
        <Script
          id="schema-product"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        <Script
          id="schema-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </body>
    </html>
  );
}
