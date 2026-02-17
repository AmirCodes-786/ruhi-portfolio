import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import ProjectModal from '../components/ProjectModal'
import { projects } from '../data/projects'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-100px' })
  const [selectedProject, setSelectedProject] = useState(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-20 lg:py-32 px-6 lg:px-12 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-pink-500/5" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionTitle subtitle="Showcase of premium web applications built with cutting-edge technology">
          Featured Projects
        </SectionTitle>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -15 }}
              onClick={() => setSelectedProject(project)}
              className="group glass rounded-2xl overflow-hidden border-cyan-600/20 dark:border-cyan-400/20 hover:border-cyan-400/50 transition-smooth cursor-pointer h-full flex flex-col"
            >
              {/* Project thumbnail */}
              <div className="relative h-40 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center overflow-hidden group-hover:shadow-neon-cyan transition-smooth">
                <motion.div
                  className="text-6xl"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  {project.thumbnail}
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Project info */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-cyan-900 dark:text-cyan-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-cyan-700/60 dark:text-cyan-300/60 text-sm mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tech stack tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded text-xs font-mono bg-cyan-500/10 border border-cyan-600/30 dark:border-cyan-400/30 text-cyan-700/70 dark:text-cyan-300/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-cyan-700/60 dark:text-cyan-300/60 mb-4 pt-4 border-t border-cyan-600/10 dark:border-cyan-400/10">
                  <span>⭐ {project.rating}/5</span>
                  <span>👁️ {project.views.toLocaleString()} views</span>
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-600/30 dark:border-cyan-400/30 text-cyan-800 dark:text-cyan-300 text-sm font-semibold hover:border-cyan-300/50 transition-smooth"
                  >
                    Live Demo
                  </motion.a>
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedProject(project)
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-4 py-2 rounded-lg bg-pink-500/10 border border-pink-600/30 dark:border-pink-400/30 text-pink-800 dark:text-pink-300 text-sm font-semibold hover:border-pink-300/50 transition-smooth"
                  >
                    {project.price}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all projects button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 245, 255, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="glass px-10 py-4 rounded-xl font-semibold text-cyan-800 dark:text-cyan-300 border-cyan-600/30 dark:border-cyan-400/30 hover:border-cyan-300/50 transition-smooth neon-border"
          >
            View All {projects.length} Projects
          </motion.button>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}

export default Projects
