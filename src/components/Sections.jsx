import { motion } from 'framer-motion'

function GlowCard({ title, children, accent = 'red' }) {
  const accentColor = accent === 'amber' ? 'from-amber-500/30 to-yellow-500/10' : 'from-red-600/30 to-pink-600/10'
  const borderColor = accent === 'amber' ? 'border-amber-400/30' : 'border-red-500/30'
  const shadow = accent === 'amber' ? 'shadow-[0_20px_80px_rgba(255,196,0,0.25)]' : 'shadow-[0_20px_80px_rgba(255,80,0,0.25)]'

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`relative rounded-2xl border ${borderColor} bg-gradient-to-br ${accentColor} p-[1px] ${shadow}`}
    >
      <div className="rounded-2xl bg-[#0b0b0d]/70 p-6 backdrop-blur-xl">
        {title && <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>}
        <div className="text-white/75 text-sm">{children}</div>
      </div>
    </motion.div>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-[#0a0a0b] py-20 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-2">
        <GlowCard title="My Story" accent="amber">
          <p>
            Aarav Tatiya — Generative AI enthusiast, video editor, and content creator from Igatpuri, Maharashtra.
            Studied at Rajarshi Shahu Maharaj Polytechnic Nashik 13.
            Started in 2023, exploring AI tools and digital creativity — combining tech + storytelling.
          </p>
        </GlowCard>
        <div className="grid gap-6">
          <GlowCard>
            <p className="font-medium">My Vision: To educate and empower individuals with Generative AI.</p>
          </GlowCard>
          <GlowCard accent="amber">
            <p className="font-medium">My Mission: To build a creative community where AI becomes a partner in imagination.</p>
          </GlowCard>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-white/80 backdrop-blur-md">
          The Future is Now — Let’s make creativity smarter, together.
        </div>
      </div>
    </section>
  )
}

export function SkillsSection() {
  const skills = [
    {
      title: 'Generative AI Tools',
      items: ['ChatGPT', 'Midjourney', 'Runway ML', 'Pika Labs', 'Leonardo.ai', 'ElevenLabs'],
      accent: 'red'
    },
    {
      title: 'Video Editing',
      items: ['Premiere Pro', 'CapCut', 'After Effects', 'Custom AI Edits'],
      accent: 'amber'
    },
    {
      title: 'Content Creation',
      items: ['Scripting', 'Storyboarding', 'Reels/Shorts', 'Audience Engagement'],
      accent: 'red'
    },
    {
      title: 'Other Skills',
      items: ['Prompt Engineering', 'Creative Direction', 'Personal Branding', 'Visual Storytelling'],
      accent: 'amber'
    }
  ]

  return (
    <section id="skills" className="relative w-full bg-[#0a0a0b] py-20 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-2">
        {skills.map((s) => (
          <GlowCard key={s.title} title={s.title} accent={s.accent}>
            <ul className="mt-2 grid grid-cols-2 gap-2 text-sm sm:grid-cols-3">
              {s.items.map((i) => (
                <li key={i} className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white/80">
                  {i}
                </li>
              ))}
            </ul>
          </GlowCard>
        ))}
      </div>
    </section>
  )
}

export function CollabSection() {
  const links = [
    { label: 'Instagram', href: 'https://www.instagram.com/aarav.nextgen/', accent: 'red' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aarav-tatiya-84a6b62a7/', accent: 'amber' },
    { label: 'YouTube', href: 'https://www.youtube.com/@aarav.nextgen', accent: 'red' }
  ]

  return (
    <section id="collab" className="relative w-full bg-[#0a0a0b] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-bold">Let’s Collaborate</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">
          Open for AI-powered videos, custom edits, and creative partnerships.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className={`group relative overflow-hidden rounded-2xl border ${l.accent === 'amber' ? 'border-amber-400/30' : 'border-red-500/30'} bg-white/5 p-4 backdrop-blur-md transition`}
              style={{ boxShadow: l.accent === 'amber' ? '0 20px 80px rgba(255,196,0,0.25)' : '0 20px 80px rgba(255,80,0,0.25)' }}
            >
              <div className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 ${l.accent === 'amber' ? 'bg-gradient-to-r from-yellow-500/10 to-amber-500/10' : 'bg-gradient-to-r from-red-600/10 to-pink-600/10'}`} />
              <div className="relative z-10 py-6 text-lg font-semibold">{l.label}</div>
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-6xl px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-red-500/60 to-transparent" />
        <p className="mt-6 text-center text-sm text-white/60">© 2025 Aarav Tatiya. All rights reserved.</p>
      </div>
    </section>
  )
}
