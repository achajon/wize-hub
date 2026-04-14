import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Card from '@/components/Card'
import SectionHead from '@/components/SectionHead'
import CtaBand from '@/components/CtaBand'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Seguridad | WizeHub',
  description: 'Encriptación, SSO/SAML, auditoría completa. Tu seguridad es nuestra prioridad.',
}

export default function SecurityPage() {
  return (
    <>
      <PageHero
        kicker="SEGURIDAD"
        title={<>Tu Seguridad <span className="wz-text-gradient">Es Nuestro Trabajo</span></>}
        description="Encriptación end-to-end, SSO/SAML, auditoría completa, cumplimiento normativo. Confía en WizeHub."
        primaryCta={{ label: 'Ver Compliance', href: '#' }}
        secondaryCta={{ label: 'Contactar Seguridad', href: '/contact' }}
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <SectionHead
            kicker="CARACTERÍSTICAS"
            title="Estándares de Seguridad"
            description="Protección en profundidad para tus datos."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <ScrollReveal>
              <Card
                icon="lock"
                title="Cifrado AES-256"
                description="Todos los datos en reposo están cifrados con AES-256. Los datos en tránsito usan TLS 1.3."
                delay={0}
              />
            </ScrollReveal>
            <ScrollReveal>
              <Card
                icon="key"
                title="SSO y SAML"
                description="Integración con tu proveedor de identidad. Azure AD, Okta, Google Workspace. Un login, multiples apps."
                delay={0.1}
              />
            </ScrollReveal>
            <ScrollReveal>
              <Card
                icon="shield"
                title="Roles Granulares"
                description="Define permisos exactos para cada agente. Admin, Agente, Supervisor, Custom. Control total."
                delay={0.2}
              />
            </ScrollReveal>
            <ScrollReveal>
              <Card
                icon="activity"
                title="Auditoría Completa"
                description="Registro de cada acción: logins, cambios de datos, cambios de permisos. Histórico de 2+ años."
                delay={0.3}
              />
            </ScrollReveal>
            <ScrollReveal>
              <Card
                icon="globe"
                title="Residencia de Datos"
                description="Almacenamiento en tu región: EU, US, APAC. Cumple GDPR, CCPA y normativas locales."
                delay={0.4}
              />
            </ScrollReveal>
            <ScrollReveal>
              <Card
                icon="check-circle"
                title="Cumplimiento Normativo"
                description="SOC 2 Type II, ISO 27001, GDPR, HIPAA. Certificaciones auditadas regularmente."
                delay={0.5}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <SectionHead
            kicker="DETALLES"
            title="Especificaciones de Seguridad"
            description="Información técnica para tu equipo de compliance."
          />

          <div className="mt-12 space-y-8">
            <div className="border-l-4 border-slate-900 pl-6">
              <h4 className="text-xl font-bold text-slate-900 mb-3">Encriptación</h4>
              <p className="text-slate-700 mb-2">
                <strong>En reposo:</strong> AES-256 con claves manejadas por AWS KMS. Claves rotadas anualmente.
              </p>
              <p className="text-slate-700">
                <strong>En tránsito:</strong> TLS 1.3 para todos los conexiones HTTPS. Perfect Forward Secrecy habilitado.
              </p>
            </div>

            <div className="border-l-4 border-slate-900 pl-6">
              <h4 className="text-xl font-bold text-slate-900 mb-3">Identidad y Acceso</h4>
              <p className="text-slate-700 mb-2">
                <strong>Autenticación:</strong> Contraseña + 2FA (TOTP, U2F). SSO vía SAML 2.0 para Enterprise.
              </p>
              <p className="text-slate-700">
                <strong>Autorización:</strong> RBAC granular. Roles: Admin, Supervisor, Agente, Custom. Permisos por módulo.
              </p>
            </div>

            <div className="border-l-4 border-slate-900 pl-6">
              <h4 className="text-xl font-bold text-slate-900 mb-3">Auditoría</h4>
              <p className="text-slate-700 mb-2">
                <strong>Logging:</strong> Todos los eventos se registran: login, logout, cambios de datos, API calls.
              </p>
              <p className="text-slate-700">
                <strong>Retención:</strong> Mínimo 2 años. Búsqueda completa en dashboard. Exportación en CSV/JSON.
              </p>
            </div>

            <div className="border-l-4 border-slate-900 pl-6">
              <h4 className="text-xl font-bold text-slate-900 mb-3">Cumplimiento</h4>
              <ul className="text-slate-700 space-y-2">
                <li>• <strong>SOC 2 Type II:</strong> Auditado por firma externa. Disponible para clientes Enterprise.</li>
                <li>• <strong>ISO 27001:</strong> Certificado. Gestión de seguridad de la información según estándares internacionales.</li>
                <li>• <strong>GDPR:</strong> Cumplimiento total. DPA disponible. Derecho al olvido implementado.</li>
                <li>• <strong>HIPAA:</strong> Disponible para clientes del sector salud. Encriptación y auditoría reforzadas.</li>
              </ul>
            </div>

            <div className="border-l-4 border-slate-900 pl-6">
              <h4 className="text-xl font-bold text-slate-900 mb-3">Infraestructura</h4>
              <p className="text-slate-700 mb-2">
                <strong>Hosting:</strong> AWS. Múltiples regiones con redundancia. SLA de 99.9% uptime.
              </p>
              <p className="text-slate-700">
                <strong>Backups:</strong> Diarios. Probados mensualmente. Almacenados en región diferente.
              </p>
            </div>

            <div className="border-l-4 border-slate-900 pl-6">
              <h4 className="text-xl font-bold text-slate-900 mb-3">Respuesta a Incidentes</h4>
              <p className="text-slate-700">
                <strong>Plan documentado:</strong> Equipo de seguridad disponible. Notificación en 24 horas si es necesario. Análisis completo de causa raíz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Seguridad que Puedes Confiar"
        description="Tus datos en buenas manos."
        primaryLabel="Ver Certificaciones"
        primaryHref="#"
        secondaryLabel="Contactar Equipo de Seguridad"
        secondaryHref="/contact"
      />
    </>
  )
}
