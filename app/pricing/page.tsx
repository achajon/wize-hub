import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Card from '@/components/Card'
import SectionHead from '@/components/SectionHead'
import CtaBand from '@/components/CtaBand'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Precios | WizeHub',
  description: 'Planes simples y transparentes. Desde gratuito hasta empresarial.',
}

export default function PricingPage() {
  return (
    <>
      <PageHero
        kicker="PRECIOS"
        title={<>Planes <span className="wz-text-gradient">Simples</span></>}
        description="Sin sorpresas. Paga solo por lo que usas. Upgrade o downgrade en cualquier momento."
        primaryCta={{ label: 'Comenzar Gratis', href: '/contact' }}
        secondaryCta={{ label: 'Ver Comparativa', href: '#' }}
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* BÁSICO PLAN */}
            <ScrollReveal>
              <div className="rounded-lg border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-800/80 p-8 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Básico</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">Para empezar</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-slate-900 dark:text-slate-100">Q0</span>
                  <span className="text-slate-600 dark:text-slate-400 ml-1">/mes</span>
                </div>
                <ul className="space-y-3 flex-grow mb-8">
                  <li className="flex items-start">
                    <span className="mr-3 text-slate-400 dark:text-slate-500">•</span>
                    <span className="text-slate-700 dark:text-slate-300">2 agentes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-slate-400 dark:text-slate-500">•</span>
                    <span className="text-slate-700 dark:text-slate-300">Live Chat y Email</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-slate-400 dark:text-slate-500">•</span>
                    <span className="text-slate-700 dark:text-slate-300">Respuestas predefinidas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-slate-400 dark:text-slate-500">•</span>
                    <span className="text-slate-700 dark:text-slate-300">Reportes básicos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-slate-400 dark:text-slate-500">•</span>
                    <span className="text-slate-700 dark:text-slate-300">Apps móviles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-slate-400 dark:text-slate-500">•</span>
                    <span className="text-slate-700 dark:text-slate-300">Soporte por correo</span>
                  </li>
                </ul>
                <button className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition font-medium">
                  Comenzar
                </button>
              </div>
            </ScrollReveal>

            {/* PROFESIONAL PLAN */}
            <ScrollReveal>
              <div className="rounded-lg border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-800/80 p-8 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Profesional</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">Para crecer</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-slate-900 dark:text-slate-100">Q150</span>
                  <span className="text-slate-600 dark:text-slate-400 ml-1">/mes</span>
                </div>
                <ul className="space-y-3 flex-grow mb-8">
                  <li className="flex items-start">
                    <span className="mr-3 text-emerald-600 dark:text-emerald-400">✓</span>
                    <span className="text-slate-700 dark:text-slate-300">Todo de Básico +</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-emerald-600 dark:text-emerald-400">✓</span>
                    <span className="text-slate-700 dark:text-slate-300">WhatsApp API</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-emerald-600 dark:text-emerald-400">✓</span>
                    <span className="text-slate-700 dark:text-slate-300">Instagram y Facebook</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-emerald-600 dark:text-emerald-400">✓</span>
                    <span className="text-slate-700 dark:text-slate-300">Automatizaciones básicas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-emerald-600 dark:text-emerald-400">✓</span>
                    <span className="text-slate-700 dark:text-slate-300">Etiquetas y equipos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-emerald-600 dark:text-emerald-400">✓</span>
                    <span className="text-slate-700 dark:text-slate-300">Integraciones estándar</span>
                  </li>
                </ul>
                <button className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition font-medium">
                  Elegir Plan
                </button>
              </div>
            </ScrollReveal>

            {/* EMPRESARIAL PLAN - POPULAR */}
            <ScrollReveal>
              <div className="rounded-lg border-2 border-slate-900 dark:border-indigo-500 bg-slate-900 dark:bg-gradient-to-br dark:from-indigo-950 dark:to-slate-900 text-white p-8 flex flex-col h-full ring-2 ring-offset-2 ring-slate-900 dark:ring-indigo-500 dark:ring-offset-wz-bg relative">
                <div className="absolute top-0 left-0 right-0 flex justify-center -translate-y-1/2">
                  <span className="px-3 py-1 bg-slate-900 dark:bg-indigo-500 text-white text-sm font-semibold rounded-full">POPULAR</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Empresarial</h3>
                <p className="text-slate-300 mb-4">Lo más elegido</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold">Q250</span>
                  <span className="text-slate-300 ml-1">/mes</span>
                </div>
                <ul className="space-y-3 flex-grow mb-8">
                  <li className="flex items-start">
                    <span className="mr-3 text-emerald-400">✓</span>
                    <span>Todo de Profesional +</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-emerald-400">✓</span>
                    <span>Automatizaciones avanzadas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-emerald-400">✓</span>
                    <span>Reportes avanzados y CSAT</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-emerald-400">✓</span>
                    <span>Telegram y API</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-emerald-400">✓</span>
                    <span>Roles granulares</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-emerald-400">✓</span>
                    <span>Webhooks premium</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-emerald-400">✓</span>
                    <span>Soporte prioritario</span>
                  </li>
                </ul>
                <button className="w-full px-4 py-2 rounded-lg wz-gradient text-white hover:shadow-lg hover:shadow-indigo-500/30 transition font-medium">
                  Elegir Plan
                </button>
              </div>
            </ScrollReveal>

            {/* ENTERPRISE PLAN */}
            <ScrollReveal>
              <div className="rounded-lg border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-800/80 p-8 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Enterprise</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">Para grandes equipos</p>
                <div className="mb-8">
                  <span className="text-3xl font-bold text-slate-900 dark:text-slate-100">Personalizado</span>
                </div>
                <ul className="space-y-3 flex-grow mb-8">
                  <li className="flex items-start">
                    <span className="mr-3 text-emerald-600 dark:text-emerald-400">✓</span>
                    <span className="text-slate-700 dark:text-slate-300">Todo de Empresarial +</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-emerald-600 dark:text-emerald-400">✓</span>
                    <span className="text-slate-700 dark:text-slate-300">SSO/SAML y auditoría</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-emerald-600 dark:text-emerald-400">✓</span>
                    <span className="text-slate-700 dark:text-slate-300">SLA empresarial</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-emerald-600 dark:text-emerald-400">✓</span>
                    <span className="text-slate-700 dark:text-slate-300">Integraciones a medida</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-emerald-600 dark:text-emerald-400">✓</span>
                    <span className="text-slate-700 dark:text-slate-300">Onboarding asistido</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-emerald-600 dark:text-emerald-400">✓</span>
                    <span className="text-slate-700 dark:text-slate-300">WizeFlow a medida</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-emerald-600 dark:text-emerald-400">✓</span>
                    <span className="text-slate-700 dark:text-slate-300">Residencia de datos</span>
                  </li>
                </ul>
                <button className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition font-medium">
                  Contactar
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-wz-bg2">
        <div className="max-w-6xl mx-auto">
          <SectionHead
            kicker="PREGUNTAS FRECUENTES"
            title="Dudas Sobre Precios"
            description="Respuestas claras y directas."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <ScrollReveal>
              <Card
                title="¿Hay cargos ocultos?"
                description="No. El precio que ves es el que pagas. Sin sorpresas. Sin costos por API o almacenamiento extra."
                delay={0}
              />
            </ScrollReveal>
            <ScrollReveal>
              <Card
                title="¿Puedo cambiar de plan?"
                description="Sí. Upgrade o downgrade en cualquier momento. Los cambios toman efecto el próximo ciclo de facturación."
                delay={0.1}
              />
            </ScrollReveal>
            <ScrollReveal>
              <Card
                title="¿Cómo se facturan los agentes?"
                description="Por agente activo. Un agente es una persona con login. Desactívalos cuando no los necesites."
                delay={0.2}
              />
            </ScrollReveal>
            <ScrollReveal>
              <Card
                title="¿Hay descuentos anuales?"
                description="Sí. Paga por año y ahorra 20%. Más información en tu dashboard después de crear la cuenta."
                delay={0.3}
              />
            </ScrollReveal>
            <ScrollReveal>
              <Card
                title="¿Qué incluye el soporte?"
                description="Básico: correo. Profesional/Empresarial: email y chat. Enterprise: dedicado 24/7."
                delay={0.4}
              />
            </ScrollReveal>
            <ScrollReveal>
              <Card
                title="¿Hay período de prueba?"
                description="Plan Básico es gratuito siempre. Los demás los pruebas con tarjeta. Cancela cuando quieras."
                delay={0.5}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CtaBand
        title="Elige tu Plan"
        description="Comienza gratis. Upgrade cuando crezcas."
        primaryLabel="Crear Cuenta"
        primaryHref="/contact"
        secondaryLabel="Ver Comparativa"
        secondaryHref="#"
      />
    </>
  )
}
