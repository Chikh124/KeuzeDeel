'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const faqs = [
    {
      question: 'What AI solutions does VisionIQ offer?',
      answer: 'VisionIQ provides comprehensive AI solutions including machine learning infrastructure, automated candidate ranking, data analytics, and personalized content recommendations.',
    },
    {
      question: 'How to integrate VisionIQ\'s AI technologies?',
      answer: 'Integration is simple - just add two lines of code to your notebook or script. Our platform automatically starts tracking code, hyperparameters, metrics, and more.',
    },
    {
      question: 'Does VisionIQ support cloud platform integration?',
      answer: 'Yes, VisionIQ seamlessly integrates with major cloud platforms including AWS, Google Cloud, and Azure, ensuring flexible deployment options.',
    },
    {
      question: 'Can I customize AI solutions for my industry?',
      answer: 'Absolutely! VisionIQ offers customizable AI solutions tailored to your specific industry needs, from manufacturing to retail and urban planning.',
    },
    {
      question: 'Any technical requirements for integration?',
      answer: 'VisionIQ requires minimal setup. Our platform is designed to work with your existing infrastructure and supports multiple programming languages and frameworks.',
    },
    {
      question: 'How does VisionIQ ensure compatibility?',
      answer: 'VisionIQ is built with compatibility in mind, supporting a wide range of tools and platforms. Our team ensures seamless integration with your existing tech stack.',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1.5 bg-gray-200 rounded-md text-xs font-semibold text-gray-700 uppercase tracking-wider mb-4">
            Support
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <motion.a
              key={index}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="block px-6 py-4 text-left flex justify-between items-center text-gray-700 hover:text-gray-900 transition-colors group"
            >
              <span className="text-base font-normal text-gray-700 group-hover:text-gray-900">
                {faq.question}
              </span>
              <svg
                className="w-5 h-5 text-gray-500 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
