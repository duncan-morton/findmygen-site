/**
 * Related content for internal linking: related generations (as shared cards)
 * and related blog posts.
 */

import Link from 'next/link'
import GenerationCard from './GenerationCard'

export default function RelatedContent({
  generations = [],
  blogPosts = [],
  title = 'Related content',
  maxItems = 6,
}) {
  if (generations.length === 0 && blogPosts.length === 0) return null

  return (
    <div className="mt-16 border-t border-slate-200 pt-10">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900">{title}</h2>

      {generations.length > 0 && (
        <div className="mt-6">
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Browse generations
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {generations.slice(0, maxItems).map((gen) => (
              <GenerationCard key={gen.slug} gen={gen} />
            ))}
          </div>
        </div>
      )}

      {blogPosts.length > 0 && (
        <div className="mt-8">
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Related articles
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {blogPosts
              .slice(0, Math.min(maxItems - generations.length, blogPosts.length))
              .map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
                >
                  <h4 className="font-semibold text-slate-900">{post.title}</h4>
                  <p className="mt-1 line-clamp-2 text-sm text-slate-600">
                    {post.excerpt || post.description}
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
                    <span>{post.category}</span>
                    <span aria-hidden="true">·</span>
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
