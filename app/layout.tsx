import type { Metadata } from 'next'
import './globals.css'
import ClientLayout from './client-layout'

export const metadata: Metadata = {
  title: { default: 'WizeHub — Plataforma de comunicación omnicanal', template: '%s | WizeHub' },
  description: 'WizeHub unifica WhatsApp, Live Chat, Email, Instagram y más en una bandeja colaborativa. Impulsa tu atención y ventas con WizeFlow.',
  openGraph: { siteName: 'WizeHub', type: 'website' },
  twitter: { card: 'summary_large_image' },
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans bg-white dark:bg-wz-bg text-slate-900 dark:text-slate-100">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
