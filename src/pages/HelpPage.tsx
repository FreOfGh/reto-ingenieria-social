import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/common/Breadcrumbs'
import SectionHeading from '../components/common/SectionHeading'
import FaqAccordion from '../components/help/FaqAccordion'
import { helpFaqs } from '../data/faqs'

export default function HelpPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Inicio', to: '/' }, { label: 'Ayuda' }]} />

      <section className="bg-navy-900 py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold sm:text-4xl">Centro de ayuda</h1>
          <p className="mt-4 text-gray-300">
            Encuentra respuestas rápidas a las preguntas más comunes sobre envíos, rastreo y reembolsos.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Preguntas frecuentes" title="¿En qué podemos ayudarte?" />
          <div className="mt-8">
            <FaqAccordion items={helpFaqs} />
          </div>

          <div className="mt-10 rounded-xl border border-dashed border-gray-200 p-6 text-center">
            <p className="text-sm text-gray-600">
              ¿No encontraste lo que buscabas? Consulta nuestras{' '}
              <Link to="/policies" className="font-medium text-brand-orange hover:underline">
                políticas completas
              </Link>{' '}
              o{' '}
              <Link to="/contact" className="font-medium text-brand-orange hover:underline">
                contáctanos directamente
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
