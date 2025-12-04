'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function PromoBox() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-6 left-6 z-50 max-w-md"
      >
        <div className="bg-gray-900 text-white rounded-2xl p-6 shadow-2xl flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-white"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-2">
              3 Free Months on Pro Annual Plan
            </h3>
            <p className="text-sm text-gray-300 mb-4 leading-relaxed">
              Get 3 free months of Framer Pro Yearly Subscription when upgrading your plan with the code{' '}
              <span className="font-mono bg-white/10 px-2 py-1 rounded">partner25proyearly</span>
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
              Sign Up
            </button>
          </div>

          <button
            onClick={() => setIsVisible(false)}
            className="flex-shrink-0 text-gray-400 hover:text-white transition-colors"
            aria-label="Close"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

