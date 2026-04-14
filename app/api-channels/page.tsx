import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import FeatureRow from '@/components/FeatureRow'
import Card from '@/components/Card'
import SectionHead from '@/components/SectionHead'
import CtaBand from '@/components/CtaBand'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'API de Canales | WizeHub',
  description: 'Crea tus propios canales con nuestra API simple, documentada y poderosa.',
}

export default function ApiChannelsPage() {
  return (
    <>
      <PageHero
        kicker="API DE CANALES"
        title={<>API <span className="wz-text-gradient">Simple y Poderosa</span></>}
        description="Conecta cualquier canal con una API REST documentada. Webhooks, archivos, rate limits generosos."
        primaryCta={{ label: 'Ver Documentación', href: '#' }}
        secondaryCta={{ label: 'Solicitar Acceso', href: '/contact' }}
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <ScrollReveal>
          <FeatureRow
            kicker="DESARROLLO"
            title="Endpoints REST"
            description="API RESTful limpia y bien documentada. Crea, actualiza y consulta mensajes, contactos y más. Autenticación con JWT."
            mockText="Ejemplo: POST /api/v1/messages para enviar un mensaje desde tu sistema."
            bullets={[
              'Endpoints para mensajes, contactos y conversaciones',
              'Autenticación JWT segura',
              'Ejemplos en Python, JavaScript, cURL'
            ]}
            ctaLabel="Leer Docs"
            ctaHref="#"
          />
        </ScrollReveal>

        <ScrollReveal>
          <FeatureRow
            kicker="AUTOMATIZACIÓN"
            title="Webhooks y Eventos"
            description="Recibe notificaciones en tiempo real cuando ocurren eventos. Integra WizeHub con tu flujo de trabajo sin polling."
            mockText="Ejemplo: Cuando llega un mensaje nuevo, WizeHub envía webhook a tu servidor. Tu app puede procesarlo al instante."
            reverse
            bullets={[
              'Webhooks para mensaje nuevo, enviado, leído',
              'Reintentos automáticos',
              'Eventos de contacto y conversación'
            ]}
            ctaLabel="Conocer webhooks"
            ctaHref="#"
          />
        </ScrollReveal>

        <ScrollReveal>
          <FeatureRow
            kicker="FLEXIBILIDAD"
            title="Archivos y Medios"
            description="Carga y descarga imágenes, PDF, audios. Los archivos se integran con el resto de WizeHub."
            mockText="Ejemplo: Tu app envía una factura PDF vía API. El cliente ve el archivo en su conversación en WizeHub."
            bullets={[
              'Soporte para imágenes, PDF, audios, videos',
              'URLs firmadas para descargas seguras',
              'Limpieza automática de archivos'
            ]}
            ctaLabel="Explorar"
            ctaHref="#"
          />
        </ScrollReveal>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <SectionHead
            kicker="CASOS DE USO"
            title="Crea tus Propios Canales"
            description="La API hace posible cualquier integración."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <ScrollReveal>
              <Card
                icon="smartphone"
                title="App Móvil Propia"
                description="Crea tu app de atención al cliente con WizeHub como backend. Tus usuarios ven el mismo contexto que en web."
                delay={0}
              />
            </ScrollReveal>
            <ScrollReveal>
              <Card
                icon="globe"
                title="Portal de Clientes"
                description="Tu sitio web conectado a WizeHub. Los clientes escriben en tu portal, los agentes responden desde la plataforma."
                delay={0.1}
              />
            </ScrollReveal>
            <ScrollReveal>
              <Card
                icon="layers"
                title="Canales Legados"
                description="¿Tienes un sistema antiguo? Intégralo vía API. WizeHub actúa como middleware entre tu legacy y nuevas herramientas."
                delay={0.2}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-slate-100 rounded-lg p-8">
          <SectionHead
            kicker="DETALLES TÉCNICOS"
            title="Lo que Necesitas Saber"
            description="Especificaciones de la API para desarrolladores."
          />
          <ul className="mt-8 space-y-3 text-slate-700">
            <li className="flex items-start">
              <span className="mr-3 font-semibold text-slate-900">•</span>
              <span><strong>Rate Limits:</strong> 1000 req/min por token. Upgradeable según plan.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 font-semibold text-slate-900">•</span>
              <span><strong>Autenticación:</strong> JWT. Genera tokens desde tu dashboard.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 font-semibold text-slate-900">•</span>
              <span><strong>Versionado:</strong> API v1 estable. Cambios anunciados 30 días antes.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 font-semibold text-slate-900">•</span>
              <span><strong>SLA:</strong> 99.9% uptime. Status.wizehub.com para estatus en vivo.</span>
            </li>
          </ul>
        </div>
      </section>

      <CtaBand
        title="Construye tu Canal"
        description="La API de WizeHub hace posible cualquier integración."
        primaryLabel="Ver Documentación"
        primaryHref="#"
        secondaryLabel="Solicitar Acceso"
        secondaryHref="/contact"
      />
    </>
  )
}
