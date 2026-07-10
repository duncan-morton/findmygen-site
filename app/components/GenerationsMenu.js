'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

/**
 * Header "Generations" dropdown. A small client island so it can close on
 * outside-click, Escape, and after navigating — behaviour a native <details>
 * disclosure can't provide. Receives pre-computed, serialisable items.
 */
export default function GenerationsMenu({ items }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return
    const onPointer = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="true"
        aria-expanded={open}
        className="flex items-center gap-1 rounded-lg px-2.5 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
      >
        Generations
        <span className={`text-xs transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true">
          ▾
        </span>
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-max min-w-[15rem] rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
          {items.map((gen) => (
            <Link
              key={gen.slug}
              href={`/${gen.slug}`}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 whitespace-nowrap rounded-lg px-3 py-2 text-sm transition hover:bg-slate-50"
            >
              <span aria-hidden="true">{gen.emoji}</span>
              <span className="font-medium text-slate-700">{gen.shortName}</span>
              <span className="ml-auto pl-8 text-xs text-slate-400">{gen.years}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
