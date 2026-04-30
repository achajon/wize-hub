import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Política de Privacidad | WizeHub',
  description:
    'Política de privacidad de Wize Devs, S.A.. Información sobre cómo recopilamos, usamos y protegemos tus datos personales.',
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        kicker="LEGAL"
        title={
          <>
            Política de <span className="wz-text-gradient">Privacidad</span>
          </>
        }
        description="Cómo recopilamos, usamos, almacenamos y protegemos tus datos personales."
        primaryCta={{ label: 'Contactar', href: '/contact' }}
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-wz-bg2">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-12">
              Última actualización: 29 de abril de 2026
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              1. Información General
            </h2>
            <div className="text-slate-700 dark:text-slate-300 space-y-4 mb-12">
              <p>
                Wize Devs, S.A. (en adelante &ldquo;Wize Devs, S.A.&rdquo;), empresa de
                desarrollo de software, opera una plataforma tecnológica para la
                integración con la WhatsApp Business API (WhatsApp Business
                Platform de Meta Platforms, Inc.).
              </p>
              <p>
                Esta plataforma permite a las organizaciones clientes de Wize Devs, S.A.
                conectar sus cuentas de WhatsApp Business (WABAs) y gestionar
                comunicaciones automatizadas, chatbots y atención al cliente a
                través de dicho canal.
              </p>
              <p>
                Esta Política de Privacidad describe cómo Wize Devs, S.A. recopila,
                usa, almacena, comparte y protege los datos personales y la
                información de los usuarios finales que interactúan con los
                servicios desplegados a través de nuestra plataforma, así como
                los datos de nuestros clientes empresariales.
              </p>
              <p>
                Al utilizar cualquier servicio desarrollado o gestionado por
                Wize Devs, S.A. que involucre la WhatsApp Business API, aceptas las
                prácticas descritas en esta política.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              2. Datos que Recopilamos
            </h2>

            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
              2.1 Datos de Usuarios Finales (Consumidores)
            </h3>
            <div className="text-slate-700 dark:text-slate-300 space-y-4 mb-8">
              <p>
                Cuando un usuario final interactúa con un chatbot o servicio de
                mensajería operado por uno de nuestros clientes a través de
                WhatsApp, Wize Devs, S.A. puede procesar los siguientes datos en nombre
                de dicho cliente:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>El número de teléfono de WhatsApp del usuario</li>
                <li>
                  Contenido de los mensajes enviados y recibidos en la
                  conversación (texto, imágenes, documentos, audio, video)
                </li>
                <li>
                  Metadatos de mensajes: marcas de tiempo, estados de entrega y
                  lectura
                </li>
                <li>
                  El nombre para mostrar de WhatsApp del usuario, cuando esté
                  disponible
                </li>
                <li>
                  Identificadores técnicos de conversación asignados por la
                  plataforma de Meta
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
              2.2 Datos de Clientes Empresariales
            </h3>
            <div className="text-slate-700 dark:text-slate-300 space-y-4 mb-12">
              <p>
                Cuando una organización contrata los servicios de Wize Devs, S.A. como
                proveedor tecnológico, recopilamos los siguientes datos del
                cliente:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Nombre de la organización y datos de contacto del
                  representante técnico o legal
                </li>
                <li>
                  Tokens de acceso y credenciales para la Meta Business Platform
                </li>
                <li>
                  Identificadores de WABA y números de teléfono empresariales
                </li>
                <li>Configuraciones técnicas del servicio contratado</li>
                <li>Información de facturación y contractual</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              3. Cómo Usamos los Datos
            </h2>
            <div className="text-slate-700 dark:text-slate-300 space-y-4 mb-12">
              <p>
                Wize Devs, S.A. utiliza los datos recopilados exclusivamente para los
                siguientes fines:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Prestar y operar los servicios de mensajería contratados por
                  el cliente empresarial
                </li>
                <li>
                  Enrutar mensajes entre los usuarios finales y los sistemas del
                  cliente (chatbot, plataforma de atención al cliente, CRM, etc.)
                </li>
                <li>
                  Gestionar y mantener la integración técnica con la WhatsApp
                  Business API de Meta
                </li>
                <li>
                  Diagnosticar y resolver problemas técnicos en la prestación del
                  servicio
                </li>
                <li>
                  Garantizar la seguridad y el funcionamiento adecuado de la
                  plataforma
                </li>
                <li>
                  Cumplir con las obligaciones legales y reglamentarias
                  aplicables
                </li>
              </ul>
              <p>
                Wize Devs, S.A. no utiliza los datos de los usuarios finales con fines
                de marketing propios, ni los vende, transfiere o comparte con
                terceros no relacionados con la prestación del servicio
                contratado.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              4. Compartir Datos
            </h2>

            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
              4.1 Meta Platforms, Inc.
            </h3>
            <div className="text-slate-700 dark:text-slate-300 space-y-4 mb-8">
              <p>
                Los mensajes procesados a través de la WhatsApp Business Platform
                se transmiten mediante la infraestructura de Meta Platforms, Inc.,
                de conformidad con los Términos de Servicio de la WhatsApp
                Business Platform y la Política de Privacidad de Meta (
                <a
                  href="https://www.facebook.com/privacy/policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-wz-primary hover:underline"
                >
                  https://www.facebook.com/privacy/policy
                </a>
                ). Wize Devs, S.A. no controla el procesamiento de datos realizado
                directamente por Meta.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
              4.2 Clientes Empresariales
            </h3>
            <div className="text-slate-700 dark:text-slate-300 space-y-4 mb-8">
              <p>
                Los datos de los usuarios finales son accesibles para el cliente
                empresarial que contrató los servicios de Wize Devs, S.A., ya que
                Wize Devs, S.A. actúa como procesador técnico de datos en nombre de
                dicho cliente. El cliente es responsable de procesar los datos de
                conformidad con la legislación aplicable y de obtener los
                consentimientos necesarios de sus usuarios finales.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
              4.3 Proveedores de Infraestructura
            </h3>
            <div className="text-slate-700 dark:text-slate-300 space-y-4 mb-8">
              <p>
                Wize Devs, S.A. puede utilizar proveedores de infraestructura en la
                nube para alojar componentes del servicio. Estos proveedores
                operan bajo acuerdos de confidencialidad y no están autorizados
                a utilizar los datos para sus propios fines.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
              4.4 Requisitos Legales
            </h3>
            <div className="text-slate-700 dark:text-slate-300 space-y-4 mb-12">
              <p>
                Wize Devs, S.A. puede divulgar información personal si lo exige la ley
                aplicable u otras regulaciones, o en respuesta a órdenes
                judiciales o solicitudes de autoridades competentes.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              5. Retención de Datos
            </h2>
            <div className="text-slate-700 dark:text-slate-300 space-y-4 mb-12">
              <p>
                Wize Devs, S.A. retiene los datos solo durante el tiempo necesario para
                prestar el servicio contratado:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Los mensajes procesados a través de la Cloud API de Meta se
                  retienen en los servidores de Meta durante un máximo de 30
                  días, de acuerdo con sus propias políticas.
                </li>
                <li>
                  Los registros de conversación almacenados en la propia
                  infraestructura de Wize Devs, S.A. se retienen según lo estipulado en
                  el contrato con cada cliente empresarial, y se eliminan de
                  forma segura tras la terminación de la relación contractual.
                </li>
                <li>
                  Los datos de los clientes empresariales se retienen durante la
                  vigencia del contrato y por el período adicional requerido por
                  la legislación fiscal y comercial aplicable.
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              6. Seguridad de Datos
            </h2>
            <div className="text-slate-700 dark:text-slate-300 space-y-4 mb-12">
              <p>
                Wize Devs, S.A. implementa medidas técnicas y organizativas razonables
                para proteger los datos contra el acceso no autorizado, la
                pérdida, alteración o divulgación, incluyendo:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Cifrado en tránsito mediante HTTPS/TLS para todas las
                  comunicaciones con la API de Meta
                </li>
                <li>
                  Control de acceso basado en roles para los sistemas internos
                </li>
                <li>
                  Uso de tokens de acceso de usuario del sistema en lugar de
                  credenciales personales
                </li>
                <li>
                  Monitoreo de accesos y gestión de incidentes de seguridad
                </li>
              </ul>
              <p>
                Sin embargo, ningún sistema de transmisión de datos por Internet
                puede garantizar una seguridad absoluta. Wize Devs, S.A. no puede
                garantizar la seguridad de la información transmitida a través de
                redes fuera de su control directo.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              7. Derechos de los Usuarios
            </h2>
            <div className="text-slate-700 dark:text-slate-300 space-y-4 mb-12">
              <p>
                Los usuarios finales cuyos datos son procesados a través de
                nuestra plataforma pueden ejercer los siguientes derechos ante el
                cliente empresarial que opera el servicio (quien es el
                responsable del tratamiento de datos):
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Acceso:</strong> conocer qué datos personales suyos se
                  están procesando
                </li>
                <li>
                  <strong>Rectificación:</strong> corregir datos inexactos o
                  incompletos
                </li>
                <li>
                  <strong>Supresión:</strong> solicitar la eliminación de sus
                  datos cuando ya no sean necesarios
                </li>
                <li>
                  <strong>Oposición:</strong> oponerse al tratamiento de sus
                  datos en determinadas circunstancias
                </li>
              </ul>
              <p>
                Para ejercer estos derechos, los usuarios deben contactar
                directamente a la organización con la que se comunicaron a través
                de WhatsApp. Wize Devs, S.A. atenderá las solicitudes remitidas por el
                cliente empresarial en su calidad de procesador técnico.
              </p>
              <p>
                Para consultas directas a Wize Devs, S.A. sobre el procesamiento de
                datos, escriba a:{' '}
                <a
                  href="mailto:info@wizedevs.com"
                  className="text-wz-primary hover:underline"
                >
                  info@wizedevs.com
                </a>
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              8. Uso de la WhatsApp Business API
            </h2>
            <div className="text-slate-700 dark:text-slate-300 space-y-4 mb-12">
              <p>
                Wize Devs, S.A. actúa como Tech Provider registrado con Meta Platforms,
                Inc., lo que le permite gestionar las WABAs de los clientes y
                operar el envío y recepción de mensajes a través de la WhatsApp
                Business Cloud API. En este rol:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Wize Devs, S.A. no inicia conversaciones con los usuarios finales por
                  cuenta propia, sino únicamente en nombre de los clientes
                  empresariales que han contratado este servicio.
                </li>
                <li>
                  Todos los mensajes enviados fuera de la ventana de conversación
                  de 24 horas utilizan plantillas de mensajes previamente
                  aprobadas por Meta.
                </li>
                <li>
                  Wize Devs, S.A. cumple con la Política de Uso Aceptable de la
                  WhatsApp Business Platform, incluyendo las restricciones sobre
                  los tipos de contenido permitidos y el requisito de opt-in del
                  usuario final.
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              9. Cookies y Tecnologías de Seguimiento
            </h2>
            <div className="text-slate-700 dark:text-slate-300 space-y-4 mb-12">
              <p>
                El sitio web de Wize Devs, S.A. (hub.wizedevs.com) puede utilizar
                cookies técnicas necesarias para el funcionamiento básico del
                sitio. No utilizamos cookies de seguimiento o publicidad de
                terceros. La interacción con los servicios de mensajería a través
                de WhatsApp no implica el uso de cookies por parte de Wize Devs, S.A..
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              10. Cambios a Esta Política
            </h2>
            <div className="text-slate-700 dark:text-slate-300 space-y-4 mb-12">
              <p>
                Wize Devs, S.A. se reserva el derecho de actualizar esta Política de
                Privacidad cuando sea necesario, por ejemplo debido a cambios en
                los servicios ofrecidos, la legislación aplicable o las políticas
                de Meta Platforms. Las versiones actualizadas se publicarán en{' '}
                <a
                  href="https://hub.wizedevs.com/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-wz-primary hover:underline"
                >
                  https://hub.wizedevs.com/privacy/
                </a>{' '}
                con la fecha de última modificación.
              </p>
              <p>
                El uso continuado de los servicios de Wize Devs, S.A. después de que se
                publiquen cambios a esta política constituye la aceptación de
                dichos cambios.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              11. Ley Aplicable y Contacto
            </h2>
            <div className="text-slate-700 dark:text-slate-300 space-y-4 mb-12">
              <p>
                Esta Política de Privacidad se rige por las leyes aplicables en la
                jurisdicción de operación de Wize Devs, S.A.. Cualquier disputa
                relacionada con el tratamiento de datos personales se someterá a
                la jurisdicción de los tribunales competentes.
              </p>
              <p>
                Para cualquier consulta, solicitud o reclamación relacionada con
                esta política o el tratamiento de sus datos personales, puede
                contactarnos a través de los siguientes canales:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Email:{' '}
                  <a
                    href="mailto:info@wizedevs.com"
                    className="text-wz-primary hover:underline"
                  >
                    info@wizedevs.com
                  </a>
                </li>
                <li>
                  Sitio web:{' '}
                  <a
                    href="https://wizedevs.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-wz-primary hover:underline"
                  >
                    https://wizedevs.com
                  </a>
                </li>
                <li>
                  Plataforma:{' '}
                  <a
                    href="https://hub.wizedevs.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-wz-primary hover:underline"
                  >
                    https://hub.wizedevs.com
                  </a>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CtaBand
        title="¿Tienes Preguntas?"
        description="Estamos aquí para ayudarte con cualquier consulta sobre privacidad."
        primaryLabel="Contactar"
        primaryHref="/contact"
        secondaryLabel="Ir al Inicio"
        secondaryHref="/"
      />
    </>
  )
}
