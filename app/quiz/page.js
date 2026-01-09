'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { trackEvent, AnalyticsEvents } from '../lib/analytics'

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

  const generations = {
    silent: { name: 'Silent Generation', emoji: '📻', years: '1928-1945', color: 'bg-gray-500' },
    boomer: { name: 'Baby Boomer', emoji: '🌻', years: '1946-1964', color: 'bg-orange-500' },
    genx: { name: 'Gen X', emoji: '🎸', years: '1965-1980', color: 'bg-yellow-500' },
    millennial: { name: 'Millennial', emoji: '💻', years: '1981-1996', color: 'bg-green-500' },
    genz: { name: 'Gen Z', emoji: '📱', years: '1997-2012', color: 'bg-blue-500' },
    genalpha: { name: 'Gen Alpha', emoji: '🚀', years: '2013-Present', color: 'bg-purple-500' }
  }

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
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">Your Result!</h1>
            
            <div className={`${gen.color} bg-opacity-10 rounded-xl p-8 mb-6 border-2 border-current`}>
              <div className="text-8xl mb-4">{gen.emoji}</div>
              <h2 className="text-4xl font-bold mb-2 text-gray-900">You vibe with {gen.name}!</h2>
              <p className="text-xl text-gray-700">Born: {gen.years}</p>
            </div>

            <p className="text-lg text-gray-700 mb-8">
              Based on your answers, you have the spirit and mindset of {gen.name}! 
              Your preferences and attitudes align most closely with this generation.
            </p>

            <div className="flex gap-4 justify-center flex-wrap mb-6">
              <button
                onClick={() => {
                  const text = `I took the Generation Quiz and I vibe with ${gen.name} ${gen.emoji}! Take the quiz at findmygen.com/quiz`
                  navigator.clipboard.writeText(text)
                  alert('Copied to clipboard!')
                }}
                className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition"
              >
                Copy Result
              </button>
              
              <button
                onClick={() => {
                  const text = encodeURIComponent(`I vibe with ${gen.name} ${gen.emoji}! Which generation do YOU match? Take the quiz:`)
                  const url = encodeURIComponent('https://findmygen.com/quiz')
                  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank')
                }}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
              >
                Share on X
              </button>
            </div>

            <div className="flex gap-4 justify-center flex-wrap">
              <button
                onClick={restartQuiz}
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
              >
                Take Quiz Again
              </button>
              
              <Link
                href="/"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition inline-block"
              >
                Find Your Birth Year Generation
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Your Generation Breakdown:</h3>
            <div className="space-y-3">
              {Object.entries(result.scores).sort((a, b) => b[1] - a[1]).map(([key, score]) => {
                const g = generations[key]
                const percentage = (score / Math.max(...Object.values(result.scores)) * 100).toFixed(0)
                return (
                  <div key={key} className="flex items-center gap-3">
                    <span className="text-2xl">{g.emoji}</span>
                    <span className="font-semibold w-32">{g.name}</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-4">
                      <div 
                        className={`${g.color} h-4 rounded-full transition-all`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className="font-bold w-12 text-right">{score}</span>
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">
            Which Generation Do You Really Belong To?
          </h1>
          <p className="text-xl text-gray-600">
            Answer 10 questions to discover which generation matches your vibe!
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-gray-600">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-sm font-semibold text-purple-600">
                {Math.round(((currentQuestion) / questions.length) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentQuestion / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            {questions[currentQuestion].question}
          </h2>

          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="w-full text-left p-4 rounded-xl border-2 border-gray-200 hover:border-purple-500 hover:bg-purple-50 transition-all duration-200"
              >
                <span className="text-lg font-medium text-gray-800">{option.text}</span>
              </button>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/"
              className="text-purple-600 hover:text-purple-700 font-semibold"
            >
              Back to Generation Calculator
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}