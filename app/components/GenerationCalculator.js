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
        colorHex: '#dc2626',
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
          colorHex: gen.colorHex,
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

  const shareButton =
    'inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50'

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="birth-year" className="mb-2 block text-sm font-semibold text-slate-700">
            Enter your birth year
          </label>
          <input
            id="birth-year"
            type="number"
            value={birthYear}
            onChange={(e) => setBirthYear(e.target.value)}
            placeholder="e.g. 1995"
            min="1920"
            max="2099"
            className="w-full rounded-xl border border-slate-300 px-5 py-4 text-2xl text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand focus:ring-2 focus:ring-brand/20"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-xl bg-brand px-6 py-4 text-lg font-semibold text-white transition hover:bg-brand-strong"
        >
          Find my generation
        </button>
      </form>

      {result && (
        <div
          className="mt-6 rounded-2xl border-2 p-6 text-center"
          style={{ borderColor: result.colorHex, backgroundColor: `${result.colorHex}0f` }}
        >
          <div className="mb-3 text-5xl">{result.emoji}</div>
          <h2 className="mb-1 text-2xl font-bold text-slate-900">{result.name}</h2>

          {result.isTerminator ? (
            <>
              <p className="mb-2 font-semibold" style={{ color: result.colorHex }}>
                🚨 Time traveller detected!
              </p>
              <p className="text-slate-600">
                Born in {result.year}? You are from the future. Come back once you have actually
                been born! 😄
              </p>
            </>
          ) : (
            <>
              <p className="text-slate-700">
                Born {result.year} · Age {result.age} in {currentYear}
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Birth years: {result.start} – {result.end === null ? 'Present' : result.end}
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    const text = `I am ${result.name} ${result.emoji}! Find your generation at findmygen.com`
                    navigator.clipboard.writeText(text)
                    alert('Copied to clipboard! Share it anywhere 🎉')
                    trackEvent(AnalyticsEvents.CALCULATOR_RESULT_SHARED, {
                      generation: result.name,
                      method: 'copy',
                    })
                  }}
                  className={shareButton}
                >
                  📋 Copy
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const text = encodeURIComponent(`I am ${result.name} ${result.emoji}! What generation are you?`)
                    const url = encodeURIComponent('https://www.findmygen.com')
                    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank')
                    trackEvent(AnalyticsEvents.CALCULATOR_RESULT_SHARED, {
                      generation: result.name,
                      method: 'twitter',
                    })
                  }}
                  className={shareButton}
                >
                  🐦 Share on X
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const url = encodeURIComponent('https://www.findmygen.com')
                    const quote = encodeURIComponent(`I am ${result.name} ${result.emoji}! Find your generation:`)
                    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${quote}`, '_blank')
                    trackEvent(AnalyticsEvents.CALCULATOR_RESULT_SHARED, {
                      generation: result.name,
                      method: 'facebook',
                    })
                  }}
                  className={shareButton}
                >
                  📘 Share
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {result && (
        <button
          type="button"
          onClick={() => {
            setBirthYear('')
            setResult(null)
          }}
          className="mt-3 w-full rounded-xl bg-slate-100 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
        >
          Calculate another
        </button>
      )}
    </div>
  )
}
