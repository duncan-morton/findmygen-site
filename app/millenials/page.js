import Link from 'next/link'

export const metadata = {
  title: 'Millennials (Gen Y): Birth Years, Traits & Characteristics (1981-1996) | FindMyGen',
  description: 'Complete guide to Millennials (Generation Y): birth years 1981-1996, defining traits, workplace habits, cultural impact, and what makes Millennials unique.',
  keywords: 'millennials, generation y, millennial birth years, millennial characteristics, gen y, 1981-1996, millennial traits'
}

export default function MillennialsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-6 text-sm">
          <Link href="/" className="text-green-600 hover:text-green-700">Home</Link>
          <span className="mx-2 text-gray-500">→</span>
          <span className="text-gray-700">Millennials</span>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="text-center mb-8">
            <div className="text-8xl mb-4">💻</div>
            <h1 className="text-5xl font-bold mb-4 text-gray-900">Millennials (Generation Y)</h1>
            <p className="text-2xl text-green-600 font-semibold mb-2">Born: 1981 - 1996</p>
            <p className="text-xl text-gray-600">Ages 29-44 in 2025</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">What Years Are Millennials?</h2>
            <p className="text-gray-700 leading-relaxed">
              Millennials, also known as Generation Y, include anyone born between 1981 and 1996. This makes 
              Millennials currently between 29 and 44 years old in 2025. Millennials came of age during the rise of the internet, 
              witnessed 9/11 as young adults, and entered the workforce during or after the 2008 financial crisis.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Key Characteristics of Millennials</h2>
            
            <h3 className="text-2xl font-bold text-green-600 mt-8 mb-3">Digital Pioneers</h3>
            <p className="text-gray-700 leading-relaxed">
              Millennials are the bridge generation between analog and digital. They remember life before cell phones and 
              social media but adapted quickly to new technology. They grew up with dial-up internet, instant messaging like AIM and MSN, 
              and witnessed the birth of Facebook, YouTube, and smartphones. This makes them uniquely skilled at both traditional 
              and digital communication.
            </p>

            <h3 className="text-2xl font-bold text-green-600 mt-8 mb-3">Value Experiences Over Things</h3>
            <p className="text-gray-700 leading-relaxed">
              Millennials pioneered the shift from material possessions to experiences. They prioritize travel, dining out, 
              concerts, and activities over buying homes or expensive items. This generation coined the term YOLO and 
              popularized sharing experiences on social media. Economic factors also play a role since many Millennials face 
              student debt and high housing costs that make traditional milestones harder to achieve.
            </p>

            <h3 className="text-2xl font-bold text-green-600 mt-8 mb-3">Work-Life Balance Advocates</h3>
            <p className="text-gray-700 leading-relaxed">
              Unlike Baby Boomers who lived to work, Millennials work to live. They value flexible schedules, remote work 
              options, and companies that respect personal time. This generation questions the traditional 9-5 model and expects 
              their work to have purpose and meaning. They are known for job-hopping more than previous generations, seeking 
              better opportunities and work environments.
            </p>

            <h3 className="text-2xl font-bold text-green-600 mt-8 mb-3">Socially Conscious Consumers</h3>
            <p className="text-gray-700 leading-relaxed">
              Millennials care about brand values, sustainability, and social responsibility. They research companies before 
              buying, support small businesses, and prefer brands that align with their ethics. This generation drives the 
              demand for organic food, sustainable products, and companies that take stands on social issues.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Millennials in the Workplace</h2>
            <p className="text-gray-700 leading-relaxed">
              Millennials entered the workforce during economic uncertainty and have been shaped by that experience. They value:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
              <li>Purpose-driven work: Want to know their work matters</li>
              <li>Feedback and growth: Expect regular communication and development opportunities</li>
              <li>Flexibility: Remote work and flexible hours are priorities</li>
              <li>Company culture: Will leave toxic environments regardless of pay</li>
              <li>Work-life integration: Blur the lines between work and personal life but on their terms</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Cultural Markers That Define Millennials</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>9/11 Terrorist Attacks: Defining moment that shaped their worldview</li>
              <li>2008 Financial Crisis: Entered job market during recession, affected financial trajectory</li>
              <li>Rise of Social Media: Facebook, Instagram, Twitter became part of daily life</li>
              <li>iPhone Launch in 2007: Smartphones changed everything during their young adult years</li>
              <li>Student Debt Crisis: First generation to face massive education costs</li>
              <li>Obama Election: First generation to vote for social media-savvy president</li>
              <li>Sharing Economy: Uber, Airbnb, and gig work became mainstream</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Millennial Stereotypes vs Reality</h2>
            <p className="text-gray-700 leading-relaxed">
              Millennials have been called entitled, lazy, and addicted to their phones. In reality, they are:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
              <li>Working longer hours than previous generations thanks to always-on technology</li>
              <li>More educated than any previous generation</li>
              <li>Dealing with economic challenges their parents did not face like higher housing costs and student debt</li>
              <li>Actually very resilient, having navigated multiple economic crises</li>
              <li>Community-minded and volunteer at higher rates than previous generations</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Frequently Asked Questions About Millennials</h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Are Millennials and Gen Y the same?</h3>
                <p className="text-gray-700">Yes, Millennials and Generation Y are the same. Both terms refer to people born between 1981 and 1996.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">What generation comes after Millennials?</h3>
                <p className="text-gray-700">Generation Z comes after Millennials. Gen Z includes anyone born between 1997 and 2012.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">If I was born in 1995, am I a Millennial?</h3>
                <p className="text-gray-700">Yes, if you were born in 1995, you are a Millennial. You are on the younger end of the generation, close to the Gen Z cusp.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Why are they called Millennials?</h3>
                <p className="text-gray-700">They are called Millennials because they came of age around the turn of the millennium in the year 2000. The oldest Millennials graduated high school in 1999, the youngest in 2014.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">Explore More</h3>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition font-semibold">
                Find Your Generation
              </Link>
              <Link href="/quiz" className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition font-semibold">
                Take the Quiz
              </Link>
              <Link href="/gen-z" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
                Compare to Gen Z
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}