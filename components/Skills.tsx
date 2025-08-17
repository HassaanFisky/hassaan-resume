'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 95, color: 'from-blue-500 to-cyan-500' },
      { name: 'Next.js', level: 90, color: 'from-black to-gray-800' },
      { name: 'TypeScript', level: 88, color: 'from-blue-600 to-blue-700' },
      { name: 'TailwindCSS', level: 92, color: 'from-cyan-500 to-blue-500' },
      { name: 'HTML/CSS', level: 95, color: 'from-orange-500 to-red-500' },
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 90, color: 'from-green-500 to-green-600' },
      { name: 'FastAPI', level: 85, color: 'from-green-600 to-green-700' },
      { name: 'Python', level: 88, color: 'from-blue-500 to-yellow-500' },
      { name: 'PostgreSQL', level: 82, color: 'from-blue-600 to-blue-800' },
      { name: 'MongoDB', level: 80, color: 'from-green-500 to-green-700' },
    ]
  },
  {
    category: 'Tools & DevOps',
    skills: [
      { name: 'Git', level: 92, color: 'from-orange-500 to-red-600' },
      { name: 'Docker', level: 78, color: 'from-blue-500 to-blue-600' },
      { name: 'AWS', level: 75, color: 'from-orange-500 to-yellow-500' },
      { name: 'Vercel', level: 90, color: 'from-black to-gray-700' },
      { name: 'CI/CD', level: 85, color: 'from-purple-500 to-pink-500' },
    ]
  },
  {
    category: 'AI & Specialties',
    skills: [
      { name: 'AI Integration', level: 88, color: 'from-purple-500 to-pink-500' },
      { name: 'OpenAI API', level: 85, color: 'from-green-500 to-green-600' },
      { name: 'Architecture', level: 90, color: 'from-indigo-500 to-purple-500' },
      { name: 'UI/UX Design', level: 82, color: 'from-pink-500 to-red-500' },
      { name: 'SaaS Development', level: 88, color: 'from-blue-500 to-purple-500' },
    ]
  }
]

const allSkills = [
  'React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Node.js', 'FastAPI', 
  'Python', 'PostgreSQL', 'MongoDB', 'Git', 'Docker', 'AWS', 'Vercel',
  'AI Integration', 'OpenAI API', 'Architecture', 'UI/UX', 'SaaS'
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My tech stack is carefully curated for maximum efficiency and scalability. 
            I don&apos;t just know these technologies—I master them.
          </p>
        </motion.div>

        {/* Skill Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            Tech Stack Overview
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {allSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="skill-badge cursor-pointer"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Detailed Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + categoryIndex * 0.2 }}
              className="bg-white dark:bg-dark-700 rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + categoryIndex * 0.2 + skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900 dark:text-white">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-dark-600 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 1 + categoryIndex * 0.2 + skillIndex * 0.1 }}
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8 gradient-text">
            What Makes Me Special
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'AI-Augmented Development',
                description: 'I leverage AI tools to write better code faster, while maintaining human creativity and problem-solving.',
              },
              {
                title: 'Full-Stack Mastery',
                description: 'From pixel-perfect UI to scalable backend architecture, I handle every aspect of development.',
              },
              {
                title: 'Business-Focused',
                description: 'I don&apos;t just build features—I build solutions that drive real business value and growth.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-xl border border-primary-200 dark:border-primary-800"
              >
                <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
