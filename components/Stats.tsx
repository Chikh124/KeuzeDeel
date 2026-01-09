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

      </div>
    </section>
  )
}

