/**
 * Shared body for every generation guide page. Each /[slug] route is a thin
 * wrapper that passes its slug here, so the layout and styling live in one place
 * instead of being copy-pasted across six files.
 */

import Link from 'next/link'
import {
  getGenerationBySlug,
  getAllGenerationSlugs,
  getAgeRange,
  getYearRangeDisplay,
} from '../lib/data/generations'
import { getCurrentYear } from '../lib/dates'
import { getPostBySlug, blogPosts } from '../lib/data/blog'
import Breadcrumbs from './Breadcrumbs'
import RelatedContent from './RelatedContent'
import GenerationCtaBox from './GenerationCtaBox'

export default function GenerationGuide({ slug }) {
  const gen = getGenerationBySlug(slug)

  if (!gen) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Generation not found</h1>
        <p className="mt-2 text-slate-600">The requested generation could not be found.</p>
        <Link href="/" className="mt-4 inline-block font-semibold text-brand hover:underline">
          ← Back to home
        </Link>
      </div>
    )
  }

  const currentYear = getCurrentYear()
  const ageRange = getAgeRange(gen)
  const yearDisplay = getYearRangeDisplay(gen)

  const allGenerations = getAllGenerationSlugs()
    .map((s) => getGenerationBySlug(s))
    .filter((g) => g && g.slug !== slug)

  const relatedGenerations =
    gen.relatedSlugs && gen.relatedSlugs.length > 0
      ? gen.relatedSlugs.map((s) => getGenerationBySlug(s)).filter((g) => g !== undefined)
      : allGenerations.slice(0, 3)

  const relatedPosts =
    gen.relatedBlogPosts && gen.relatedBlogPosts.length > 0
      ? gen.relatedBlogPosts.map((s) => getPostBySlug(s)).filter((post) => post !== undefined)
      : blogPosts
          .filter((post) => post.relatedGenerations && post.relatedGenerations.includes(slug))
          .slice(0, 3)

  const faqSchema =
    gen.faqs && gen.faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: gen.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
          })),
        }
      : null

  return (
    <>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="mx-auto max-w-3xl px-4 py-10">
        <Breadcrumbs items={[{ name: gen.displayName, href: `/${gen.slug}` }]} />

        {/* Header */}
        <header className="text-center">
          <div className="text-6xl" aria-hidden="true">{gen.emoji}</div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            {gen.displayName}
          </h1>
          <p className="mt-3 text-lg text-slate-600">
            Born {yearDisplay} · Ages {ageRange.start}–{ageRange.end} in {currentYear}
          </p>
        </header>

        <div className="mt-12 space-y-12">
          <section>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              What years are {gen.displayName}?
            </h2>
            <p className="mt-3 leading-relaxed text-slate-600">{gen.longDescription}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Key characteristics of {gen.displayName}
            </h2>
            <div className="mt-6 space-y-6">
              {gen.keyCharacteristics.map((char, index) => (
                <div key={index}>
                  <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900">
                    <span
                      className="h-2 w-2 shrink-0 rounded-full"
                      style={{ backgroundColor: gen.colorHex }}
                      aria-hidden="true"
                    />
                    {char.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-slate-600">{char.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              {gen.displayName} in the workplace
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
              {gen.workplaceHabits.map((habit, index) => (
                <li key={index}>{habit}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Cultural markers that define {gen.displayName}
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
              {gen.culturalMarkers.map((marker, index) => (
                <li key={index}>{marker}</li>
              ))}
            </ul>
          </section>

          {gen.faqs && gen.faqs.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Frequently asked questions about {gen.displayName}
              </h2>
              <dl className="mt-6 divide-y divide-slate-200">
                {gen.faqs.map((faq, index) => (
                  <div key={index} className="py-5">
                    <dt className="font-semibold text-slate-900">{faq.question}</dt>
                    <dd className="mt-2 text-slate-600">{faq.answer}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          <GenerationCtaBox />
        </div>

        <RelatedContent
          generations={relatedGenerations}
          blogPosts={relatedPosts}
          title="Explore more"
          maxItems={6}
        />
      </div>
    </>
  )
}
