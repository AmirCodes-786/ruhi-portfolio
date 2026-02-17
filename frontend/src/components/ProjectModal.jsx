import { motion, AnimatePresence } from 'framer-motion'

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="glass rounded-3xl max-w-2xl w-full max-h-[90vh] border-cyan-600/30 dark:border-cyan-400/30 neon-border overflow-y-scroll modal-scrollable"
          data-lenis-prevent
        >
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-8 border-b border-cyan-600/20 dark:border-cyan-400/20 flex items-center justify-between z-10">
            <h2 className="text-3xl font-bold text-cyan-900 dark:text-cyan-300 flex items-center gap-3">
              <span className="text-4xl">{project.thumbnail}</span>
              {project.title}
            </h2>
            <motion.button
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="text-2xl text-cyan-700 dark:text-cyan-400 hover:text-cyan-300 flex-shrink-0"
            >
              ✕
            </motion.button>
          </div>

          {/* Content */}
          <div className="p-8 space-y-8">
            {/* Main info */}
            <div>
              <p className="text-cyan-800/80 dark:text-cyan-300/80 text-lg mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex-1 glass rounded-lg p-4 border-cyan-600/20 dark:border-cyan-400/20">
                  <div className="text-sm text-cyan-700/60 dark:text-cyan-400/60 mb-1">Rating</div>
                  <div className="text-2xl font-bold text-cyan-900 dark:text-cyan-300">
                    ⭐ {project.rating}/5
                  </div>
                </div>
                <div className="flex-1 glass rounded-lg p-4 border-cyan-600/20 dark:border-cyan-400/20">
                  <div className="text-sm text-cyan-700/60 dark:text-cyan-400/60 mb-1">Views</div>
                  <div className="text-2xl font-bold text-cyan-900 dark:text-cyan-300">
                    👁️ {(project.views / 1000).toFixed(0)}K
                  </div>
                </div>
                <div className="flex-1 glass rounded-lg p-4 border-cyan-600/20 dark:border-cyan-400/20">
                  <div className="text-sm text-cyan-700/60 dark:text-cyan-400/60 mb-1">Price</div>
                  <div className="text-2xl font-bold text-pink-700 dark:text-pink-300">
                    {project.price}
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-bold text-cyan-900 dark:text-cyan-300 mb-4">Key Features</h3>
              <div className="space-y-2">
                {project.features.map((feature) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-start gap-3 text-cyan-800/80 dark:text-cyan-300/80"
                  >
                    <span className="text-cyan-600 dark:text-cyan-400 mt-1 flex-shrink-0">✓</span>
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-xl font-bold text-cyan-900 dark:text-cyan-300 mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-600/30 dark:border-cyan-400/30 text-cyan-900/80 dark:text-cyan-300/80 font-mono text-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 pb-8 border-t border-cyan-600/20 dark:border-cyan-400/20">
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 px-6 py-3 rounded-lg bg-cyan-500/10 border border-cyan-600/30 dark:border-cyan-400/30 text-cyan-900 dark:text-cyan-300 font-semibold hover:border-cyan-300/50 transition-smooth text-center"
              >
                🔗 View Live Demo
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 0, 110, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 px-6 py-3 rounded-lg bg-pink-500/10 border border-pink-600/30 dark:border-pink-400/30 text-pink-900 dark:text-pink-300 font-semibold hover:border-pink-300/50 transition-smooth neon-border-pink"
              >
                🛒 Buy Now - {project.price}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ProjectModal
