import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Valaam - Algorithm training infrastructure',
  description: 'At Valaam, we leverage the game-changing potency of Machine Learning to reshape understanding.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

