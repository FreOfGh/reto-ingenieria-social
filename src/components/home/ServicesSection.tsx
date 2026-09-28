import { company } from '../../data/company'
import SectionHeading from '../common/SectionHeading'
import ServiceIcon from '../common/ServiceIcon'

export default function ServicesSection() {
  return (
    <section id="servicios" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Lo que hacemos"
          title="Nuestros servicios"
          description="Soluciones de transporte diseñadas para personas, comercios y grandes empresas."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {company.services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl border border-gray-100 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-cardHover"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-900 text-brand-orange transition-colors group-hover:bg-brand-orange group-hover:text-white">
                <ServiceIcon name={service.icon} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-navy-900">{service.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
