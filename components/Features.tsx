'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const features = [
    {
      title: 'Intelligent Personalization',
      description: 'Our platform employs advanced machine learning algorithms to understand user preferences, delivering personalized content and recommendations.',
      image: '/images/features/personalization.png', // Замініть на шлях до вашого зображення
    },
    {
      title: 'Seamless Integration',
      description: 'Our user-friendly interface ensures a smooth experience, allowing you to harness the power of AI without a steep learning curve.',
      image: '/images/features/integration.png', // Замініть на шлях до вашого зображення
    },
    {
      title: 'Data-driven Insights',
      description: 'Gain valuable insights into user behavior, model performance, and more. Our platform provides actionable data to refine your machine learning models.',
      image: '/images/features/insights.png', // Замініть на шлях до вашого зображення
    },
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-10 bg-white rounded-3xl shadow-[0_2px_40px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_50px_-10px_rgba(0,0,0,0.12)] transition-shadow"
            >
              {/* Image Illustration */}
              <div className="relative w-full h-48 flex items-center justify-center bg-gray-50/50 rounded-2xl mb-6 overflow-hidden">
                <Image 
                  src={feature.image} 
                  alt={feature.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback якщо зображення не завантажиться
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    const parent = target.parentElement
                    if (parent) {
                      parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-400 text-sm">Image not found</div>'
                    }
                  }}
                />
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

