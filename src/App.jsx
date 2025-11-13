import { useRef } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import { AboutSection, SkillsSection, CollabSection } from './components/Sections'

function App() {
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)

  const scrollTo = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="min-h-screen w-full bg-[#0a0a0b] text-white">
      <Navbar />
      <Hero onExplore={() => scrollTo(skillsRef)} onLearn={() => scrollTo(aboutRef)} />

      <div ref={aboutRef}>
        <AboutSection />
      </div>
      <div ref={skillsRef}>
        <SkillsSection />
      </div>
      <CollabSection />
    </div>
  )
}

export default App
