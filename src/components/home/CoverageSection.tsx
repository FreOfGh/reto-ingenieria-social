import { company } from '../../data/company'
import SectionHeading from '../common/SectionHeading'

export default function CoverageSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Cobertura"
              title="Presencia en toda la región"
              description="Contamos con centros de distribución y alianzas operativas en 17 países, permitiendo entregas nacionales e internacionales con tiempos de tránsito optimizados."
            />
            <div className="mt-8 flex flex-wrap gap-2">
              {company.coverage.map((country) => (
                <span
                  key={country}
                  className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-navy-800 transition-colors hover:border-brand-orange hover:text-brand-orange"
                >
                  {country}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-navy-900 p-8 text-white shadow-card">
            <h3 className="text-lg font-semibold">Centros de distribución destacados</h3>
            <ul className="mt-6 space-y-4">
              {company.distributionCenters.map((center) => (
                <li key={center.city} className="flex items-center justify-between border-b border-navy-700 pb-4 last:border-0 last:pb-0">
                  <div>
                    <p className="font-medium">{center.city}</p>
                    <p className="text-sm text-gray-400">{center.type}</p>
                  </div>
                  <span className="text-sm text-gray-400">Desde {center.established}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
