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

  const descriptions = [
    {
      emoji: '🚀',
      title: 'Gen Alpha (2013 – Present)',
      color: '#a855f7',
      body: 'Generation Alpha is the newest generation, born entirely in the 21st century. They are growing up with tablets, voice assistants, and AI as normal parts of daily life. These true digital natives have never known a world without smartphones, streaming services, or social media. They are expected to be the most technologically immersed and formally educated generation in history.',
    },
    {
      emoji: '📱',
      title: 'Gen Z (1997 – 2012)',
      color: '#3b82f6',
      body: 'Generation Z grew up with smartphones in hand and witnessed major global events like COVID-19 during their formative years. They are known for being socially conscious, entrepreneurial, and fluent in digital communication. Gen Z values authenticity, diversity, and mental health awareness. They are the first generation to have never known life without the internet and social media.',
    },
    {
      emoji: '💻',
      title: 'Millennials / Gen Y (1981 – 1996)',
      color: '#22c55e',
      body: 'Millennials came of age during the internet boom and witnessed the transition from analog to digital. They experienced 9/11 as formative adults, faced the 2008 financial crisis early in their careers, and have dealt with student debt and rising housing costs. Known for valuing work-life balance, experiences over possessions, and using technology to stay connected. They are often called the burnout generation but are also known for resilience and adaptability.',
    },
    {
      emoji: '🎸',
      title: 'Gen X (1965 – 1980)',
      color: '#eab308',
      body: 'Generation X is often called the forgotten generation or latchkey kids. They grew up during rising divorce rates and the emergence of personal computers. Gen X witnessed the fall of the Berlin Wall, came of age with MTV and grunge music, and learned to be independent and resourceful. They value work-life balance, are skeptical of institutions, and successfully bridged the gap between analog childhood and digital adulthood.',
    },
    {
      emoji: '🌻',
      title: 'Baby Boomers (1946 – 1964)',
      color: '#f97316',
      body: 'Baby Boomers were born during the post-World War II population boom and grew up during unprecedented economic prosperity. They witnessed the civil rights movement, moon landing, Vietnam War, and Woodstock. Boomers are known for their optimism, work ethic, and driving cultural revolutions in the 1960s and 70s. They are often characterized by individualism, competitive spirit, and strong work-centric values.',
    },
    {
      emoji: '📻',
      title: 'Silent Generation (1928 – 1945)',
      color: '#6b7280',
      body: 'The Silent Generation grew up during the Great Depression and World War II, which shaped their values of hard work, sacrifice, and civic duty. They witnessed the birth of television and the golden age of radio. Known for their strong work ethic, respect for authority, and commitment to financial security. Despite their name, this generation produced many influential civil rights leaders and cultural icons.',
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero with the calculator as the centrepiece */}
      <section className="bg-gradient-to-b from-brand-soft to-canvas">
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-14 sm:pt-20">
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand">
              Free generation finder
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              What generation am I?
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">
              Enter your birth year to instantly discover your generation, your age, and what makes
              your cohort tick.
            </p>
          </div>

          <div className="mt-8">
            <GenerationCalculator />
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-slate-600">
            <Link href="/quiz" className="transition hover:text-brand">🎯 Take the quiz</Link>
            <Link href="/compare" className="transition hover:text-brand">🆚 Compare generations</Link>
            <Link href="/blog" className="transition hover:text-brand">📚 Read the blog</Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl space-y-16 px-4 py-16">
        {/* Explore each generation */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Explore each generation
          </h2>
          <p className="mt-2 text-slate-600">
            Six generations, from the Silent Generation to Gen Alpha. Open any card for the full guide.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {generations.map((gen) => (
              <GenerationCard key={gen.slug} gen={gen} />
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/compare"
              className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-strong"
            >
              🆚 Compare any two generations
            </Link>
          </div>
        </section>

        {/* Table */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            All generations by birth year
          </h2>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-slate-200 bg-slate-50 text-slate-600">
                <tr>
                  <th className="px-4 py-3 font-semibold">Generation</th>
                  <th className="px-4 py-3 font-semibold">Birth years</th>
                  <th className="px-4 py-3 font-semibold">Age in {currentYear}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {generations.map((gen) => {
                  const ages = getAgeRange(gen)
                  return (
                    <tr key={gen.slug} className="transition hover:bg-slate-50">
                      <td className="px-4 py-3 font-medium text-slate-900">
                        <span className="mr-2" aria-hidden="true">{gen.emoji}</span>
                        {gen.shortName}
                      </td>
                      <td className="px-4 py-3 text-slate-600">{getYearRangeDisplay(gen)}</td>
                      <td className="px-4 py-3 text-slate-600">{ages.start} – {ages.end} yrs</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* Understanding generations + descriptions */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Understanding generations
          </h2>
          <p className="mt-3 leading-relaxed text-slate-600">
            Generations are defined by birth year ranges that correspond to significant cultural,
            technological, and social changes. Each generation shares common experiences and
            characteristics that shape their worldview, values, and behaviors.
          </p>
          <div className="mt-8 space-y-8">
            {descriptions.map((d) => (
              <div key={d.title} className="border-l-2 pl-5" style={{ borderColor: d.color }}>
                <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900">
                  <span aria-hidden="true">{d.emoji}</span>
                  {d.title}
                </h3>
                <p className="mt-2 leading-relaxed text-slate-600">{d.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Frequently asked questions
          </h2>
          <dl className="mt-6 divide-y divide-slate-200">
            {faqs.map((faq) => (
              <div key={faq.question} className="py-5">
                <dt className="font-semibold text-slate-900">{faq.question}</dt>
                <dd className="mt-2 text-slate-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </>
  )
}
