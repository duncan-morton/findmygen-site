/**
 * Baby Boomers Page
 * 
 * Uses data source, metadata helpers, and SEO components.
 */

import Link from 'next/link'
import { getGenerationBySlug, getAllGenerationSlugs, getAgeRange, getYearRangeDisplay } from '../lib/data/generations'
import { getCurrentYear } from '../lib/dates'
import { getPostBySlug, blogPosts } from '../lib/data/blog'
import { generateGenerationMetadata } from '../lib/metadata-helpers'
import Breadcrumbs from '../components/Breadcrumbs'
import RelatedContent from '../components/RelatedContent'
import GenerationCtaBox from '../components/GenerationCtaBox'

// Regenerate daily so age/year figures stay current without a manual redeploy.
export const revalidate = 86400

const SLUG = 'baby-boomers'

// Generate metadata using helper function
export async function generateMetadata() {
  const gen = getGenerationBySlug(SLUG)
  if (!gen) {
    return {
      title: 'Baby Boomers | FindMyGen',
      description: 'Complete guide to Baby Boomers.',
    }
  }
  return generateGenerationMetadata(gen)
}

// Server component - no 'use client' directive
export default function BoomersPage() {
  const gen = getGenerationBySlug(SLUG)
  
  if (!gen) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Generation Not Found</h1>
            <p className="text-gray-700">The requested generation could not be found.</p>
            <Link href="/" className="text-blue-600 hover:underline mt-4 inline-block">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // Calculate age range
  const currentYear = getCurrentYear()
  const ageRange = getAgeRange(gen)
  
  const yearDisplay = getYearRangeDisplay(gen)

  // Get related generations
  const allGenerations = getAllGenerationSlugs()
    .map((slug) => getGenerationBySlug(slug))
    .filter((g) => g && g.slug !== SLUG)
  
  // Filter to related generations if specified, otherwise show all
  const relatedGenerations = gen.relatedSlugs && gen.relatedSlugs.length > 0
    ? gen.relatedSlugs
        .map((slug) => getGenerationBySlug(slug))
        .filter((g) => g !== undefined)
    : allGenerations.slice(0, 3) // Show 3 random if no specific related

  // Get related blog posts
  const relatedPosts = gen.relatedBlogPosts && gen.relatedBlogPosts.length > 0
    ? gen.relatedBlogPosts
        .map((slug) => getPostBySlug(slug))
        .filter((post) => post !== undefined)
    : blogPosts
        .filter((post) => 
          post.relatedGenerations && post.relatedGenerations.includes(SLUG)
        )
        .slice(0, 3)

  // FAQPage schema (only if FAQs exist)
  const faqSchema = gen.faqs && gen.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: gen.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null

  return (
    <>
      {/* FAQPage structured data */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}
      
      <div className={`min-h-screen bg-gradient-to-br ${gen.bgGradient}`}>
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Breadcrumbs with structured data */}
          <Breadcrumbs items={[
            { name: gen.displayName, href: `/${gen.slug}` },
          ]} />

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="text-8xl mb-4">{gen.emoji}</div>
              <h1 className="text-5xl font-bold mb-4 text-gray-900">{gen.displayName}</h1>
              <p className={`text-2xl ${gen.color.replace('bg-', 'text-')} font-semibold mb-2`}>
                Born: {yearDisplay}
              </p>
              <p className="text-xl text-gray-600">Ages {ageRange.start}-{ageRange.end} in {currentYear}</p>
            </div>

            {/* Main Content */}
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">What Years Are {gen.displayName}?</h2>
              <p className="text-gray-700 leading-relaxed">
                {gen.longDescription}
              </p>

              {/* Key Characteristics */}
              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Key Characteristics of {gen.displayName}</h2>
              {gen.keyCharacteristics.map((char, index) => (
                <div key={index} className="mt-8">
                  <h3 className={`text-2xl font-bold ${gen.color.replace('bg-', 'text-')} mb-3`}>
                    {char.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{char.description}</p>
                </div>
              ))}

              {/* Workplace Habits */}
              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">{gen.displayName} in the Workplace</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
                {gen.workplaceHabits.map((habit, index) => (
                  <li key={index}>{habit}</li>
                ))}
              </ul>

              {/* Cultural Markers */}
              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Cultural Markers That Define {gen.displayName}</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {gen.culturalMarkers.map((marker, index) => (
                  <li key={index}>{marker}</li>
                ))}
              </ul>

              {/* FAQs Section */}
              {gen.faqs && gen.faqs.length > 0 && (
                <>
                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
                    Frequently Asked Questions About {gen.displayName}
                  </h2>
                  <div className="space-y-6 mt-6">
                    {gen.faqs.map((faq, index) => (
                      <div key={index}>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{faq.question}</h3>
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              <GenerationCtaBox />
            </div>
          </div>

          {/* Related Content Component with internal linking */}
          <RelatedContent 
            generations={relatedGenerations}
            blogPosts={relatedPosts}
            title="Explore More"
            maxItems={6}
          />
        </div>
      </div>
    </>
  )
}
