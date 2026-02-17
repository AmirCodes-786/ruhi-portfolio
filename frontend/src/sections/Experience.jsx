import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-100px' })

  const experiences = [
    {
      role: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      period: '2022 - Present',
      description: 'Leading development of enterprise-scale applications with React, Node.js, and cloud technologies.',
      achievements: [
        'Built 5+ production applications handling 1M+ daily users',
        'Led team of 5 developers in Agile environment',
        'Improved performance by 60% through optimization',
      ],
      skills: ['React', 'Node.js', 'AWS', 'MongoDB'],
      icon: '🚀',
    },
    {
      role: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client-facing web applications with focus on UX and performance.',
      achievements: [
        'Delivered 15+ client projects on time and within budget',
        'Implemented CI/CD pipelines reducing deployment time by 40%',
        'Mentored 3 junior developers',
      ],
      skills: ['React', 'Express', 'PostgreSQL', 'Docker'],
      icon: '💻',
    },
    {
      role: 'Junior Developer',
      company: 'StartUp Hub',
      period: '2019 - 2020',
      description: 'Contributed to early-stage startup growth through full stack development and technical innovation.',
      achievements: [
        'Built core features for SaaS platform',
        'Learned and adopted modern tech stack',
        'Contributed to 3 successful product launches',
      ],
      skills: ['JavaScript', 'React', 'Node.js', 'Firebase'],
      icon: '⭐',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
      id="experience"
      ref={ref}
      className="relative py-20 lg:py-32 px-6 lg:px-12 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <SectionTitle subtitle="Professional experience and career highlights">
          Work Experience
        </SectionTitle>

        {/* Experience cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-8"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.company}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group glass rounded-2xl p-8 border-pink-600/20 dark:border-pink-400/20 hover:border-pink-400/50 transition-smooth neon-border-pink hover:shadow-neon-pink"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{exp.icon}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-pink-900 dark:text-pink-300">
                        {exp.role}
                      </h3>
                      <p className="text-pink-700/70 dark:text-pink-300/70">{exp.company}</p>
                    </div>
                  </div>
                </div>
                <span className="text-pink-600/60 dark:text-pink-400/60 font-mono text-sm whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              <p className="text-pink-800/80 dark:text-pink-300/80 mb-4">
                {exp.description}
              </p>

              {/* Achievements */}
              <div className="mb-6 space-y-2">
                {exp.achievements.map((achievement) => (
                  <motion.div
                    key={achievement}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    className="flex items-start gap-3 text-pink-700/60 dark:text-pink-300/60"
                  >
                    <span className="text-pink-400 mt-1">▸</span>
                    <span>{achievement}</span>
                  </motion.div>
                ))}
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-pink-500/10 border border-pink-600/30 dark:border-pink-400/30 text-pink-700/70 dark:text-pink-300/70 hover:border-pink-300/50 transition-smooth"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
