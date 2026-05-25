'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { pricingPlans, planLabels, getEffectiveMonthlyPrice } from '@/lib/pricing'

type PricingProps = {
  variant?: 'home' | 'page'
}

export default function Pricing({ variant = 'home' }: PricingProps) {
  const [isYearly, setIsYearly] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const isPage = variant === 'page'

  const heading = isPage
    ? 'Flexible Plans For Every Machine Learning Practitioner'
    : 'Flexible and Transparent Pricing\nfor Teams of all sizes'

  const HeadingTag = isPage ? motion.h1 : motion.h2

  return (
    <section
      id={isPage ? undefined : 'pricing'}
      className={`relative py-20 px-4 sm:px-6 lg:px-8 ${isPage ? 'bg-white' : 'bg-[#f6f6f6]'}`}
      ref={ref}
    >
      {isPage && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ overflow: 'visible' }}
          aria-hidden="true"
        >
          <div
            className="absolute top-[48%] left-1/2 w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-full animated-gradient-orb"
            style={{ transform: 'translate(-50%, -50%)' }}
          />
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        <HeadingTag
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={`${
            isPage
              ? 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl'
              : 'text-3xl sm:text-4xl md:text-5xl'
          } font-bold text-gray-900 mb-4 text-center leading-tight whitespace-pre-line`}
        >
          {heading}
        </HeadingTag>

        <div className="flex justify-center items-center mt-8 mb-12">
          <div
            className={`inline-flex p-1 rounded-xl gap-1 ${
              isPage ? 'bg-gray-100' : 'bg-[#f0f0f0]'
            }`}
            role="tablist"
            aria-label="Billing period"
          >
            <button
              type="button"
              role="tab"
              aria-selected={!isYearly}
              onClick={() => setIsYearly(false)}
              className={`min-w-[110px] px-6 py-2 text-sm font-medium rounded-md transition-all ${
                !isYearly ? 'bg-black text-white shadow-sm' : 'bg-transparent text-gray-700'
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={isYearly}
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
          {pricingPlans.map((plan, index) => {
            const effectivePrice = getEffectiveMonthlyPrice(plan, isYearly)
            return (
              <motion.article
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className={`rounded-3xl p-8 transition-shadow flex flex-col ${
                  plan.popular
                    ? 'bg-gradient-to-b from-[#3b3b3b] to-black text-white shadow-2xl md:scale-105'
                    : 'bg-white border border-gray-200 shadow-sm text-gray-900'
                }`}
              >
                <div className="mb-4">
                  <span
                    className={`text-sm ${
                      plan.popular ? 'text-white/80' : 'text-gray-600'
                    }`}
                  >
                    {planLabels[index]}
                  </span>
                </div>

                <div className="mb-2">
                  <h3
                    className={`font-bold inline-block ${
                      plan.popular ? 'text-white text-[2.1rem]' : 'text-gray-900 text-3xl'
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
                      key={`${plan.name}-${isYearly}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="text-4xl sm:text-5xl font-bold inline-block"
                    >
                      ${effectivePrice}
                    </motion.span>
                    <span
                      className={`ml-2 text-base ${
                        plan.popular ? 'text-gray-200' : 'text-gray-600'
                      }`}
                    >
                      /monthly
                    </span>
                    {isYearly && (
                      <span
                        className={`ml-2 text-xs font-medium ${
                          plan.popular ? 'text-green-300' : 'text-green-600'
                        }`}
                      >
                        Save 20%
                      </span>
                    )}
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
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <svg
                          className={`w-5 h-5 mr-2 mt-0.5 flex-shrink-0 ${
                            plan.popular ? 'text-green-400' : 'text-green-500'
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
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

                <Link
                  href="/contact"
                  className={`w-full py-3 rounded-lg font-semibold transition text-center block ${
                    plan.popular
                      ? 'bg-white text-black hover:bg-gray-100'
                      : 'bg-black text-white hover:bg-gray-900'
                  }`}
                >
                  {plan.cta}
                </Link>

                {!isPage && (
                  <Link
                    href="/pricing"
                    className={`block text-center mt-4 text-sm ${
                      plan.popular
                        ? 'text-gray-300 hover:text-white'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Learn More
                  </Link>
                )}
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
