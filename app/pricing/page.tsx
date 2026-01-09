import Navbar from '@/components/Navbar'
import PricingSection from '@/components/PricingSection'
import FAQ from '@/components/FAQ'
import FramerCTASection from '@/components/FramerCTASection'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Pricing - Valaam',
  description: 'Flexible plans for every machine learning practitioner. Choose the perfect plan for your needs.',
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PricingSection />
      <FAQ />
      <FramerCTASection />
      <Footer />
    </main>
  )
}
