const siteUrl = 'https://www.findmygen.com'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        // Allow the indexable /compare/<a>-vs-<b> guides while keeping the
        // interactive /compare tool page itself out of the index. The longer
        // '/compare/' allow rule wins over the '/compare' disallow for subpaths.
        allow: ['/', '/compare/'],
        disallow: ['/quiz', '/compare', '/api/'],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}