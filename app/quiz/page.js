'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { trackEvent, AnalyticsEvents } from '../lib/analytics'
import { getGenerationBySlug, getYearRangeDisplay } from '../lib/data/generations'

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState([])
  const [showResult, setShowResult] = useState(false)

  useEffect(() => {
    trackEvent(AnalyticsEvents.PAGE_VIEW, { page: 'quiz' })
    trackEvent(AnalyticsEvents.QUIZ_STARTED)
  }, [])

  const questions = [
    {
      question: "What was your first social media platform?",
      options: [
        { text: "What is social media?", points: { silent: 5, boomer: 3 } },
        { text: "MySpace", points: { genx: 3, millennial: 4 } },
        { text: "Facebook", points: { millennial: 5, genx: 2 } },
        { text: "Instagram", points: { genz: 4, millennial: 2 } },
        { text: "TikTok", points: { genz: 5, genalpha: 3 } }
      ]
    },
    {
      question: "How do you prefer to communicate?",
      options: [
        { text: "Face-to-face conversation", points: { silent: 4, boomer: 5 } },
        { text: "Phone call", points: { boomer: 4, genx: 3 } },
        { text: "Text message", points: { millennial: 5, genz: 3 } },
        { text: "Voice notes or video calls", points: { genz: 5, millennial: 2 } },
        { text: "Emojis and GIFs only", points: { genz: 4, genalpha: 5 } }
      ]
    },
    {
      question: "What is your ideal Friday night?",
      options: [
        { text: "Early to bed with a good book", points: { silent: 5, boomer: 3 } },
        { text: "Dinner party with close friends", points: { boomer: 4, genx: 3 } },
        { text: "Going out to bars or clubs", points: { genx: 3, millennial: 4 } },
        { text: "Netflix and chill", points: { millennial: 5, genz: 3 } },
        { text: "Gaming with friends online", points: { genz: 5, genalpha: 4 } }
      ]
    },
    {
      question: "Do you remember life before smartphones?",
      options: [
        { text: "Smartphones? We had rotary phones!", points: { silent: 5, boomer: 4 } },
        { text: "I remember pagers and payphones", points: { genx: 5, boomer: 2 } },
        { text: "Barely - got my first phone in high school", points: { millennial: 5, genx: 2 } },
        { text: "Not really - always had one", points: { genz: 5, millennial: 2 } },
        { text: "What is life without a smartphone?", points: { genz: 3, genalpha: 5 } }
      ]
    },
    {
      question: "Your relationship with technology:",
      options: [
        { text: "What is an app?", points: { silent: 5, boomer: 3 } },
        { text: "I use it when necessary", points: { boomer: 4, genx: 3 } },
        { text: "I adapted and learned", points: { genx: 5, millennial: 3 } },
        { text: "Tech is second nature to me", points: { millennial: 5, genz: 4 } },
        { text: "I was born with a tablet in my hand", points: { genz: 3, genalpha: 5 } }
      ]
    },
    {
      question: "How do you consume music?",
      options: [
        { text: "Vinyl records and radio", points: { silent: 5, boomer: 4 } },
        { text: "CDs and cassette tapes", points: { genx: 5, boomer: 2 } },
        { text: "iPod and iTunes downloads", points: { millennial: 5, genx: 2 } },
        { text: "Spotify and streaming playlists", points: { millennial: 3, genz: 5 } },
        { text: "TikTok sounds and algorithm picks", points: { genz: 4, genalpha: 5 } }
      ]
    },
    {
      question: "Your work style preference:",
      options: [
        { text: "9-5 office, stay until retirement", points: { silent: 5, boomer: 4 } },
        { text: "Stable job with work-life balance", points: { genx: 5, boomer: 2 } },
        { text: "Flexibility and remote options", points: { millennial: 5, genx: 2 } },
        { text: "Side hustles and freelancing", points: { genz: 5, millennial: 3 } },
        { text: "Influencer or content creator", points: { genz: 4, genalpha: 5 } }
      ]
    },
    {
      question: "How do you share photos?",
      options: [
        { text: "Photo albums and printed pictures", points: { silent: 5, boomer: 4 } },
        { text: "Email attachments", points: { boomer: 3, genx: 5 } },
        { text: "Facebook posts", points: { genx: 3, millennial: 5 } },
        { text: "Instagram stories", points: { millennial: 3, genz: 5 } },
        { text: "Snapchat streaks and BeReal", points: { genz: 4, genalpha: 5 } }
      ]
    },
    {
      question: "Your attitude toward change:",
      options: [
        { text: "If it ain't broke don't fix it", points: { silent: 5, boomer: 4 } },
        { text: "Skeptical but adaptable", points: { genx: 5, boomer: 2 } },
        { text: "Optimistic about progress", points: { millennial: 5, genx: 2 } },
        { text: "Embrace change and innovation", points: { genz: 5, millennial: 3 } },
        { text: "Change is the only constant", points: { genz: 3, genalpha: 5 } }
      ]
    },
    {
      question: "Your biggest concern about the future:",
      options: [
        { text: "Healthcare and retirement", points: { silent: 5, boomer: 4 } },
        { text: "Job security and economy", points: { genx: 5, boomer: 2 } },
        { text: "Student debt and housing costs", points: { millennial: 5, genx: 2 } },
        { text: "Climate change and social justice", points: { genz: 5, millennial: 3 } },
        { text: "AI taking over everything", points: { genz: 3, genalpha: 5 } }
      ]
    }
  ]

  // Result-display data derived from the canonical generation source so birth
  // years stay in sync. Keys map the quiz's scoring codes to canonical slugs.
  const QUIZ_SLUGS = {
    silent: 'silent-generation',
    boomer: 'baby-boomers',
    genx: 'gen-x',
    millennial: 'millennials',
    genz: 'gen-z',
    genalpha: 'gen-alpha',
  }
  const generations = Object.fromEntries(
    Object.entries(QUIZ_SLUGS).map(([key, slug]) => {
      const c = getGenerationBySlug(slug)
      return [key, { name: c.shortName, emoji: c.emoji, years: getYearRangeDisplay(c), color: c.color, colorHex: c.colorHex }]
    })
  )

  const handleAnswer = (option) => {
    const updatedAnswers = [...answers, option.points]
    setAnswers(updatedAnswers)
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
      // Track completion after a brief delay to ensure result is calculated
      setTimeout(() => {
        const totals = { silent: 0, boomer: 0, genx: 0, millennial: 0, genz: 0, genalpha: 0 }
        updatedAnswers.forEach(answer => {
          Object.keys(answer).forEach(gen => {
            totals[gen] += answer[gen]
          })
        })
        const winner = Object.keys(totals).reduce((a, b) => totals[a] > totals[b] ? a : b)
        trackEvent(AnalyticsEvents.QUIZ_COMPLETED, {
          result: winner,
          questionCount: questions.length,
        })
      }, 100)
    }
  }

  const calculateResult = () => {
    const totals = { silent: 0, boomer: 0, genx: 0, millennial: 0, genz: 0, genalpha: 0 }
    
    answers.forEach(answer => {
      Object.keys(answer).forEach(gen => {
        totals[gen] += answer[gen]
      })
    })

    const winner = Object.keys(totals).reduce((a, b) => totals[a] > totals[b] ? a : b)
    return { generation: winner, scores: totals }
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResult(false)
  }

  if (showResult) {
    const result = calculateResult()
    const gen = generations[result.generation]
    
    return (
      <div className="mx-auto max-w-3xl px-4 py-10">
        <div>
          <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Your result</h1>

            <div
              className="mt-6 rounded-2xl border-2 p-8"
              style={{ borderColor: gen.colorHex, backgroundColor: `${gen.colorHex}0f` }}
            >
              <div className="text-7xl" aria-hidden="true">{gen.emoji}</div>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">You vibe with {gen.name}!</h2>
              <p className="mt-1 text-slate-600">Born {gen.years}</p>
            </div>

            <p className="mt-6 text-slate-600">
              Based on your answers, you have the spirit and mindset of {gen.name}. Your preferences
              and attitudes align most closely with this generation.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <button
                onClick={() => {
                  const text = `I took the Generation Quiz and I vibe with ${gen.name} ${gen.emoji}! Take the quiz at findmygen.com/quiz`
                  navigator.clipboard.writeText(text)
                  alert('Copied to clipboard!')
                }}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                📋 Copy
              </button>
              <button
                onClick={() => {
                  const text = encodeURIComponent(`I vibe with ${gen.name} ${gen.emoji}! Which generation do YOU match? Take the quiz:`)
                  const url = encodeURIComponent('https://www.findmygen.com/quiz')
                  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank')
                }}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                🐦 Share on X
              </button>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button
                onClick={restartQuiz}
                className="rounded-xl bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-strong"
              >
                Take the quiz again
              </button>
              <Link
                href="/"
                className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Find your birth-year generation
              </Link>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900">Your generation breakdown</h3>
            <div className="mt-4 space-y-3">
              {Object.entries(result.scores).sort((a, b) => b[1] - a[1]).map(([key, score]) => {
                const g = generations[key]
                const percentage = (score / Math.max(...Object.values(result.scores)) * 100).toFixed(0)
                return (
                  <div key={key} className="flex items-center gap-3">
                    <span className="text-xl" aria-hidden="true">{g.emoji}</span>
                    <span className="w-28 text-sm font-medium text-slate-700">{g.name}</span>
                    <div className="h-3 flex-1 rounded-full bg-slate-100">
                      <div
                        className="h-3 rounded-full"
                        style={{ width: `${percentage}%`, backgroundColor: g.colorHex }}
                      ></div>
                    </div>
                    <span className="w-10 text-right text-sm font-bold text-slate-700">{score}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Which generation do you really belong to?
        </h1>
        <p className="mt-3 text-slate-600">
          Answer 10 questions to discover which generation matches your vibe.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-6">
          <div className="mb-2 flex items-center justify-between text-sm font-medium text-slate-500">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span className="text-brand">{Math.round((currentQuestion / questions.length) * 100)}% complete</span>
          </div>
          <div className="h-2 w-full rounded-full bg-slate-100">
            <div
              className="h-2 rounded-full bg-brand transition-all duration-300"
              style={{ width: `${(currentQuestion / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
          {questions[currentQuestion].question}
        </h2>

        <div className="mt-6 space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="w-full rounded-xl border border-slate-200 p-4 text-left font-medium text-slate-800 transition hover:border-brand hover:bg-brand-soft"
            >
              {option.text}
            </button>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Link href="/" className="text-sm font-semibold text-brand hover:underline">
            ← Back to the calculator
          </Link>
        </div>
      </div>
    </div>
  )
}