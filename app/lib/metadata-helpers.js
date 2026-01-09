/**
 * Metadata helper functions for consistent SEO across pages
 * Used for generateMetadata in dynamic routes
 */

const siteUrl = 'https://findmygen.com'

export function generateGenerationMetadata(gen) {
  if (!gen) return {}

  const yearDisplay = `${gen.yearRange.start} - ${gen.yearRange.end === 2025 ? 'Present' : gen.yearRange.end}`
  const ogImageUrl = `${siteUrl}/api/og?type=generation&slug=${gen.slug}&title=${encodeURIComponent(gen.displayName)}&description=${encodeURIComponent(gen.shortDescription)}`

  return {
    metadataBase: new URL(siteUrl),
    title: `${gen.displayName}: Birth Years, Characteristics & Traits (${yearDisplay}) | FindMyGen`,
    description: gen.shortDescription,
    keywords: gen.keywords,
    alternates: {
      canonical: `${siteUrl}/${gen.slug}`,
    },
    openGraph: {
      title: `${gen.displayName}: Birth Years, Characteristics & Traits (${yearDisplay})`,
      description: gen.shortDescription,
      type: 'article',
      url: `${siteUrl}/${gen.slug}`,
      siteName: 'FindMyGen',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${gen.displayName} - Birth Years ${yearDisplay}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${gen.displayName}: Birth Years, Characteristics & Traits (${yearDisplay})`,
      description: gen.shortDescription.substring(0, 160),
      images: [ogImageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export function generateBlogMetadata(post) {
  if (!post) return {}

  const ogImageUrl = `${siteUrl}/api/og?type=blog&slug=${post.slug}&title=${encodeURIComponent(post.title)}&description=${encodeURIComponent(post.description)}`

  return {
    metadataBase: new URL(siteUrl),
    title: `${post.title} | FindMyGen`,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `${siteUrl}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: `${siteUrl}/blog/${post.slug}`,
      siteName: 'FindMyGen',
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description.substring(0, 160),
      images: [ogImageUrl],
    },
    authors: [{ name: post.author }],
    publishedTime: post.datePublished,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export function generateNoIndexMetadata(title, description) {
  return {
    metadataBase: new URL(siteUrl),
    title: `${title} | FindMyGen`,
    description,
    robots: {
      index: false,
      follow: true,
      googleBot: {
        index: false,
        follow: true,
      },
    },
  }
}

// Check if URL has query params that should be noindex
export function shouldNoIndexQueryParams(searchParams) {
  // List of allowed query params that should still be indexed
  const allowedParams = []
  
  // If any query params exist that aren't in allowed list, return true
  if (!searchParams || searchParams.size === 0) return false
  
  for (const [key] of searchParams.entries()) {
    if (!allowedParams.includes(key)) {
      return true // Has query params that should be noindex
    }
  }
  
  return false
}
