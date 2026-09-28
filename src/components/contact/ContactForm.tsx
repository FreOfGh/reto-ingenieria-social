import { useState } from 'react'
import { submitContactForm } from '../../api/client'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setSuccess(null)
    const response = await submitContactForm(form)
    setSubmitting(false)
    if (response.success) {
      setSuccess(response.message)
      setForm({ name: '', email: '', subject: '', message: '' })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-card sm:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-navy-900">Nombre completo</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-orange"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-navy-900">Correo electrónico</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-orange"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-navy-900">Asunto</label>
        <input
          type="text"
          required
          value={form.subject}
          onChange={(e) => update('subject', e.target.value)}
          className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-orange"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-navy-900">Mensaje</label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-orange"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center justify-center rounded-lg bg-brand-orange px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-orangeDark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? 'Enviando...' : 'Enviar mensaje'}
      </button>

      {success && <p className="text-sm font-medium text-green-600">{success}</p>}
    </form>
  )
}
