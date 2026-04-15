import type { Metadata } from "next";
import {
  ShoppingBag,
  Building2,
  BookOpen,
  Stethoscope,
  Truck,
  Plane,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import FeatureRow from "@/components/FeatureRow";
import Card from "@/components/Card";
import SectionHead from "@/components/SectionHead";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "WhatsApp Business en WizeHub",
};

export default function WhatsAppPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        kicker="Canal · WhatsApp"
        title={
          <>
            Domina <span className="wz-text-gradient">WhatsApp</span> como nunca
            antes
          </>
        }
        description="Integra la API oficial de WhatsApp Business en WizeHub. Gestiona múltiples números, envía plantillas aprobadas, recibe mensajes y automatiza con WizeFlow. Sin limitaciones de desarrollo, sin pasos complicados."
        primaryCta={{ label: "Empezar prueba gratis", href: "/pricing" }}
        secondaryCta={{ label: "Solicitar demo", href: "/contact" }}
      />

      {/* Feature Rows */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          <FeatureRow
            kicker="API Oficial"
            title="Acceso directo a la API de WhatsApp Business"
            description="Conecta tu número verificado, envía plantillas HSM precargadas, recibe mensajes instantáneamente. WizeHub maneja toda la complejidad técnica para que tú solo configures y lanzes."
            mockImage="/images/whatsapp-channel-configuration-1.png"
            mockImageAlt="Panel de WizeHub con conversaciones de WhatsApp, plantillas disponibles y opciones de envío"
            bullets={[
              "Verificación de marca con Meta",
              "Plantillas HSM ilimitadas",
              "Soporte multiagente",
              "Archivos multimedia: imágenes, vídeos, documentos",
            ]}
          />

          <FeatureRow
            reverse
            kicker="Multiagente"
            title="Múltiples agentes, un solo número"
            description="Distribuye conversaciones de WhatsApp entre tu equipo sin crear números fantásmas. Asigna automáticamente por área, cliente o round-robin. Todos ven el historial completo."
            mockImage="/images/multichannel-people.png"
            mockImageAlt="Panel de asignación de conversaciones con agentes, prioridades y SLA"
          />

          <FeatureRow
            kicker="Plantillas y Campañas"
            title="Automatiza mensajes sin marketing fatiga"
            description="Diseña plantillas aprobadas por Meta. Envía notificaciones de pedidos, confirmaciones de citas, actualizaciones de estado y recordatorios. Todo personalizado y en tiempo real."
            mockImage="/images/templates-hsm-variables-meta.png"
            mockImageAlt="Constructor de plantillas HSM con variables y vista previa"
          />

          <FeatureRow
            reverse
            kicker="WizeFlow + WhatsApp"
            title="Bots inteligentes que venden y resuelven"
            description="Integra WizeFlow para automatización conversacional. Bots que califican leads, rastrean pedidos, resuelven FAQs y escalan a humanos en segundos. Entrenados con tu negocio."
            mockImage="/images/bot-in-whatsapp.png"
            mockImageAlt="Flujo de bot en WhatsApp resolviendo pedido, luego escalando a agente"
            ctaLabel="Conocer WizeFlow →"
            ctaHref="/wizeflow"
          />
        </div>
      </section>

      {/* Use Case Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHead
            kicker="Para tu industria"
            title="WhatsApp para cada tipo de negocio"
            description="Retail, servicios, logística, educación: WizeHub + WhatsApp funciona en cualquier sector."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <Card
              icon={ShoppingBag}
              title="eCommerce"
              description="Rastreo de pedidos, recuperación de carritos, notificaciones de envío, y atención de devoluciones todo en WhatsApp."
              delay={0}
            />
            <Card
              icon={Building2}
              title="Servicios Financieros"
              description="Consultas de cuenta, solicitud de crédito, notificaciones de movimiento y asesoría personalizada sin abandonar WhatsApp."
              delay={0.05}
            />
            <Card
              icon={BookOpen}
              title="Educación"
              description="Notificaciones de calificaciones, recordatorios de clase, consultas a docentes y soporte administrativo en tiempo real."
              delay={0.1}
            />
            <Card
              icon={Stethoscope}
              title="Salud"
              description="Recordatorios de citas, resultados de exámenes, teleconsultas y prescripciones electrónicas directamente en WhatsApp."
              delay={0.15}
            />
            <Card
              icon={Truck}
              title="Logística"
              description="Actualizaciones de entrega, confirmación de recepción, cambios de dirección y gestión de incidencias desde el mismo canal."
              delay={0.2}
            />
            <Card
              icon={Plane}
              title="Turismo"
              description="Confirmación de reservas, cambios de vuelos, itinerarios, atención de emergencias y asistencia en viajes."
              delay={0.25}
            />
          </div>
        </div>
      </section>

      <CtaBand
        title="Lanza tu WhatsApp Business en días, no meses"
        description="Implementación rápida, soporte dedicado en español, y sin tecnicismos. Solo configuración."
        primaryLabel="Ver planes"
        primaryHref="/pricing"
        secondaryLabel="Hablar con ventas"
        secondaryHref="/contact"
      />
    </>
  );
}
