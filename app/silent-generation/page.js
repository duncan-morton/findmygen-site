/**
 * Silent Generation Page
 * 
 * Uses data source, metadata helpers, and SEO components.
 */

import Link from 'next/link'
import { getGenerationBySlug, getAllGenerationSlugs } from '../lib/data/generations'
import { getPostBySlug, blogPosts } from '../lib/data/blog'
import { generateGenerationMetadata } from '../lib/metadata-helpers'
import Breadcrumbs from '../components/Breadcrumbs'
import RelatedContent from '../components/RelatedContent'

const SLUG = 'silent-generation'

// Generate metadata using helper function
export async function generateMetadata() {
  const gen = getGenerationBySlug(SLUG)
  if (!gen) {
    return {
      title: 'Silent Generation | FindMyGen',
      description: 'Complete guide to the Silent Generation.',
    }
  }
  return generateGenerationMetadata(gen)
}

// Server component - no 'use client' directive
export default function SilentGenPage() {
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
  const CURRENT_YEAR = 2025
  const ageRange = {
    start: CURRENT_YEAR - gen.yearRange.end,
    end: CURRENT_YEAR - gen.yearRange.start,
  }
  
  const yearDisplay = `${gen.yearRange.start} - ${gen.yearRange.end === 2025 ? 'Present' : gen.yearRange.end}`

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
              <p className="text-xl text-gray-600">Ages {ageRange.start}-{ageRange.end} in {CURRENT_YEAR}</p>
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

              {/* Call to Action Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">Explore More</h3>
                <div className="flex gap-4 justify-center flex-wrap mb-8">
                  <Link 
                    href="/" 
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
                  >
                    🎯 Generation Calculator
                  </Link>
                  <Link 
                    href="/quiz" 
                    className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition font-semibold"
                  >
                    🎮 Take the Quiz
                  </Link>
                  <Link 
                    href="/compare" 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition font-semibold"
                  >
                    🆚 Compare Generations
                  </Link>
                </div>
              </div>
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
