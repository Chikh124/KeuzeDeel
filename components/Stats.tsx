'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const stats = [
    { value: '75%', label: 'Lorem ipsum' },
    { value: '4,000+', label: 'Lorem ipsum' },
    { value: '50+', label: 'Lorem ipsum' },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                {stat.value}
              </div>
              <div className="text-gray-600 text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            The leading ML platform that provides value to your entire team
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-sm font-semibold text-gray-600 mb-4 uppercase tracking-wide">
                FOR ML PRACTITIONERS
              </h3>
              <h4 className="text-3xl font-bold text-gray-900 mb-6">
                The user experience that makes redundant work disappear
              </h4>
              <p className="text-gray-600 leading-relaxed mb-8">
                Track every detail of your ML pipeline automatically. Visualize results with relevant context. Drag & drop analysis to uncover insights – your next best model is just a few clicks away
              </p>
              <div className="space-y-4">
                <a
                  href="#"
                  className="block text-gray-900 font-semibold hover:text-blue-600 transition"
                >
                  Transforming the Financial Industry with Data
                </a>
                <a
                  href="#"
                  className="block text-gray-900 font-semibold hover:text-blue-600 transition"
                >
                  How AI is Revolutionizing Urban Planning
                </a>
                <a
                  href="#"
                  className="block text-gray-900 font-semibold hover:text-blue-600 transition"
                >
                  AI&apos;s Impact on Medical Diagnostics and Treatment
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="text-sm font-semibold text-gray-600 mb-4 uppercase tracking-wide">
                FOR ML PRACTITIONERS
              </h3>
              <h4 className="text-3xl font-bold text-gray-900 mb-6">
                The ML workflow co-designed with ML engineers
              </h4>
              <p className="text-gray-600 leading-relaxed mb-8">
                Track every detail of your ML pipeline automatically. Visualize results with relevant context. Drag & drop analysis to uncover insights – your next best model is just a few clicks away
              </p>
              <div className="space-y-4">
                <a
                  href="#"
                  className="block text-gray-900 font-semibold hover:text-blue-600 transition"
                >
                  Transforming the Financial Industry with Data
                </a>
                <a
                  href="#"
                  className="block text-gray-900 font-semibold hover:text-blue-600 transition"
                >
                  How AI is Revolutionizing Urban Planning
                </a>
                <a
                  href="#"
                  className="block text-gray-900 font-semibold hover:text-blue-600 transition"
                >
                  AI&apos;s Impact on Medical Diagnostics and Treatment
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

