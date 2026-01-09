import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Valaam - Algorithm Training Infrastructure',
    template: '%s | Valaam',
  },
  description: 'At Valaam, we leverage the game-changing potency of Machine Learning to reshape understanding. Our ground-breaking tech opens unlimited potential across a range of sectors.',
  keywords: ['Machine Learning', 'AI', 'ML Platform', 'Algorithm Training', 'Data Analytics', 'AI Solutions'],
  authors: [{ name: 'Goran Babarogic' }],
  creator: 'Goran Babarogic',
  publisher: 'Valaam',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://valaam.framer.website',
    siteName: 'Valaam',
    title: 'Valaam - Algorithm Training Infrastructure',
    description: 'At Valaam, we leverage the game-changing potency of Machine Learning to reshape understanding.',
    images: [
      {
        url: '/favicon.png',
        width: 1200,
        height: 630,
        alt: 'Valaam',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Valaam - Algorithm Training Infrastructure',
    description: 'At Valaam, we leverage the game-changing potency of Machine Learning to reshape understanding.',
    images: ['/favicon.png'],
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
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  metadataBase: new URL('https://valaam.framer.website'),
  other: {
    'dns-prefetch': 'https://cdn.simpleicons.org',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="dns-prefetch" href="https://cdn.simpleicons.org" />
        <link rel="preconnect" href="https://cdn.simpleicons.org" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}

