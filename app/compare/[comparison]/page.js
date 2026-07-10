/**
 * Static, indexable generation-vs-generation comparison pages.
 *
 * Only the curated pairs in comparisonPairs are generated (dynamicParams:false),
 * and each opts back into indexing to override the noindex default set on the
 * interactive /compare tool's layout.
 */

import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  getComparisonGen,
  getComparisonPair,
  getAllComparisonSlugs,
  comparisonPairs,
  comparisonSlug,
} from '../../lib/data/comparisons'
import { getCurrentYear } from '../../lib/dates'
import Breadcrumbs from '../../components/Breadcrumbs'

const siteUrl = 'https://www.findmygen.com'

// Regenerate daily so age figures stay current; only render the curated pairs.
export const revalidate = 86400
export const dynamicParams = false

export function generateStaticParams() {
  return getAllComparisonSlugs().map((comparison) => ({ comparison }))
}

export async function generateMetadata({ params }) {
  const { comparison } = await params
  const pair = getComparisonPair(comparison)
  if (!pair) return {}
  const [a, b] = pair.map(getComparisonGen)

  const title = `${a.name} vs ${b.name}: Key Differences | FindMyGen`
  const description = `${a.name} vs ${b.name} compared side by side — birth years, ages, technology, work style, values and communication. See how the two generations differ.`
  const ogImage = `${siteUrl}/api/og?title=${encodeURIComponent(
    `${a.name} vs ${b.name}`
  )}&description=${encodeURIComponent('Key generational differences compared')}`

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    keywords: `${a.name} vs ${b.name}, ${a.name} ${b.name} differences, generation comparison, ${a.name}, ${b.name}`,
    alternates: { canonical: `${siteUrl}/compare/${comparison}` },
    openGraph: {
      title: `${a.name} vs ${b.name}: Key Differences`,
      description,
      type: 'article',
      url: `${siteUrl}/compare/${comparison}`,
      siteName: 'FindMyGen',
      images: [{ url: ogImage, width: 1200, height: 630, alt: `${a.name} vs ${b.name}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${a.name} vs ${b.name}: Key Differences`,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
  }
}

function Row({ label, a, b }) {
  return (
    <div className="grid gap-4 border-t border-slate-100 py-4 md:grid-cols-3">
      <div className="font-semibold text-slate-800">{label}</div>
      <div className="text-slate-600">{a}</div>
      <div className="text-slate-600">{b}</div>
    </div>
  )
}

export default async function ComparisonPage({ params }) {
  const { comparison } = await params
  const pair = getComparisonPair(comparison)
  if (!pair) notFound()

  const currentYear = getCurrentYear()
  const [a, b] = pair.map(getComparisonGen)

  const faqs = [
    {
      question: `What are the main differences between ${a.name} and ${b.name}?`,
      answer: `${a.name} are known for being ${a.traits.slice(0, 3).join(', ').toLowerCase()}, while ${b.name} are known for being ${b.traits.slice(0, 3).join(', ').toLowerCase()}. The two generations differ most in how they use technology, their work style, and how they communicate.`,
    },
    {
      question: `What are the birth years for ${a.name} and ${b.name}?`,
      answer: `${a.name} were born ${a.years} and ${b.name} were born ${b.years}. In ${currentYear} that makes them roughly ${a.ages} and ${b.ages} years old respectively.`,
    },
  ]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }

  const otherComparisons = comparisonPairs
    .filter((p) => comparisonSlug(p) !== comparison)
    .slice(0, 4)
    .map((p) => ({ slug: comparisonSlug(p), gens: p.map(getComparisonGen) }))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-4xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: 'Compare Generations', href: '/compare' },
            { name: `${a.name} vs ${b.name}`, href: `/compare/${comparison}` },
          ]}
        />

        <header className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {a.emoji} {a.name} vs {b.name} {b.emoji}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            How do {a.name} and {b.name} compare? {a.name} (born {a.years}) and {b.name} (born{' '}
            {b.years}) grew up in very different worlds, shaping how each generation approaches
            technology, work, values and communication. Here is a side-by-side breakdown.
          </p>
        </header>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {[a, b].map((g) => (
            <div key={g.slug} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <div className="text-5xl" aria-hidden="true">{g.emoji}</div>
              <div className="mt-2 flex items-center justify-center gap-2">
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: g.colorHex }} aria-hidden="true" />
                <h2 className="text-2xl font-bold text-slate-900">{g.name}</h2>
              </div>
              <p className="mt-1 text-slate-600">Born {g.years}</p>
              <p className="text-sm text-slate-500">Ages {g.ages} in {currentYear}</p>
              <Link href={`/${g.slug}`} className="mt-3 inline-block text-sm font-semibold text-brand hover:underline">
                Full {g.name} guide →
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Side-by-side comparison</h2>
          <div className="mt-4">
            <div className="grid gap-4 pb-2 md:grid-cols-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Category</div>
              <div className="font-bold text-slate-900">{a.name}</div>
              <div className="font-bold text-slate-900">{b.name}</div>
            </div>
            <div className="grid gap-4 border-t border-slate-100 py-4 md:grid-cols-3">
              <div className="font-semibold text-slate-800">Key traits</div>
              <ul className="list-disc space-y-1 pl-5 text-slate-600">
                {a.traits.map((t) => <li key={t}>{t}</li>)}
              </ul>
              <ul className="list-disc space-y-1 pl-5 text-slate-600">
                {b.traits.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>
            <Row label="Technology" a={a.tech} b={b.tech} />
            <Row label="Work style" a={a.work} b={b.work} />
            <Row label="Core values" a={a.values} b={b.values} />
            <Row label="Communication" a={a.communication} b={b.communication} />
            <Row label="Notable" a={a.notable} b={b.notable} />
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {a.name} vs {b.name}: FAQs
          </h2>
          <dl className="mt-4 divide-y divide-slate-200">
            {faqs.map((f) => (
              <div key={f.question} className="py-5">
                <dt className="font-semibold text-slate-900">{f.question}</dt>
                <dd className="mt-2 text-slate-600">{f.answer}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">More comparisons</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {otherComparisons.map((c) => (
              <Link
                key={c.slug}
                href={`/compare/${c.slug}`}
                className="rounded-xl border border-slate-200 bg-white p-4 font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
              >
                {c.gens[0].emoji} {c.gens[0].name} vs {c.gens[1].name} {c.gens[1].emoji}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-strong"
          >
            🎯 Which generation are you?
          </Link>
        </div>
      </div>
    </>
  )
}
