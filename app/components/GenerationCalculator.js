'use client'
import { useState, useEffect } from 'react'
import { trackEvent, AnalyticsEvents } from '../lib/analytics'
import { getCurrentYear } from '../lib/dates'
import { generations } from '../lib/data/generations'

/**
 * The interactive birth-year calculator. Isolated as a small client island so
 * the rest of the homepage can render as a static server component.
 */
export default function GenerationCalculator() {
  const [birthYear, setBirthYear] = useState('')
  const [result, setResult] = useState(null)

  const currentYear = getCurrentYear()

  useEffect(() => {
    trackEvent(AnalyticsEvents.PAGE_VIEW, { page: 'home' })
  }, [])

  const getGeneration = (year) => {
    const y = parseInt(year)
    if (isNaN(y) || y < 1920) return null

    if (y > currentYear) {
      return {
        name: 'Terminator',
        start: currentYear + 1,
        end: 9999,
        color: 'bg-red-600',
        emoji: '🤖',
        age: '???',
        year: y,
        isTerminator: true,
      }
    }

    for (const gen of generations) {
      const endYear = gen.yearRange.end ?? currentYear
      if (y >= gen.yearRange.start && y <= endYear) {
        return {
          name: gen.shortName,
          emoji: gen.emoji,
          color: gen.color,
          start: gen.yearRange.start,
          end: gen.yearRange.end,
          age: currentYear - y,
          year: y,
        }
      }
    }
    return null
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const gen = getGeneration(birthYear)
    setResult(gen)
    trackEvent(AnalyticsEvents.CALCULATOR_USED, {
      birthYear: parseInt(birthYear),
      generation: gen?.name,
    })
  }

  return (
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
                  I will be back... to {currentYear}
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
                  Born in {result.year} • Age {result.age} in {currentYear}
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Birth Years: {result.start} - {result.end === null ? 'Present' : result.end}
                </p>

                <div className="flex gap-3 justify-center flex-wrap mt-6">
                  <button
                    onClick={() => {
                      const text = `I am ${result.name} ${result.emoji}! Find your generation at findmygen.com`
                      navigator.clipboard.writeText(text)
                      alert('Copied to clipboard! Share it anywhere! 🎉')
                      trackEvent(AnalyticsEvents.CALCULATOR_RESULT_SHARED, {
                        generation: result.name,
                        method: 'copy',
                      })
                    }}
                    className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition"
                  >
                    📋 Copy Result
                  </button>

                  <button
                    onClick={() => {
                      const text = encodeURIComponent(`I am ${result.name} ${result.emoji}! What generation are you?`)
                      const url = encodeURIComponent('https://www.findmygen.com')
                      window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank')
                      trackEvent(AnalyticsEvents.CALCULATOR_RESULT_SHARED, {
                        generation: result.name,
                        method: 'twitter',
                      })
                    }}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                  >
                    🐦 Share on X
                  </button>

                  <button
                    onClick={() => {
                      const url = encodeURIComponent('https://www.findmygen.com')
                      const quote = encodeURIComponent(`I am ${result.name} ${result.emoji}! Find your generation:`)
                      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${quote}`, '_blank')
                      trackEvent(AnalyticsEvents.CALCULATOR_RESULT_SHARED, {
                        generation: result.name,
                        method: 'facebook',
                      })
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
  )
}
