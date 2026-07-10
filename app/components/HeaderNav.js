/**
 * Sitewide header. Compact single row: wordmark + nav, with the six generation
 * links tucked into a native <details> disclosure so the bar stays slim and the
 * component stays a no-JS, accessible server component.
 */

import Link from 'next/link'
import { getAllGenerationSlugs, getGenerationBySlug, getYearRangeDisplay } from '../lib/data/generations'

const navLink =
  'rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900'

export default function HeaderNav() {
  const allGenerations = getAllGenerationSlugs()
    .map((slug) => getGenerationBySlug(slug))
    .filter((gen) => gen !== undefined)
    .sort((a, b) => b.yearRange.start - a.yearRange.start)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3"
      >
        <Link
          href="/"
          className="rounded px-1 text-lg font-bold tracking-tight text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand"
          aria-label="FindMyGen home"
        >
          Find<span className="text-brand">My</span>Gen
        </Link>

        <div className="flex items-center gap-0.5 sm:gap-1">
          <details className="group relative">
            <summary className="flex cursor-pointer list-none items-center gap-1 rounded-lg px-2.5 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 [&::-webkit-details-marker]:hidden">
              Generations
              <span className="text-xs transition group-open:rotate-180" aria-hidden="true">▾</span>
            </summary>
            <div className="absolute right-0 z-50 mt-2 w-60 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
              {allGenerations.map((gen) => (
                <Link
                  key={gen.slug}
                  href={`/${gen.slug}`}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition hover:bg-slate-50"
                >
                  <span aria-hidden="true">{gen.emoji}</span>
                  <span className="font-medium text-slate-700">{gen.shortName}</span>
                  <span className="ml-auto text-xs text-slate-400">{getYearRangeDisplay(gen)}</span>
                </Link>
              ))}
            </div>
          </details>

          <Link href="/compare" className={navLink}>Compare</Link>
          <Link href="/quiz" className={navLink}>Quiz</Link>
          <Link href="/blog" className={navLink}>Blog</Link>
        </div>
      </nav>
    </header>
  )
}
