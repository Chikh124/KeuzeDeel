'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

export default function PlatformSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeIndex, setActiveIndex] = useState(0)
  const [imageError, setImageError] = useState<boolean[]>(new Array(3).fill(false))
  const [progress, setProgress] = useState(0)

  const steps = [
    {
      number: '01.',
      title: 'Easy to Integrate',
      description: 'Add two lines of code to your notebook or script and automatically start tracking code, hyperparameters, metrics, and more, so you can compare and reproduce training runs.',
      image: '/images/platform-01.jpg',
    },
    {
      number: '02.',
      title: 'Track and share experiments',
      description: 'Unlock your artistic potential with my easy-to-follow tutorials. I guide aspiring artists through essential techniques and tips to elevate their drawing skills. Whether you\'re a beginner or not, discover the joy of drawing with me!',
      image: '/images/platform-02.jpg',
    },
    {
      number: '03.',
      title: 'Build your own visualizations',
      description: 'I also create striking and intricate digital paintings that captivate and inspire. My work ranges from atmospheric landscapes to detailed character portraits. Let\'s experience the beauty of colors together!',
      image: '/images/platform-03.jpg',
    },
  ]

  // Автоматичне перемикання кожні 5 секунд з прогрес-баром
  useEffect(() => {
    if (!isInView) return

    setProgress(0)
    const duration = 5000 // 5 секунд
    const interval = 50 // Оновлення кожні 50мс для плавності
    const increment = 100 / (duration / interval)

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0
        }
        return prev + increment
      })
    }, interval)

    const switchInterval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length)
      setProgress(0)
    }, duration)

    return () => {
      clearInterval(progressInterval)
      clearInterval(switchInterval)
    }
  }, [isInView, steps.length, activeIndex])

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 md:mb-10 text-center"
        >
          Monitor and manage models,<br className="hidden md:block" /> from small teams to massive scale
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
          {/* Зображення зліва - компактне */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full h-[320px] md:h-[380px] rounded-lg overflow-hidden bg-gray-100 border border-gray-200"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full"
              >
                {imageError[activeIndex] ? (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl font-bold">
                    {steps[activeIndex].title}
                  </div>
                ) : (
                  <Image
                    src={steps[activeIndex].image}
                    alt={steps[activeIndex].title}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    onError={(e) => {
                      console.error('Image failed to load:', steps[activeIndex].image)
                      setImageError((prev) => {
                        const newErrors = [...prev]
                        newErrors[activeIndex] = true
                        return newErrors
                      })
                    }}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Список з описом справа */}
          <div className="space-y-8 md:space-y-10 flex flex-col justify-between h-full min-h-[320px] md:min-h-[380px]">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                onClick={() => {
                  setActiveIndex(index)
                  setProgress(0)
                }}
                className={`cursor-pointer transition-all duration-300 flex-1 ${
                  activeIndex === index ? '' : 'opacity-60 hover:opacity-80'
                }`}
              >
                <div className="flex items-start gap-3 md:gap-4 h-full">
                  <div className={`text-2xl md:text-3xl font-bold transition-colors ${
                    activeIndex === index ? 'text-gray-900' : 'text-gray-300'
                  }`}>
                    {step.number}
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h3 className={`text-lg md:text-xl font-bold mb-2 transition-colors ${
                      activeIndex === index ? 'text-gray-900' : 'text-gray-500'
                    }`}>
                      {step.title}
                    </h3>
                    {activeIndex === index && step.description && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-1 flex-1"
                      >
                        <p className="text-gray-600 leading-relaxed text-xs md:text-sm">
                          {step.description}
                        </p>
                        {/* Прогрес-бар під описом */}
                        <div className="mt-3 relative">
                          {/* Сірий фон */}
                          <div className="h-0.5 bg-gray-300 w-full absolute" />
                          {/* Помаранчева/червона лінія що заповнюється */}
                          <motion.div
                            className="h-0.5 bg-orange-500 absolute top-0 left-0"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.05, ease: 'linear' }}
                          />
                        </div>
                      </motion.div>
                    )}
                    {/* Тонка сіра лінія для неактивних або без опису */}
                    {(!step.description || activeIndex !== index) && (
                      <div className="h-px bg-gray-300 w-full mt-2 flex-1" />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
