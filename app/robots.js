const siteUrl = 'https://findmygen.com'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/quiz', '/compare', '/api/'],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}