'use client'

import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!show) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed right-5 bottom-5 z-30 w-11 h-11 rounded-full wz-gradient text-white font-bold text-lg shadow-lg shadow-indigo-500/40 hover:shadow-indigo-500/60 transition"
      aria-label="Volver arriba"
    >
      ↑
    </button>
  )
}
