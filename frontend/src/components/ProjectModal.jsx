import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import DevelopmentOverlay from './DevelopmentOverlay'

const ProjectModal = ({ project, onClose }) => {
  const [developmentOpen, setDevelopmentOpen] = useState(false)
  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-3 backdrop-blur-md sm:p-6"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 24 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          onClick={(event) => event.stopPropagation()}
          className="modal-scrollable relative max-h-[92svh] w-full max-w-5xl overflow-y-auto rounded-[2rem] border border-[var(--line)] bg-[var(--paper)] shadow-2xl"
        >
          <div className="sticky top-0 z-20 flex items-center justify-between border-b border-[var(--line)] bg-[var(--paper)]/90 px-5 py-4 backdrop-blur-xl sm:px-8">
            <div className="flex items-center gap-3"><span className="rounded-full bg-[var(--ink)] px-3 py-2 text-[9px] font-bold tracking-[.14em] text-[var(--paper)]">CASE STUDY / 0{project.id}</span><span className="hidden text-[10px] font-bold uppercase tracking-[.14em] opacity-45 sm:block">{project.year}</span></div>
            <button onClick={onClose} className="grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] text-xl transition-transform hover:rotate-90" aria-label="Close case study">×</button>
          </div>

          <div className="p-5 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.25fr_.75fr]">
              <div>
                <p className="section-kicker mb-5">{project.category}</p>
                <h2 className="display-font text-[clamp(3rem,7vw,6.5rem)] font-black leading-[.86]">{project.title}</h2>
                <p className="mt-6 max-w-2xl text-base leading-7 opacity-65 sm:text-lg">{project.description}</p>
              </div>
              <div className="flex min-h-48 items-center justify-center overflow-hidden rounded-[1.5rem] bg-[var(--ink)] editorial-grid">
                <span className="text-center text-5xl font-black tracking-tight text-[var(--lime)] sm:text-7xl">{project.thumbnail}</span>
              </div>
            </div>

            <div className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-[var(--line)] md:grid-cols-3">
              {[['Challenge', project.challenge], ['Approach', project.approach], ['Outcome', project.outcome]].map(([title, copy]) => (
                <div key={title} className="bg-[var(--paper)] p-5 sm:p-6"><p className="text-[10px] font-bold uppercase tracking-[.16em] text-[var(--violet)]">{title}</p><p className="mt-3 text-sm leading-6 opacity-60">{copy}</p></div>
              ))}
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_.8fr]">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[.16em]">Key capabilities</h3>
                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  {project.features.map((feature, index) => (
                    <div key={feature} className="flex gap-3 rounded-xl border border-[var(--line)] p-4 text-sm leading-6"><span className="text-[10px] font-bold opacity-40">0{index + 1}</span><span className="opacity-70">{feature}</span></div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[.16em]">Technology</h3>
                <div className="mt-5 flex flex-wrap gap-2">{project.techStack.map((tech) => <span key={tech} className="pill px-4 py-2 text-xs font-bold">{tech}</span>)}</div>
                {project.liveStatus === 'live' ? (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="mt-8 flex items-center justify-between rounded-full bg-[var(--lime)] px-6 py-4 text-sm font-bold text-black"><span>View live project</span><span>↗</span></a>
                ) : (
                  <button onClick={() => setDevelopmentOpen(true)} className="mt-8 flex w-full items-center justify-between rounded-full bg-[var(--lime)] px-6 py-4 text-sm font-bold text-black"><span>Live preview</span><span>↗</span></button>
                )}
                <a href="/Jagriti-Kushwaha-Resume.pdf" target="_blank" rel="noopener noreferrer" className="mt-3 flex items-center justify-between rounded-full border border-[var(--line)] px-6 py-4 text-sm font-bold"><span>View résumé</span><span className="opacity-50">↗</span></a>
              </div>
            </div>
          </div>
        </motion.div>

        <DevelopmentOverlay
          project={project}
          open={developmentOpen}
          onBack={() => setDevelopmentOpen(false)}
          onClose={onClose}
        />
      </motion.div>
    </AnimatePresence>
  )
}

export default ProjectModal
