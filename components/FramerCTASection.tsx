'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function FramerCTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-100" ref={ref}>
      {/* Animated gradient orb - градієнтна куля на фоні, виходить трохи зверху */}
      <div className="absolute inset-0 pointer-events-none" style={{ overflow: 'visible' }}>
        <div className="absolute top-[48%] left-1/2 w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-full animated-gradient-orb" style={{ transform: 'translate(-50%, -50%)' }} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Заголовок */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-12 text-center"
        >
          <span className="block">Upgrade your Web</span>
          <span className="block">
            presence with{' '}
            <span className="text-orange-500">Framer</span>
          </span>
        </motion.h2>

        {/* Кнопка з анімацією */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center gap-6"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-lg text-base md:text-lg font-semibold transition-colors shadow-lg"
          >
            Get Custom Solution
          </motion.button>

          {/* Текст з аватаром */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-3 text-gray-700"
          >
            <span className="text-sm md:text-base">Schedule a call with Goran B.</span>
            <div className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0 border border-gray-200">
              <Image
                src="/images/goran-b.jpg"
                alt="Goran B."
                fill
                className="object-cover"
                sizes="32px"
                loading="lazy"
                onError={(e) => {
                  // Fallback якщо зображення не завантажиться
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  const parent = target.parentElement
                  if (parent) {
                    parent.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500"></div>'
                  }
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
