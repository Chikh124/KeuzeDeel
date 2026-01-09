'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Плани з цінами для Monthly / Yearly як на референсних скрінах
  const plans = [
    {
      name: 'Basic',
      tagline: 'Perfect for individuals and small projects.',
      monthlyPrice: 110,
      yearlyPrice: 99,
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
      tagline:
        'Unlock enhanced AI capabilities, priority support, and weekly updates.',
      monthlyPrice: 210,
      yearlyPrice: 199,
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
      monthlyPrice: 410,
      yearlyPrice: 399,
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
    <section
      id="pricing"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f6f6f6]"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center leading-tight"
        >
          Flexible and Transparent Pricing
          <br />
          for Teams of all sizes
        </motion.h2>

        {/* Тумблер Monthly / Yearly – квадратні кнопки як на референсі */}
        <div className="flex justify-center items-center mt-8 mb-12">
          <div className="inline-flex bg-[#f0f0f0] p-1 rounded-xl gap-1">
            <button
              onClick={() => setIsYearly(false)}
              className={`min-w-[110px] px-6 py-2 text-sm font-medium rounded-md transition-all ${
                !isYearly ? 'bg-black text-white shadow-sm' : 'bg-transparent text-gray-700'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`min-w-[110px] px-6 py-2 text-sm font-medium rounded-md transition-all ${
                isYearly ? 'bg-black text-white shadow-sm' : 'bg-transparent text-gray-700'
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className={`rounded-3xl p-8 transition-shadow flex flex-col ${
                plan.popular
                  ? 'bg-gradient-to-b from-[#3b3b3b] to-black text-white shadow-2xl scale-105'
                  : 'bg-white border border-gray-200 shadow-sm text-gray-900'
              }`}
            >
              <div className="mb-4">
                <span
                  className={`text-sm ${
                    plan.popular ? 'text-white/80' : 'text-gray-600'
                  }`}
                  style={plan.popular ? { boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.15)' } : {}}
                >
                  {planLabels[index]}
                </span>
              </div>
              
              <div className="mb-2">
                <h3
                  className={`font-bold inline-block ${
                    plan.popular
                      ? 'text-white text-[2.1rem]' // трохи більший білий заголовок для Pro
                      : 'text-gray-900 text-3xl'
                  }`}
                >
                  {plan.name}
                </h3>
                {plan.popular && (
                  <span className="inline-flex items-center px-4 py-1 bg-white/15 text-white border border-white/40 rounded-full text-xs font-medium ml-3 align-middle">
                    Popular
                  </span>
                )}
              </div>
              
              <p
                className={`mb-6 text-sm min-h-[3rem] ${
                  plan.popular ? 'text-gray-200' : 'text-gray-600'
                }`}
              >
                {plan.tagline}
              </p>
              
              <div className="mb-6 min-h-[4rem] flex items-end">
                <div className="relative">
                  <motion.span
                    key={isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="text-5xl font-bold inline-block"
                  >
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </motion.span>
                  <span
                    className={`ml-2 text-base ${
                      plan.popular ? 'text-gray-200' : 'text-gray-600'
                    }`}
                  >
                    /monthly
                  </span>
                </div>
              </div>

              <div className="mb-8">
                <p
                  className={`text-sm font-semibold mb-4 ${
                    plan.popular ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  What&apos;s included
                </p>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg
                        className={`w-5 h-5 mr-2 mt-0.5 flex-shrink-0 ${
                          plan.popular ? 'text-green-400' : 'text-green-500'
                        }`}
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
                      <span
                        className={plan.popular ? 'text-gray-200' : 'text-gray-600'}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition ${
                  plan.popular
                    ? 'bg-white text-black hover:bg-gray-100'
                    : 'bg-black text-white hover:bg-gray-900'
                }`}
              >
                {plan.cta}
              </button>
              
              <a
                href="#"
                className={`block text-center mt-4 text-sm ${
                  plan.popular
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
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

