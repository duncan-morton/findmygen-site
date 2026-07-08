/**
 * Shared generation link card: emoji, name, birth-year range, current ages and
 * (optionally) a tagline. Used on the homepage grid and in RelatedContent so
 * the gradient-card markup lives in one place.
 */

import Link from 'next/link'
import { getAgeRange, getYearRangeDisplay } from '../lib/data/generations'

export default function GenerationCard({ gen }) {
  const ages = getAgeRange(gen)
  return (
    <Link
      href={`/${gen.slug}`}
      className={`p-6 bg-gradient-to-br ${gen.bgGradient} rounded-xl hover:shadow-lg transition border-2 border-gray-200 hover:border-blue-400`}
    >
      <div className="text-4xl mb-2">{gen.emoji}</div>
      <h3 className="text-xl font-bold mb-2">{gen.shortName}</h3>
      <p className="text-gray-600 text-sm">
        {getYearRangeDisplay(gen)} • Ages {ages.start}-{ages.end}
      </p>
      {gen.tagline && <p className="text-gray-700 mt-2">{gen.tagline}</p>}
    </Link>
  )
}
