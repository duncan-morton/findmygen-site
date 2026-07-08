/** @type {import('next').NextConfig} */
const nextConfig = {
  // Baseline security headers applied to every response.
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
          },
        ],
      },
    ]
  },

  // Force the canonical host: redirect the bare apex to www so the two hosts
  // never serve duplicate content (in addition to any host-level redirect).
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'findmygen.com' }],
        destination: 'https://www.findmygen.com/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
