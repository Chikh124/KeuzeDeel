import type { Metadata, Viewport } from 'next'
import { Bricolage_Grotesque, Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://valaam.example.com'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Valaam — Algorithm Training Infrastructure',
    template: '%s | Valaam',
  },
  description:
    'Valaam is an algorithm training infrastructure that helps ML practitioners track, scale and ship machine learning models faster — from experiment to production.',
  keywords: [
    'Machine Learning Platform',
    'Algorithm Training Infrastructure',
    'MLOps',
    'AI Infrastructure',
    'Model Tracking',
    'Data Analytics',
    'AI Solutions',
  ],
  authors: [{ name: 'Valaam Team' }],
  creator: 'Valaam',
  publisher: 'Valaam',
  applicationName: 'Valaam',
  category: 'technology',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Valaam',
    title: 'Valaam — Algorithm Training Infrastructure',
    description:
      'Valaam helps ML practitioners track, scale and ship machine learning models faster — from experiment to production.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Valaam — Algorithm Training Infrastructure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Valaam — Algorithm Training Infrastructure',
    description:
      'Track, scale and ship machine learning models faster with Valaam.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Valaam',
      url: SITE_URL,
      logo: `${SITE_URL}/icon`,
      sameAs: [
        'https://twitter.com/valaam',
        'https://github.com/valaam',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Valaam',
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'en-US',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bricolage.variable} ${inter.variable}`}>
      <head>
        <link rel="dns-prefetch" href="https://cdn.simpleicons.org" />
        <link rel="preconnect" href="https://cdn.simpleicons.org" crossOrigin="anonymous" />
      </head>
      <body className="font-sans">
        {children}
        <Script
          id="ld-json-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}

