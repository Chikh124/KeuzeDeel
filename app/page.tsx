import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import PlatformSection from '@/components/PlatformSection'
import Integrations from '@/components/Integrations'
import ManufacturingSection from '@/components/ManufacturingSection'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import Stats from '@/components/Stats'
import Footer from '@/components/Footer'
import PromoBox from '@/components/PromoBox'

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
      <Stats />
      <Footer />
      <PromoBox />
    </main>
  )
}

