import Breadcrumbs from '../components/common/Breadcrumbs'
import SectionHeading from '../components/common/SectionHeading'
import ContactForm from '../components/contact/ContactForm'
import { company } from '../data/company'

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Inicio', to: '/' }, { label: 'Contacto' }]} />

      <section className="bg-navy-900 py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold sm:text-4xl">Contáctanos</h1>
          <p className="mt-4 text-gray-300">
            Nuestro equipo de atención al cliente está disponible para resolver tus dudas.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8">
          <div>
            <SectionHeading eyebrow="Información" title="Estamos para ayudarte" />
            <ul className="mt-8 space-y-6">
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                  ☎
                </span>
                <div>
                  <p className="font-medium text-navy-900">Teléfono</p>
                  <p className="text-sm text-gray-600">{company.contact.phone}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                  ✉
                </span>
                <div>
                  <p className="font-medium text-navy-900">Correo electrónico</p>
                  <p className="text-sm text-gray-600">{company.contact.email}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                  ⌂
                </span>
                <div>
                  <p className="font-medium text-navy-900">Dirección</p>
                  <p className="text-sm text-gray-600">{company.contact.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                  ⏰
                </span>
                <div>
                  <p className="font-medium text-navy-900">Horario de atención</p>
                  <p className="text-sm text-gray-600">{company.contact.hours}</p>
                </div>
              </li>
            </ul>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  )
}
