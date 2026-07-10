/**
 * Shared chrome for blog articles: breadcrumb, header (from the blog data
 * source), Article JSON-LD, a typographic prose wrapper for the body, a CTA and
 * related links. Each article page passes its slug and its prose as children, so
 * the layout and metadata live in one place instead of being copy-pasted.
 */

import Link from 'next/link'
import { getPostBySlug } from '../lib/data/blog'
import { getGenerationBySlug } from '../lib/data/generations'
import Breadcrumbs from './Breadcrumbs'

const siteUrl = 'https://www.findmygen.com'

export default function ArticleLayout({ slug, children }) {
  const post = getPostBySlug(slug)
  if (!post) return null

  const date = new Date(post.datePublished).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: `${siteUrl}/api/og?type=blog&slug=${post.slug}`,
    datePublished: post.datePublished,
    dateModified: post.dateModified || post.datePublished,
    author: { '@type': 'Organization', name: post.author || 'FindMyGen', url: siteUrl },
    publisher: {
      '@type': 'Organization',
      name: 'FindMyGen',
      url: siteUrl,
      logo: { '@type': 'ImageObject', url: `${siteUrl}/logo.svg` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteUrl}/blog/${post.slug}` },
  }

  const relatedGens = (post.relatedGenerations || [])
    .map(getGenerationBySlug)
    .filter(Boolean)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="mx-auto max-w-3xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: 'Blog', href: '/blog' },
            { name: post.title, href: `/blog/${post.slug}` },
          ]}
        />

        <header>
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">
              {post.category}
            </span>
            <span>{date}</span>
            <span aria-hidden="true">·</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-slate-600">{post.excerpt || post.description}</p>
        </header>

        <div className="prose prose-slate mt-10 max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:font-medium prose-a:text-brand prose-a:no-underline hover:prose-a:underline">
          {children}
        </div>

        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Which generation are you?</h2>
          <p className="mt-2 text-slate-600">Find out in seconds with the birth-year calculator.</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="rounded-xl bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-strong"
            >
              🎯 Try the calculator
            </Link>
            <Link
              href="/quiz"
              className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Take the quiz
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-sm">
          <Link href="/blog" className="font-semibold text-brand hover:underline">
            ← Back to blog
          </Link>
          {relatedGens.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {relatedGens.map((g) => (
                <Link key={g.slug} href={`/${g.slug}`} className="font-semibold text-brand hover:underline">
                  {g.emoji} {g.shortName}
                </Link>
              ))}
            </div>
          )}
        </div>
      </article>
    </>
  )
}
