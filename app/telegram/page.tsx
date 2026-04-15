import type { Metadata } from 'next'
import { Mail, Users, TrendingUp } from 'lucide-react'
import PageHero from '@/components/PageHero'
import FeatureRow from '@/components/FeatureRow'
import Card from '@/components/Card'
import SectionHead from '@/components/SectionHead'
import CtaBand from '@/components/CtaBand'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Canal de Telegram | WizeHub',
  description: 'Notificaciones, recordatorios y conversaciones bidireccionales vía Telegram integradas en WizeHub.',
}

export default function TelegramPage() {
  return (
    <>
      <PageHero
        kicker="CANAL DE TELEGRAM"
        title={<>Telegram <span className="wz-text-gradient">Bidireccional</span></>}
        description="Notificaciones, recordatorios y conversaciones de dos vías. Llega a todos tus clientes al instante."
        primaryCta={{ label: 'Comenzar Gratis', href: '/contact' }}
        secondaryCta={{ label: 'Ver Demo', href: '#' }}
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <ScrollReveal>
          <FeatureRow
            kicker="NOTIFICACIONES"
            title="Alertas y Recordatorios"
            description="Envía recordatorios de citas, estado de pedidos, códigos de acceso. Asegúrate de que tu mensaje llegue."
            mockText="Ejemplo: 'Tu cita es mañana a las 15h en calle Principal 123. Responde CONFIRMAR o CANCELAR'."
            bullets={[
              'Entrega garantizada en segundos',
              'Confirmación de lectura',
              'Programación por fecha/hora'
            ]}
            ctaLabel="Conocer más"
            ctaHref="#"
          />
        </ScrollReveal>

        <ScrollReveal>
          <FeatureRow
            kicker="CONVERSACIÓN"
            title="Telegram Bidireccional"
            description="Tus clientes responden directamente en Telegram. Los mensajes llegan a WizeHub como cualquier otro canal. Una conversación real."
            mockText="Ejemplo: Cliente responde 'CONFIRMAR' a tu recordatorio. Tú ves su respuesta en WizeHub y el sistema actualiza su cita."
            reverse
            bullets={[
              'Respuestas entrantes en tiempo real',
              'Historial unificado con otros canales',
              'Automatización por palabras clave'
            ]}
            ctaLabel="Explorar"
            ctaHref="#"
          />
        </ScrollReveal>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-wz-bg2">
        <div className="max-w-6xl mx-auto">
          <SectionHead
            kicker="ALCANCE"
            title="Telegram Llega a Todos"
            description="El canal más directo con tus clientes."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <ScrollReveal>
              <Card
                icon={Mail}
                title="Entrega 99.9%"
                description="Telegram es el canal más confiable. Tus mensajes llegan incluso en redes lentas."
                delay={0}
              />
            </ScrollReveal>
            <ScrollReveal>
              <Card
                icon={Users}
                title="Seguro y Privado"
                description="Cifrado de extremo a extremo. Tus clientes pueden chatear con total privacidad y confianza."
                delay={0.1}
              />
            </ScrollReveal>
            <ScrollReveal>
              <Card
                icon={TrendingUp}
                title="Alto Engagement"
                description="Telegram tiene tasa de apertura del 98%. El canal perfecto para urgencias y confirmaciones."
                delay={0.2}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CtaBand
        title="Conecta vía Telegram"
        description="El canal más directo y confiable."
        primaryLabel="Crear Cuenta"
        primaryHref="/contact"
        secondaryLabel="Agendar Demo"
        secondaryHref="#"
      />
    </>
  )
}