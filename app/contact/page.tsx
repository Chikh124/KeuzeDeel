import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import ContactForm from '@/components/ContactForm'
import FAQ from '@/components/FAQ'
import FramerCTASection from '@/components/FramerCTASection'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact our friendly team at Valaam. Reach out via the contact form or our support channels — we respond promptly to keep your ML initiatives on track.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact | Valaam',
    description:
      'Reach the Valaam team for sales, technical or customer support enquiries.',
    url: '/contact',
  },
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
