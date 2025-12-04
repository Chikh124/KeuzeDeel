'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const testimonials = [
    {
      quote:
        'We struggled to find the right talent globally, but with their automated candidate ranking, we quickly identified top-notch candidates who perfectly fit our requirements.',
      author: 'Sarah Johnson',
      role: 'Small Business Owner, Sarah\'s Boutique',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
        >
          Trusted by the machine learning practitioners
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[...Array(6)].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow"
            >
              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {testimonials[0].quote}
                </h4>
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  {testimonials[0].author}
                </p>
                <p className="text-gray-600 text-sm">
                  {testimonials[0].role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

