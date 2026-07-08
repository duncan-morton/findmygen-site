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
    // Override the noindex default inherited from the /compare tool layout.
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
  }
}

function Row({ label, a, b }) {
  return (
    <div className="grid md:grid-cols-3 gap-4 pb-6 border-b">
      <div className="font-semibold text-gray-800">{label}</div>
      <div className="text-gray-700">{a}</div>
      <div className="text-gray-700">{b}</div>
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

  // Other curated comparisons to surface for internal linking.
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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <Breadcrumbs
            items={[
              { name: 'Compare Generations', href: '/compare' },
              { name: `${a.name} vs ${b.name}`, href: `/compare/${comparison}` },
            ]}
          />

          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              {a.emoji} {a.name} vs {b.name} {b.emoji}
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              How do {a.name} and {b.name} compare? {a.name} (born {a.years}) and {b.name} (born{' '}
              {b.years}) grew up in very different worlds, shaping how each generation approaches
              technology, work, values and communication. Here is a side-by-side breakdown.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[a, b].map((g) => (
              <div key={g.slug} className={`${g.color} bg-opacity-10 rounded-2xl p-6 border-2 border-current`}>
                <div className="text-center">
                  <div className="text-6xl mb-3">{g.emoji}</div>
                  <h2 className="text-3xl font-bold text-gray-900">{g.name}</h2>
                  <p className="text-lg text-gray-700">Born: {g.years}</p>
                  <p className="text-md text-gray-600">Ages {g.ages} in {currentYear}</p>
                  <Link href={`/${g.slug}`} className="inline-block mt-3 text-blue-600 hover:underline font-semibold">
                    Full {g.name} guide →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Side-by-Side Comparison</h2>
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4 pb-6 border-b">
                <div className="font-bold text-gray-700">Category</div>
                <div className="font-bold text-gray-700">{a.name}</div>
                <div className="font-bold text-gray-700">{b.name}</div>
              </div>
              <div className="grid md:grid-cols-3 gap-4 pb-6 border-b">
                <div className="font-semibold text-gray-800">Key Traits</div>
                <div>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    {a.traits.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                </div>
                <div>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    {b.traits.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                </div>
              </div>
              <Row label="Technology" a={a.tech} b={b.tech} />
              <Row label="Work Style" a={a.work} b={b.work} />
              <Row label="Core Values" a={a.values} b={b.values} />
              <Row label="Communication" a={a.communication} b={b.communication} />
              <div className="grid md:grid-cols-3 gap-4">
                <div className="font-semibold text-gray-800">Notable</div>
                <div className="text-gray-700">{a.notable}</div>
                <div className="text-gray-700">{b.notable}</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              {a.name} vs {b.name}: FAQs
            </h2>
            <div className="space-y-6">
              {faqs.map((f) => (
                <div key={f.question}>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{f.question}</h3>
                  <p className="text-gray-700">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">More Generation Comparisons</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {otherComparisons.map((c) => (
                <Link
                  key={c.slug}
                  href={`/compare/${c.slug}`}
                  className="p-4 border-2 border-gray-200 rounded-xl hover:border-blue-400 transition font-semibold text-gray-800"
                >
                  {c.gens[0].emoji} {c.gens[0].name} vs {c.gens[1].name} {c.gens[1].emoji}
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition font-semibold text-lg"
            >
              🎯 Which generation are you? Find out
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
