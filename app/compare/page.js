'use client'
import { useState } from 'react'
import Link from 'next/link'
import { getCurrentYear } from '../lib/dates'
import { getComparisonGen, comparisonPairs, comparisonSlug } from '../lib/data/comparisons'

// The interactive tool keys its dropdowns by short codes; map them to the
// canonical slugs used by the shared comparison data.
const KEY_TO_SLUG = {
  genalpha: 'gen-alpha',
  genz: 'gen-z',
  millennials: 'millennials',
  genx: 'gen-x',
  boomers: 'baby-boomers',
  silent: 'silent-generation',
}

const OPTIONS = [
  ['genalpha', 'Gen Alpha (2013–Present)'],
  ['genz', 'Gen Z (1997–2012)'],
  ['millennials', 'Millennials (1981–1996)'],
  ['genx', 'Gen X (1965–1980)'],
  ['boomers', 'Baby Boomers (1946–1964)'],
  ['silent', 'Silent Generation (1928–1945)'],
]

const POPULAR = [
  ['genz', 'millennials', 'Gen Z vs Millennials', 'Digital natives vs digital pioneers'],
  ['millennials', 'genx', 'Millennials vs Gen X', 'Work-life values differ'],
  ['genx', 'boomers', 'Gen X vs Boomers', 'Independence vs loyalty'],
  ['genz', 'genalpha', 'Gen Z vs Gen Alpha', 'Smartphone vs AI generation'],
  ['millennials', 'boomers', 'Millennials vs Boomers', 'OK Boomer origins'],
  ['boomers', 'silent', 'Boomers vs Silent Gen', 'Prosperity vs hardship'],
]

const selectClass =
  'w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20'
const shareButton =
  'inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50'

export default function ComparePage() {
  const [gen1, setGen1] = useState('genz')
  const [gen2, setGen2] = useState('millennials')
  const [showComparison, setShowComparison] = useState(false)

  const currentYear = getCurrentYear()

  const generations = Object.fromEntries(
    Object.entries(KEY_TO_SLUG).map(([key, slug]) => [key, getComparisonGen(slug)])
  )

  const comparisonGuides = comparisonPairs.map((pair) => ({
    slug: comparisonSlug(pair),
    gens: pair.map(getComparisonGen),
  }))

  const gen1Data = generations[gen1]
  const gen2Data = generations[gen2]

  const rows = [
    ['Technology', gen1Data.tech, gen2Data.tech],
    ['Work style', gen1Data.work, gen2Data.work],
    ['Core values', gen1Data.values, gen2Data.values],
    ['Communication', gen1Data.communication, gen2Data.communication],
    ['Notable', gen1Data.notable, gen2Data.notable],
  ]

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Compare generations
        </h1>
        <p className="mt-3 text-slate-600">Discover the differences between any two generations.</p>
      </div>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="gen1" className="mb-2 block text-sm font-semibold text-slate-700">
              First generation
            </label>
            <select id="gen1" value={gen1} onChange={(e) => setGen1(e.target.value)} className={selectClass}>
              {OPTIONS.map(([v, label]) => <option key={v} value={v}>{label}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="gen2" className="mb-2 block text-sm font-semibold text-slate-700">
              Second generation
            </label>
            <select id="gen2" value={gen2} onChange={(e) => setGen2(e.target.value)} className={selectClass}>
              {OPTIONS.map(([v, label]) => <option key={v} value={v}>{label}</option>)}
            </select>
          </div>
        </div>
        <button
          onClick={() => setShowComparison(true)}
          className="mt-6 w-full rounded-xl bg-brand py-4 text-lg font-semibold text-white transition hover:bg-brand-strong"
        >
          Compare
        </button>
      </div>

      {showComparison && (
        <div className="mt-8 space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            {[gen1Data, gen2Data].map((g, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                <div className="text-5xl" aria-hidden="true">{g.emoji}</div>
                <div className="mt-2 flex items-center justify-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: g.colorHex }} aria-hidden="true" />
                  <h2 className="text-2xl font-bold text-slate-900">{g.name}</h2>
                </div>
                <p className="mt-1 text-slate-600">Born {g.years}</p>
                <p className="text-sm text-slate-500">Ages {g.ages} in {currentYear}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-2xl font-bold tracking-tight text-slate-900">Side-by-side comparison</h3>
            <div className="mt-4">
              <div className="grid gap-4 pb-2 md:grid-cols-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Category</div>
                <div className="font-bold text-slate-900">{gen1Data.name}</div>
                <div className="font-bold text-slate-900">{gen2Data.name}</div>
              </div>
              <div className="grid gap-4 border-t border-slate-100 py-4 md:grid-cols-3">
                <div className="font-semibold text-slate-800">Key traits</div>
                <ul className="list-disc space-y-1 pl-5 text-slate-600">
                  {gen1Data.traits.map((t, i) => <li key={i}>{t}</li>)}
                </ul>
                <ul className="list-disc space-y-1 pl-5 text-slate-600">
                  {gen2Data.traits.map((t, i) => <li key={i}>{t}</li>)}
                </ul>
              </div>
              {rows.map(([label, a, b]) => (
                <div key={label} className="grid gap-4 border-t border-slate-100 py-4 md:grid-cols-3">
                  <div className="font-semibold text-slate-800">{label}</div>
                  <div className="text-slate-600">{a}</div>
                  <div className="text-slate-600">{b}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => {
                const text = `I compared ${gen1Data.name} vs ${gen2Data.name} on FindMyGen! Check it out:`
                navigator.clipboard.writeText(text + ' https://www.findmygen.com/compare')
                alert('Copied to clipboard!')
              }}
              className={shareButton}
            >
              📋 Copy link
            </button>
            <button
              onClick={() => {
                const text = encodeURIComponent(`I compared ${gen1Data.name} vs ${gen2Data.name}! Which generation are you?`)
                const url = encodeURIComponent('https://www.findmygen.com/compare')
                window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank')
              }}
              className={shareButton}
            >
              🐦 Share on X
            </button>
          </div>
        </div>
      )}

      <div className="mt-10">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">Popular comparisons</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {POPULAR.map(([a, b, title, sub]) => (
            <button
              key={title}
              onClick={() => { setGen1(a); setGen2(b); setShowComparison(true) }}
              className="rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:border-slate-300 hover:shadow-md"
            >
              <p className="font-semibold text-slate-900">{title}</p>
              <p className="text-sm text-slate-500">{sub}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">In-depth comparison guides</h2>
        <p className="mt-1 text-slate-600">Full side-by-side breakdowns of the most-searched match-ups.</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {comparisonGuides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/compare/${guide.slug}`}
              className="rounded-xl border border-slate-200 bg-white p-4 font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
            >
              {guide.gens[0].emoji} {guide.gens[0].name} vs {guide.gens[1].name} {guide.gens[1].emoji}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
