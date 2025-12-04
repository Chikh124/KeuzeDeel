'use client'

import { motion } from 'framer-motion'
import AnimatedLogos from './AnimatedLogos'

export default function Hero() {
  return (
    <section className="relative pt-8 pb-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden border-0">
      {/* Animated gradient orb - анімована куля під текстом, накладається без меж */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Градієнтна куля позиціонована під заголовком - концентрована і менша */}
        <div className="absolute top-[45%] left-1/2 w-[350px] h-[350px] md:w-[400px] md:h-[400px] rounded-full animated-gradient-orb" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            What&apos;s new: Streamline your ML workflow with v2.0
            <span className="text-blue-400">&gt;</span>
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 text-center leading-tight relative z-10"
        >
          Algorithm training infrastructure
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto text-center leading-relaxed"
        >
          At Valaam, we leverage the game-changing potency of Machine Learning to reshape understanding. Our ground-breaking tech opens unlimited potential across a range of sectors
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-4 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            <span className="w-2 h-2 bg-white rounded-full"></span>
            Remix Template
          </motion.button>
        </motion.div>

        {/* Карусель з логотипами під кулею */}
        <div className="relative z-10">
          <AnimatedLogos />
        </div>
      </div>
    </section>
  )
}

