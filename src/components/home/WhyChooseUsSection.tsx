import { company } from '../../data/company'
import SectionHeading from '../common/SectionHeading'

export default function WhyChooseUsSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Nuestra ventaja"
          title="Por qué elegir NexCargo"
          description="Más de una década construyendo la red logística más confiable de la región."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {company.whyChooseUs.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 rounded-xl bg-white p-6 shadow-card transition-shadow hover:shadow-cardHover"
            >
              <div className="mt-1 h-10 w-10 flex-shrink-0 rounded-full bg-brand-orange/10 text-center text-lg font-bold leading-10 text-brand-orange">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy-900">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
