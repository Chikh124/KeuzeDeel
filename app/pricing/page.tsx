import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import FramerCTASection from '@/components/FramerCTASection'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Flexible plans for every machine learning practitioner. Choose the perfect Valaam plan for your team — from individuals to large enterprises.',
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: 'Pricing | Valaam',
    description:
      'Flexible plans for every machine learning practitioner — Basic, Pro and Enterprise.',
    url: '/pricing',
  },
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Pricing variant="page" />
      <FAQ />
      <FramerCTASection />
      <Footer />
    </main>
  )
}
