const siteUrl = 'https://findmygen.com'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Compare Generations: Gen Z vs Millennials & More | FindMyGen',
  description: 'Compare any two generations side-by-side. See differences between Gen Z, Millennials, Gen X, Boomers, and more. Interactive comparison tool.',
  keywords: 'compare generations, gen z vs millennials, millennial vs gen x, generation comparison, generational differences',
  alternates: {
    canonical: `${siteUrl}/compare`,
  },
  openGraph: {
    title: 'Compare Generations: Gen Z vs Millennials & More',
    description: 'Compare any two generations side-by-side. See differences between Gen Z, Millennials, Gen X, Boomers, and more.',
    type: 'website',
    url: `${siteUrl}/compare`,
    siteName: 'FindMyGen',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compare Generations: Gen Z vs Millennials & More',
    description: 'Compare any two generations side-by-side. Interactive comparison tool.',
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
  
  export default function CompareLayout({ children }) {
    return children
  }