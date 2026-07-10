/**
 * Sitewide header. Compact single row: wordmark + nav, with the six generation
 * links in a Generations dropdown (a small client island for proper open/close
 * behaviour). The header itself stays a server component.
 */

import Link from 'next/link'
import { getAllGenerationSlugs, getGenerationBySlug, getYearRangeDisplay } from '../lib/data/generations'
import GenerationsMenu from './GenerationsMenu'

const navLink =
  'rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900'

export default function HeaderNav() {
  const items = getAllGenerationSlugs()
    .map((slug) => getGenerationBySlug(slug))
    .filter((gen) => gen !== undefined)
    .sort((a, b) => b.yearRange.start - a.yearRange.start)
    .map((gen) => ({
      slug: gen.slug,
      shortName: gen.shortName,
      emoji: gen.emoji,
      years: getYearRangeDisplay(gen),
    }))

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
          <GenerationsMenu items={items} />
          <Link href="/compare" className={navLink}>Compare</Link>
          <Link href="/quiz" className={navLink}>Quiz</Link>
          <Link href="/blog" className={navLink}>Blog</Link>
        </div>
      </nav>
    </header>
  )
}
