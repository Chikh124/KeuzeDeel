'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const features = [
    {
      title: 'Intelligent Personalization',
      description: 'Our platform employs advanced machine learning algorithms to understand user preferences, delivering personalized content and recommendations.',
      icon: (
        <div className="w-full h-32 bg-gray-50 rounded-lg border border-gray-200 p-4 mb-6">
          {/* Scatter plot - 4 точки на сітці */}
          <svg width="100%" height="100%" viewBox="0 0 200 100" className="overflow-visible">
            {/* Сітка */}
            <defs>
              <pattern id="grid1" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid1)" />
            {/* 4 сині точки (scatter plot) */}
            <circle cx="40" cy="70" r="4" fill="#3b82f6" />
            <circle cx="40" cy="30" r="4" fill="#3b82f6" />
            <circle cx="160" cy="70" r="4" fill="#3b82f6" />
            <circle cx="160" cy="30" r="4" fill="#3b82f6" />
          </svg>
        </div>
      ),
    },
    {
      title: 'Seamless Integration',
      description: 'Our user-friendly interface ensures a smooth experience, allowing you to harness the power of AI without a steep learning curve.',
      icon: (
        <div className="w-full h-32 bg-gray-50 rounded-lg border border-gray-200 p-3 mb-6 relative">
          {/* Іконка браузера/вікна */}
          <div className="w-full h-full bg-white rounded border border-gray-200 relative">
            {/* Title bar */}
            <div className="h-6 bg-gray-100 rounded-t flex items-center px-2 border-b border-gray-200">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              </div>
            </div>
            {/* Content */}
            <div className="p-2 h-full">
              {/* Горизонтальні лінії тексту */}
              <div className="space-y-1.5 mb-2">
                <div className="h-1 bg-gray-200 rounded w-3/4"></div>
                <div className="h-1 bg-gray-200 rounded w-full"></div>
                <div className="h-1 bg-gray-200 rounded w-5/6"></div>
              </div>
              {/* Квадратики зображень */}
              <div className="flex gap-2">
                <div className="w-12 h-12 bg-gray-200 rounded relative">
                  <div className="absolute bottom-1 left-1 w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <div className="w-12 h-12 bg-gray-200 rounded"></div>
              </div>
            </div>
            {/* Зелений шестикутник справа вгорі */}
            <div className="absolute top-2 right-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#10b981">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
              </svg>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Data-driven Insights',
      description: 'Gain valuable insights into user behavior, model performance, and more. Our platform provides actionable data to refine your machine learning models.',
      icon: (
        <div className="w-full h-32 bg-gray-50 rounded-lg border border-gray-200 p-4 mb-6 relative">
          {/* Діаграма/мережа з лямбдою в центрі */}
          <svg width="100%" height="100%" viewBox="0 0 200 100" className="overflow-visible">
            {/* Пунктирні лінії від центру */}
            <line x1="100" y1="50" x2="50" y2="20" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="4,4" />
            <line x1="100" y1="50" x2="150" y2="20" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="4,4" />
            <line x1="100" y1="50" x2="50" y2="80" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="4,4" />
            <line x1="100" y1="50" x2="150" y2="80" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="4,4" />
            
            {/* Лямбда (λ) в центрі */}
            <text x="100" y="50" fontSize="24" fill="#1f2937" fontWeight="bold" textAnchor="middle" dominantBaseline="middle">λ</text>
            
            {/* Сніжинка зверху справа */}
            <text x="150" y="20" fontSize="14" fill="#1f2937" textAnchor="middle" dominantBaseline="middle">❄</text>
            
            {/* Gear/asterisk зверху зліва */}
            <text x="50" y="20" fontSize="14" fill="#1f2937" textAnchor="middle" dominantBaseline="middle">⚙</text>
            
            {/* Сонце знизу зліва */}
            <text x="50" y="80" fontSize="14" fill="#1f2937" textAnchor="middle" dominantBaseline="middle">☀</text>
            
            {/* Полум'я знизу справа */}
            <text x="150" y="80" fontSize="14" fill="#1f2937" textAnchor="middle" dominantBaseline="middle">🔥</text>
          </svg>
        </div>
      ),
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
              className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
            >
              {/* Візуальна іконка */}
              {feature.icon}
              
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

