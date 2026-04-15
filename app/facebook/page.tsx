import type { Metadata } from 'next'
import { ShoppingBag, Calendar, Newspaper } from 'lucide-react'
import PageHero from '@/components/PageHero'
import FeatureRow from '@/components/FeatureRow'
import Card from '@/components/Card'
import SectionHead from '@/components/SectionHead'
import CtaBand from '@/components/CtaBand'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Canal de Facebook Messenger | WizeHub',
  description: 'Gestiona múltiples páginas de Facebook y agentes con respuestas rápidas y botones.',
}

export default function FacebookPage() {
  return (
    <>
      <PageHero
        kicker="CANAL DE FACEBOOK MESSENGER"
        title={<>Facebook <span className="wz-text-gradient">Multicanal</span></>}
        description="Conecta múltiples páginas, gestiona agentes, y usa respuestas rápidas y botones para conversaciones efectivas."
        primaryCta={{ label: 'Comenzar Gratis', href: '/contact' }}
        secondaryCta={{ label: 'Ver Demo', href: '#' }}
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <ScrollReveal>
          <FeatureRow
            kicker="ESCALABILIDAD"
            title="Múltiples Páginas y Agentes"
            description="Conecta todas tus páginas de Facebook en una sola plataforma. Asigna agentes a cada página y controla permisos fácilmente."
            mockText="Ejemplo: Tú manejas la página de Ventas, tu colega la de Soporte, todo centralizado en WizeHub."
            bullets={[
              'Conexión ilimitada de páginas',
              'Asignación flexible de agentes',
              'Permisos granulares por página'
            ]}
            ctaLabel="Conocer más"
            ctaHref="#"
          />
        </ScrollReveal>

        <ScrollReveal>
          <FeatureRow
            kicker="VELOCIDAD"
            title="Botones y Respuestas Rápidas"
            description="Crea botones personalizados y respuestas rápidas para agilizar conversaciones. Los clientes ven opciones claras, tú ahorras tiempo."
            mockText="Ejemplo: Cliente pregunta por horario, tú haces clic en botón 'Horarios' y se envía respuesta formateada."
            reverse
            bullets={[
              'Constructor visual de botones',
              'Respuestas predefinidas',
              'Menús interactivos'
            ]}
            ctaLabel="Explorar"
            ctaHref="#"
          />
        </ScrollReveal>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-wz-bg2">
        <div className="max-w-6xl mx-auto">
          <SectionHead
            kicker="CASOS DE USO"
            title="Facebook para Todo tipo de Negocio"
            description="Desde retail hasta eventos."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <ScrollReveal>
              <Card
                icon={ShoppingBag}
                title="Retail"
                description="Consultas de productos, estado de pedidos, devoluciones. Todo en mensajes, sin transferencias."
                delay={0}
              />
            </ScrollReveal>
            <ScrollReveal>
              <Card
                icon={Calendar}
                title="Eventos"
                description="Confirma asistencia, resuelve dudas sobre lugar y hora. Automatiza registro de participantes."
                delay={0.1}
              />
            </ScrollReveal>
            <ScrollReveal>
              <Card
                icon={Newspaper}
                title="Medios"
                description="Recibe tips de tus seguidores, coordina entrevistas, publica noticias. Todo desde Messenger."
                delay={0.2}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CtaBand
        title="Potencia tu Facebook"
        description="Conecta con clientes donde pasan su tiempo."
        primaryLabel="Crear Cuenta"
        primaryHref="/contact"
        secondaryLabel="Agendar Demo"
        secondaryHref="#"
      />
    </>
  )
}
