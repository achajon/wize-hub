'use client'

import type { Metadata } from 'next'
import { useState } from 'react'
import PageHero from '@/components/PageHero'
import SectionHead from '@/components/SectionHead'
import CtaBand from '@/components/CtaBand'
import ScrollReveal from '@/components/ScrollReveal'

// Note: Metadata is not exported from client components
// If you need static metadata, create a separate layout or use generateMetadata

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Gracias por tu mensaje, ${formData.name}. Nos contactaremos pronto.`)
    setSubmitted(true)
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <>
      <PageHero
        kicker="CONTÁCTANOS"
        title={<>¿Preguntas? <span className="wz-text-gradient">Estamos Aquí</span></>}
        description="Envíanos un mensaje. Nuestro equipo responde en menos de 24 horas."
        primaryCta={{ label: 'Enviar Mensaje', href: '#contact-form' }}
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <SectionHead
            kicker="FORMULARIO"
            title="Cuéntanos Qué Necesitas"
            description="Rellena el formulario y nos pondremos en contacto."
          />

          <ScrollReveal>
            <form id="contact-form" onSubmit={handleSubmit} className="mt-12 space-y-6 bg-slate-50 p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nombre */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                    placeholder="Juan Pérez"
                  />
                </div>

                {/* Empresa */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-900 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                    placeholder="Mi Negocio"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                    placeholder="juan@ejemplo.com"
                  />
                </div>

                {/* Teléfono */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-900 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                    placeholder="+34 600 123 456"
                  />
                </div>
              </div>

              {/* Asunto (Select) */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-900 mb-2">
                  Asunto
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="sales">Información sobre Planes</option>
                  <option value="support">Soporte Técnico</option>
                  <option value="integration">Integración Personalizada</option>
                  <option value="partnership">Asociación/Partnership</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 resize-none"
                  placeholder="Cuéntanos qué necesitas..."
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition font-medium"
                >
                  Enviar Mensaje
                </button>
              </div>

              {submitted && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800">
                  Mensaje enviado correctamente. Nos contactaremos pronto.
                </div>
              )}
            </form>
          </ScrollReveal>
        </div>
      </section>

      <CtaBand
        title="¿Urgente?"
        description="Responder soporte 24/7 para clientes Business y Enterprise."
        primaryLabel="Ver Planes"
        primaryHref="/pricing"
      />
    </>
  )
}
