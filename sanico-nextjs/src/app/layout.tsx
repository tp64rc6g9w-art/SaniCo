import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans, DM_Mono } from 'next/font/google';
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
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
});

/* ── METADATA ── */
export const metadata: Metadata = {
  title: 'SaniCo Business Solutions — Corporate Cleaning Startup Guide',
  description:
    'The complete roadmap to building a $10K–$40K/month corporate cleaning business on recurring contracts. Pricing formulas, SOPs, client acquisition strategies, and 6 ready-to-use business templates.',
  robots: { index: true, follow: true },
  alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://sanicogroup.com'}/` },
  openGraph: {
    type: 'website',
    url: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://sanicogroup.com'}/`,
    title: 'SaniCo Business Solutions — Corporate Cleaning Startup Guide',
    description:
      'Build a contract-based corporate cleaning business that pays you every month. The complete operational system — real formulas, real scripts, 6 templates included.',
    images: [{ url: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://sanicogroup.com'}/images/og-image.jpg` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaniCo Business Solutions — Corporate Cleaning Startup Guide',
    description: 'Build a contract-based corporate cleaning business that pays you every month.',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://sanicogroup.com'}/images/og-image.jpg`],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
