/**
 * Breadcrumb component with structured data
 * Used for internal linking and SEO
 */

import Link from 'next/link'

const siteUrl = 'https://www.findmygen.com'

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
      <nav className="mb-8 text-sm" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-x-1 text-slate-400">
          {breadcrumbItems.map((item, index) => (
            <li key={index} className="flex items-center gap-x-1">
              {index > 0 && <span aria-hidden="true">/</span>}
              {index === breadcrumbItems.length - 1 ? (
                <span className="font-medium text-slate-600">{item.name}</span>
              ) : (
                <Link href={item.href} className="text-slate-500 transition hover:text-brand">
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
