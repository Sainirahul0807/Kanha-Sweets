import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Poppins, Yatra_One } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/Providers'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const yatra = Yatra_One({
  subsets: ['latin', 'devanagari'],
  weight: ['400'],
  variable: '--font-yatra',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Kanha Sweets | Tauru\'s No.1 Sweet Shop Since 1990',
    template: '%s | Kanha Sweets',
  },
  description: 'Authentic Indian sweets from Kanha Sweets, Tauru. Serving sweetness since 1990. Fresh mithai, namkeen, gift boxes & festival specials. Order online for pickup or delivery.',
  keywords: ['Kanha Sweets', 'Tauru sweets', 'Indian mithai', 'gulab jamun', 'kaju katli', 'gift boxes', 'festival sweets', 'Haryana sweets'],
  authors: [{ name: 'Kanha Sweets' }],
  creator: 'Kanha Sweets',
  publisher: 'Kanha Sweets',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://kanhasweets.in',
    siteName: 'Kanha Sweets',
    title: 'Kanha Sweets | Tauru\'s No.1 Sweet Shop Since 1990',
    description: 'Authentic Indian sweets from Kanha Sweets, Tauru. Serving sweetness since 1990.',
    images: [
      {
        url: '/images/hero/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kanha Sweets - Traditional Indian Sweets Since 1990',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kanha Sweets | Tauru\'s No.1 Sweet Shop Since 1990',
    description: 'Authentic Indian sweets from Kanha Sweets, Tauru. Serving sweetness since 1990.',
    images: ['/images/hero/og-image.jpg'],
  },
  verification: {
    google: 'TODO: Add Google Search Console verification code',
  },
}

export const viewport: Viewport = {
  themeColor: '#7A1F2B',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-IN" class={`${playfair.variable} ${poppins.variable} ${yatra.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/images/logo/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/images/logo/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/images/logo/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen bg-cream font-body">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}