'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Zap, Target, Shield, Users } from 'lucide-react'

const reasons = [
  {
    icon: Zap,
    title: 'Faster Delivery',
    description: 'I deliver projects in days, not months. My AI-augmented workflow and streamlined processes mean you get results faster than traditional development teams.',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    icon: Target,
    title: 'High-Value Focus',
    description: 'I don\'t just build features—I build solutions that drive real business value. Every line of code is optimized for maximum impact and ROI.',
    color: 'from-red-500 to-pink-500',
  },
  {
    icon: Shield,
    title: 'Future-Proof Builds',
    description: 'Your project is built with scalability, security, and maintainability in mind. I use cutting-edge technologies that will serve you for years to come.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Users,
    title: 'One-Man Dev Army',
    description: 'No handoffs, no delays, no excuses. I handle everything from concept to deployment, ensuring seamless communication and consistent quality.',
    color: 'from-green-500 to-emerald-500',
  },
]

export default function WhyWorkWithMe() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="why-work" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Why Work With Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            In a world of mediocre developers, I stand out by delivering exceptional 
            results faster than anyone else. Here&apos;s why you should choose me.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white dark:bg-dark-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${reason.color} flex items-center justify-center flex-shrink-0`}
                >
                  <reason.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold text-center mb-8 gradient-text">
            My Development Process
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'I understand your vision, requirements, and business goals to create the perfect solution.',
              },
              {
                step: '02',
                title: 'Planning',
                description: 'I design the architecture, choose the right tech stack, and create a detailed roadmap.',
              },
              {
                step: '03',
                title: 'Development',
                description: 'I build your project using AI-augmented development for maximum speed and quality.',
              },
              {
                step: '04',
                title: 'Deployment',
                description: 'I deploy your project with proper monitoring, security, and performance optimization.',
              },
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {process.step}
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {process.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-dark-700 rounded-xl p-8 md:p-12 shadow-lg">
            <div className="text-6xl mb-6">💬</div>
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-white mb-6 italic">
              &ldquo;Hassaan delivered our SaaS platform in 2 weeks when other developers 
              quoted 3 months. The quality and attention to detail were exceptional.&rdquo;
            </blockquote>
            <div className="text-lg text-gray-600 dark:text-gray-400">
              — <span className="font-semibold">Sarah Johnson</span>, CEO at TechStart
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="button-primary text-lg px-8 py-4"
          >
            Let&apos;s Build Genius Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
