/**
 * Sitewide footer. Light, clean, matches the design system. Generation links are
 * driven from the canonical data source.
 */

import Link from 'next/link'
import { getCurrentYear } from '../lib/dates'
import { getAllGenerationSlugs, getGenerationBySlug, getYearRangeDisplay } from '../lib/data/generations'

const link = 'text-sm text-slate-600 transition hover:text-brand'

export default function Footer() {
  const allGenerations = getAllGenerationSlugs()
    .map((slug) => getGenerationBySlug(slug))
    .filter((gen) => gen !== undefined)
    .sort((a, b) => b.yearRange.start - a.yearRange.start)

  const currentYear = getCurrentYear()

  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="text-lg font-bold tracking-tight text-slate-900">
              Find<span className="text-brand">My</span>Gen
            </div>
            <p className="mt-3 max-w-xs text-sm text-slate-500">
              Discover your generation by birth year, and explore the traits and cultural markers
              that define each cohort.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Explore
            </h2>
            <nav aria-label="Footer navigation" className="grid gap-2">
              <Link href="/" className={link}>Home</Link>
              <Link href="/compare" className={link}>Compare generations</Link>
              <Link href="/quiz" className={link}>Generation quiz</Link>
              <Link href="/blog" className={link}>Blog</Link>
              <Link href="/privacy" className={link}>Privacy policy</Link>
            </nav>
          </div>

          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Generations
            </h2>
            <nav aria-label="Generation pages" className="grid gap-2">
              {allGenerations.map((gen) => (
                <Link key={gen.slug} href={`/${gen.slug}`} className={`${link} flex items-center gap-2`}>
                  <span aria-hidden="true">{gen.emoji}</span>
                  <span>{gen.shortName}</span>
                  <span className="ml-auto text-xs text-slate-400">{getYearRangeDisplay(gen)}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-400">
          © {currentYear} FindMyGen. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
