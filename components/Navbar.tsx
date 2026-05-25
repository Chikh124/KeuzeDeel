'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isMenuOpen && !target.closest('.menu-container')) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '/#features' },
    { label: 'Integrations', href: '/#integrations' },
    { label: 'Pricing', href: '/pricing' },
  ]

  const supportItems = [
    { label: 'Customer Support', href: '/contact' },
    { label: 'Technical Assistance', href: '/contact' },
    { label: 'Sales Inquiries', href: '/contact' },
  ]

  return (
    <nav className="relative z-50 bg-transparent pt-4" aria-label="Primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold text-gray-900"
            aria-label="Valaam home"
          >
            <div
              className="w-8 h-8 rounded-full"
              style={{
                background:
                  'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.95) 0%, rgba(230, 220, 255, 0.9) 15%, rgba(196, 181, 253, 0.8) 30%, rgba(139, 92, 246, 0.9) 60%, rgba(124, 58, 237, 1) 77%, rgba(109, 40, 217, 1) 100%)',
              }}
              aria-hidden="true"
            />
            <span>Valaam</span>
          </Link>

          <div className="menu-container relative">
            <motion.button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-2 text-gray-700 transition-colors"
              aria-expanded={isMenuOpen}
              aria-haspopup="menu"
              aria-controls="primary-menu"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <span className="text-lg font-medium">Menu</span>
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className={`transition-transform duration-300 ${
                  isMenuOpen ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
              </svg>
            </motion.button>

            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  id="primary-menu"
                  role="menu"
                  initial={{ opacity: 0, x: 20, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 20, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="absolute right-0 top-12 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50"
                >
                  <div className="p-4">
                    <div className="space-y-2 mb-6">
                      {menuItems.map((item, index) => (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ x: 5 }}
                        >
                          <Link
                            href={item.href}
                            role="menuitem"
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors text-sm font-medium"
                          >
                            {item.label}
                          </Link>
                        </motion.div>
                      ))}
                    </div>

                    <div className="h-px bg-gray-200 my-4" aria-hidden="true" />

                    <div className="space-y-2">
                      {supportItems.map((item, index) => (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (menuItems.length + index) * 0.05 }}
                          whileHover={{ x: 5 }}
                        >
                          <Link
                            href={item.href}
                            role="menuitem"
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors text-sm font-medium"
                          >
                            {item.label}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  )
}
