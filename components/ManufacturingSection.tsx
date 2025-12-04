'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const slides = [
  {
    title: 'Manufacturing Efficiency',
    description: 'By streamlining operations, increasing production, and opening the path for a new era of manufacturing excellence, VisionIQ\'s cutting-edge AI solutions can revolutionize the efficiency of the manufacturing industry.',
    image: 'manufacturing.png',
  },
  {
    title: 'Manufacturing Efficiency',
    description: 'Using AI-driven solutions from VisionIQ, which expertly optimize consumer experiences, empower businesses, and open the door to extraordinary success, you may see the amazing change of the retail industry.',
    image: 'manufacturing_02.png',
  },
  {
    title: 'Manufacturing Efficiency',
    description: 'Embrace the future of urban living with VisionIQ\'s smart urban solutions. Our advanced AI technologies create efficient, sustainable, and connected cities, enhancing the quality of life for all residents.',
    image: 'manufacturing_03.png',
  },
]

export default function ManufacturingSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const slidesContainerRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  useEffect(() => {
    const section = sectionRef.current
    const slidesContainer = slidesContainerRef.current

    if (!section || !slidesContainer) return

    // Отримуємо ширину одного слайду (100vw)
    const slideWidth = window.innerWidth
    const totalWidth = slideWidth * slides.length

    // Встановлюємо ширину контейнера слайдів
    gsap.set(slidesContainer, {
      width: `${totalWidth}px`,
    })

    // Розраховуємо end так, щоб презентація закінчувалась одразу після останнього слайду
    const sectionHeight = section.offsetHeight || 600
    // Скорочена відстань скролу для швидкого переходу до наступної секції без затримки
    const scrollDistance = sectionHeight * (slides.length - 1) * 0.75

    let scrollTrigger: ScrollTrigger | null = null

    // Створюємо анімацію горизонтального скролу
    const scrollTween = gsap.to(slidesContainer, {
      xPercent: -100 * (slides.length - 1), // Завершуємо на останньому слайді без половинки
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${scrollDistance}`,
        pin: true,
        scrub: 1.5, // Плавний скрол, щоб не переходити одразу на наступний слайд
        anticipatePin: 1,
        pinSpacing: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress
          // Розраховуємо поточний слайд на основі прогресу
          const exactSlideIndex = progress * (slides.length - 1)
          const slideIndex = Math.min(
            Math.floor(exactSlideIndex),
            slides.length - 1
          )
          setCurrentSlide(slideIndex)
        },
        onEnter: () => {
          // Переконаємось що контент видимий
          if (slidesContainer) {
            slidesContainer.style.visibility = 'visible'
          }
        },
      },
    })

    scrollTrigger = scrollTween.scrollTrigger || null

    // Обробка ресайзу
    const handleResize = () => {
      ScrollTrigger.refresh()
    }
    window.addEventListener('resize', handleResize)

    return () => {
      if (scrollTrigger) {
        scrollTrigger.kill()
      }
      scrollTween.kill()
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars && trigger.vars.trigger === section) {
          trigger.kill()
        }
      })
      window.removeEventListener('resize', handleResize)
    }
  }, []) // Прибрав currentSlide з залежностей

  return (
    <section ref={sectionRef} className="relative py-12 md:py-16 bg-white overflow-hidden">
      {/* Animated gradient orb на фоні - залишається після скролу */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] md:w-[400px] md:h-[400px] rounded-full animated-gradient-orb opacity-50" />
      </div>

      <div className="relative z-10 h-[500px] md:h-[600px] flex items-center">
        <div className="overflow-hidden w-full h-full">
          <div ref={slidesContainerRef} className="flex h-full">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-screen h-full grid md:grid-cols-2 gap-6 md:gap-8 items-center px-4 sm:px-6 lg:px-8"
              >
                {/* Текст зліва */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="relative z-10 max-w-2xl"
                >
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                    {slide.title}
                  </h2>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 md:mb-8">
                    {slide.description}
                  </p>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center gap-2 text-sm md:text-base font-medium text-gray-900 hover:text-orange-500 transition-colors group"
                  >
                    Enhance Productivity
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </motion.div>

                {/* Фото справа */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                  className="relative z-10"
                >
                  <div className="relative w-full h-[250px] md:h-[350px] rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src={`/images/${slide.image}`}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                        const parent = target.parentElement
                        if (parent) {
                          parent.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-xl">Manufacturing Efficiency</div>'
                        }
                      }}
                    />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
