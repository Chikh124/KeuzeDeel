'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function MLPlatformSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const sections = [
    {
      label: 'FOR ML PRACTITIONERS',
      title: 'The user experience that makes redundant work disappear',
      description:
        'Track every detail of your ML pipeline automatically. Visualize results with relevant context. Drag & drop analysis to uncover insights — your next best model is just a few clicks away',
      image: '/images/ml-platform-01.jpg',
      links: [
        'Transforming the Financial Industry with Data',
        'How AI is Revolutionizing Urban Planning',
        "AI's Impact on Medical Diagnostics and Treatment",
      ],
      imageLeft: false, // Text left, image right
    },
    {
      label: 'FOR ML PRACTITIONERS',
      title: 'The ML workflow co-designed with ML engineers',
      description:
        'Track every detail of your ML pipeline automatically. Visualize results with relevant context. Drag & drop analysis to uncover insights — your next best model is just a few clicks away',
      image: '/images/ml-platform-02.jpg',
      links: [
        'Transforming the Financial Industry with Data',
        'How AI is Revolutionizing Urban Planning',
        "AI's Impact on Medical Diagnostics and Treatment",
      ],
      imageLeft: true, // Image left, text right
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Main heading with orange highlight */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 md:mb-16 text-center"
        >
          The leading{' '}
          <span className="text-orange-500">ML platform</span>{' '}
          that provides value to your entire team
        </motion.h2>

        {/* Sections stacked vertically with alternating layout */}
        <div className="space-y-16 md:space-y-20">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`grid md:grid-cols-2 gap-8 lg:gap-12 items-start ${
                section.imageLeft ? '' : ''
              }`}
            >
              {/* Square illustration that matches the height of the adjacent text column. */}
              <div
                className={`relative w-full aspect-square max-h-[500px] rounded-lg overflow-hidden bg-gray-100 ${
                  section.imageLeft ? 'md:order-1' : 'md:order-2'
                }`}
              >
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    const parent = target.parentElement
                    if (parent) {
                      parent.innerHTML = `
                        <div class="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-xl font-bold px-4 text-center">
                          ${section.title}
                        </div>
                      `
                    }
                  }}
                />
              </div>

              {/* Text content */}
              <div
                className={`space-y-5 ${
                  section.imageLeft ? 'md:order-2' : 'md:order-1'
                }`}
              >
                {/* Label badge */}
                <div className="inline-block px-3 py-1.5 bg-gray-100 rounded-md">
                  <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    {section.label}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  {section.title}
                </h3>

                {/* Description */}
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  {section.description}
                </p>

                {/* Links with checkmarks */}
                <div className="space-y-3 pt-2">
                  {section.links.map((link, linkIndex) => (
                    <div key={linkIndex} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
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
                      <span className="text-gray-900 font-medium">
                        {link}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
