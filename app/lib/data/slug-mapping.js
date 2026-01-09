/**
 * Mapping of URL slugs to data sources
 * Used for dynamic route handling
 */

export const GENERATION_SLUGS = [
  'gen-alpha',
  'gen-z',
  'millennials',
  'gen-x',
  'baby-boomers',
  'silent-generation',
]

export function isGenerationSlug(slug) {
  return GENERATION_SLUGS.includes(slug)
}

export function getSlugPath(slug) {
  // Maps data slugs to URL paths
  // Handles special cases like 'baby-boomers' -> 'baby-boomers'
  return slug
}
