/**
 * End-of-page call to action for the generation guides. One clear primary action
 * (the calculator) with the secondary tools demoted to text links.
 */

import Link from 'next/link'

export default function GenerationCtaBox() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
      <h3 className="text-xl font-bold text-slate-900">Find your own generation</h3>
      <p className="mt-2 text-slate-600">Enter your birth year and get your result in a second.</p>
      <Link
        href="/"
        className="mt-5 inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-strong"
      >
        🎯 Try the calculator
      </Link>
      <p className="mt-4 text-sm text-slate-500">
        Or{' '}
        <Link href="/quiz" className="font-medium text-brand hover:underline">take the quiz</Link>{' '}
        or{' '}
        <Link href="/compare" className="font-medium text-brand hover:underline">compare generations</Link>.
      </p>
    </section>
  )
}
