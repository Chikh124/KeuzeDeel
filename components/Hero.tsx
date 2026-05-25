'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import AnimatedLogos from './AnimatedLogos'

export default function Hero() {
  return (
    <section className="relative pt-8 pb-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden border-0">
      {/* Animated gradient orb sitting behind the headline. */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[45%] left-1/2 w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] rounded-full animated-gradient-orb -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Link
            href="/#features"
            className="inline-flex flex-wrap items-center justify-center gap-2 bg-white hover:bg-gray-50 rounded-[10px] text-xs transition-colors min-h-[34px] border border-gray-200 shadow-sm px-2 py-1"
          >
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-white border border-gray-200 rounded-md">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0" aria-hidden="true" />
              <span className="text-gray-900 font-medium">What&apos;s new</span>
            </span>
            <span className="text-gray-600 font-normal">
              Streamline your ML workflow with v2.0
            </span>
            <span className="text-gray-400" aria-hidden="true">
              &gt;
            </span>
          </Link>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 text-center leading-tight tracking-tight relative z-10"
        >
          <span className="block">Algorithm training</span>
          <span className="block">infrastructure</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto text-center leading-relaxed mb-12"
        >
          At Valaam, we leverage the game-changing potency of Machine Learning to reshape understanding. Our ground-breaking tech opens unlimited potential across a range of sectors.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-8 mb-16"
        >
          <Link
            href="/contact"
            className="flex items-center gap-1 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-md text-base font-medium transition-colors h-12"
          >
            <span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" aria-hidden="true" />
            Get Started
          </Link>
        </motion.div>

        <div className="relative z-10 mt-16 md:mt-20">
          <AnimatedLogos />
        </div>
      </div>
    </section>
  )
}
