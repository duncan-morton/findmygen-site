'use client'
import { useState } from 'react'

export default function Home() {
  const [birthYear, setBirthYear] = useState('')
  const [result, setResult] = useState(null)

  const generations = {
    'Gen Alpha': { start: 2013, end: 2025, color: 'bg-purple-500', emoji: '🚀' },
    'Gen Z': { start: 1997, end: 2012, color: 'bg-blue-500', emoji: '📱' },
    'Millennials': { start: 1981, end: 1996, color: 'bg-green-500', emoji: '💻' },
    'Gen X': { start: 1965, end: 1980, color: 'bg-yellow-500', emoji: '🎸' },
    'Baby Boomers': { start: 1946, end: 1964, color: 'bg-orange-500', emoji: '🌻' },
    'Silent Generation': { start: 1928, end: 1945, color: 'bg-gray-500', emoji: '📻' }
  }

  const getGeneration = (year) => {
    const y = parseInt(year)
    if (isNaN(y) || y < 1920) return null
    
    if (y > 2025) {
      return {
        name: 'Terminator',
        start: 2026,
        end: 9999,
        color: 'bg-red-600',
        emoji: '🤖',
        age: '???',
        year: y,
        isTerminator: true
      }
    }
    
    for (const [name, data] of Object.entries(generations)) {
      if (y >= data.start && y <= data.end) {
        const age = 2025 - y
        return { name, ...data, age, year: y }
      }
    }
    return null
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const gen = getGeneration(birthYear)
    setResult(gen)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center mb-4 text-gray-900">
          What Generation Am I?
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          Enter your birth year to instantly discover your generation
        </p>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-lg font-semibold mb-2 text-gray-700">
                Birth Year
              </label>
              <input
                type="number"
                value={birthYear}
                onChange={(e) => setBirthYear(e.target.value)}
                placeholder="e.g., 1995"
                min="1920"
                max="2099"
                className="w-full px-6 py-4 text-2xl border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xl font-bold py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition transform hover:scale-105"
            >
              Find My Generation 🎯
            </button>
          </form>

          {result && (
            <div className={`mt-8 p-6 ${result.color} ${result.isTerminator ? 'bg-opacity-20 animate-pulse' : 'bg-opacity-10'} rounded-xl border-2 border-current`}>
              <div className="text-center">
                <div className="text-6xl mb-4">{result.emoji}</div>
                <h2 className="text-3xl font-bold mb-2 text-gray-900">{result.name}</h2>
                
                {result.isTerminator ? (
                  <>
                    <p className="text-xl text-red-700 font-bold mb-4 animate-pulse">
                      🚨 TIME TRAVELER DETECTED! 🚨
                    </p>
                    <p className="text-lg text-gray-700 mb-2">
                      Born in {result.year}? You are from the future!
                    </p>
                    <p className="text-md text-gray-600 italic">
                      I will be back... to 2025
                    </p>
                    <div className="mt-4 p-4 bg-black bg-opacity-10 rounded-lg">
                      <p className="text-sm text-gray-700">
                        Come back when you have actually been born! 😄
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="text-xl text-gray-700 mb-4">
                      Born in {result.year} • Age {result.age} in 2025
                    </p>
                    <p className="text-lg text-gray-600 mb-6">
                      Birth Years: {result.start} - {result.end}
                    </p>
                    
                    <div className="flex gap-3 justify-center flex-wrap mt-6">
                      <button
                        onClick={() => {
                          const text = `I am ${result.name} ${result.emoji}! Find your generation at findmygen.com`
                          navigator.clipboard.writeText(text)
                          alert('Copied to clipboard! Share it anywhere! 🎉')
                        }}
                        className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition"
                      >
                        📋 Copy Result
                      </button>
                      
                      <button
                        onClick={() => {
                          const text = encodeURIComponent(`I am ${result.name} ${result.emoji}! What generation are you?`)
                          const url = encodeURIComponent('https://findmygen.com')
                          window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank')
                        }}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                      >
                        🐦 Share on X
                      </button>
                      
                      <button
                        onClick={() => {
                          const url = encodeURIComponent('https://findmygen.com')
                          const quote = encodeURIComponent(`I am ${result.name} ${result.emoji}! Find your generation:`)
                          window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${quote}`, '_blank')
                        }}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                      >
                        📘 Share on Facebook
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          {result && (
            <button
              onClick={() => {
                setBirthYear('')
                setResult(null)
              }}
              className="w-full mt-4 bg-gray-200 text-gray-800 text-lg font-semibold py-3 rounded-xl hover:bg-gray-300 transition"
            >
              🔄 Calculate Another Generation
            </button>
          )}
        </div>

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
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold">Age in 2025</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(generations).map(([name, data]) => (
                  <tr key={name} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">{data.emoji} {name}</td>
                    <td className="border border-gray-300 px-4 py-3">{data.start} - {data.end}</td>
                    <td className="border border-gray-300 px-4 py-3">{2025 - data.end} - {2025 - data.start} years</td>
                  </tr>
                ))}
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
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">What generation am I if I was born in 2000?</h3>
              <p className="text-gray-700">If you were born in 2000, you are Generation Z (Gen Z). Gen Z includes anyone born between 1997 and 2012, making you part of the first truly digital native generation.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">What years are Gen Z?</h3>
              <p className="text-gray-700">Gen Z birth years are 1997 to 2012. This makes Gen Z ages range from 13 to 28 years old in 2025.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">What comes after Gen Z?</h3>
              <p className="text-gray-700">Generation Alpha comes after Gen Z. Gen Alpha includes anyone born from 2013 to the present day and is expected to continue until around 2025.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">What generation is 2010?</h3>
              <p className="text-gray-700">2010 is Generation Z. Children born in 2010 are currently 15 years old and are part of the Gen Z cohort that grew up with smartphones and social media.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Are Millennials and Gen Y the same?</h3>
              <p className="text-gray-700">Yes, Millennials and Gen Y are the same generation. Both terms refer to people born between 1981 and 1996.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">How are generation years determined?</h3>
              <p className="text-gray-700">Generation years are determined by researchers and demographers based on major cultural, technological, and historical events. Organizations like Pew Research Center study shared experiences and characteristics of birth cohorts to define generational boundaries.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Why do generation year ranges vary?</h3>
              <p className="text-gray-700">Different research organizations use slightly different cutoff dates. While there is general agreement, some sources may differ by a year or two. Our calculator uses the most commonly accepted ranges from Pew Research and demographic experts.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Can you be between two generations?</h3>
              <p className="text-gray-700">Yes! People born on the cusp between generations (like 1996-1997 or 1980-1981) often share characteristics of both. These cuspers may identify with traits from both generations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}