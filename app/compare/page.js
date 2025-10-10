'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function ComparePage() {
  const [gen1, setGen1] = useState('genz')
  const [gen2, setGen2] = useState('millennials')
  const [showComparison, setShowComparison] = useState(false)

  const generations = {
    genalpha: {
      name: 'Gen Alpha',
      years: '2013-Present',
      ages: '0-12',
      emoji: '🚀',
      color: 'bg-purple-500',
      traits: ['AI Native', 'iPad Kids', 'Pandemic Schooling', 'Voice-First', 'Most Diverse'],
      tech: 'Born with tablets and voice assistants',
      work: 'Too young - will reshape future workplace',
      values: 'Inclusivity, technology integration, adaptability',
      communication: 'Voice commands, short videos, emojis',
      notable: 'First generation born entirely in 21st century'
    },
    genz: {
      name: 'Gen Z',
      years: '1997-2012',
      ages: '13-28',
      emoji: '📱',
      color: 'bg-blue-500',
      traits: ['Digital Natives', 'Socially Conscious', 'Entrepreneurial', 'Authentic', 'Mental Health Aware'],
      tech: 'Smartphones, TikTok, social media fluent',
      work: 'Value flexibility, purpose, work-life balance',
      values: 'Diversity, sustainability, mental health, authenticity',
      communication: 'Texting, memes, short-form video',
      notable: 'First generation never knowing life without internet'
    },
    millennials: {
      name: 'Millennials',
      years: '1981-1996',
      ages: '29-44',
      emoji: '💻',
      color: 'bg-green-500',
      traits: ['Tech Savvy', 'Experience-Focused', 'Optimistic', 'Collaborative', 'Purpose-Driven'],
      tech: 'Adapted to smartphones, social media pioneers',
      work: 'Work-life balance, meaningful work, job hoppers',
      values: 'Experiences over things, social responsibility, diversity',
      communication: 'Text, email, social media, mix of digital and traditional',
      notable: 'Bridge between analog childhood and digital adulthood'
    },
    genx: {
      name: 'Gen X',
      years: '1965-1980',
      ages: '45-60',
      emoji: '🎸',
      color: 'bg-yellow-500',
      traits: ['Independent', 'Skeptical', 'Resourceful', 'Pragmatic', 'Work-Life Balance'],
      tech: 'Adapted well, comfortable with both analog and digital',
      work: 'Results-focused, hands-off management, direct communication',
      values: 'Independence, authenticity, work-life balance, skepticism',
      communication: 'Email, phone calls, direct and to the point',
      notable: 'The forgotten generation, latchkey kids'
    },
    boomers: {
      name: 'Baby Boomers',
      years: '1946-1964',
      ages: '61-79',
      emoji: '🌻',
      color: 'bg-orange-500',
      traits: ['Hardworking', 'Competitive', 'Optimistic', 'Loyal', 'Goal-Oriented'],
      tech: 'Adapted out of necessity, prefer traditional methods',
      work: 'Live to work, company loyalty, face time important',
      values: 'Success, achievement, traditional family, materialism',
      communication: 'Phone calls, face-to-face, formal emails',
      notable: 'Largest generation, drove cultural revolutions of 60s-70s'
    },
    silent: {
      name: 'Silent Generation',
      years: '1928-1945',
      ages: '80-97',
      emoji: '📻',
      color: 'bg-gray-500',
      traits: ['Dutiful', 'Frugal', 'Loyal', 'Respectful', 'Traditional'],
      tech: 'Witnessed most change, prefer simplicity',
      work: 'Company loyalty for life, respect hierarchy',
      values: 'Hard work, sacrifice, saving, respect for authority',
      communication: 'Phone calls, letters, in-person',
      notable: 'Grew up during Great Depression and WWII'
    }
  }

  const handleCompare = () => {
    setShowComparison(true)
  }

  const gen1Data = generations[gen1]
  const gen2Data = generations[gen2]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-6 text-sm">
          <Link href="/" className="text-blue-600 hover:text-blue-700">Home</Link>
          <span className="mx-2 text-gray-500">→</span>
          <span className="text-gray-700">Compare Generations</span>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">
            🆚 Compare Generations
          </h1>
          <p className="text-xl text-gray-600">
            Discover the differences between any two generations
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-lg font-semibold mb-3 text-gray-700">
                First Generation
              </label>
              <select
                value={gen1}
                onChange={(e) => setGen1(e.target.value)}
                className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-500 outline-none"
              >
                <option value="genalpha">Gen Alpha (2013-Present)</option>
                <option value="genz">Gen Z (1997-2012)</option>
                <option value="millennials">Millennials (1981-1996)</option>
                <option value="genx">Gen X (1965-1980)</option>
                <option value="boomers">Baby Boomers (1946-1964)</option>
                <option value="silent">Silent Generation (1928-1945)</option>
              </select>
            </div>

            <div>
              <label className="block text-lg font-semibold mb-3 text-gray-700">
                Second Generation
              </label>
              <select
                value={gen2}
                onChange={(e) => setGen2(e.target.value)}
                className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-500 outline-none"
              >
                <option value="genalpha">Gen Alpha (2013-Present)</option>
                <option value="genz">Gen Z (1997-2012)</option>
                <option value="millennials">Millennials (1981-1996)</option>
                <option value="genx">Gen X (1965-1980)</option>
                <option value="boomers">Baby Boomers (1946-1964)</option>
                <option value="silent">Silent Generation (1928-1945)</option>
              </select>
            </div>
          </div>

          <button
            onClick={handleCompare}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xl font-bold py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition transform hover:scale-105"
          >
            Compare Generations 🔍
          </button>
        </div>

        {showComparison && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className={`${gen1Data.color} bg-opacity-10 rounded-2xl p-6 border-2 border-current`}>
                <div className="text-center mb-6">
                  <div className="text-6xl mb-3">{gen1Data.emoji}</div>
                  <h2 className="text-3xl font-bold text-gray-900">{gen1Data.name}</h2>
                  <p className="text-lg text-gray-700">Born: {gen1Data.years}</p>
                  <p className="text-md text-gray-600">Ages {gen1Data.ages} in 2025</p>
                </div>
              </div>

              <div className={`${gen2Data.color} bg-opacity-10 rounded-2xl p-6 border-2 border-current`}>
                <div className="text-center mb-6">
                  <div className="text-6xl mb-3">{gen2Data.emoji}</div>
                  <h2 className="text-3xl font-bold text-gray-900">{gen2Data.name}</h2>
                  <p className="text-lg text-gray-700">Born: {gen2Data.years}</p>
                  <p className="text-md text-gray-600">Ages {gen2Data.ages} in 2025</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Side-by-Side Comparison</h3>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4 pb-6 border-b">
                  <div className="font-bold text-gray-700">Category</div>
                  <div className="font-bold text-gray-700">{gen1Data.name}</div>
                  <div className="font-bold text-gray-700">{gen2Data.name}</div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 pb-6 border-b">
                  <div className="font-semibold text-gray-800">Key Traits</div>
                  <div>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      {gen1Data.traits.map((trait, i) => (
                        <li key={i}>{trait}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      {gen2Data.traits.map((trait, i) => (
                        <li key={i}>{trait}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 pb-6 border-b">
                  <div className="font-semibold text-gray-800">Technology</div>
                  <div className="text-gray-700">{gen1Data.tech}</div>
                  <div className="text-gray-700">{gen2Data.tech}</div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 pb-6 border-b">
                  <div className="font-semibold text-gray-800">Work Style</div>
                  <div className="text-gray-700">{gen1Data.work}</div>
                  <div className="text-gray-700">{gen2Data.work}</div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 pb-6 border-b">
                  <div className="font-semibold text-gray-800">Core Values</div>
                  <div className="text-gray-700">{gen1Data.values}</div>
                  <div className="text-gray-700">{gen2Data.values}</div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 pb-6 border-b">
                  <div className="font-semibold text-gray-800">Communication</div>
                  <div className="text-gray-700">{gen1Data.communication}</div>
                  <div className="text-gray-700">{gen2Data.communication}</div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="font-semibold text-gray-800">Notable</div>
                  <div className="text-gray-700">{gen1Data.notable}</div>
                  <div className="text-gray-700">{gen2Data.notable}</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Share This Comparison</h3>
              <div className="flex gap-4 flex-wrap">
                <button
                  onClick={() => {
                    const text = `I compared ${gen1Data.name} vs ${gen2Data.name} on FindMyGen! Check it out:`
                    navigator.clipboard.writeText(text + ' https://www.findmygen.com/compare')
                    alert('Copied to clipboard!')
                  }}
                  className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition"
                >
                  📋 Copy Link
                </button>
                
                <button
                  onClick={() => {
                    const text = encodeURIComponent(`I compared ${gen1Data.name} vs ${gen2Data.name}! Which generation are you?`)
                    const url = encodeURIComponent('https://www.findmygen.com/compare')
                    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank')
                  }}
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
                >
                  🐦 Share on X
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Popular Comparisons</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <button onClick={() => { setGen1('genz'); setGen2('millennials'); setShowComparison(true); }} className="p-4 border-2 border-gray-200 rounded-xl hover:border-blue-500 transition text-left">
              <p className="font-semibold">Gen Z vs Millennials</p>
              <p className="text-sm text-gray-600">Digital natives vs digital pioneers</p>
            </button>
            
            <button onClick={() => { setGen1('millennials'); setGen2('genx'); setShowComparison(true); }} className="p-4 border-2 border-gray-200 rounded-xl hover:border-blue-500 transition text-left">
              <p className="font-semibold">Millennials vs Gen X</p>
              <p className="text-sm text-gray-600">Work-life values differ</p>
            </button>
            
            <button onClick={() => { setGen1('genx'); setGen2('boomers'); setShowComparison(true); }} className="p-4 border-2 border-gray-200 rounded-xl hover:border-blue-500 transition text-left">
              <p className="font-semibold">Gen X vs Boomers</p>
              <p className="text-sm text-gray-600">Independence vs loyalty</p>
            </button>
            
            <button onClick={() => { setGen1('genz'); setGen2('genalpha'); setShowComparison(true); }} className="p-4 border-2 border-gray-200 rounded-xl hover:border-blue-500 transition text-left">
              <p className="font-semibold">Gen Z vs Gen Alpha</p>
              <p className="text-sm text-gray-600">Smartphone vs AI generation</p>
            </button>
            
            <button onClick={() => { setGen1('millennials'); setGen2('boomers'); setShowComparison(true); }} className="p-4 border-2 border-gray-200 rounded-xl hover:border-blue-500 transition text-left">
              <p className="font-semibold">Millennials vs Boomers</p>
              <p className="text-sm text-gray-600">OK Boomer origins</p>
            </button>
            
            <button onClick={() => { setGen1('boomers'); setGen2('silent'); setShowComparison(true); }} className="p-4 border-2 border-gray-200 rounded-xl hover:border-blue-500 transition text-left">
              <p className="font-semibold">Boomers vs Silent Gen</p>
              <p className="text-sm text-gray-600">Prosperity vs hardship</p>
            </button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition font-semibold text-lg">
            ← Back to Generation Finder
          </Link>
        </div>
      </div>
    </div>
  )
}