import Link from 'next/link'

export const metadata = {
  title: 'Gen X: Birth Years, Characteristics & Traits (1965-1980) | FindMyGen',
  description: 'Complete guide to Generation X: birth years 1965-1980, defining characteristics, cultural impact, and what makes Gen X the forgotten generation.',
  keywords: 'gen x, generation x, gen x birth years, gen x characteristics, gen x traits, 1965-1980, latchkey generation'
}

export default function GenXPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-6 text-sm">
          <Link href="/" className="text-yellow-600 hover:text-yellow-700">Home</Link>
          <span className="mx-2 text-gray-500">→</span>
          <span className="text-gray-700">Gen X</span>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="text-center mb-8">
            <div className="text-8xl mb-4">🎸</div>
            <h1 className="text-5xl font-bold mb-4 text-gray-900">Generation X</h1>
            <p className="text-2xl text-yellow-600 font-semibold mb-2">Born: 1965 - 1980</p>
            <p className="text-xl text-gray-600">Ages 45-60 in 2025</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">What Years Are Gen X?</h2>
            <p className="text-gray-700 leading-relaxed">
              Generation X includes anyone born between <strong>1965 and 1980</strong>. This makes Gen X currently between 
              45 and 60 years old in 2025. Often called the forgotten generation or middle child between Baby Boomers and 
              Millennials, Gen X quietly shaped modern culture while flying under the radar.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Key Characteristics of Gen X</h2>
            
            <h3 className="text-2xl font-bold text-yellow-600 mt-8 mb-3">The Latchkey Kids</h3>
            <p className="text-gray-700 leading-relaxed">
              Gen X earned the nickname latchkey kids because many came home to empty houses as both parents worked. They 
              learned independence and self-reliance early. This generation is comfortable being alone, solving problems 
              themselves, and doesn't need constant validation or supervision. This independence shaped their skeptical, 
              self-sufficient nature.
            </p>

            <h3 className="text-2xl font-bold text-yellow-600 mt-8 mb-3">Adaptable and Resourceful</h3>
            <p className="text-gray-700 leading-relaxed">
              Gen X grew up with rotary phones and learned to code on Commodore 64s. They adapted to personal computers, 
              email, mobile phones, and smartphones as adults. This makes them uniquely skilled at both analog and digital 
              worlds. They can fix things themselves, figure things out without YouTube tutorials, and aren't intimidated 
              by technology.
            </p>

            <h3 className="text-2xl font-bold text-yellow-600 mt-8 mb-3">Work-Life Balance Pioneers</h3>
            <p className="text-gray-700 leading-relaxed">
              Gen X watched their Boomer parents sacrifice everything for work and said no thanks. They prioritized family 
              time and personal life more than previous generations. Gen X introduced the concept that work doesn't have to 
              consume your identity. They work hard but leave at 5pm without guilt.
            </p>

            <h3 className="text-2xl font-bold text-yellow-600 mt-8 mb-3">Skeptical and Cynical</h3>
            <p className="text-gray-700 leading-relaxed">
              Gen X grew up during Watergate, economic recessions, rising divorce rates, and the AIDS crisis. This bred 
              healthy skepticism toward authority, institutions, and corporate promises. They question everything, don't 
              trust easily, and value authenticity over polish. This generation invented alternative culture and grunge 
              precisely because they rejected mainstream phoniness.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Gen X in the Workplace</h2>
            <p className="text-gray-700 leading-relaxed">
              Gen X currently holds many leadership positions but leads differently than Boomers:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
              <li><strong>Direct communicators:</strong> No corporate speak, just tell it like it is</li>
              <li><strong>Results-focused:</strong> Care about output, not face time in the office</li>
              <li><strong>Hands-off managers:</strong> Trust employees to do their jobs without micromanaging</li>
              <li><strong>Pragmatic problem solvers:</strong> Focus on practical solutions over theory</li>
              <li><strong>Bridge builders:</strong> Can translate between Boomer and Millennial/Gen Z perspectives</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Cultural Markers That Define Gen X</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>MTV:</strong> Music television defined their teen years</li>
              <li><strong>Grunge and Alternative Rock:</strong> Nirvana, Pearl Jam rejected mainstream culture</li>
              <li><strong>Fall of Berlin Wall:</strong> Witnessed end of Cold War</li>
              <li><strong>AIDS Crisis:</strong> Came of age during devastating epidemic</li>
              <li><strong>Personal Computers:</strong> First generation to use PCs in schools and homes</li>
              <li><strong>Economic Uncertainty:</strong> Graduated into recessions, learned financial caution</li>
              <li><strong>Rise of Hip Hop:</strong> Witnessed genre go mainstream</li>
              <li><strong>Slacker Culture:</strong> Defined by Richard Linklater film, rejected yuppie ambition</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Why Gen X is Called the Forgotten Generation</h2>
            <p className="text-gray-700 leading-relaxed">
              Gen X is smaller than both Baby Boomers and Millennials, making them less influential in marketing and media. 
              They're sandwiched between two loud, large generations and content to stay under the radar. Gen X doesn't 
              complain much, solves problems quietly, and doesn't seek attention. While Boomers and Millennials dominate 
              headlines, Gen X runs things behind the scenes and prefers it that way.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Gen X Values and Attitudes</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Independence:</strong> Prefer to figure things out themselves</li>
              <li><strong>Authenticity:</strong> Hate phoniness and corporate speak</li>
              <li><strong>Privacy:</strong> Not interested in sharing everything online</li>
              <li><strong>Skepticism:</strong> Question authority and marketing claims</li>
              <li><strong>Balance:</strong> Work to live, not live to work</li>
              <li><strong>Practicality:</strong> Focus on what works, not theory</li>
              <li><strong>Self-reliance:</strong> Don't need constant validation or supervision</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Frequently Asked Questions About Gen X</h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">What does the X in Gen X stand for?</h3>
                <p className="text-gray-700">The X represents the unknown, undefined nature of the generation. Author Douglas Coupland popularized the term in his 1991 novel Generation X, describing a generation that rejected labels and definitions.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">What generation comes after Gen X?</h3>
                <p className="text-gray-700">Millennials (Generation Y) come after Gen X. Millennials were born between 1981 and 1996.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">If I was born in 1975, what generation am I?</h3>
                <p className="text-gray-700">If you were born in 1975, you are Generation X, right in the middle of the generation.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Why is Gen X called the latchkey generation?</h3>
                <p className="text-gray-700">Gen X is called the latchkey generation because many children wore house keys around their necks and came home to empty houses while both parents worked. This created an independent, self-reliant generation.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">Explore More</h3>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/" className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition font-semibold">
                Find Your Generation
              </Link>
              <Link href="/quiz" className="bg-purple-600 text-white px-6 py-3
              rounded-lg hover:bg-purple-700 transition font-semibold">
                Take the Quiz
              </Link>
              <Link href="/millennials" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition font-semibold">
                Compare to Millennials
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}