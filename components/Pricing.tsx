'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const plans = [
    {
      name: 'Basic',
      tagline: 'Perfect for individuals and small projects.',
      price: 99,
      period: isYearly ? 'yearly' : 'monthly',
      features: [
        'All analytics features',
        'Up to 250,000 tracked visits',
        'Normal support',
        'Up to 3 team members',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Pro',
      tagline: 'Unlock enhanced AI capabilities, priority support, and weekly updates.',
      price: 199,
      period: isYearly ? 'yearly' : 'monthly',
      features: [
        'All analytics features',
        'Up to 1,000,000 tracked visits',
        'Premium support',
        'Up to 10 team members',
      ],
      cta: 'Get Started',
      popular: true,
    },
    {
      name: 'Enterprise',
      tagline: 'Access the full suite of AI features, 24/7 dedicated support.',
      price: 399,
      period: isYearly ? 'yearly' : 'monthly',
      features: [
        'All analytics features',
        'Up to 5,000,000 tracked visits',
        'Dedicated support',
        'Up to 50 team members',
      ],
      cta: 'Get Started',
      popular: false,
    },
  ]

  const planLabels = ['For individuals', 'For startups', 'For big companies']

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center"
        >
          Flexible and Transparent Pricing for Teams of all sizes
        </motion.h2>

        <div className="flex justify-center items-center gap-4 mt-8 mb-12">
          <button
            onClick={() => setIsYearly(false)}
            className={`px-6 py-2 rounded-lg transition ${
              !isYearly
                ? 'bg-black text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsYearly(true)}
            className={`px-6 py-2 rounded-lg transition ${
              isYearly
                ? 'bg-black text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Yearly
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className={`bg-white p-8 rounded-2xl ${
                plan.popular
                  ? 'border-2 border-blue-500 shadow-xl scale-105'
                  : 'border border-gray-200'
              }`}
            >
              <div className="mb-4">
                <span className="text-sm text-gray-600">{planLabels[index]}</span>
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {plan.name}
              </h3>
              
              {plan.popular && (
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                  Popular
                </span>
              )}
              
              <p className="text-gray-600 mb-6">{plan.tagline}</p>
              
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                <span className="text-gray-600 ml-2">/{plan.period}</span>
              </div>

              <div className="mb-8">
                <p className="text-sm font-semibold text-gray-900 mb-4">
                  What&apos;s included
                </p>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                {plan.cta}
              </button>
              
              <a
                href="#"
                className="block text-center text-gray-600 hover:text-gray-900 mt-4 text-sm"
              >
                Learn More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

