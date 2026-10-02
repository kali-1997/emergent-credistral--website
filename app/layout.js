import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const siteUrl = 'https://credistral.com'
const title = 'Credistral — AI Lending Intelligence Platform'
const description = 'Helping lenders make faster, smarter and safer lending decisions using AI, Account Aggregator data and explainable intelligence.'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: '%s · Credistral',
  },
  description,
  applicationName: 'Credistral',
  keywords: [
    'Credistral',
    'AI lending',
    'lending intelligence',
    'AI underwriting',
    'credit risk',
    'fraud detection',
    'Account Aggregator',
    'explainable AI',
    'NBFC',
    'fintech India',
  ],
  authors: [{ name: 'Credistral' }],
  creator: 'Credistral',
  publisher: 'Credistral',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-48.png', type: 'image/png', sizes: '48x48' },
      { url: '/favicon-96.png', type: 'image/png', sizes: '96x96' },
      { url: '/android-chrome-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/android-chrome-512.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Credistral',
    title,
    description,
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Credistral — AI Lending Intelligence Platform',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'technology',
}

export const viewport = {
  themeColor: '#0B1020',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Credistral',
    url: siteUrl,
    logo: `${siteUrl}/android-chrome-512.png`,
    description,
    sameAs: ['https://www.linkedin.com/company/credistral/'],
    contactPoint: [{
      '@type': 'ContactPoint',
      email: 'hello@credistral.ai',
      contactType: 'sales',
      areaServed: 'IN',
      availableLanguage: ['en'],
    }],
  }
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-[#0B1020] text-white overflow-x-hidden`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
