'use client'

import { ThemeProvider } from '@/components/ThemeProvider'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Nav />
      <main id="main">{children}</main>
      <Footer />
      <BackToTop />
    </ThemeProvider>
  )
}
