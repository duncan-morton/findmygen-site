/**
 * Shared generation link card. White surface with a hairline border and a small
 * generation-colour accent dot — the generation palette shows up as an accent,
 * not a full background. Used on the homepage grid and in RelatedContent.
 */

import Link from 'next/link'
import { getAgeRange, getYearRangeDisplay } from '../lib/data/generations'

export default function GenerationCard({ gen }) {
  const ages = getAgeRange(gen)
  return (
    <Link
      href={`/${gen.slug}`}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl" aria-hidden="true">{gen.emoji}</span>
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span
              className="h-2 w-2 shrink-0 rounded-full"
              style={{ backgroundColor: gen.colorHex }}
              aria-hidden="true"
            />
            <h3 className="truncate font-semibold text-slate-900">{gen.shortName}</h3>
          </div>
          <p className="text-sm text-slate-500">
            {getYearRangeDisplay(gen)} · Ages {ages.start}-{ages.end}
          </p>
        </div>
      </div>
      {gen.tagline && <p className="mt-3 text-sm text-slate-600">{gen.tagline}</p>}
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
        Read guide
        <span className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
      </span>
    </Link>
  )
}
