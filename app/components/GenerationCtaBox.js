/**
 * End-of-page call to action for the generation guide pages. One clear primary
 * action (the calculator) with the secondary tools demoted to text links, so a
 * single action stands out instead of three equal-weight buttons.
 */

import Link from 'next/link'

export default function GenerationCtaBox() {
  return (
    <div className="mt-12 pt-8 border-t border-gray-200 text-center">
      <h3 className="text-2xl font-bold mb-4 text-gray-900">Find your own generation</h3>
      <Link
        href="/"
        className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition font-semibold text-lg"
      >
        🎯 Try the Generation Calculator
      </Link>
      <p className="mt-4 text-gray-600">
        Or{' '}
        <Link href="/quiz" className="text-blue-600 hover:underline font-medium">
          take the quiz
        </Link>{' '}
        or{' '}
        <Link href="/compare" className="text-blue-600 hover:underline font-medium">
          compare generations
        </Link>
        .
      </p>
    </div>
  )
}
