import { useState } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

const FloatingDock = () => {
  const [hoveredId, setHoveredId] = useState(null)

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠', href: '#hero' },
    { id: 'skills', label: 'Skills', icon: '⚡', href: '#skills' },
    { id: 'education', label: 'Education', icon: '🎓', href: '#education' },
    { id: 'experience', label: 'Experience', icon: '💼', href: '#experience' },
    { id: 'projects', label: 'Projects', icon: '🔥', href: '#projects' },
    { id: 'contact', label: 'Contact', icon: '📬', href: '#contact' },
  ]

  return (
    // Mobile Bottom Dock Navigation
    <nav className="lg:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-4 p-4 glass rounded-full backdrop-blur-xl">
      {navItems.map((item) => (
        <motion.a
          key={item.id}
          href={item.href}
          onClick={(e) => {
            e.preventDefault()
            const element = document.querySelector(item.href)
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' })
            }
          }}
          onHoverStart={() => setHoveredId(item.id)}
          onHoverEnd={() => setHoveredId(null)}
          className={clsx(
            'p-3 rounded-full transition-smooth',
            hoveredId === item.id
              ? 'shadow-neon-cyan bg-cyan-500/10 text-cyan-300'
              : 'hover:bg-cyan-500/10'
          )}
          whileHover={{ scale: 1.2, y: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="text-lg">{item.icon}</span>
        </motion.a>
      ))}
    </nav>
  )
}

export default FloatingDock
