/**
 * Related content component for internal linking
 * Shows related generations, blog posts, or comparisons
 */

import Link from 'next/link'
import GenerationCard from './GenerationCard'

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
              <GenerationCard key={gen.slug} gen={gen} />
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
