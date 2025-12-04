'use client'

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
              <div
                key={`${logo.name}-${index}`}
                className="logo-item flex items-center gap-3"
              >
                {/* Логотип через img для реальних іконок */}
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                  <img 
                    src={logo.iconUrl} 
                    alt={logo.name}
                    className="w-6 h-6 object-contain opacity-60"
                    onError={(e) => {
                      // Fallback якщо іконка не завантажиться
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                </div>
                {/* Назва */}
                <span>{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
