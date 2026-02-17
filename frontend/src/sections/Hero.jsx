import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import GlowParticles from '../components/GlowParticles'

const Hero = () => {
  const [displayedRole, setDisplayedRole] = useState('')
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const roles = ['Full Stack Developer', 'Creative Developer', 'UI/UX Designer', 'SEO Optimizer']
  const containerRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      const currentRole = roles[currentRoleIndex]

      // Typing effect
      if (displayedRole.length < currentRole.length) {
        setDisplayedRole(currentRole.slice(0, displayedRole.length + 1))
      } else {
        // Wait and clear for next role
        const waitTimer = setTimeout(() => {
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
          setDisplayedRole('')
        }, 3000)
        clearInterval(interval)
        return () => clearTimeout(waitTimer)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [displayedRole, currentRoleIndex])

  useEffect(() => {
    // Animate floating background elements
    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll('.float-element')
      elements.forEach((el, index) => {
        gsap.to(el, {
          duration: 4 + index,
          y: -30,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      })
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 lg:pt-0"
    >
      {/* Background video gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-purple-500/5 opacity-50" />

      {/* Glow particles */}
      <GlowParticles />

      <div
        ref={containerRef}
        className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center"
      >
        {/* Animated background blur effects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl float-element"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute top-1/3 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl float-element"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4 }}
          className="absolute bottom-1/4 left-0 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl float-element"
        />

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 space-y-8"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg lg:text-xl text-cyan-600 dark:text-cyan-400 font-light tracking-widest uppercase"
          >
            Welcome to my digital universe
          </motion.p>

          {/* Main heading */}
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight space-y-4">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="block text-gray-900 dark:text-white"
            >
              I'm Jagriti Kushwaha
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="block gradient-text"
            >
              {displayedRole}
              <span className="animate-pulse">_</span>
            </motion.span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl lg:text-2xl text-cyan-700/80 dark:text-cyan-300/70 max-w-3xl mx-auto leading-relaxed"
          >
            Building futuristic digital experiences with cutting-edge technology and creative excellence.
            Transforming ideas into immersive, high-performance web applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                const element = document.querySelector('#projects')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 245, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="glass px-8 py-4 rounded-lg font-semibold text-cyan-900 dark:text-white hover:border-cyan-300 border-cyan-600/30 dark:border-cyan-400/30 transition-smooth shadow-lg neon-border flex items-center justify-center"
            >
              View Projects ↓
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                const element = document.querySelector('#contact')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 0, 110, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="glass px-8 py-4 rounded-lg font-semibold text-pink-900 dark:text-white hover:border-pink-300 border-pink-600/30 dark:border-pink-400/30 transition-smooth shadow-lg neon-border-pink flex items-center justify-center"
            >
              Hire Me 🚀
            </motion.a>
            <motion.a
              href="https://jagriti-resume.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass px-8 py-4 rounded-lg font-semibold text-purple-900 dark:text-white border-purple-600/30 dark:border-purple-400/30 transition-smooth shadow-lg neon-border-purple flex items-center justify-center cursor-pointer"
            >
              View Resume 💻
            </motion.a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: 10 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
            className="pt-8 flex justify-center"
          >
            <div className="text-cyan-600/50 dark:text-cyan-400/50 text-sm">
              Scroll to explore ↓
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
