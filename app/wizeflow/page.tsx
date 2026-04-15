import type { Metadata } from 'next'
import {
  Bot,
  Target,
  PackageSearch,
  LifeBuoy,
  Calendar,
  ClipboardList,
} from 'lucide-react'
import PageHero from '@/components/PageHero'
import FeatureRow from '@/components/FeatureRow'
import Card from '@/components/Card'
import SectionHead from '@/components/SectionHead'
import CtaBand from '@/components/CtaBand'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'WizeFlow — Bots e IA a medida',
}

export default function WizeFlowPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        kicker="Producto · IA y Automatización"
        title={
          <>
            Automatiza tu negocio con <span className="wz-text-gradient">WizeFlow</span>
          </>
        }
        description="Bots e IA conversacional diseñados a medida por especialistas. WizeFlow aprende de tu negocio, vende 24/7, resuelve FAQs, califica leads y escala a humanos cuando se necesita. Integrado nativamente en WizeHub."
        primaryCta={{ label: 'Solicitar diseño gratis', href: '/contact' }}
        secondaryCta={{ label: 'Ver casos de éxito', href: '/pricing' }}
      />

      {/* Feature Rows */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          <FeatureRow
            kicker="Hecho a Medida"
            title="Tu bot, no uno genérico"
            description="Nuestro equipo de especialistas en IA diseña cada bot específicamente para tu negocio. Basado en tu procesos, tu tono, tus clientes. Modelos entrenados con tus datos históricos, flujos complejos, integraciones con tu stack."
            mockText="[Captura: conversación de bot mostrando respuestas personalizadas con contexto de negocio]"
            bullets={[
              'Diseño especializado por expertos en IA',
              'Modelos entrenados con tus datos',
              'Flujos conversacionales complejos',
              'Integraciones nativas con tu stack',
            ]}
          />

          <FeatureRow
            reverse
            kicker="IA que Entiende tu Negocio"
            title="Más inteligente cada día"
            description="No es solo NLP. WizeFlow entiende tu contexto: qué es un cliente VIP, cuándo escalar a humano, cómo responder según historial del cliente. Aprende de interacciones previas y mejora continuamente."
            mockText="[Captura: dashboard de WizeFlow mostrando aprendizaje del modelo y mejora en respuestas]"
          />

          <FeatureRow
            kicker="Escalamiento Humano"
            title="Bots que saben cuándo ceder"
            description="WizeFlow detecta automáticamente cuándo necesitas a un humano. No lo obliga al cliente a escribir 'hablar con agente'. Escala suavemente y los agentes ven el contexto completo de la conversación con el bot."
            mockText="[Captura: transición de bot a agente humano sin perder contexto]"
          />
        </div>
      </section>

      {/* Use Case Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHead
            kicker="Casos de Uso"
            title="WizeFlow para cada necesidad"
            description="Desde ventas hasta soporte, hay un bot para automatizar tu operación."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <Card
              icon={Bot}
              title="Asistente de Ventas"
              description="Consulta catálogo, responde preguntas sobre productos, sugiere recomendaciones. Califica en tiempo real y escala a agente de ventas."
              delay={0}
            />
            <Card
              icon={Target}
              title="Calificación de Leads"
              description="Recolecta información clave del prospecto automáticamente. Califica por presupuesto, industria y urgencia. Solo agentes ven leads calificados."
              delay={0.05}
            />
            <Card
              icon={PackageSearch}
              title="Rastreo de Pedidos"
              description="Cliente pregunta 'dónde está mi orden'. Bot consulta tu ERP y responde en segundos. Sin que un agente tenga que buscar nada."
              delay={0.1}
            />
            <Card
              icon={LifeBuoy}
              title="Soporte Nivel 1"
              description="Responde FAQs, resetea contraseñas, resuelve problemas comunes. Escala tickets complejos a especialistas con contexto completo."
              delay={0.15}
            />
            <Card
              icon={Calendar}
              title="Agenda de Citas"
              description="Cliente elige fecha y hora desde el chat. Bot consulta tu calendario, confirma y envía recordatorios. Sin idas y vueltas por email."
              delay={0.2}
            />
            <Card
              icon={ClipboardList}
              title="Formularios Conversacionales"
              description="Reemplaza formularios aburridos con conversaciones. Bot pregunta un campo a la vez, valida en tiempo real, no deja espacios vacíos."
              delay={0.25}
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHead
            kicker="Proceso"
            title="Cómo llevamos tu idea a un bot listo"
            description="De la idea al bot en producción en semanas, no meses. Nuestro proceso está probado."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {[
              {
                step: 1,
                title: 'Discovery',
                description: 'Entendemos tu negocio, flujos actuales, casos de uso prioritarios y objetivos. 1-2 semanas de análisis.',
              },
              {
                step: 2,
                title: 'Diseño',
                description: 'Diseñamos flujos conversacionales, integraciones y reglas de escalamiento. Te mostramos mockups interactivos.',
              },
              {
                step: 3,
                title: 'Construcción',
                description: 'Nuestro equipo construye el bot, lo entrena con tus datos y lo integra en WizeHub. Testing completo.',
              },
              {
                step: 4,
                title: 'Optimización',
                description: 'Lanzamos en producción, monitoreamos métricas y mejoramos continuamente basado en real interactions.',
              },
            ].map((item) => (
              <ScrollReveal key={item.step} delay={item.step * 0.1}>
                <div className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 rounded-2xl p-7 h-full relative">
                  <div className="absolute -top-5 -left-5 w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 mt-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Automatiza tus procesos hoy"
        description="Solicita una sesión de diseño gratis con nuestros especialistas. Analizamos tu negocio y te mostramos exactamente qué puede hacer WizeFlow por ti."
        primaryLabel="Agendar sesión"
        primaryHref="/contact"
        secondaryLabel="Ver documentación"
        secondaryHref="/pricing"
      />
    </>
  )
}
