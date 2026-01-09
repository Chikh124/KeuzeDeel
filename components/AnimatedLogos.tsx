'use client'

import { useState } from 'react'

function LogoItem({ logo, index }: { logo: { name: string; iconUrl: string }, index: number }) {
  const [imageError, setImageError] = useState(false)
  
  return (
    <div
      key={`${logo.name}-${index}`}
      className="logo-item flex items-center gap-4"
    >
      {/* Логотип через img для реальних іконок */}
      <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center flex-shrink-0">
        {!imageError ? (
          <img 
            src={logo.iconUrl} 
            alt={logo.name}
            className="w-full h-full object-contain grayscale opacity-30 hover:opacity-100 transition-opacity"
            onError={() => setImageError(true)}
            loading="lazy"
          />
        ) : (
          // Fallback - показуємо першу літеру назви в колі
          <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center grayscale opacity-30 hover:opacity-100 transition-opacity">
            <span className="text-xs md:text-sm font-semibold text-gray-600">
              {logo.name.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
      </div>
      {/* Назва */}
      <span className="text-base md:text-lg grayscale opacity-30 hover:opacity-100 transition-opacity">{logo.name}</span>
    </div>
  )
}

export default function AnimatedLogos() {
  const logos = [
    { 
      name: 'upwork', 
      iconUrl: 'https://cdn.simpleicons.org/upwork/6FDA44'
    },
    { 
      name: 'Volta', 
      iconUrl: 'https://cdn.simpleicons.org/volta/7C3AED'
    },
    { 
      name: 'OpenAI', 
      iconUrl: 'https://cdn.simpleicons.org/openai/412991'
    },
    { 
      name: 'WANDA', 
      iconUrl: 'https://cdn.simpleicons.org/wanda/FF5A00'
    },
    { 
      name: 'NIU AERO', 
      iconUrl: 'https://cdn.simpleicons.org/niuaero/000000'
    },
    { 
      name: 'TIDAL', 
      iconUrl: 'https://cdn.simpleicons.org/tidal/000000'
    },
    { 
      name: 'acre', 
      iconUrl: 'https://cdn.simpleicons.org/acreom/4B5563'
    },
  ]

  // Подвоюємо масив для безперервної каруселі
  const duplicatedLogos = [...logos, ...logos, ...logos]

  return (
    <div className="py-8 overflow-hidden">
      <div className="relative">
        {/* Градієнти по краях для плавного переходу */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        {/* Анімована карусель */}
        <div className="logos-carousel">
          <div className="logos-track">
            {duplicatedLogos.map((logo, index) => (
              <LogoItem key={`${logo.name}-${index}`} logo={logo} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
