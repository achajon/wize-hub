import Link from 'next/link'

const cols = [
  { title: 'Producto', links: [
    { href: '/dashboard', label: 'Dashboard' }, { href: '/mobile', label: 'Apps móviles' },
    { href: '/integrations', label: 'Integraciones' }, { href: '/wizeflow', label: 'WizeFlow' },
    { href: '/pricing', label: 'Precios' },
  ]},
  { title: 'Canales', links: [
    { href: '/whatsapp', label: 'WhatsApp' }, { href: '/livechat', label: 'Live Chat' },
    { href: '/email-channel', label: 'Email' }, { href: '/instagram', label: 'Instagram' },
    { href: '/facebook', label: 'Facebook' }, { href: '/sms', label: 'SMS' },
    { href: '/api-channels', label: 'API' },
  ]},
  { title: 'Empresa', links: [
    { href: '/about', label: 'Sobre nosotros' }, { href: '/contact', label: 'Contacto' },
    { href: '/security', label: 'Seguridad' }, { href: '#', label: 'Estado del servicio' },
  ]},
  { title: 'Recursos', links: [
    { href: '#', label: 'Centro de ayuda' }, { href: '#', label: 'Guías de inicio' },
    { href: '#', label: 'Blog' }, { href: '#', label: 'API Reference' },
  ]},
]

export default function Footer() {
  return (
    <footer className="bg-wz-bg text-slate-400 pt-16 pb-8 mt-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 text-white font-extrabold text-xl mb-3">
              <span className="w-8 h-8 rounded-lg wz-gradient inline-flex items-center justify-center text-sm font-black">W</span>
              WizeHub
            </div>
            <p className="text-sm leading-relaxed">La plataforma de comunicación omnicanal de <strong className="text-white">Wize Devs</strong>. Centraliza tus conversaciones y potencia tu atención con IA.</p>
            <div className="mt-3 flex items-center gap-1.5 text-sm">
              <span className="w-2 h-2 rounded-full bg-wz-success animate-pulse-dot" />
              Todos los sistemas operando
            </div>
          </div>
          {cols.map(c => (
            <div key={c.title}>
              <h4 className="text-white font-semibold text-sm mb-4">{c.title}</h4>
              {c.links.map(l => (
                <Link key={l.href + l.label} href={l.href} className="block py-1 text-sm hover:text-white transition">{l.label}</Link>
              ))}
            </div>
          ))}
        </div>
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between text-xs gap-3">
          <div>© 2026 Wize Devs — Todos los derechos reservados.</div>
          <div>Términos · Privacidad · Cookies</div>
        </div>
      </div>
    </footer>
  )
}
