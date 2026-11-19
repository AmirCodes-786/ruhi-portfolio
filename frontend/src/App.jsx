import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useStore } from './store/store'
import Hero from './sections/Hero'
import Navigation from './components/Navigation'
import Skills from './sections/Skills'
import Education from './sections/Education'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import About from './sections/About'
import PremiumCursor from './components/PremiumCursor'

function App() {
  const { theme, activeSection } = useStore()

  useEffect(() => {
    // Apply theme to HTML element
    const html = document.documentElement
    if (theme === 'dark') {
      html.classList.remove('light')
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
      html.classList.add('light')
    }
  }, [theme])

  const sections = { hero: <Hero />, about: <About />, skills: <Skills />, education: <Education />, experience: <Experience />, projects: <Projects />, contact: <Contact /> }

  return (
    <div className="h-[100svh] overflow-hidden transition-colors duration-300">
      <PremiumCursor />
      <div className="premium-noise" />
      <Navigation />

      <main className="h-[100svh] pt-[76px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 18, scale: 0.995 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.995 }}
            transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="h-full overflow-hidden"
          >
            {sections[activeSection]}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}

export default App
