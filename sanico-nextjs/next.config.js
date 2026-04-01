/** @type {import('next').NextConfig} */
const nextConfig = {
  // Clean output for static export (Vercel/Netlify also works without this)
  // Uncomment if you want a fully static export:
  // output: 'export',

  // Recommended for production
  poweredByHeader: false,
  compress: true,

  // Allow Google Fonts to be loaded via next/font or direct <link>
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options',         value: 'DENY' },
          { key: 'X-Content-Type-Options',  value: 'nosniff' },
          { key: 'Referrer-Policy',         value: 'strict-origin-when-cross-origin' },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
