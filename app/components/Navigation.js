'use client'
import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md mb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Home */}
          <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition">
            FindMyGen
          </Link>

          {/* Navigation Links */}
          <div className="flex gap-6">
            <Link 
              href="/quiz" 
              className="text-gray-700 hover:text-blue-600 font-semibold transition"
            >
              Quiz
            </Link>
            <Link 
              href="/compare" 
              className="text-gray-700 hover:text-blue-600 font-semibold transition"
            >
              Compare
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-700 hover:text-blue-600 font-semibold transition"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}