/**
 * Dynamic sitemap generation
 * Includes all indexable pages from data sources
 */

import { getAllGenerationSlugs, getGenerationBySlug } from './lib/data/generations'
import { getAllPostSlugs, getPostBySlug } from './lib/data/blog'
import { getAllComparisonSlugs } from './lib/data/comparisons'

const siteUrl = 'https://www.findmygen.com'

export default function sitemap() {
  const baseDate = new Date()
  
  // Homepage and core pages
  const corePages = [
    {
      url: siteUrl,
      lastModified: baseDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: baseDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified: baseDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // Generation pages from data source
  const generationPages = getAllGenerationSlugs().map((slug) => {
    const gen = getGenerationBySlug(slug)
    return {
      url: `${siteUrl}/${slug}`,
      lastModified: baseDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    }
  })

  // Blog post pages from data source
  const blogPages = getAllPostSlugs().map((slug) => {
    const post = getPostBySlug(slug)
    return {
      url: `${siteUrl}/blog/${slug}`,
      lastModified: post?.dateModified ? new Date(post.dateModified) : baseDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    }
  })

  // Indexable generation-vs-generation comparison pages
  const comparisonPages = getAllComparisonSlugs().map((slug) => ({
    url: `${siteUrl}/compare/${slug}`,
    lastModified: baseDate,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  // Combine all pages
  return [...corePages, ...generationPages, ...blogPages, ...comparisonPages]
}
