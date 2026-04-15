import type { Metadata } from 'next'
import { Target, Rocket, Heart } from 'lucide-react'
import PageHero from '@/components/PageHero'
import Card from '@/components/Card'
import SectionHead from '@/components/SectionHead'
import CtaBand from '@/components/CtaBand'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Acerca de WizeHub | WizeHub',
  description: 'Nuestra misión, visión y valores. Quiénes somos y por qué hacemos esto.',
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="ACERCA DE WIZEHUB"
        title={<>Somos <span className="wz-text-gradient">Obsesionados</span> con la Experiencia</>}
        description="WizeHub nació para simplificar cómo los equipos se comunican con sus clientes. Cada día mejoramos."
        primaryCta={{ label: 'Conocer Nuestro Equipo', href: '#' }}
        secondaryCta={{ label: 'Ver Empleos', href: '#' }}
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-wz-bg2">
        <div className="max-w-6xl mx-auto">
          <SectionHead
            kicker="NUESTRA HISTORIA"
            title="El Viaje de WizeHub"
            description="De una idea a una plataforma usada por miles de equipos."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <ScrollReveal>
              <Card
                icon={Target}
                title="Misión"
                description="Empoderar equipos de atención al cliente con herramientas modernas, intuitivas y accesibles. Sin complejidad innecesaria."
                delay={0}
              />
            </ScrollReveal>
            <ScrollReveal>
              <Card
                icon={Rocket}
                title="Visión"
                description="Ser la plataforma de comunicación preferida para empresas que valoran a sus clientes. En cualquier mercado."
                delay={0.1}
              />
            </ScrollReveal>
            <ScrollReveal>
              <Card
                icon={Heart}
                title="Valores"
                description="Simplicidad, transparencia, excelencia. Escuchamos a nuestros usuarios. Hacemos lo correcto siempre."
                delay={0.2}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHead
            kicker="ECOSISTEMA"
            title="WizeHub vs WizeFlow"
            description="Dos productos. Una misión. Complementarios."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <ScrollReveal>
              <div className="rounded-lg border border-slate-200 dark:border-slate-700/60 p-8 h-full">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">WizeHub</h3>
                <p className="text-slate-700 dark:text-slate-300 mb-6">La plataforma de atención al cliente. Donde tus agentes responden, colaboran y resuelven.</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-3 text-slate-400 dark:text-slate-500">•</span>
                    <span className="text-slate-700 dark:text-slate-300">Múltiples canales unificados</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-slate-400">•</span>
                    <span className="text-slate-700 dark:text-slate-300">Respuestas rápidas y plantillas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-slate-400 dark:text-slate-500">•</span>
                    <span className="text-slate-700 dark:text-slate-300">Automatizaciones básicas y avanzadas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-slate-400 dark:text-slate-500">•</span>
                    <span className="text-slate-700 dark:text-slate-300">Reportes y métricas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-slate-400 dark:text-slate-500">•</span>
                    <span className="text-slate-700 dark:text-slate-300">Apps móviles nativas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-slate-400 dark:text-slate-500">•</span>
                    <span className="text-slate-700 dark:text-slate-300">Integraciones estándar</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="rounded-lg border border-slate-200 dark:border-slate-700/60 p-8 h-full">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">WizeFlow</h3>
                <p className="text-slate-700 dark:text-slate-300 mb-6">El builder visual para automatizar. Crea flujos, sincroniza datos, integra sistemas sin código.</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-3 text-slate-400 dark:text-slate-500">•</span>
                    <span className="text-slate-700 dark:text-slate-300">Automatización avanzada visual</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-slate-400 dark:text-slate-500">•</span>
                    <span className="text-slate-700 dark:text-slate-300">Integración con cualquier API</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-slate-400 dark:text-slate-500">•</span>
                    <span className="text-slate-700 dark:text-slate-300">Transformación de datos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-slate-400 dark:text-slate-500">•</span>
                    <span className="text-slate-700 dark:text-slate-300">Webhooks y triggers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-slate-400 dark:text-slate-500">•</span>
                    <span className="text-slate-700 dark:text-slate-300">Sincronización de bases de datos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-slate-400 dark:text-slate-500">•</span>
                    <span className="text-slate-700 dark:text-slate-300">No-code/low-code</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>

          <div className="mt-12 p-8 bg-slate-900 text-white rounded-lg text-center">
            <p className="text-lg">
              <strong>Juntos</strong> forman un sistema completo: WizeHub para conversaciones, WizeFlow para automatización.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        title="Únete al Movimiento"
        description="Equipos como la tuya ya están transformando su atención al cliente."
        primaryLabel="Crear Cuenta"
        primaryHref="/contact"
        secondaryLabel="Ver Casos de Éxito"
        secondaryHref="#"
      />
    </>
  )
}
