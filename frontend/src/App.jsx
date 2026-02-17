import { useEffect, useRef } from 'react'
import { useStore } from './store/store'
import Lenis from 'lenis'
import Hero from './sections/Hero'
import Navigation from './components/Navigation'
import Skills from './sections/Skills'
import Education from './sections/Education'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import FloatingDock from './components/FloatingDock'
import ThemeToggle from './components/ThemeToggle'

function App() {
  const lenisRef = useRef(null)
  const { theme } = useStore()

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
    })

    lenisRef.current = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

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

  return (
    <div className="min-h-screen transition-colors duration-300">
      <Navigation />
      <FloatingDock />
      <ThemeToggle />
      
      <main className="relative">
        <Hero />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
