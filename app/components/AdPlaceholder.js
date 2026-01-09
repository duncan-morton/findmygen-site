/**
 * CWV-safe ad component with feature flag
 * Reserves space to prevent CLS (Cumulative Layout Shift)
 * 
 * Usage:
 * <AdPlaceholder position="top" />
 * <AdPlaceholder position="sidebar" />
 * <AdPlaceholder position="bottom" />
 * 
 * Enable ads by setting: NEXT_PUBLIC_ADS_ENABLED=true
 */

'use client'

import { useEffect, useState } from 'react'

const ADS_ENABLED = process.env.NEXT_PUBLIC_ADS_ENABLED === 'true'

// Ad sizes (in pixels) - reserves space to prevent CLS
const AD_SIZES = {
  top: { width: 728, height: 90 }, // Leaderboard
  sidebar: { width: 300, height: 250 }, // Medium Rectangle
  bottom: { width: 728, height: 90 }, // Leaderboard
  inline: { width: 300, height: 250 }, // Medium Rectangle
}

export default function AdPlaceholder({ 
  position = 'inline',
  className = '',
  minHeight = null 
}) {
  const [adsEnabled, setAdsEnabled] = useState(false)

  useEffect(() => {
    // Check if ads should be enabled
    setAdsEnabled(ADS_ENABLED)
  }, [])

  if (!adsEnabled) return null

  const size = AD_SIZES[position] || AD_SIZES.inline
  const height = minHeight || size.height

  return (
    <div
      className={`ad-container ${className}`}
      style={{
        minWidth: size.width,
        minHeight: height,
        width: '100%',
        maxWidth: size.width,
        margin: '0 auto',
        backgroundColor: '#f9fafb',
        border: '1px dashed #d1d5db',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Placeholder - Replace with actual ad code */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#9ca3af',
          fontSize: '14px',
          textAlign: 'center',
          pointerEvents: 'none',
        }}
      >
        <div>Advertisement</div>
        <div style={{ fontSize: '12px', marginTop: '4px' }}>
          {size.width} × {size.height}
        </div>
      </div>
      
      {/* 
        TODO: Replace this with your ad provider code
        Example for Google AdSense:
        
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
          crossOrigin="anonymous"
        />
        <ins
          className="adsbygoogle"
          style={{ display: 'block', width: size.width, height: size.height }}
          data-ad-client="ca-pub-XXXXXXXXXX"
          data-ad-slot="XXXXXXXXXX"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        <script>
          (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
      */}
    </div>
  )
}
