import Link from 'next/link'
import Kicker from '@/components/Kicker'
import ScrollReveal from '@/components/ScrollReveal'
import Card from '@/components/Card'
import SectionHead from '@/components/SectionHead'
import FeatureRow from '@/components/FeatureRow'
import CtaBand from '@/components/CtaBand'

const channels = [
  { href: '/whatsapp', icon: '💬', label: 'WhatsApp' },
  { href: '/livechat', icon: '🌐', label: 'Live Chat' },
  { href: '/email-channel', icon: '✉️', label: 'Email' },
  { href: '/instagram', icon: '📸', label: 'Instagram' },
  { href: '/facebook', icon: '📨', label: 'Messenger' },
  { href: '/sms', icon: '📱', label: 'SMS' },
]

const features = [
  { icon: '📥', title: 'Bandeja unificada', desc: 'Todas las conversaciones de todos los canales en una sola vista, con filtros, etiquetas y asignaciones.' },
  { icon: '👥', title: 'Colaboración en equipo', desc: 'Notas privadas, menciones @, asignaciones y equipos para resolver casos sin duplicar esfuerzos.' },
  { icon: '⚡', title: 'Automatizaciones', desc: 'Reglas, macros y respuestas predefinidas para enrutar, etiquetar y responder en segundos.' },
  { icon: '🤖', title: 'WizeFlow + IA', desc: 'Bots personalizados y flujos inteligentes diseñados a medida por el equipo de Wize Devs.' },
  { icon: '📊', title: 'Reportes en tiempo real', desc: 'Métricas de CSAT, tiempos de respuesta, volumen por canal y productividad por agente.' },
  { icon: '🔗', title: 'Integraciones', desc: 'Conecta tu CRM, eCommerce, tickets y más. Sincroniza datos sin fricciones.' },
  { icon: '📱', title: 'Apps móviles', desc: 'Responde desde cualquier lugar con nuestras aplicaciones nativas para iOS y Android.' },
  { icon: '🛡️', title: 'Seguridad empresarial', desc: 'Cifrado en tránsito y en reposo, SSO, roles granulares y auditoría completa.' },
  { icon: '🌎', title: 'Multi-idioma', desc: 'Interfaz y contenidos en múltiples idiomas para equipos globales y clientes internacionales.' },
]

const faqs = [
  { q: '¿Cuánto tarda la implementación?', a: 'La mayoría de equipos está atendiendo con WizeHub en menos de una semana. Para WhatsApp oficial, el tiempo depende de la verificación de Meta (normalmente 2–5 días hábiles).' },
  { q: '¿Puedo conservar mi número de WhatsApp?', a: 'Sí. Migramos tu número existente a la API oficial sin perder el historial de tu cuenta personal o Business.' },
  { q: '¿Incluye soporte en español?', a: 'Por supuesto. Todo nuestro equipo de éxito del cliente atiende en español, con horarios extendidos para América Latina y Europa.' },
  { q: '¿Qué diferencia hay entre WizeHub y WizeFlow?', a: 'WizeHub es la plataforma omnicanal donde tu equipo atiende conversaciones. WizeFlow es nuestro servicio para diseñar bots e IA a medida que se integran dentro de WizeHub para automatizar ventas y soporte.' },
  { q: '¿Se integra con mi CRM?', a: 'Sí. Tenemos integraciones nativas con los CRM más populares, API abierta y conectores vía Zapier. Integraciones a medida disponibles en planes Enterprise.' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 pb-18 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[1200px] h-[600px] -top-40 right-0 bg-indigo-500/15 dark:bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute w-[900px] h-[500px] -left-40 top-20 bg-cyan-400/12 dark:bg-cyan-400/8 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.1fr_1fr] gap-14 items-center relative">
          <div>
            <Kicker>Plataforma omnicanal de Wize Devs</Kicker>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.08] mb-5 text-slate-900 dark:text-white">
              Un centro de comando <span className="wz-text-gradient">para todas tus conversaciones</span>.
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl">WizeHub unifica WhatsApp, Live Chat, Email, Instagram, Facebook y más en una sola bandeja colaborativa. Responde más rápido, vende más y construye relaciones duraderas con tus clientes.</p>
            <div className="flex flex-wrap gap-3 mt-7">
              <Link href="/pricing" className="px-5 py-3 rounded-xl text-sm font-semibold wz-gradient text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition">Empezar prueba gratis →</Link>
              <Link href="/contact" className="px-5 py-3 rounded-xl text-sm font-semibold border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-white hover:border-wz-primary hover:text-wz-primary transition">Solicitar demo</Link>
            </div>
            <div className="grid grid-cols-4 gap-6 mt-8 max-w-lg">
              {[{ n: '12+', l: 'Canales' }, { n: '99.9%', l: 'Uptime' }, { n: '24/7', l: 'Soporte' }, { n: 'SLA', l: 'Empresarial' }].map(s => (
                <div key={s.l} className="text-center">
                  <div className="text-2xl font-extrabold wz-text-gradient">{s.n}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Mock visual */}
          <ScrollReveal delay={0.15}>
            <div className="p-1.5 rounded-2xl wz-gradient shadow-2xl">
              <div className="bg-wz-bg rounded-xl overflow-hidden">
                <div className="flex gap-1.5 px-4 py-2.5 bg-[#060914] border-b border-slate-800">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" /><span className="w-2.5 h-2.5 rounded-full bg-yellow-500" /><span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                </div>
                <div className="grid grid-cols-[180px_1fr_200px] min-h-[280px] text-xs text-slate-300">
                  <div className="p-3 border-r border-slate-800 space-y-2">
                    {[{ name: 'Laura G.', ch: 'WhatsApp · 2 min' }, { name: 'Carlos R.', ch: 'Live Chat · 5 min' }, { name: 'Ana M.', ch: 'Instagram · 8 min' }, { name: 'Soporte@', ch: 'Email · 12 min' }].map(c => (
                      <div key={c.name} className="bg-slate-800 rounded-lg p-2"><strong className="block text-white text-[13px]">{c.name}</strong>{c.ch}</div>
                    ))}
                  </div>
                  <div className="p-3 border-r border-slate-800 space-y-2">
                    <div className="bg-slate-800 rounded-xl px-3 py-2 max-w-[80%]">Hola, necesito ayuda con mi pedido #4821</div>
                    <div className="bg-wz-primary rounded-xl px-3 py-2 max-w-[80%] ml-auto text-white">¡Hola Laura! Tu pedido salió esta mañana 📦</div>
                    <div className="bg-slate-800 rounded-xl px-3 py-2 max-w-[80%]">¿Cuándo me llega?</div>
                    <div className="bg-wz-primary rounded-xl px-3 py-2 max-w-[80%] ml-auto text-white">Hoy antes de las 6pm. Te envío el tracking.</div>
                  </div>
                  <div className="p-3 space-y-2">
                    <div className="bg-slate-800 rounded-lg p-2"><strong className="block text-white">Cliente</strong>Laura González</div>
                    <div className="bg-slate-800 rounded-lg p-2"><strong className="block text-white">Pedido</strong>#4821 · En ruta</div>
                    <div className="bg-slate-800 rounded-lg p-2"><strong className="block text-white">WizeFlow</strong>Bot activo</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Channels strip */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHead kicker="Omnicanal real" title="Conecta todos los canales donde tus clientes te buscan" description="Una sola bandeja para WhatsApp, Live Chat, Email, redes sociales y canales personalizados. Sin cambiar de pestaña, sin perder contexto." />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {channels.map(c => (
              <Link key={c.href} href={c.href} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5 text-center hover:-translate-y-1 hover:shadow-lg transition-all">
                <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-slate-50 dark:bg-slate-700 flex items-center justify-center text-2xl">{c.icon}</div>
                <div className="font-semibold text-sm text-slate-800 dark:text-white">{c.label}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHead kicker="Funcionalidades" title="Todo lo que tu equipo necesita para atender mejor" description="Desde una bandeja colaborativa hasta automatizaciones con IA, WizeHub cubre cada etapa del ciclo de atención y ventas." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => <Card key={f.title} icon={f.icon} title={f.title} description={f.desc} delay={i * 0.05} />)}
          </div>
        </div>
      </section>

      {/* Feature rows */}
      <section className="py-10 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <FeatureRow kicker="WhatsApp Business API" title="Convierte WhatsApp en tu canal de ventas y soporte favorito" description="Integra la API oficial de WhatsApp Business, envía plantillas aprobadas, recibe mensajes entrantes y gestiona múltiples números desde el mismo panel." mockText="[Captura: bandeja de WhatsApp con múltiples conversaciones, plantillas y etiquetas]" ctaLabel="Conoce WhatsApp en WizeHub →" ctaHref="/whatsapp" />
          <FeatureRow reverse kicker="Live Chat" title="Un widget ligero, personalizable y con superpoderes" description="Convierte visitantes en clientes con un chat en vivo que se adapta a tu marca. Soporta archivos, emojis, formularios previos, mensajes proactivos y continuidad de conversación entre dispositivos." mockText="[Captura: widget de live chat sobre una web e-commerce con mensajes proactivos]" ctaLabel="Ver Live Chat →" ctaHref="/livechat" />
          <FeatureRow kicker="Dashboard Colaborativo" title="Trabaja en equipo, cierra casos más rápido" description="Asigna conversaciones por equipos o agentes, deja notas privadas, menciona a compañeros y accede al historial completo de cada cliente." mockText="[Captura: panel con inbox, notas privadas, menciones, SLA y paneles de métricas]" ctaLabel="Explorar el Dashboard →" ctaHref="/dashboard" />
        </div>
      </section>

      {/* WizeFlow highlight */}
      <section className="py-16">
        <ScrollReveal className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-indigo-700 to-teal-600 text-white rounded-3xl p-10 md:p-14 grid lg:grid-cols-[1.4fr_1fr] gap-8 items-center">
            <div>
              <span className="inline-block bg-white/15 px-3 py-1.5 rounded-full text-xs font-semibold mb-4">Nuevo · Potencia WizeHub</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">WizeFlow: bots e IA a medida para tu operación</h2>
              <p className="text-indigo-100 leading-relaxed">WizeFlow es nuestra herramienta hermana especializada en automatización avanzada. Diseñamos flujos de IA conversacional a medida, entrenados con tu negocio, para automatizar ventas, calificar leads, resolver consultas frecuentes y escalar a humanos cuando se necesita.</p>
              <Link href="/wizeflow" className="inline-flex mt-5 px-5 py-2.5 rounded-xl text-sm font-semibold bg-white text-indigo-700 hover:bg-indigo-50 transition">Descubrir WizeFlow →</Link>
            </div>
            <div className="bg-white/10 rounded-2xl p-5 space-y-3">
              {[{ icon: '🤖', t: 'Bot de ventas', d: 'Califica leads y agenda demos' }, { icon: '🎯', t: 'Soporte nivel 1', d: 'Resuelve FAQs y crea tickets' }, { icon: '🛒', t: 'eCommerce', d: 'Rastreo de pedidos y upsell' }].map(i => (
                <div key={i.t} className="bg-white/15 rounded-xl p-3"><span className="mr-2">{i.icon}</span><strong>{i.t}</strong><br /><small className="text-indigo-100">{i.d}</small></div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Segments */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHead kicker="Pensado para crecer" title="Diseñado para equipos de todos los tamaños" description="Desde emprendedores que arrancan, hasta empresas con operaciones globales de atención 24/7." />
          <div className="grid sm:grid-cols-3 gap-5">
            <Card title="Ventas" description="Convierte más visitantes. Califica leads, agenda reuniones y recupera carritos abandonados desde el canal preferido del cliente." />
            <Card title="Soporte" description="Resuelve más rápido con macros, IA y flujos inteligentes. Mide CSAT, tiempos de respuesta y productividad." delay={0.1} />
            <Card title="Operaciones" description="Centraliza logística, pedidos y postventa. Conecta WizeHub con tu ERP y CRM para sincronizar datos clave." delay={0.2} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 dark:bg-wz-bg">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHead kicker="Preguntas frecuentes" title="Todo lo que quieres saber antes de empezar" />
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <ScrollReveal key={f.q} delay={i * 0.06}>
                <details className="group rounded-2xl border border-slate-200 bg-white
                  dark:border-slate-700/60 dark:bg-gradient-to-br dark:from-slate-800/80 dark:to-slate-900/80
                  dark:backdrop-blur-sm dark:shadow-[0_0_24px_-6px_rgba(99,102,241,.12)]
                  open:dark:border-indigo-500/30 open:dark:shadow-[0_0_32px_-4px_rgba(99,102,241,.2)]
                  transition-all duration-300">
                  <summary className="cursor-pointer p-5 md:p-6 font-semibold text-slate-900 dark:text-slate-100 flex justify-between items-center list-none
                    group-hover:dark:text-white transition-colors">
                    <span className="pr-4">{f.q}</span>
                    <span className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold
                      bg-slate-100 text-wz-primary
                      dark:bg-indigo-500/15 dark:text-indigo-400
                      group-open:bg-wz-primary group-open:text-white
                      group-open:dark:bg-indigo-500 group-open:dark:text-white
                      group-open:rotate-45 group-open:shadow-lg group-open:shadow-indigo-500/30
                      transition-all duration-300">
                      +
                    </span>
                  </summary>
                  <div className="px-5 md:px-6 pb-5 md:pb-6">
                    <div className="h-px bg-slate-100 dark:bg-slate-700/50 mb-4" />
                    <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-300">{f.a}</p>
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Unifica tus conversaciones hoy mismo" description="Prueba WizeHub gratis durante 14 días. Sin tarjeta de crédito, sin compromisos. Te ayudamos a migrar desde tu herramienta actual." primaryLabel="Ver planes y precios" secondaryLabel="Hablar con ventas" secondaryHref="/contact" />
    </>
  )
}
