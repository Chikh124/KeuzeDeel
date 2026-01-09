'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function ContactForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Тут можна додати логіку відправки форми
    console.log('Form submitted:', formData)
  }

  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white" ref={ref}>
      {/* Градієнтна куля на фоні */}
      <div className="absolute inset-0 pointer-events-none" style={{ overflow: 'visible' }}>
        <div className="absolute top-[48%] left-1/2 w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-full animated-gradient-orb" style={{ transform: 'translate(-50%, -50%)' }} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Заголовок */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-center"
        >
          Contact our friendly team
        </motion.h2>

        {/* Опис */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto"
        >
          Feel free to reach out using the contact form below or via the provided contact information. We&apos;ll respond promptly to ensure you have a seamless and enjoyable experience engaging with VisionIQ. Let&apos;s connect and bring your AI aspirations to life!
        </motion.p>

        {/* Форма без білого контейнера */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                placeholder="Jane"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                placeholder="Doe"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
              placeholder="jane@example.com"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
              Company <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              required
              value={formData.company}
              onChange={handleChange}
              className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
              placeholder="Company name"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition resize-none"
              placeholder="Your message"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full md:w-auto px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-lg text-base md:text-lg font-semibold transition-colors shadow-lg"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}
