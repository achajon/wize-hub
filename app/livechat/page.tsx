import type { Metadata } from 'next'
import {
  Files,
  Target,
  LineChart,
  ShieldCheck,
  Zap,
  MonitorSmartphone,
} from 'lucide-react'
import PageHero from '@/components/PageHero'
import FeatureRow from '@/components/FeatureRow'
import Card from '@/components/Card'
import SectionHead from '@/components/SectionHead'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = {
  title: 'Live Chat — Widget de chat en vivo',
}

export default function LiveChatPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        kicker="Canal · Live Chat"
        title={
          <>
            Convierte visitantes en clientes con <span className="wz-text-gradient">chat en vivo</span>
          </>
        }
        description="Un widget ligero, personalizable y potente que vive en tu web. Soporte inmediato, mensajes proactivos, formularios inteligentes. Continúa la conversación en WhatsApp o email sin perder contexto."
        primaryCta={{ label: 'Empezar prueba gratis', href: '/pricing' }}
        secondaryCta={{ label: 'Ver demo', href: '/contact' }}
      />

      {/* Feature Rows */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          <FeatureRow
            kicker="Personalización Total"
            title="Un widget que es 100% tuyo"
            description="Olvida los chats genéricos. Personaliza colores, tipografía, posición y comportamiento. Modo claro u oscuro, multiidioma, formato de burbuja o cuadro. Solo un snippet JS y listo."
            mockText="[Captura: múltiples variantes del widget live chat en diferentes marcas y formatos]"
            bullets={[
              'Modo claro y oscuro automático',
              'Multi-idioma (20+ idiomas)',
              'Burbuja flotante o cuadro embebido',
              'Instalación con un snippet JavaScript',
            ]}
          />

          <FeatureRow
            reverse
            kicker="Conversaciones Asincrónicas"
            title="El cliente responde cuando puede"
            description="No todos quieren esperar. Deja que tus visitantes escriban mensajes, cierren la pestaña y sigan con su día. Reciben notificaciones cuando respondes, y la charla continúa donde se quedó."
            mockText="[Captura: widget mostrando mensajes sin respuesta y retorno del cliente horas después]"
          />

          <FeatureRow
            kicker="Mensajes Proactivos"
            title="Ofrece ayuda antes de que la pidan"
            description="Dispara mensajes automáticos basados en comportamiento del visitante. ¿Pasó 3 minutos en la página? Pregunta si necesita ayuda. ¿Abandonó el carrito? Ofrécele un descuento. Sin spam, puro ROI."
            mockText="[Captura: flujo de mensajes proactivos basados en tiempo, scroll, or abandono de carrito]"
          />

          <FeatureRow
            reverse
            kicker="Formularios y Bots"
            title="Califica leads antes de la conversación"
            description="Formularios previos inteligentes que recopilan datos clave. Integra WizeFlow para chatbots que resuelven preguntas frecuentes, califican leads y escalan a humanos. Todo sin abandonar el chat."
            mockText="[Captura: formulario previo en widget, luego bot respondiendo, luego escalada a agente]"
            ctaLabel="Descubre WizeFlow →"
            ctaHref="/wizeflow"
          />
        </div>
      </section>

      {/* Capabilities Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHead
            kicker="Funcionalidades"
            title="Todo lo que necesitas para vender 24/7"
            description="Desde multimedia hasta métricas, Live Chat en WizeHub está armado para crecer con tu negocio."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <Card
              icon={Files}
              title="Archivos Multimedia"
              description="Comparte imágenes, PDFs, vídeos y documentos directamente en el widget. Cliente descarga con un clic."
              delay={0}
            />
            <Card
              icon={Target}
              title="Segmentación"
              description="Segmenta visitantes por fuente, comportamiento, ubicación y más. Ofrece experiencias personalizadas según segmento."
              delay={0.05}
            />
            <Card
              icon={LineChart}
              title="Métricas de Conversión"
              description="Mide tasa de conversión de chat, tiempo de respuesta, resolución en primer contacto, y ROI por widget."
              delay={0.1}
            />
            <Card
              icon={ShieldCheck}
              title="Privacidad"
              description="Cumple RGPD, CCPA y leyes locales. Encriptación en tránsito, consentimiento explícito, y sin rastreo de terceros."
              delay={0.15}
            />
            <Card
              icon={Zap}
              title="Fácil de Instalar"
              description="Copia y pega un snippet. Sin cambios en tu stack, sin dependencias pesadas, sin tiempo de desarrollo."
              delay={0.2}
            />
            <Card
              icon={MonitorSmartphone}
              title="100% Responsivo"
              description="Perfecto en desktop, tablet y móvil. El widget se adapta a cualquier pantalla automáticamente."
              delay={0.25}
            />
          </div>
        </div>
      </section>

      <CtaBand
        title="Accede a más clientes sin aumentar tu equipo"
        description="Automatiza respuestas, segmenta visitantes, y mejora conversión. Live Chat en WizeHub lo hace posible."
        primaryLabel="Iniciar ahora"
        primaryHref="/pricing"
        secondaryLabel="Contactar ventas"
        secondaryHref="/contact"
      />
    </>
  )
}
