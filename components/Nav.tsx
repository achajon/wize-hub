'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useTheme } from './ThemeProvider'

const productLinks = [
  { href: '/dashboard', label: 'Dashboard Colaborativo', desc: 'Bandeja unificada para equipos' },
  { href: '/mobile', label: 'Apps móviles', desc: 'Responde desde iOS y Android' },
  { href: '/integrations', label: 'Integraciones', desc: 'Conecta tus herramientas' },
  { href: '/wizeflow', label: 'WizeFlow', desc: 'Bots e IA a medida' },
]

const channelLinks = [
  { href: '/whatsapp', label: 'WhatsApp', desc: 'API oficial para negocios' },
  { href: '/livechat', label: 'Live Chat', desc: 'Widget para tu sitio web' },
  { href: '/email-channel', label: 'Email', desc: 'Convierte correos en conversaciones' },
  { href: '/instagram', label: 'Instagram', desc: 'DMs y comentarios' },
  { href: '/facebook', label: 'Facebook Messenger', desc: 'Atención unificada' },
  { href: '/sms', label: 'SMS', desc: 'Mensajería tradicional' },
  { href: '/api-channels', label: 'API de Canales', desc: 'Conecta cualquier canal' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { theme, toggle } = useTheme()

  return (
    <>
      <a className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-[100] bg-wz-bg2 text-white px-4 py-2 rounded-lg" href="#main">Saltar al contenido</a>
      <nav className="sticky top-0 z-50 bg-white/85 dark:bg-wz-bg2/90 backdrop-blur-xl border-b border-slate-200 dark:border-slate-700" aria-label="Principal">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 font-extrabold text-xl text-slate-900 dark:text-white">
            <span className="w-8 h-8 rounded-lg wz-gradient inline-flex items-center justify-center text-white text-sm font-black">W</span>
            WizeHub
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-7">
            <div className="group relative">
              <button className="font-medium text-sm text-slate-700 dark:text-slate-200">Producto ▾</button>
              <div className="hidden group-hover:grid absolute top-full left-1/2 -translate-x-1/2 pt-2 min-w-[480px] grid-cols-2 gap-1 p-4 bg-white dark:bg-wz-bg2 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl">
                {productLinks.map(l => (
                  <Link key={l.href} href={l.href} className="p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800">
                    <strong className="block text-sm text-slate-900 dark:text-white">{l.label}</strong>
                    <small className="text-slate-500 dark:text-slate-400">{l.desc}</small>
                  </Link>
                ))}
              </div>
            </div>
            <div className="group relative">
              <button className="font-medium text-sm text-slate-700 dark:text-slate-200">Canales ▾</button>
              <div className="hidden group-hover:grid absolute top-full left-1/2 -translate-x-1/2 pt-2 min-w-[480px] grid-cols-2 gap-1 p-4 bg-white dark:bg-wz-bg2 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl">
                {channelLinks.map(l => (
                  <Link key={l.href} href={l.href} className="p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800">
                    <strong className="block text-sm text-slate-900 dark:text-white">{l.label}</strong>
                    <small className="text-slate-500 dark:text-slate-400">{l.desc}</small>
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/wizeflow" className="font-medium text-sm text-slate-700 dark:text-slate-200 hover:text-wz-primary">WizeFlow</Link>
            <Link href="/pricing" className="font-medium text-sm text-slate-700 dark:text-slate-200 hover:text-wz-primary">Precios</Link>
            <Link href="/contact" className="font-medium text-sm text-slate-700 dark:text-slate-200 hover:text-wz-primary">Contacto</Link>
          </div>

          {/* Desktop CTA + dark mode */}
          <div className="hidden lg:flex items-center gap-3">
            <button onClick={toggle} className="w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-600 flex items-center justify-center text-sm" aria-label="Cambiar tema">
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <Link href="/contact" className="px-4 py-2.5 rounded-xl text-sm font-semibold border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-white hover:border-wz-primary hover:text-wz-primary transition">Iniciar sesión</Link>
            <Link href="/pricing" className="px-4 py-2.5 rounded-xl text-sm font-semibold wz-gradient text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition">Prueba gratis</Link>
          </div>

          {/* Mobile toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button onClick={toggle} className="w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-600 flex items-center justify-center text-sm" aria-label="Cambiar tema">
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <button onClick={() => setOpen(!open)} className="w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-600 flex items-center justify-center text-lg" aria-label="Menú" aria-expanded={open}>
              {open ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile panel */}
        {open && (
          <div className="lg:hidden fixed inset-x-0 top-[72px] bottom-0 bg-white dark:bg-wz-bg2 z-40 overflow-auto p-6 border-t border-slate-200 dark:border-slate-700">
            <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-2">Producto</p>
            {productLinks.map(l => <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 border-b border-slate-100 dark:border-slate-700 font-semibold text-slate-800 dark:text-white">{l.label}</Link>)}
            <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mt-5 mb-2">Canales</p>
            {channelLinks.map(l => <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 border-b border-slate-100 dark:border-slate-700 font-semibold text-slate-800 dark:text-white">{l.label}</Link>)}
            <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mt-5 mb-2">Empresa</p>
            <Link href="/pricing" onClick={() => setOpen(false)} className="block py-3 border-b border-slate-100 dark:border-slate-700 font-semibold text-slate-800 dark:text-white">Precios</Link>
            <Link href="/about" onClick={() => setOpen(false)} className="block py-3 border-b border-slate-100 dark:border-slate-700 font-semibold text-slate-800 dark:text-white">Sobre nosotros</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="block py-3 border-b border-slate-100 dark:border-slate-700 font-semibold text-slate-800 dark:text-white">Contacto</Link>
            <Link href="/pricing" onClick={() => setOpen(false)} className="block mt-5 py-3 text-center rounded-xl font-semibold wz-gradient text-white">Prueba gratis</Link>
          </div>
        )}
      </nav>
    </>
  )
}
