# Ad Monetisation Guide - CWV-Safe Implementation

**Goal:** Integrate display ads without hurting Core Web Vitals (LCP, INP, CLS)

---

## Overview

The `AdPlaceholder` component (`app/components/AdPlaceholder.js`) provides a CWV-safe foundation for ad integration. It:

- ✅ Reserves space to prevent CLS (Cumulative Layout Shift)
- ✅ Is feature-flagged (disabled by default)
- ✅ Uses lazy loading patterns
- ✅ Supports multiple ad positions (top, sidebar, bottom, inline)

---

## Enabling Ads

### Step 1: Enable Feature Flag

Add to your `.env.local`:

```bash
NEXT_PUBLIC_ADS_ENABLED=true
```

### Step 2: Add Ad Component to Pages

**Example: Blog Post**

```jsx
import AdPlaceholder from '@/app/components/AdPlaceholder'

export default function BlogPost() {
  return (
    <article>
      {/* Top ad - below header */}
      <AdPlaceholder position="top" className="mb-8" />
      
      {/* Content */}
      <div>{/* article content */}</div>
      
      {/* Inline ad - mid-content */}
      <AdPlaceholder position="inline" className="my-8" />
      
      {/* Bottom ad - above footer */}
      <AdPlaceholder position="bottom" className="mt-8" />
    </article>
  )
}
```

**Example: Generation Page**

```jsx
import AdPlaceholder from '@/app/components/AdPlaceholder'

export default function GenerationPage() {
  return (
    <div>
      <h1>Generation Title</h1>
      
      {/* Sidebar ad (if using sidebar layout) */}
      <AdPlaceholder position="sidebar" />
      
      {/* Content */}
      <div>{/* generation content */}</div>
      
      {/* Bottom ad */}
      <AdPlaceholder position="bottom" />
    </div>
  )
}
```

---

## Ad Provider Integration

### Google AdSense (Recommended for Start)

**1. Get AdSense Account & Publisher ID**

Sign up at: https://www.google.com/adsense/

**2. Update `AdPlaceholder.js` Component**

Replace the placeholder section with actual AdSense code:

```jsx
// In AdPlaceholder.js, replace the TODO section with:

{adsEnabled && (
  <>
    <script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${process.env.NEXT_PUBLIC_ADSENSE_ID}`}
      crossOrigin="anonymous"
      strategy="lazyOnload"
    />
    <ins
      className="adsbygoogle"
      style={{ 
        display: 'block',
        width: `${size.width}px`,
        height: `${size.height}px`,
        minWidth: `${size.width}px`,
        minHeight: `${size.height}px`
      }}
      data-ad-client={`ca-pub-${process.env.NEXT_PUBLIC_ADSENSE_ID}`}
      data-ad-slot={process.env[`NEXT_PUBLIC_ADS_SLOT_${position.toUpperCase()}`]}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  </>
)}
```

**3. Add Environment Variables**

```bash
# .env.local
NEXT_PUBLIC_ADS_ENABLED=true
NEXT_PUBLIC_ADSENSE_ID=YOUR_PUBLISHER_ID
NEXT_PUBLIC_ADS_SLOT_TOP=YOUR_TOP_SLOT_ID
NEXT_PUBLIC_ADS_SLOT_SIDEBAR=YOUR_SIDEBAR_SLOT_ID
NEXT_PUBLIC_ADS_SLOT_BOTTOM=YOUR_BOTTOM_SLOT_ID
NEXT_PUBLIC_ADS_SLOT_INLINE=YOUR_INLINE_SLOT_ID
```

**4. Initialize Ads**

Add to `app/layout.js` or create a script component:

```jsx
// This ensures ads load properly
useEffect(() => {
  if (typeof window !== 'undefined' && window.adsbygoogle) {
    window.adsbygoogle.push({})
  }
}, [])
```

### Alternative: Other Ad Networks

**Ezoic, Media.net, etc.**

Replace the placeholder with your ad network's code. Key principles:

1. **Reserve space** - Use fixed min-width/min-height
2. **Lazy load** - Use Next.js `next/script` with `strategy="lazyOnload"`
3. **Avoid blocking** - Don't block initial render
4. **Test CLS** - Always check Cumulative Layout Shift in Lighthouse

---

## CWV Best Practices

### ✅ DO

- ✅ Reserve exact space before ad loads (prevents CLS)
- ✅ Lazy load ads below the fold
- ✅ Use `next/script` with `strategy="lazyOnload"` for ad scripts
- ✅ Place ads after main content loads (prioritize LCP)
- ✅ Test with Lighthouse before/after
- ✅ Monitor CWV in Google Search Console

### ❌ DON'T

- ❌ Place ads above the fold (hurts LCP)
- ❌ Load ads synchronously (blocks rendering)
- ❌ Use auto-resizing ads without reserved space (causes CLS)
- ❌ Add ads to `/quiz` or `/compare` tool pages (hurts UX)
- ❌ Load ads on mobile if not optimized (slows INP)

---

## Ad Positions & Priorities

### High Priority (High Traffic Pages)
1. **Blog Posts** - High engagement, users scroll
   - Top: After header, before content
   - Inline: Mid-article (after 2nd paragraph)
   - Bottom: Above related content

2. **Generation Pages** - Content-rich, good engagement
   - Top: After breadcrumbs
   - Inline: After key characteristics
   - Bottom: Above related content

### Medium Priority
3. **Blog Index** - Listing page
   - Top: After header
   - Bottom: Above footer

### Low Priority / Skip
4. **Homepage** - Keep clean (better UX, better conversions)
5. **Tool Pages** (`/quiz`, `/compare`) - Keep ad-free (better UX)

---

## Testing Checklist

Before enabling ads:

- [ ] Test page load speed (Lighthouse Performance > 90)
- [ ] Test LCP (should be < 2.5s)
- [ ] Test CLS (should be < 0.1)
- [ ] Test INP (should be < 200ms)
- [ ] Test on mobile (use Chrome DevTools)
- [ ] Verify ads render correctly
- [ ] Verify ads don't shift layout
- [ ] Test with slow 3G connection

After enabling:

- [ ] Monitor CWV in Google Search Console
- [ ] Monitor revenue vs. traffic impact
- [ ] A/B test ad density (too many ads hurts UX)
- [ ] Track bounce rate changes

---

## Performance Targets

**Core Web Vitals Goals:**
- LCP (Largest Contentful Paint): < 2.5s
- INP (Interaction to Next Paint): < 200ms
- CLS (Cumulative Layout Shift): < 0.1

**If ads hurt CWV:**
1. Reduce ad density
2. Use smaller ad units
3. Lazy load more aggressively
4. Remove ads from low-performing pages
5. Consider alternative ad formats (sticky, native)

---

## Example: Complete Integration

```jsx
// app/blog/[slug]/page.js
import AdPlaceholder from '@/app/components/AdPlaceholder'

export default function BlogPost({ params }) {
  return (
    <article>
      <header>{/* post header */}</header>
      
      {/* Top ad - reserved space prevents CLS */}
      <AdPlaceholder position="top" className="mb-8" />
      
      {/* Main content */}
      <div className="prose">
        <p>{/* paragraph 1 */}</p>
        <p>{/* paragraph 2 */}</p>
        
        {/* Inline ad - mid-content */}
        <AdPlaceholder position="inline" className="my-12" />
        
        <p>{/* paragraph 3 */}</p>
        {/* rest of content */}
      </div>
      
      {/* Bottom ad - above related content */}
      <AdPlaceholder position="bottom" className="mt-12 mb-8" />
      
      <RelatedContent />
    </article>
  )
}
```

---

## Troubleshooting

**Ads not showing:**
- Check `NEXT_PUBLIC_ADS_ENABLED=true` in `.env.local`
- Verify ad network account is approved
- Check browser console for errors
- Ensure ad slots are created in ad network dashboard

**CLS issues:**
- Increase `minHeight` prop on `AdPlaceholder`
- Verify ad sizes match reserved space exactly
- Check if ads are auto-resizing (disable if possible)

**Performance issues:**
- Reduce number of ads per page
- Lazy load all ads (use `loading="lazy"`)
- Defer ad scripts until after page load
- Consider ad refresh limits (1 refresh per page max)

---

**Remember:** User experience > Ad revenue. If ads hurt CWV significantly, prioritize user experience.
