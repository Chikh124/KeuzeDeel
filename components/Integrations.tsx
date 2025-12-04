'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Integrations() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Список всіх SVG файлів
  const allIcons = [
    'svgexport-37.svg',
    'Group.svg',
    'svgexport-39.svg',
    'svgexport-45.svg',
    'svgexport-46.svg',
    'combined-three-lines.svg',
    'svgexport-64.svg',
    'svgexport-65.svg',
    'Frame.svg',
    'svgexport-86.svg',
    'svgexport-113.svg',
    'svgexport-114.svg',
    'svgexport-186.svg',
    'svgexport-188.svg',
    'svgexport-222.svg',
  ]

  // Розподіляємо по трьох рядах рівномірно
  const itemsPerRow = Math.ceil(allIcons.length / 3)
  const logosRow1 = allIcons.slice(0, itemsPerRow)
  const logosRow2 = allIcons.slice(itemsPerRow, itemsPerRow * 2)
  const logosRow3 = allIcons.slice(itemsPerRow * 2)

  // Подвоюємо для безперервної каруселі
  const duplicatedRow1 = [...logosRow1, ...logosRow1, ...logosRow1]
  const duplicatedRow2 = [...logosRow2, ...logosRow2, ...logosRow2]
  const duplicatedRow3 = [...logosRow3, ...logosRow3, ...logosRow3]

  const LogoItem = ({ iconPath }: { iconPath: string }) => (
    <div className="w-16 h-16 md:w-18 md:h-18 flex items-center justify-center flex-shrink-0">
      <img
        src={`/icons/${iconPath}`}
        alt=""
        className="w-full h-full object-contain"
        loading="lazy"
        onError={(e) => {
          const target = e.target as HTMLImageElement
          target.style.display = 'none'
        }}
      />
    </div>
  )

  return (
    <section id="integrations" className="py-20 px-4 sm:px-6 lg:px-8 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center"
        >
          <span className="text-gray-900">Versatile</span>{' '}
          <span className="text-orange-500">Integrations</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-500 mb-12 max-w-3xl mx-auto text-base md:text-lg"
        >
          Elevate your workflow by seamlessly integrating our machine learning platform with your existing tools. We understand the importance of collaboration and compatibility, which is why our platform supports a wide array of integrations.
        </motion.p>

        <div className="space-y-6 md:space-y-8">
          <div className="relative overflow-hidden">
            <div className="flex gap-6 md:gap-8 animate-scroll-left integrations-row">
              {duplicatedRow1.map((icon, index) => (
                <LogoItem key={`row1-${index}`} iconPath={icon} />
              ))}
            </div>
            <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
          </div>

          <div className="relative overflow-hidden">
            <div className="flex gap-6 md:gap-8 animate-scroll-right integrations-row">
              {duplicatedRow2.map((icon, index) => (
                <LogoItem key={`row2-${index}`} iconPath={icon} />
              ))}
            </div>
            <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
          </div>

          <div className="relative overflow-hidden">
            <div className="flex gap-6 md:gap-8 animate-scroll-left integrations-row">
              {duplicatedRow3.map((icon, index) => (
                <LogoItem key={`row3-${index}`} iconPath={icon} />
              ))}
            </div>
            <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
