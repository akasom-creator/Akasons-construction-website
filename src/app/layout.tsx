import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "Akason's Construction Company - Building Dreams in Nigeria",
  description: 'Professional construction services across Nigeria. We build residential, commercial, and infrastructure projects with quality, reliability, and innovation.',
  keywords: 'construction, building, Nigeria, residential, commercial, infrastructure, contractor',
  authors: [{ name: "Akason's Construction Company" }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}