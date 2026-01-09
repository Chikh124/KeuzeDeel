import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import type { Metadata } from 'next'

// Dynamic imports для компонентів нижче fold
const PlatformSection = dynamic(() => import('@/components/PlatformSection'), {
  loading: () => <div className="h-[400px] bg-gray-100" />,
})
const Integrations = dynamic(() => import('@/components/Integrations'), {
  loading: () => <div className="h-[300px] bg-gray-100" />,
})

// Dynamic imports для компонентів нижче fold
const ManufacturingSection = dynamic(() => import('@/components/ManufacturingSection'), {
  loading: () => <div className="h-[400px] bg-gray-100" />,
})
const Pricing = dynamic(() => import('@/components/Pricing'), {
  loading: () => <div className="h-[400px] bg-gray-100" />,
})
const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  loading: () => <div className="h-[400px] bg-gray-100" />,
})
const MLPlatformSection = dynamic(() => import('@/components/MLPlatformSection'), {
  loading: () => <div className="h-[400px] bg-gray-100" />,
})
const FramerCTASection = dynamic(() => import('@/components/FramerCTASection'), {
  loading: () => <div className="h-[200px] bg-gray-100" />,
})
const Footer = dynamic(() => import('@/components/Footer'))
const PromoBox = dynamic(() => import('@/components/PromoBox'))

export const metadata: Metadata = {
  title: 'Valaam - Algorithm Training Infrastructure',
  description: 'At Valaam, we leverage the game-changing potency of Machine Learning to reshape understanding. Our ground-breaking tech opens unlimited potential across a range of sectors.',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <PlatformSection />
      <Integrations />
      <ManufacturingSection />
      <Pricing />
      <Testimonials />
      <MLPlatformSection />
      <FramerCTASection />
      <Footer />
      <PromoBox />
    </main>
  )
}

