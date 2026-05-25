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
      {/* Framer-style conic gradient orb — 3 шари обертаються з різним блюром і кольором */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center" style={{ overflow: 'visible' }}>
        <div className="framer-orb-stack">
          {/* Шар 1: великий насичений conic з сильним блюром (rainbow) */}
          <div className="framer-orb framer-orb-1">
            <div className="framer-orb-inner framer-orb-inner-1" />
          </div>
          {/* Шар 2: середній з білим/блакитним/рожевим */}
          <div className="framer-orb framer-orb-2">
            <div className="framer-orb-inner framer-orb-inner-2" />
          </div>
          {/* Шар 3: верхній блакитний conic, з режимом змішування */}
          <div className="framer-orb framer-orb-3">
            <div className="framer-orb-inner framer-orb-inner-3" />
          </div>
        </div>
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
          <motion.a
            href="https://contra.com/babarogic/work"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="shimmer-button relative inline-flex items-center justify-center px-8 py-4 rounded-md text-base md:text-lg font-semibold text-white shadow-lg overflow-hidden"
          >
            <span className="relative z-10">Get Custom Solution</span>
          </motion.a>

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
