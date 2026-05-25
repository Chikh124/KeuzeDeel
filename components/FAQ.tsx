'use client'

import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'What AI solutions does Valaam offer?',
      answer:
        'Valaam provides comprehensive AI solutions including machine learning infrastructure, automated candidate ranking, data analytics, and personalized content recommendations.',
    },
    {
      question: "How do I integrate Valaam's AI technologies?",
      answer:
        'Integration is simple — just add two lines of code to your notebook or script. Our platform automatically starts tracking code, hyperparameters, metrics, and more.',
    },
    {
      question: 'Does Valaam support cloud platform integration?',
      answer:
        'Yes, Valaam seamlessly integrates with major cloud platforms including AWS, Google Cloud, and Azure, ensuring flexible deployment options.',
    },
    {
      question: 'Can I customize AI solutions for my industry?',
      answer:
        'Absolutely! Valaam offers customizable AI solutions tailored to your specific industry needs, from manufacturing to retail and urban planning.',
    },
    {
      question: 'Any technical requirements for integration?',
      answer:
        'Valaam requires minimal setup. Our platform is designed to work with your existing infrastructure and supports multiple programming languages and frameworks.',
    },
    {
      question: 'How does Valaam ensure compatibility?',
      answer:
        'Valaam is built with compatibility in mind, supporting a wide range of tools and platforms. Our team ensures seamless integration with your existing tech stack.',
    },
  ]

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  // FAQPage structured data — improves rich-result eligibility on Google search.
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  }

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100"
      ref={ref}
      id="faq"
    >
      <script
        type="application/ld+json"
        // FAQPage schema injected inline so it is part of the initial HTML payload.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
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
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="border-b border-gray-200/70"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="w-full px-2 sm:px-4 py-5 flex justify-between items-center text-left text-gray-700 hover:text-gray-900 transition-colors group"
                >
                  <span className="text-base md:text-lg font-medium pr-6">
                    {faq.question}
                  </span>
                  <motion.svg
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
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
                  </motion.svg>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-2 sm:px-4 pb-5 text-gray-600 text-base leading-relaxed max-w-3xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
