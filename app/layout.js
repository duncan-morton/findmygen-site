import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true
})

const siteUrl = 'https://findmygen.com'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'What Generation Am I? | Birth Year → Generation Checker – FindMyGen',
  description:
    "Find your generation instantly! Enter your birth year to discover if you're Gen Z, Millennial, Gen X, Boomer, or Gen Alpha. Free tool.",
  keywords:
    'generation calculator, what generation am i, generation chart by birth year, gen z, millennial, gen x, boomer, silent generation, gen alpha, birth year',
  authors: [{ name: 'FindMyGen' }],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'What Generation Am I? | Birth Year → Generation Checker',
    description:
      'Enter your birth year to instantly find your generation, age and fun facts. Share your result with one click.',
    type: 'website',
    url: siteUrl,
    siteName: 'FindMyGen',
    locale: 'en_US',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'FindMyGen - Generation Calculator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Generation Am I? | FindMyGen',
    description:
      'Enter your birth year to instantly find your generation, age and fun facts.',
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'FindMyGen',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    sameAs: [],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'FindMyGen',
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/blog?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'FindMyGen Generation Calculator',
    url: siteUrl,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web Browser',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description: 'Free generation calculator that identifies your generation based on birth year.',
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webAppSchema),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
