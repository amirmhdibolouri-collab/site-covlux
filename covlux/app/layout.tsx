import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'Covlux — The Future of Digital Collectibles',
  description:
    'Covlux is an ultra-premium digital collectibles platform. Experience premium digital ownership powered by cutting-edge technology.',
  generator: 'v0.app',
  keywords: ['Covlux', 'digital collectibles', 'web3', 'premium', 'ownership'],
  openGraph: {
    title: 'Covlux — The Future of Digital Collectibles',
    description: 'Experience premium digital ownership powered by cutting-edge technology.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#09090b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
