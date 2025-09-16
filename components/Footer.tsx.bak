'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-white py-12">
      <div className="container-custom">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Muhammad Hassaan Aslam
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Building the future, one line of code at a time. Let&apos;s create something 
              extraordinary together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-400 mb-8"
          >
            <span>© 2024 Muhammad Hassaan Aslam. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 inline mx-1" />
            </motion.div>
            <span>in Pakistan</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm text-gray-500"
          >
            <p>
              Built with Next.js, TailwindCSS, and Framer Motion
            </p>
            <p className="mt-2">
              Optimized for performance, accessibility, and user experience
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
