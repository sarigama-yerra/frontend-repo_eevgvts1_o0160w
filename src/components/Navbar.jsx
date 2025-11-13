import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 w-full backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-white">
          <span className="text-lg font-black tracking-wider" style={{ textShadow: '0 0 10px rgba(255,0,0,0.4)' }}>AARAV.NEXTGEN</span>
        </a>
        <nav className="hidden gap-6 text-sm text-white/80 sm:flex">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#collab" className="hover:text-white">Collaborate</a>
        </nav>
        <motion.a
          href="#collab"
          whileHover={{ scale: 1.03 }}
          className="rounded-xl bg-gradient-to-r from-red-600 to-amber-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_25px_rgba(255,80,0,0.35)]"
        >
          Contact
        </motion.a>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
    </div>
  )
}
