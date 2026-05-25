import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'

// Below-the-fold components are loaded dynamically to keep the initial bundle small.
const PlatformSection = dynamic(() => import('@/components/PlatformSection'), {
  loading: () => <div className="h-[400px] bg-gray-100" />,
})
const Integrations = dynamic(() => import('@/components/Integrations'), {
  loading: () => <div className="h-[300px] bg-gray-100" />,
})
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

export const metadata: Metadata = {
  alternates: { canonical: '/' },
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
    </main>
  )
}
