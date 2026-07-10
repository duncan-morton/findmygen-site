import Link from 'next/link'
import { blogPosts } from '../lib/data/blog'

const siteUrl = 'https://www.findmygen.com'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Generation Insights Blog | FindMyGen',
  description:
    'Expert insights on generations, from Gen Alpha to Baby Boomers. Learn about generational differences, trends, and what makes each generation unique.',
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
  openGraph: {
    title: 'Generation Insights Blog',
    description:
      'Expert insights on generations, from Gen Alpha to Baby Boomers. Learn about generational differences, trends, and what makes each generation unique.',
    type: 'website',
    url: `${siteUrl}/blog`,
    siteName: 'FindMyGen',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Generation Insights Blog',
    description: 'Expert insights on generations, from Gen Alpha to Baby Boomers.',
  },
}

export default function Blog() {
  const posts = blogPosts.map((post) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt || post.description,
    date: new Date(post.datePublished).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    readTime: post.readTime,
    category: post.category,
  }))

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <header className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Generation insights blog
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-slate-600">
          Deep dives into what makes each generation unique — from cultural touchstones to workplace
          values and everything in between.
        </p>
      </header>

      <div className="mt-10 space-y-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
          >
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
              <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">
                {post.category}
              </span>
              <span>{post.date}</span>
              <span aria-hidden="true">·</span>
              <span>{post.readTime}</span>
            </div>
            <h2 className="mt-3 text-xl font-bold text-slate-900 transition group-hover:text-brand sm:text-2xl">
              {post.title}
            </h2>
            <p className="mt-2 leading-relaxed text-slate-600">{post.excerpt}</p>
            <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand">
              Read article
              <span className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
