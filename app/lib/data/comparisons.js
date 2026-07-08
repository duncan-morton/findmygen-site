/**
 * Comparison data: editorial side-by-side copy plus the curated set of
 * indexable /compare/<a>-vs-<b> pages.
 *
 * Identity fields (name, birth years, ages, emoji, colour) are pulled from the
 * canonical generation source so they never drift; only the comparison-specific
 * copy lives here. Shared by the interactive /compare tool and the static
 * comparison pages.
 */

import { getGenerationBySlug, getAgeRange, getYearRangeDisplay } from './generations'

// Comparison-specific editorial copy, keyed by canonical generation slug.
export const comparisonContent = {
  'gen-alpha': {
    traits: ['AI Native', 'iPad Kids', 'Pandemic Schooling', 'Voice-First', 'Most Diverse'],
    tech: 'Born with tablets and voice assistants',
    work: 'Too young - will reshape future workplace',
    values: 'Inclusivity, technology integration, adaptability',
    communication: 'Voice commands, short videos, emojis',
    notable: 'First generation born entirely in 21st century',
  },
  'gen-z': {
    traits: ['Digital Natives', 'Socially Conscious', 'Entrepreneurial', 'Authentic', 'Mental Health Aware'],
    tech: 'Smartphones, TikTok, social media fluent',
    work: 'Value flexibility, purpose, work-life balance',
    values: 'Diversity, sustainability, mental health, authenticity',
    communication: 'Texting, memes, short-form video',
    notable: 'First generation never knowing life without internet',
  },
  millennials: {
    traits: ['Tech Savvy', 'Experience-Focused', 'Optimistic', 'Collaborative', 'Purpose-Driven'],
    tech: 'Adapted to smartphones, social media pioneers',
    work: 'Work-life balance, meaningful work, job hoppers',
    values: 'Experiences over things, social responsibility, diversity',
    communication: 'Text, email, social media, mix of digital and traditional',
    notable: 'Bridge between analog childhood and digital adulthood',
  },
  'gen-x': {
    traits: ['Independent', 'Skeptical', 'Resourceful', 'Pragmatic', 'Work-Life Balance'],
    tech: 'Adapted well, comfortable with both analog and digital',
    work: 'Results-focused, hands-off management, direct communication',
    values: 'Independence, authenticity, work-life balance, skepticism',
    communication: 'Email, phone calls, direct and to the point',
    notable: 'The forgotten generation, latchkey kids',
  },
  'baby-boomers': {
    traits: ['Hardworking', 'Competitive', 'Optimistic', 'Loyal', 'Goal-Oriented'],
    tech: 'Adapted out of necessity, prefer traditional methods',
    work: 'Live to work, company loyalty, face time important',
    values: 'Success, achievement, traditional family, materialism',
    communication: 'Phone calls, face-to-face, formal emails',
    notable: 'Largest generation, drove cultural revolutions of 60s-70s',
  },
  'silent-generation': {
    traits: ['Dutiful', 'Frugal', 'Loyal', 'Respectful', 'Traditional'],
    tech: 'Witnessed most change, prefer simplicity',
    work: 'Company loyalty for life, respect hierarchy',
    values: 'Hard work, sacrifice, saving, respect for authority',
    communication: 'Phone calls, letters, in-person',
    notable: 'Grew up during Great Depression and WWII',
  },
}

/**
 * Merge canonical identity data with the editorial comparison copy for a slug.
 * Age/year figures resolve against the current year at call time.
 */
export function getComparisonGen(slug) {
  const canon = getGenerationBySlug(slug)
  if (!canon) return null
  const ages = getAgeRange(canon)
  return {
    slug,
    name: canon.shortName,
    years: getYearRangeDisplay(canon),
    ages: `${ages.start}-${ages.end}`,
    emoji: canon.emoji,
    color: canon.color,
    ...comparisonContent[slug],
  }
}

/**
 * Curated pairs that get their own indexable comparison page. Deliberately
 * excludes pairs already covered by a dedicated blog article (gen-z vs
 * millennials, millennials vs gen-x, gen-x vs baby-boomers) to avoid competing
 * with those posts for the same search term.
 */
export const comparisonPairs = [
  ['gen-z', 'gen-alpha'],
  ['millennials', 'baby-boomers'],
  ['baby-boomers', 'silent-generation'],
  ['gen-z', 'gen-x'],
  ['gen-alpha', 'millennials'],
  ['gen-x', 'silent-generation'],
]

export function comparisonSlug([a, b]) {
  return `${a}-vs-${b}`
}

export function getAllComparisonSlugs() {
  return comparisonPairs.map(comparisonSlug)
}

// Resolve a URL slug back to its [a, b] pair. Matches against the known pairs
// rather than splitting on '-vs-' (generation slugs themselves contain hyphens).
export function getComparisonPair(slug) {
  return comparisonPairs.find((pair) => comparisonSlug(pair) === slug) || null
}
