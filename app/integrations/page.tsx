import type { Metadata } from 'next'
import {
  ShoppingBag,
  LineChart,
  Cloud,
  Headphones,
  Calendar,
  CreditCard,
  Zap,
} from 'lucide-react'
import PageHero from '@/components/PageHero'
import FeatureRow from '@/components/FeatureRow'
import Card from '@/components/Card'
import SectionHead from '@/components/SectionHead'
import CtaBand from '@/components/CtaBand'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Integraciones | WizeHub',
  description: 'Conecta WizeHub con tus herramientas favoritas. Shopify, Salesforce, HubSpot, Zapier y más.',
}

export default function IntegrationsPage() {
  return (
    <>
      <PageHero
        kicker="INTEGRACIONES"
        title={<>Tu Stack <span className="wz-text-gradient">Conectado</span></>}
        description="WizeHub se integra con tus herramientas. CRM, ecommerce, calendarios, automatización y más."
        primaryCta={{ label: 'Explorar Integraciones', href: '#' }}
        secondaryCta={{ label: 'Solicitar Nueva', href: '/contact' }}
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <ScrollReveal>
          <FeatureRow
            kicker="ECOSISTEMA"
            title="Conecta tu Negocio"
            description="Tus clientes, datos de ordenes y calendarios en un solo lugar. WizeHub es el puente entre tus sistemas."
            mockText="Ejemplo: Cliente envía mensaje. WizeHub busca automáticamente su perfil en Salesforce. Ves su historial de compras y tickets."
            bullets={[
              'Sincronización bidireccional',
              'Mapeo flexible de datos',
              'Sin necesidad de webhooks manuales'
            ]}
            ctaLabel="Ver cómo"
            ctaHref="#"
          />
        </ScrollReveal>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-wz-bg2">
        <div className="max-w-6xl mx-auto">
          <SectionHead
            kicker="INTEGRACIONES NATIVAS"
            title="Conecta en Minutos"
            description="Estas integraciones están listas. Actívalas desde tu dashboard."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <ScrollReveal>
              <Card
                icon={ShoppingBag}
                title="Shopify"
                description="Sincroniza órdenes, clientes y productos. Consulta historial de compras en conversaciones."
                delay={0}
              />
            </ScrollReveal>
            <ScrollReveal>
              <Card
                icon={ShoppingBag}
                title="WooCommerce"
                description="Para tiendas WordPress. Mismo poder que Shopify. Acceso a datos de órdenes y clientes."
                delay={0.1}
              />
            </ScrollReveal>
            <ScrollReveal>
              <Card
                icon={LineChart}
                title="HubSpot"
                description="Sincroniza contactos, deals y tickets. Los datos de HubSpot fluyen a WizeHub en tiempo real."
                delay={0.2}
              />
            </ScrollReveal>
            <ScrollReveal>
              <Card
                icon={Cloud}
                title="Salesforce"
                description="Conecta con Salesforce Cloud. Accede a cuentas, contactos y oportunidades desde WizeHub."
                delay={0.3}
              />
            </ScrollReveal>
            <ScrollReveal>
              <Card
                icon={Headphones}
                title="Zendesk"
                description="Para equipos de soporte. Sincroniza tickets, usuarios y comentarios privados."
                delay={0.4}
              />
            </ScrollReveal>
            <ScrollReveal>
              <Card
                icon={Calendar}
                title="Google Calendar"
                description="Ve el calendario del agente en WizeHub. Programa citas directamente desde conversaciones."
                delay={0.5}
              />
            </ScrollReveal>
            <ScrollReveal>
              <Card
                icon={CreditCard}
                title="Stripe"
                description="Información de pagos en contexto. Ver suscripciones y facturación sin salir de WizeHub."
                delay={0.6}
              />
            </ScrollReveal>
            <ScrollReveal>
              <Card
                icon={Zap}
                title="Zapier"
                description="Conecta con miles de apps. Si Zapier lo soporta, WizeHub lo hace también."
                delay={0.7}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <SectionHead
            kicker="CUSTOM"
            title="Integraciones Personalizadas"
            description="¿Necesitas conectar algo que no está en la lista?"
          />
          <p className="text-center text-slate-700 dark:text-slate-300 mt-6 text-lg">
            Usa <strong>WizeFlow</strong>, nuestro builder visual no-code/low-code. Crea automaciones complejas, sincroniza datos entre WizeHub y cualquier sistema, todo sin código.
          </p>
          <div className="text-center mt-8">
            <a href="#" className="inline-block px-6 py-3 wz-gradient text-white rounded-lg shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition">
              Explorar WizeFlow
            </a>
          </div>
        </div>
      </section>

      <CtaBand
        title="Conecta tu Stack"
        description="Todas tus herramientas en un solo lugar."
        primaryLabel="Explorar Integraciones"
        primaryHref="#"
        secondaryLabel="Solicitar Nueva"
        secondaryHref="/contact"
      />
    </>
  )
}
