/**
 * Sitewide header navigation component
 * Server component - lightweight and accessible
 * Uses generations data source for dynamic links
 * Simple design: no dropdowns, always visible links for maximum accessibility
 */

import Link from 'next/link'
import { getAllGenerationSlugs, getGenerationBySlug } from '../lib/data/generations'

export default function HeaderNav() {
  // Get all generations for navigation links (sorted newest to oldest)
  const allGenerations = getAllGenerationSlugs()
    .map((slug) => getGenerationBySlug(slug))
    .filter((gen) => gen !== undefined)
    .sort((a, b) => b.yearRange.start - a.yearRange.start)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav aria-label="Primary navigation" className="max-w-7xl mx-auto px-4">
        {/* Main Navigation Row */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 py-4">
          {/* Logo/Home Link */}
          <Link 
            href="/" 
            className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1"
            aria-label="FindMyGen Home"
          >
            FindMyGen
          </Link>

          {/* Main Navigation Links */}
          <div className="flex flex-wrap items-center gap-4 lg:gap-6">
            <Link 
              href="/blog" 
              className="text-gray-700 hover:text-blue-600 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1"
            >
              Blog
            </Link>
            <Link 
              href="/quiz" 
              className="text-gray-700 hover:text-blue-600 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1"
            >
              Quiz
            </Link>
            <Link 
              href="/compare" 
              className="text-gray-700 hover:text-blue-600 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1"
            >
              Compare
            </Link>
          </div>
        </div>

        {/* Generations Section - Always visible, responsive grid */}
        <div className="border-t border-gray-200 pt-4 pb-4">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Generations
          </h3>
          <div className="flex flex-wrap gap-2 lg:gap-3">
            {allGenerations.map((gen) => (
              <Link
                key={gen.slug}
                href={`/${gen.slug}`}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:bg-blue-50 focus:text-blue-600"
                aria-label={`${gen.displayName} - ${gen.yearRange.start} to ${gen.yearRange.end === 2025 ? 'Present' : gen.yearRange.end}`}
              >
                <span className="text-lg" aria-hidden="true">{gen.emoji}</span>
                <span className="hidden sm:inline">{gen.displayName}</span>
                <span className="sm:hidden">{gen.slug.replace('-', ' ').replace('gen ', 'G')}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
