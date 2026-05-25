import Navbar from '@/components/Navbar'
import ContactForm from '@/components/ContactForm'
import FAQ from '@/components/FAQ'
import FramerCTASection from '@/components/FramerCTASection'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Valaam',
  description: 'Contact our friendly team at Valaam. Feel free to reach out using the contact form or via the provided contact information. We\'ll respond promptly to ensure you have a seamless experience.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      <Navbar />
      <ContactForm />
      <FAQ />
      <FramerCTASection />
      <Footer />
    </main>
  )
}
