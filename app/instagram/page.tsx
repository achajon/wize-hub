import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import FeatureRow from '@/components/FeatureRow'
import Card from '@/components/Card'
import SectionHead from '@/components/SectionHead'
import CtaBand from '@/components/CtaBand'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Canal de Instagram | WizeHub',
  description: 'Gestiona DMs, menciones y comentarios en Instagram desde una plataforma unificada.',
}

export default function InstagramPage() {
  return (
    <>
      <PageHero
        kicker="CANAL DE INSTAGRAM"
        title={<>Instagram <span className="wz-text-gradient">Simplificado</span></>}
        description="DMs, menciones y comentarios en un solo lugar. Crece tu comunidad sin perder mensajes."
        primaryCta={{ label: 'Comenzar Gratis', href: '/contact' }}
        secondaryCta={{ label: 'Ver Demo', href: '#' }}
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <ScrollReveal>
          <FeatureRow
            kicker="MENSAJERÍA"
            title="DMs y Menciones"
            description="Responde a todos tus mensajes directos y menciones desde un solo dashboard. No pierdas clientes por retrasos en Instagram."
            mockText="Ejemplo: Recibe una mención sobre tu producto y responde en segundos."
            bullets={[
              'Unificación de DMs privados',
              'Detección automática de menciones',
              'Historial de conversaciones'
            ]}
            ctaLabel="Conocer más"
            ctaHref="#"
          />
        </ScrollReveal>

        <ScrollReveal>
          <FeatureRow
            kicker="COMUNIDAD"
            title="Comentarios y Respuestas"
            description="Gestiona comentarios en tus posts. Responde, marca favoritos y moderá conversaciones. Mantén tu comunidad activa."
            mockText="Ejemplo: Un cliente pregunta en los comentarios de tu último post, tú respondes al instante."
            reverse
            bullets={[
              'Notificaciones de nuevos comentarios',
              'Respuestas directas a comentarios',
              'Moderación inteligente'
            ]}
            ctaLabel="Explorar"
            ctaHref="#"
          />
        </ScrollReveal>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-wz-bg2">
        <div className="max-w-6xl mx-auto">
          <SectionHead
            kicker="CARACTERÍSTICAS"
            title="Potencia tu Presencia en Instagram"
            description="Herramientas para crecer y conectar."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <ScrollReveal>
              <Card
                icon="⚡"
                title="Auto-respuestas"
                description="Responde automáticamente preguntas frecuentes. Ofrece información de contacto o ubicación al instante."
                delay={0}
              />
            </ScrollReveal>
            <ScrollReveal>
              <Card
                icon="👤"
                title="Captura de Leads"
                description="Convierte visitantes en contactos. Recopila emails y teléfonos desde Instagram sin salir de WizeHub."
                delay={0.1}
              />
            </ScrollReveal>
            <ScrollReveal>
              <Card
                icon="📊"
                title="Métricas"
                description="Mide tiempo de respuesta, volumen de mensajes y engagement. Optimiza tu estrategia con datos reales."
                delay={0.2}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CtaBand
        title="Crece tu Comunidad en Instagram"
        description="Conecta con tus clientes donde están."
        primaryLabel="Crear Cuenta"
        primaryHref="/contact"
        secondaryLabel="Agendar Demo"
        secondaryHref="#"
      />
    </>
  )
}
