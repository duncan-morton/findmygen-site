import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'What Generation Am I ? | Birth Year → Generation Checker – FindMyGen',
  description: 'Find your generation instantly! Enter your birth year to discover if you\'re Gen Z, Millennial, Gen X, Boomer, or Gen Alpha. Free tool.',
  keywords: 'generation calculator, what generation am i, generation chart by birth year, gen z, millennial, gen x, boomer, silent generation, gen alpha, birth year',
  authors: [{ name: 'FindMyGen' }],
  openGraph: {
    title: 'What Generation Am I? | Birth Year → Generation Checker',
    description: 'Enter your birth year to instantly find your generation, age and fun facts. Share your result with one click.',
    type: 'website',
    url: 'https://findmygen.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Generation Am I? | FindMyGen',
    description: 'Enter your birth year to instantly find your generation, age and fun facts.',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://findmygen.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "FindMyGen Generation Calculator",
              "url": "https://findmygen.com",
              "applicationCategory": "UtilityApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": "Free generation calculator that identifies your generation based on birth year."
            })
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