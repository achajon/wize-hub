import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import FeatureRow from '@/components/FeatureRow'
import Card from '@/components/Card'
import SectionHead from '@/components/SectionHead'
import CtaBand from '@/components/CtaBand'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Canal de Email | WizeHub',
  description: 'Gestiona todos tus emails en una bandeja compartida con plantillas, firmas y automatización.',
}

export default function EmailChannelPage() {
  return (
    <>
      <PageHero
        kicker="CANAL DE EMAIL"
        title={<>Email <span className="wz-text-gradient">Unificado</span></>}
        description="Bandeja compartida, plantillas de respuesta y automatización inteligente para tu equipo."
        primaryCta={{ label: 'Comenzar Gratis', href: '/contact' }}
        secondaryCta={{ label: 'Ver Demo', href: '#' }}
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <ScrollReveal>
          <FeatureRow
            kicker="COLABORACIÓN"
            title="Bandeja Compartida"
            description="Todos tus agentes pueden ver, responder y colaborar en los mismos emails. Evita respuestas duplicadas y mantén el contexto completo de cada conversación."
            mockText="Ejemplo: Tu equipo de soporte responde coordenadamente desde una bandeja central."
            bullets={[
              'Asignación automática de tickets',
              'Notas privadas entre agentes',
              'Historial completo visible'
            ]}
            ctaLabel="Conocer más"
            ctaHref="#"
          />
        </ScrollReveal>

        <ScrollReveal>
          <FeatureRow
            kicker="EFICIENCIA"
            title="Plantillas y Firmas"
            description="Crea plantillas reutilizables para respuestas comunes. Usa variables dinámicas para personalizarlas al cliente."
            mockText="Ejemplo: Plantilla de bienvenida con nombre del cliente insertado automáticamente."
            reverse
            bullets={[
              'Editor de plantillas visual',
              'Variables dinámicas ({nombre}, {email})',
              'Categorización por tema'
            ]}
            ctaLabel="Ver características"
            ctaHref="#"
          />
        </ScrollReveal>

        <ScrollReveal>
          <FeatureRow
            kicker="AUTOMATIZACIÓN"
            title="Flujos Inteligentes"
            description="Automatiza respuestas por palabras clave, horarios o eventos. Reduce tiempos de respuesta sin sacrificar calidad."
            mockText="Ejemplo: Auto-respuesta 'Recibirás tu pedido en 24h' cuando detecta 'rastreo'."
            bullets={[
              'Triggers por palabras clave',
              'Condiciones por hora/fecha',
              'Escalado automático'
            ]}
            ctaLabel="Explorar"
            ctaHref="#"
          />
        </ScrollReveal>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-wz-bg2">
        <div className="max-w-6xl mx-auto">
          <SectionHead
            kicker="CAPACIDADES"
            title="Lo que hace el Email"
            description="Herramientas poderosas para tu equipo."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <ScrollReveal>
              <Card
                icon="📥"
                title="Múltiples Buzones"
                description="Conecta todos tus emails en una sola plataforma. Buzones de soporte, ventas, y más."
                delay={0}
              />
            </ScrollReveal>
            <ScrollReveal>
              <Card
                icon="⏱️"
                title="SLA por Cliente"
                description="Establece tiempos de respuesta por cliente o tipo de consulta. Recibe alertas si se incumple."
                delay={0.1}
              />
            </ScrollReveal>
            <ScrollReveal>
              <Card
                icon="🔗"
                title="Hilos Unificados"
                description="Cada conversación aparece como un hilo único, sin importar si hay forwards o cambios de asunto."
                delay={0.2}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CtaBand
        title="Transforma tu Email en Conversaciones"
        description="Empieza a colaborar en tu email hoy mismo."
        primaryLabel="Crear Cuenta"
        primaryHref="/contact"
        secondaryLabel="Agendar Demo"
        secondaryHref="#"
      />
    </>
  )
}
