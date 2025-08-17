'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Zap, Code, Rocket, Brain } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'I deliver projects in days, not months. Speed without compromising quality.',
  },
  {
    icon: Code,
    title: 'AI-Augmented',
    description: 'Leveraging cutting-edge AI tools to write better code faster than ever.',
  },
  {
    icon: Rocket,
    title: 'Production Ready',
    description: 'Every project is built with scalability, security, and performance in mind.',
  },
  {
    icon: Brain,
    title: 'Architecture Expert',
    description: 'From simple apps to complex systems, I design solutions that scale.',
  },
]

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I&apos;m not just another developer. I&apos;m a one-man development army who builds 
            complex digital products faster than most teams finish their coffee breaks.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-6 gradient-text">
              Why I&apos;m Different
            </h3>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                While others are still planning, I&apos;m already building. My approach combines 
                the speed of AI-assisted development with the precision of experienced 
                architecture design.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                I specialize in creating high-value SaaS solutions, AI-powered applications, 
                and scalable web platforms that don&apos;t just work—they dominate their market.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                From concept to deployment, I handle everything: frontend, backend, 
                database design, DevOps, and even marketing strategy. No handoffs, 
                no delays, no excuses.
              </p>
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { number: '50+', label: 'Projects Delivered' },
              { number: '24h', label: 'Average Response Time' },
              { number: '100%', label: 'Client Satisfaction' },
              { number: '∞', label: 'Coffee Consumed' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-center p-6 bg-white dark:bg-dark-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-white dark:bg-dark-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="button-primary text-lg px-8 py-4"
          >
            Let&apos;s Build Something Amazing
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
