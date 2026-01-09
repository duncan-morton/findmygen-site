/**
 * Breadcrumb component with structured data
 * Used for internal linking and SEO
 */

import Link from 'next/link'

const siteUrl = 'https://findmygen.com'

export default function Breadcrumbs({ items = [] }) {
  // Ensure home is first
  const breadcrumbItems = [
    { name: 'Home', href: siteUrl },
    ...items.filter((item) => item.name !== 'Home'),
  ]

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.href.startsWith('http') ? item.href : `${siteUrl}${item.href}`,
    })),
  }

  if (breadcrumbItems.length <= 1) return null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <nav className="mb-6 text-sm" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2">
          {breadcrumbItems.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && <span className="mx-2 text-gray-500">→</span>}
              {index === breadcrumbItems.length - 1 ? (
                <span className="text-gray-700 font-medium">{item.name}</span>
              ) : (
                <Link
                  href={item.href}
                  className="text-blue-600 hover:text-blue-700 hover:underline transition"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
