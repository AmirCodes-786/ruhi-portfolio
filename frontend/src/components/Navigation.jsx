import { useState } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

const Navigation = () => {
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
    // Desktop Sidebar Navigation
    <nav className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-6">
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
          className="group relative"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className={clsx(
            'glass rounded-xl p-4 transition-smooth',
            hoveredId === item.id
              ? 'shadow-neon-cyan border-cyan-600/50 dark:border-cyan-400/50 bg-cyan-500/10'
              : 'border-cyan-600/20 dark:border-cyan-400/20 hover:border-cyan-400/40'
          )}>
            <span className="text-xl">{item.icon}</span>
          </div>

          {hoveredId === item.id && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="absolute left-20 top-1/2 -translate-y-1/2 glass rounded-lg px-4 py-2 whitespace-nowrap text-sm font-medium"
            >
              {item.label}
            </motion.div>
          )}
        </motion.a>
      ))}
    </nav>
  )
}

export default Navigation
