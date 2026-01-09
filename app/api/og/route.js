import { ImageResponse } from 'next/og'
import { getGenerationBySlug } from '../../lib/data/generations'
import { getPostBySlug } from '../../lib/data/blog'

export const runtime = 'edge'
export const alt = 'FindMyGen OG Image'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type') // 'generation' or 'blog'
    const slug = searchParams.get('slug')
    const title = searchParams.get('title') || 'FindMyGen'
    const description = searchParams.get('description') || 'Discover your generation'

    let displayTitle = title
    let displayDescription = description
    let bgColor = '#3b82f6' // Default blue
    let emoji = '🎯'

    // Fetch data if slug provided
    if (slug) {
      if (type === 'generation') {
        const gen = getGenerationBySlug(slug)
        if (gen) {
          displayTitle = gen.displayName
          displayDescription = gen.shortDescription.substring(0, 120) + '...'
          bgColor = gen.colorHex || bgColor
          emoji = gen.emoji || emoji
        }
      } else if (type === 'blog') {
        const post = getPostBySlug(slug)
        if (post) {
          displayTitle = post.title
          displayDescription = post.description.substring(0, 120) + '...'
        }
      }
    }

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: bgColor,
            backgroundImage: 'linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(0,0,0,0.1))',
            padding: '80px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
              borderRadius: '24px',
              padding: '60px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
              width: '100%',
              maxWidth: '1000px',
            }}
          >
            <div style={{ fontSize: '80px', marginBottom: '20px' }}>{emoji}</div>
            <div
              style={{
                fontSize: '56px',
                fontWeight: 'bold',
                textAlign: 'center',
                color: '#1f2937',
                marginBottom: '24px',
                lineHeight: '1.2',
              }}
            >
              {displayTitle}
            </div>
            <div
              style={{
                fontSize: '28px',
                textAlign: 'center',
                color: '#6b7280',
                lineHeight: '1.5',
              }}
            >
              {displayDescription}
            </div>
            <div
              style={{
                marginTop: '40px',
                fontSize: '24px',
                color: '#3b82f6',
                fontWeight: 'bold',
              }}
            >
              findmygen.com
            </div>
          </div>
        </div>
      ),
      {
        ...size,
      }
    )
  } catch (error) {
    console.error('OG image generation error:', error)
    // Return a simple default image on error
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#3b82f6',
          }}
        >
          <div style={{ fontSize: '60px', color: 'white', fontWeight: 'bold' }}>FindMyGen</div>
        </div>
      ),
      {
        ...size,
      }
    )
  }
}
