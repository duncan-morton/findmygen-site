import Link from 'next/link';
import Navigation from '../components/Navigation';

export const metadata = {
  title: 'Generation Insights Blog | FindMyGen',
  description: 'Expert insights on generations, from Gen Alpha to Baby Boomers. Learn about generational differences, trends, and what makes each generation unique.',
}

export default function Blog() {
  const posts = [
    {
      slug: 'gen-z-workplace-guide',
      title: 'Gen Z in the Workplace: What Employers Need to Know in 2025',
      excerpt: 'Gen Z is transforming the workplace with new expectations around flexibility, mental health, and authenticity. Learn how to attract, manage, and retain Gen Z talent.',
      date: 'October 18, 2025',
      readTime: '10 min read',
      category: 'Workplace Insights'
    },
    {
      slug: 'baby-boomer-retirement',
      title: 'Baby Boomer Retirement: Redefining What It Means to Age in 2025',
      excerpt: 'Baby Boomers are transforming retirement with active lifestyles, second careers, and longer lives. Learn how this generation is redefining aging and what comes next.',
      date: 'October 18, 2025',
      readTime: '9 min read',
      category: 'Generation Guides'
    },
    {
      slug: 'silent-generation-explained',
      title: 'Silent Generation: The Forgotten Generation Explained',
      excerpt: 'Born 1928-1945, the Silent Generation shaped modern America through quiet determination. Learn about their values, experiences, and lasting impact on society.',
      date: 'October 18, 2025',
      readTime: '9 min read',
      category: 'Generation Guides'
    },
    {
      slug: 'what-is-gen-alpha',
      title: 'What is Gen Alpha? Everything About the First Fully Digital Generation',
      excerpt: 'Born from 2013 onwards, Gen Alpha is the most tech-savvy generation yet. Learn what makes them unique, their defining characteristics, and how they will shape the future.',
      date: 'October 18, 2025',
      readTime: '7 min read',
      category: 'Generation Guides'
    },
    {
      slug: 'millennials-vs-gen-x',
      title: 'Millennials vs Gen X: Why These Generations Clash at Work',
      excerpt: 'Discover why Millennials and Gen X often misunderstand each other in the workplace. Learn about their different approaches to work, communication, and life.',
      date: 'October 18, 2025',
      readTime: '8 min read',
      category: 'Generation Guides'
    },
    {
      slug: 'gen-x-vs-baby-boomers',
      title: 'Gen X vs Baby Boomers: Understanding the Generational Divide',
      excerpt: 'Explore the key differences between Gen X and Baby Boomers in work values, technology adoption, parenting styles, and cultural perspectives.',
      date: 'October 18, 2025',
      readTime: '8 min read',
      category: 'Generation Guides'
    },
    {
      slug: 'gen-z-vs-millennials',
      title: 'Gen Z vs Millennials: The Complete Guide to Understanding Both Generations',
      excerpt: 'Discover the key differences between Gen Z and Millennials, from technology use to work values, communication styles, and cultural touchstones that define each generation.',
      date: 'October 18, 2025',
      readTime: '8 min read',
      category: 'Generation Guides'
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Generation Insights Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Deep dives into what makes each generation unique, from cultural touchstones to workplace values and everything in between.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="space-y-8">
            {posts.map((post) => (
              <Link 
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  {/* Category & Read Time */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Read More */}
                  <div className="flex items-center text-blue-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                    Read Full Article
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}