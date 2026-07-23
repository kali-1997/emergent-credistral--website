import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'Credistral — AI Lending Intelligence Platform',
  description: 'Helping lenders make faster, smarter and safer lending decisions using AI, Account Aggregator data and explainable intelligence.',
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png' }],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-[#0B1020] text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
