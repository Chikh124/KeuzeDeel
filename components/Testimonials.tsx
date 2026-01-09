'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const testimonials = [
    {
      quote:
        'We struggled to find the **right talent** globally, but with their **automated candidate ranking**, we **quickly identified** top-notch candidates who **perfectly fit** our requirements.',
      author: 'Sarah Johnson',
      role: 'Small Business Owner, Sarah\'s Boutique',
      image: '/images/testimonials/sarah-johnson.jpg', // Фото буде в цій папці
    },
  ]

  // Створюємо 4 копії для безперервної каруселі (більше копій = плавніший перехід)
  const testimonialsList = [...testimonials, ...testimonials, ...testimonials, ...testimonials]

  // Функція для форматування тексту з жирними словами
  const formatQuote = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g)
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        const boldText = part.slice(2, -2)
        return <strong key={index}>{boldText}</strong>
      }
      return part
    })
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
        >
          Trusted by the{' '}
          <span className="block md:inline">machine learning practitioners</span>
        </motion.h2>

        {/* Анімована карусель з градієнтами */}
        <div className="relative overflow-hidden">
          {/* Градієнти по краях для плавного переходу */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-100 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-100 to-transparent z-10 pointer-events-none" />
          
          {/* Карусель */}
          <div className="testimonials-carousel">
            <div className="testimonials-track">
              {testimonialsList.map((testimonial, index) => (
                <div
                  key={`${testimonial.author}-${index}`}
                  className="testimonial-item flex-shrink-0 w-full md:w-[90%] lg:w-[80%]"
                >
                  <div className="grid md:grid-cols-2 gap-0 items-center bg-white rounded-2xl overflow-hidden shadow-sm">
                    {/* Фото зліва в білій рамці */}
                    <div className="relative w-full h-[300px] md:h-[400px] bg-white p-6 md:p-8">
                      <div className="relative w-full h-full bg-gray-200 rounded-lg overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
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
                    </div>
                    
                    {/* Текст справа */}
                    <div className="p-8 md:p-12">
                      <blockquote className="text-lg md:text-xl text-gray-900 leading-relaxed mb-6">
                        &quot;{formatQuote(testimonial.quote)}&quot;
                      </blockquote>
                      <div>
                        <p className="font-semibold text-gray-900 text-lg mb-1">
                          {testimonial.author}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-20">
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2" style={{ color: 'rgba(161, 161, 161, 1)' }}>
                75%
              </div>
              <div className="text-sm font-bold" style={{ 
                lineHeight: '30px', 
                color: 'rgba(0, 0, 0, 1)', 
                fontSize: '15px',
                verticalAlign: 'bottom'
              }}>
                Lorem ipsum
              </div>
            </div>
            <div className="text-center border-x border-gray-200 px-8">
              <div className="text-5xl md:text-6xl font-bold mb-2" style={{ color: 'rgba(161, 161, 161, 1)' }}>
                4,000+
              </div>
              <div className="text-sm font-bold" style={{ 
                lineHeight: '30px', 
                color: 'rgba(0, 0, 0, 1)', 
                fontSize: '15px',
                verticalAlign: 'bottom'
              }}>
                Lorem ipsum
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2" style={{ color: 'rgba(161, 161, 161, 1)' }}>
                50+
              </div>
              <div className="text-sm font-bold" style={{ 
                lineHeight: '30px', 
                color: 'rgba(0, 0, 0, 1)', 
                fontSize: '15px',
                verticalAlign: 'bottom'
              }}>
                Lorem ipsum
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

