import Link from 'next/link'
import { generations, getAgeRange, getYearRangeDisplay } from './lib/data/generations'
import { getCurrentYear } from './lib/dates'
import GenerationCalculator from './components/GenerationCalculator'
import GenerationCard from './components/GenerationCard'

// Server component: regenerate daily so the age figures below stay current.
export const revalidate = 86400

export default function Home() {
  const currentYear = getCurrentYear()

  // FAQ content lives in data so it drives both the rendered list and the
  // FAQPage structured data below (eligible for rich results).
  const faqs = [
    {
      question: 'What generation am I if I was born in 2000?',
      answer:
        'If you were born in 2000, you are Generation Z (Gen Z). Gen Z includes anyone born between 1997 and 2012, making you part of the first truly digital native generation.',
    },
    {
      question: 'What years are Gen Z?',
      answer: `Gen Z birth years are 1997 to 2012. This makes Gen Z ages range from ${currentYear - 2012} to ${currentYear - 1997} years old in ${currentYear}.`,
    },
    {
      question: 'What comes after Gen Z?',
      answer:
        'Generation Alpha comes after Gen Z. Gen Alpha includes anyone born from 2013 onward, with the next cohort (Generation Beta) widely considered to begin in the mid-2020s.',
    },
    {
      question: 'What generation is 2010?',
      answer: `2010 is Generation Z. Children born in 2010 are ${currentYear - 2010} years old and are part of the Gen Z cohort that grew up with smartphones and social media.`,
    },
    {
      question: 'Are Millennials and Gen Y the same?',
      answer:
        'Yes, Millennials and Gen Y are the same generation. Both terms refer to people born between 1981 and 1996.',
    },
    {
      question: 'How are generation years determined?',
      answer:
        'Generation years are determined by researchers and demographers based on major cultural, technological, and historical events. Organizations like Pew Research Center study shared experiences and characteristics of birth cohorts to define generational boundaries.',
    },
    {
      question: 'Why do generation year ranges vary?',
      answer:
        'Different research organizations use slightly different cutoff dates. While there is general agreement, some sources may differ by a year or two. Our calculator uses the most commonly accepted ranges from Pew Research and demographic experts.',
    },
    {
      question: 'Can you be between two generations?',
      answer:
        'Yes! People born on the cusp between generations (like 1996-1997 or 1980-1981) often share characteristics of both. These cuspers may identify with traits from both generations.',
    },
  ]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center mb-4 text-gray-900">
          What Generation Am I?
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          Enter your birth year to instantly discover your generation
        </p>

        {/* Quiz and Blog Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="/quiz"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-bold px-8 py-4 rounded-xl hover:from-purple-700 hover:to-pink-700 transition transform hover:scale-105 shadow-lg"
          >
            🎯 Take the Generation Quiz
          </Link>
          <Link
            href="/blog"
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-bold px-8 py-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition transform hover:scale-105 shadow-lg"
          >
            📚 Read Our Blog
          </Link>
        </div>

        <GenerationCalculator />

        <div className="prose prose-lg max-w-none bg-white rounded-2xl shadow-lg p-8 space-y-8">
          <h2 className="text-3xl font-bold text-gray-900">Understanding Generations</h2>
          <p className="text-gray-700 leading-relaxed">
            Generations are defined by birth year ranges that correspond to significant cultural,
            technological, and social changes. Each generation shares common experiences and
            characteristics that shape their worldview, values, and behaviors.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12">All Generations by Birth Year</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold">Generation</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold">Birth Years</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold">Age in {currentYear}</th>
                </tr>
              </thead>
              <tbody>
                {generations.map((gen) => {
                  const ages = getAgeRange(gen)
                  return (
                    <tr key={gen.slug} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">{gen.emoji} {gen.shortName}</td>
                      <td className="border border-gray-300 px-4 py-3">{getYearRangeDisplay(gen)}</td>
                      <td className="border border-gray-300 px-4 py-3">{ages.start} - {ages.end} years</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12">Generation Descriptions</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-purple-600 mb-3">🚀 Gen Alpha (2013 - Present)</h3>
              <p className="text-gray-700 leading-relaxed">
                Generation Alpha is the newest generation, born entirely in the 21st century. They are growing up
                with tablets, voice assistants, and AI as normal parts of daily life. These true digital natives
                have never known a world without smartphones, streaming services, or social media. They are expected
                to be the most technologically immersed and formally educated generation in history.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-600 mb-3">📱 Gen Z (1997 - 2012)</h3>
              <p className="text-gray-700 leading-relaxed">
                Generation Z grew up with smartphones in hand and witnessed major global events like COVID-19 during
                their formative years. They are known for being socially conscious, entrepreneurial, and fluent in
                digital communication. Gen Z values authenticity, diversity, and mental health awareness. They are
                the first generation to have never known life without the internet and social media.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-green-600 mb-3">💻 Millennials / Gen Y (1981 - 1996)</h3>
              <p className="text-gray-700 leading-relaxed">
                Millennials came of age during the internet boom and witnessed the transition from analog to digital.
                They experienced 9/11 as formative adults, faced the 2008 financial crisis early in their careers,
                and have dealt with student debt and rising housing costs. Known for valuing work-life balance,
                experiences over possessions, and using technology to stay connected. They are often called the
                burnout generation but are also known for resilience and adaptability.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-yellow-600 mb-3">🎸 Gen X (1965 - 1980)</h3>
              <p className="text-gray-700 leading-relaxed">
                Generation X is often called the forgotten generation or latchkey kids. They grew up during
                rising divorce rates and the emergence of personal computers. Gen X witnessed the fall of the Berlin
                Wall, came of age with MTV and grunge music, and learned to be independent and resourceful. They value
                work-life balance, are skeptical of institutions, and successfully bridged the gap between analog
                childhood and digital adulthood.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-orange-600 mb-3">🌻 Baby Boomers (1946 - 1964)</h3>
              <p className="text-gray-700 leading-relaxed">
                Baby Boomers were born during the post-World War II population boom and grew up during unprecedented
                economic prosperity. They witnessed the civil rights movement, moon landing, Vietnam War, and Woodstock.
                Boomers are known for their optimism, work ethic, and driving cultural revolutions in the 1960s and 70s.
                They are often characterized by individualism, competitive spirit, and strong work-centric values.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-600 mb-3">📻 Silent Generation (1928 - 1945)</h3>
              <p className="text-gray-700 leading-relaxed">
                The Silent Generation grew up during the Great Depression and World War II, which shaped their values
                of hard work, sacrifice, and civic duty. They witnessed the birth of television and the golden age of
                radio. Known for their strong work ethic, respect for authority, and commitment to financial security.
                Despite their name, this generation produced many influential civil rights leaders and cultural icons.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}

            {/* Browse All Generations Section */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
                Explore Each Generation
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {generations.map((gen) => (
                  <GenerationCard key={gen.slug} gen={gen} />
                ))}
              </div>

              <div className="text-center mt-8">
                <Link href="/compare" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition font-semibold text-lg">
                  🆚 Compare Any Two Generations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
