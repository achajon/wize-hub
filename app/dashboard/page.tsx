import type { Metadata } from 'next'
import { User, Eye, Settings } from 'lucide-react'
import PageHero from '@/components/PageHero'
import FeatureRow from '@/components/FeatureRow'
import Card from '@/components/Card'
import SectionHead from '@/components/SectionHead'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = {
  title: 'Dashboard Colaborativo',
}

export default function DashboardPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        kicker="Producto · Dashboard Colaborativo"
        title={
          <>
            Tu equipo merece un <span className="wz-text-gradient">dashboard</span> que funcione
          </>
        }
        description="Bandeja unificada de todos los canales, asignaciones inteligentes, notas privadas, menciones. Un panel donde tu equipo cierra casos más rápido, sin perder contexto, sin duplicar esfuerzos."
        primaryCta={{ label: 'Ver en acción', href: '/pricing' }}
        secondaryCta={{ label: 'Solicitar demo', href: '/contact' }}
      />

      {/* Feature Rows */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          <FeatureRow
            kicker="Bandeja Unificada"
            title="Todas tus conversaciones en un solo lugar"
            description="WhatsApp, Live Chat, Email, Instagram, SMS: todo en una bandeja. Filtra por agente, equipo, estado, prioridad o etiqueta. Busca por cliente o contenido en milisegundos."
            mockText="[Captura: bandeja WizeHub mostrando mezcla de WhatsApp, Live Chat, Email con filtros activos]"
            bullets={[
              'Mezcla nativa de todos los canales',
              'Filtros y búsqueda avanzada',
              'Etiquetas personalizables',
              'Vistas guardadas por rol o equipo',
            ]}
          />

          <FeatureRow
            reverse
            kicker="Asignaciones Inteligentes"
            title="Distribuye trabajo de forma justa"
            description="Asigna por agente, equipo o área de expertise. Round-robin automático, distribución por carga de trabajo, o habilidades específicas. Los supervisores ven todo en tiempo real."
            mockText="[Captura: panel de asignaciones mostrando distribución de carga y métricas por agente]"
          />

          <FeatureRow
            kicker="Colaboración Real"
            title="El equipo trabaja como un equipo"
            description="Deja notas privadas que solo ven tus compañeros. Menciona a @alguien para pedir ayuda. Cambia agente en una conversación sin perder contexto. Sin emails, sin Slack, todo aquí."
            mockText="[Captura: conversación con notas privadas, menciones @equipo y cambio de agente]"
            bullets={[
              'Notas privadas entre agentes',
              'Menciones @compañero',
              'Transferencia fluida de conversaciones',
              'Historial completo del cliente',
            ]}
          />

          <FeatureRow
            reverse
            kicker="Contexto 360°"
            title="Cada agente ve toda la historia"
            description="Historial de conversaciones del cliente, tickets abiertos, órdenes, notas previas. Cuando un cliente vuelve, tu agente sabe exactamente qué pasó. Cero repreguntas, máxima satisfacción."
            mockText="[Captura: panel de contexto de cliente mostrando historial, órdenes, notas y SLA]"
          />

          <FeatureRow
            kicker="Reportes y Analítica"
            title="Mide lo que importa"
            description="Dashboards en tiempo real con CSAT, tiempo de respuesta, resolución en primer contacto, volumen por canal y productividad por agente. Exporta datos, crea reportes personalizados."
            mockText="[Captura: panel de reportes con gráficos de CSAT, respuesta time, y productividad]"
          />
        </div>
      </section>

      {/* Team Profiles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHead
            kicker="Para cada rol"
            title="Diseñado para toda tu estructura"
            description="Desde agentes hasta gerentes, cada rol tiene lo que necesita en el dashboard."
          />
          <div className="grid sm:grid-cols-3 gap-5">
            <Card
              icon={User}
              title="Agente"
              description="Gestiona tu bandeja personal, responde conversaciones, deja notas y solicita ayuda a compañeros. Acceso rápido a históricos y contexto del cliente."
              delay={0}
            />
            <Card
              icon={Eye}
              title="Supervisor"
              description="Monitorea la calidad del equipo, escucha conversaciones, revisa métricas de SLA y detecta entrenamientos necesarios. Carga de trabajo balanceada."
              delay={0.1}
            />
            <Card
              icon={Settings}
              title="Administrador"
              description="Configura flujos, reglas, integraciones y permisos. Análisis de tendencias, gestión de usuarios y acceso a API. Control total de la plataforma."
              delay={0.2}
            />
          </div>
        </div>
      </section>

      <CtaBand
        title="Tu equipo está listo para colaborar mejor"
        description="Prueba el Dashboard de WizeHub y ve cómo mejoran tiempos de respuesta y satisfacción del cliente."
        primaryLabel="Empezar prueba"
        primaryHref="/pricing"
        secondaryLabel="Agendar demo"
        secondaryHref="/contact"
      />
    </>
  )
}
