/**
 * Analytics utility for tracking conversion events
 * Uses Vercel Analytics for page views (already included)
 * Can be extended with custom event tracking
 */

export function trackEvent(eventName, properties = {}) {
  // Check if we're in the browser
  if (typeof window === 'undefined') return

  try {
    // Vercel Analytics automatically tracks page views
    // For custom events, we can use window.va or extend with other providers
    if (window.va && typeof window.va === 'function') {
      window.va('track', eventName, properties)
    }

    // Also send to custom analytics endpoint if needed
    // This allows for future expansion to GA4, PostHog, etc.
    if (process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT) {
      fetch(process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: eventName,
          properties,
          timestamp: new Date().toISOString(),
          url: window.location.href,
        }),
      }).catch(() => {
        // Silently fail - analytics should never break the app
      })
    }
  } catch (error) {
    // Silently fail - analytics should never break the app
    console.debug('Analytics error:', error)
  }
}

// Event name constants for consistency
export const AnalyticsEvents = {
  PAGE_VIEW: 'page_view',
  CALCULATOR_USED: 'calculator_used',
  CALCULATOR_RESULT_SHARED: 'calculator_result_shared',
  QUIZ_STARTED: 'quiz_started',
  QUIZ_COMPLETED: 'quiz_completed',
  QUIZ_RESULT_SHARED: 'quiz_result_shared',
  BLOG_POST_VIEWED: 'blog_post_viewed',
  GENERATION_PAGE_VIEWED: 'generation_page_viewed',
  COMPARE_TOOL_USED: 'compare_tool_used',
  SHARE_CLICKED: 'share_clicked',
  LINK_CLICKED: 'link_clicked',
}
