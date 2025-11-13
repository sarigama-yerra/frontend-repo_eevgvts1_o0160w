import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero({ onExplore, onLearn }) {
  const containerRef = useRef(null)
  const [parallax, setParallax] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    setParallax({ x: (x - 0.5) * 20, y: (y - 0.5) * 20 })
  }

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0a0b] text-white"
    >
      {/* Soft gradients + particles */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-red-600/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-10 h-96 w-96 rounded-full bg-yellow-500/20 blur-3xl" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.06), transparent 40%)' }} />
      </div>

      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Overlay content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md"
          style={{ boxShadow: '0 0 30px rgba(255, 80, 0, 0.25)' }}
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-red-500 shadow-[0_0_12px_2px_rgba(255,0,0,0.8)]" />
          <span className="text-xs tracking-widest text-white/80">GEN AI CREATOR • FUTURISTIC PORTFOLIO</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          className="text-3xl font-black leading-tight sm:text-5xl md:text-6xl"
          style={{
            textShadow: '0 0 10px rgba(255,0,0,0.3), 0 0 30px rgba(255,196,0,0.15)'
          }}
        >
          Aarav Tatiya — Creating, Learning, and Leading with Generative AI.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          className="mt-5 max-w-2xl text-balance text-sm text-white/70 sm:text-base"
        >
          “Action is the foundational key to all success.”
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={onExplore}
            className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-red-600 to-amber-500 px-6 py-3 font-semibold text-white shadow-[0_0_25px_rgba(255,59,48,0.35)] transition-transform hover:scale-[1.02]"
          >
            <span className="relative z-10">Explore My Work</span>
            <span className="pointer-events-none absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
          </button>
          <button
            onClick={onLearn}
            className="relative rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-md transition hover:bg-white/10"
            style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06), 0 10px 40px -10px rgba(255,196,0,0.3)' }}
          >
            Learn with Me
          </button>
        </motion.div>
      </div>

      {/* Parallax floating cards */}
      <motion.div
        className="pointer-events-none absolute left-6 top-24 hidden sm:block"
        style={{
          transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0)`
        }}
        transition={{ type: 'spring', stiffness: 40, damping: 15 }}
      >
        <div className="rounded-2xl border border-red-500/30 bg-black/30 p-4 backdrop-blur-xl shadow-[0_15px_60px_rgba(255,80,0,0.25)]">
          <p className="text-xs text-white/70">Neon • Depth • 3D</p>
        </div>
      </motion.div>
      <motion.div
        className="pointer-events-none absolute bottom-24 right-6 hidden sm:block"
        style={{ transform: `translate3d(${-parallax.x}px, ${-parallax.y}px, 0)` }}
        transition={{ type: 'spring', stiffness: 40, damping: 15 }}
      >
        <div className="rounded-2xl border border-amber-400/30 bg-black/30 p-4 backdrop-blur-xl shadow-[0_15px_60px_rgba(255,196,0,0.25)]">
          <p className="text-xs text-white/70">Futuristic • Motion</p>
        </div>
      </motion.div>
    </section>
  )
}
