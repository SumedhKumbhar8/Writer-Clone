import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins-next',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'WRITER - The enterprise AI platform for agentic work',
  description:
    'WRITER is the enterprise AI agent platform trusted by Fortune 500 companies, built to help teams execute and scale on-brand, compliant work.',
  metadataBase: new URL('https://writer.com'),
  openGraph: {
    title: 'WRITER',
    description:
      'WRITER is the enterprise AI agent platform trusted by Fortune 500 companies.',
    url: 'https://writer.com',
    siteName: 'WRITER',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Get_Writer',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="font-body antialiased" suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
