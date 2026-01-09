/**
 * Related content component for internal linking
 * Shows related generations, blog posts, or comparisons
 */

import Link from 'next/link'

export default function RelatedContent({ 
  generations = [], 
  blogPosts = [], 
  title = 'Related Content',
  maxItems = 6 
}) {
  if (generations.length === 0 && blogPosts.length === 0) return null

  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">{title}</h3>
      
      {generations.length > 0 && (
        <div className="mb-8">
          <h4 className="text-xl font-bold mb-4 text-gray-800">Browse All Generations</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {generations.slice(0, maxItems).map((gen) => (
              <Link
                key={gen.slug}
                href={`/${gen.slug}`}
                className="p-4 bg-gradient-to-br rounded-lg hover:shadow-lg transition border-2 border-gray-200 hover:border-blue-400 text-center"
                style={{
                  backgroundColor: `${gen.colorHex || '#f3f4f6'}15`,
                }}
              >
                <div className="text-3xl mb-1">{gen.emoji}</div>
                <div className="font-semibold text-sm text-gray-900">{gen.displayName}</div>
                <div className="text-xs text-gray-600 mt-1">
                  {gen.yearRange.start} - {gen.yearRange.end === 2025 ? 'Present' : gen.yearRange.end}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {blogPosts.length > 0 && (
        <div>
          <h4 className="text-xl font-bold mb-4 text-gray-800">Related Articles</h4>
          <div className="space-y-4">
            {blogPosts.slice(0, Math.min(maxItems - generations.length, blogPosts.length)).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block p-4 bg-white rounded-lg hover:shadow-md transition border border-gray-200 hover:border-blue-400"
              >
                <h5 className="font-semibold text-gray-900 mb-1">{post.title}</h5>
                <p className="text-sm text-gray-600 line-clamp-2">{post.excerpt || post.description}</p>
                <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                  <span>{post.category}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
