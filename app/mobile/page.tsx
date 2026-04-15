import type { Metadata } from 'next'
import { Fingerprint, Battery, ShieldCheck } from 'lucide-react'
import PageHero from '@/components/PageHero'
import FeatureRow from '@/components/FeatureRow'
import Card from '@/components/Card'
import SectionHead from '@/components/SectionHead'
import CtaBand from '@/components/CtaBand'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Apps Móviles | WizeHub',
  description: 'Aplicaciones nativas iOS y Android. Gestiona conversaciones desde cualquier lugar.',
}

export default function MobilePage() {
  return (
    <>
      <PageHero
        kicker="APLICACIONES MÓVILES"
        title={<>Atiende <span className="wz-text-gradient">Desde Cualquier Lugar</span></>}
        description="Apps nativas iOS y Android con todas las características de la web. Sin versiones recortadas."
        primaryCta={{ label: 'Descargar App', href: '#' }}
        secondaryCta={{ label: 'Ver características', href: '#' }}
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <ScrollReveal>
          <FeatureRow
            kicker="NATIVO"
            title="Apps iOS y Android"
            description="Aplicaciones nativas construidas con SwiftUI y Jetpack Compose. Rendimiento fluido, acceso a características del dispositivo."
            mockText="Ejemplo: Notificación push de nuevo mensaje. Desliza para responder rápidamente sin abrir la app."
            bullets={[
              'Interfaz nativa para cada plataforma',
              'Sincronización en tiempo real',
              'Funciona offline (cache local)'
            ]}
            ctaLabel="Descargar"
            ctaHref="#"
          />
        </ScrollReveal>

        <ScrollReveal>
          <FeatureRow
            kicker="NOTIFICACIONES"
            title="Push Inteligentes"
            description="Notificaciones push configurables por canal y conversación. Haz ruido solo cuando importa."
            mockText="Ejemplo: Notificación silenciosa para mensajes de baja prioridad. Alerta audible solo para clientes VIP."
            reverse
            bullets={[
              'Filtrado por prioridad',
              'Silenciado de conversaciones',
              'Acciones rápidas desde notificación'
            ]}
            ctaLabel="Explorar"
            ctaHref="#"
          />
        </ScrollReveal>

        <ScrollReveal>
          <FeatureRow
            kicker="POTENCIA"
            title="Todas las Características"
            description="No recortamos nada. Tu equipo tiene acceso a toda la plataforma en el teléfono: bandeja, plantillas, reportes, automatizaciones."
            mockText="Ejemplo: Crea un flujo de automatización desde tu iPhone. Revisa reportes en la APP. Configura SLAs desde Android."
            bullets={[
              'Editor visual de flujos',
              'Reportes completos',
              'Configuración de bandeja'
            ]}
            ctaLabel="Ver más"
            ctaHref="#"
          />
        </ScrollReveal>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-wz-bg2">
        <div className="max-w-6xl mx-auto">
          <SectionHead
            kicker="EXPERIENCIA"
            title="Diseñada para Móvil"
            description="No es la web encogida. Cada detalle pensado para tu pantalla."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <ScrollReveal>
              <Card
                icon={Fingerprint}
                title="Gestos Optimizados"
                description="Swipe para responder, tap para revisar contexto, hold para acciones rápidas. Flujo natural."
                delay={0}
              />
            </ScrollReveal>
            <ScrollReveal>
              <Card
                icon={Battery}
                title="Eficiencia"
                description="Optimizada para batería. La app consume mínimo. Cero lag incluso con cientos de conversaciones."
                delay={0.1}
              />
            </ScrollReveal>
            <ScrollReveal>
              <Card
                icon={ShieldCheck}
                title="Seguridad"
                description="Biometría para desbloquear. Datos cifrados en tránsito. Acorde a normativas de privacidad."
                delay={0.2}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CtaBand
        title="Lleva WizeHub en tu Bolsillo"
        description="Atiende clientes desde cualquier lugar."
        primaryLabel="Descargar App"
        primaryHref="#"
        secondaryLabel="Ver requisitos"
        secondaryHref="#"
      />
    </>
  )
}
