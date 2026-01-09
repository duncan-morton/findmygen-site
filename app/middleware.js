import { NextResponse } from 'next/server'

/**
 * Middleware for SEO and technical optimization
 * - Removes trailing slashes (except root)
 * - Adds X-Robots-Tag: noindex for query-param URLs, except known-safe tracking params
 */
export function middleware(request) {
  const url = request.nextUrl
  const pathname = url.pathname
  const searchParams = url.searchParams

  // 1) Trailing slash policy: remove trailing slash (except root)
  if (pathname !== '/' && pathname.endsWith('/')) {
    const redirectUrl = url.clone()
    redirectUrl.pathname = pathname.slice(0, -1)
    // Keep query string intact
    return NextResponse.redirect(redirectUrl, 301)
  }

  const response = NextResponse.next()

  // 2) Query param handling
  if (searchParams.size > 0) {
    const keys = Array.from(searchParams.keys())

    // Allow common tracking params (so you don't noindex every UTM link)
    const allowedExact = new Set([
      'gclid', 'gbraid', 'wbraid',
      'fbclid',
      'msclkid',
      'ttclid',
      'igshid',
      'ref', // optional; remove if you never use it
    ])

    // Allow utm_* and other common analytics patterns
    const allowedPrefixes = ['utm_', 'mc_', 'pk_'] // add/remove as needed

    const allAllowed = keys.every((k) => {
      if (allowedExact.has(k)) return true
      return allowedPrefixes.some((p) => k.startsWith(p))
    })

    // If ANY non-allowed param exists, noindex the URL variant
    if (!allAllowed) {
      response.headers.set('X-Robots-Tag', 'noindex, follow')
    }
  }

  return response
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)).*)',
  ],
}
