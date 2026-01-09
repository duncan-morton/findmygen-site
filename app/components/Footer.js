/**
 * Sitewide footer component
 * Server component - lightweight and accessible
 * Uses generations data source for dynamic links
 */

import Link from 'next/link'
import { getAllGenerationSlugs, getGenerationBySlug } from '../lib/data/generations'

export default function Footer() {
  // Get all generations for footer links
  const allGenerations = getAllGenerationSlugs()
    .map((slug) => getGenerationBySlug(slug))
    .filter((gen) => gen !== undefined)
    .sort((a, b) => b.yearRange.start - a.yearRange.start) // Sort newest to oldest

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Main Links Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <nav aria-label="Footer navigation" className="space-y-2">
              <Link 
                href="/" 
                className="block hover:text-white transition-colors focus:outline-none focus:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-1 py-1"
              >
                Home
              </Link>
              <Link 
                href="/blog" 
                className="block hover:text-white transition-colors focus:outline-none focus:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-1 py-1"
              >
                Blog
              </Link>
              <Link 
                href="/quiz" 
                className="block hover:text-white transition-colors focus:outline-none focus:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-1 py-1"
              >
                Quiz
              </Link>
              <Link 
                href="/compare" 
                className="block hover:text-white transition-colors focus:outline-none focus:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-1 py-1"
              >
                Compare
              </Link>
              <Link 
                href="/privacy" 
                className="block hover:text-white transition-colors focus:outline-none focus:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-1 py-1"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>

          {/* Generations Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Explore Generations</h3>
            <nav aria-label="Generation pages" className="space-y-2">
              {allGenerations.map((gen) => (
                <Link
                  key={gen.slug}
                  href={`/${gen.slug}`}
                  className="flex items-center gap-2 hover:text-white transition-colors focus:outline-none focus:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-1 py-1"
                >
                  <span className="text-sm" aria-hidden="true">{gen.emoji}</span>
                  <span className="truncate">{gen.displayName}</span>
                  <span className="text-xs text-gray-500 ml-auto hidden sm:inline">
                    {gen.yearRange.start}-{gen.yearRange.end === 2025 ? 'Present' : gen.yearRange.end}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">About</h3>
            <p className="text-sm text-gray-400 mb-4">
              FindMyGen helps you discover your generation based on your birth year. 
              Learn about generational characteristics, traits, and cultural markers.
            </p>
            <div className="text-sm text-gray-500">
              © {currentYear} FindMyGen. All rights reserved.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div>
              <Link 
                href="/" 
                className="hover:text-white transition-colors focus:outline-none focus:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-1 py-1"
              >
                FindMyGen
              </Link>
              {' '}•{' '}
              <Link 
                href="/privacy" 
                className="hover:text-white transition-colors focus:outline-none focus:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-1 py-1"
              >
                Privacy Policy
              </Link>
            </div>
            <div className="text-center md:text-right">
              Discover your generation • Learn about generational differences
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
