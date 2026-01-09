/**
 * Middleware for SEO and technical optimization
 * - Adds noindex for query params (except allowed)
 * - Handles trailing slash consistency
 */

import { NextResponse } from 'next/server'

export function middleware(request) {
  const { pathname, searchParams } = request.nextUrl
  const response = NextResponse.next()

  // Trailing slash policy: Remove trailing slash (except root)
  if (pathname !== '/' && pathname.endsWith('/')) {
    const url = request.nextUrl.clone()
    url.pathname = pathname.slice(0, -1)
    return NextResponse.redirect(url, 301) // Permanent redirect
  }

  // Query param noindex handling
  // Pages with query params (except allowed) should be noindex
  // This is handled in layout/page metadata, but we can add headers here too
  const allowedQueryParams = [] // Add allowed params if needed
  const hasQueryParams = searchParams.size > 0
  
  if (hasQueryParams) {
    const hasAllowedParams = Array.from(searchParams.keys()).some(key => 
      allowedQueryParams.includes(key)
    )
    
    if (!hasAllowedParams) {
      // Add X-Robots-Tag header for noindex (in addition to meta tag)
      response.headers.set('X-Robots-Tag', 'noindex, follow')
    }
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)).*)',
  ],
}
