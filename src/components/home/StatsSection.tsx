import { company } from '../../data/company'

export default function StatsSection() {
  return (
    <section className="bg-navy-900 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {company.stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-brand-orange sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
