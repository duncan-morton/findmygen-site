const siteUrl = 'https://findmygen.com'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Generation Quiz: Which Generation Do You Match? | FindMyGen',
  description: 'Take our fun 10-question quiz to discover which generation matches your personality and lifestyle. Are you really a Millennial, Gen Z, or something else?',
  keywords: 'generation quiz, personality quiz, which generation am i, millennial quiz, gen z quiz, generation test',
  alternates: {
    canonical: `${siteUrl}/quiz`,
  },
  openGraph: {
    title: 'Generation Quiz: Which Generation Do You Match?',
    description: 'Take our fun quiz to discover which generation matches your vibe!',
    type: 'website',
    url: `${siteUrl}/quiz`,
    siteName: 'FindMyGen',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Generation Quiz: Which Generation Do You Match?',
    description: 'Take our fun quiz to discover which generation matches your vibe!',
  },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
}
  
  export default function QuizLayout({ children }) {
    return children
  }