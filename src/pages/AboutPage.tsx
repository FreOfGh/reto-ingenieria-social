import Breadcrumbs from '../components/common/Breadcrumbs'
import SectionHeading from '../components/common/SectionHeading'
import TeamCard from '../components/about/TeamCard'
import { company } from '../data/company'
import { employees } from '../data/employees'

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Inicio', to: '/' }, { label: 'Nosotros' }]} />

      <section className="bg-navy-900 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold sm:text-4xl">Sobre NexCargo Logistics</h1>
          <p className="mt-4 text-gray-300">{company.description}</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <div className="rounded-xl border border-gray-100 p-8 shadow-card">
            <h2 className="text-xl font-semibold text-navy-900">Nuestra misión</h2>
            <p className="mt-3 text-gray-600">{company.mission}</p>
          </div>
          <div className="rounded-xl border border-gray-100 p-8 shadow-card">
            <h2 className="text-xl font-semibold text-navy-900">Nuestra visión</h2>
            <p className="mt-3 text-gray-600">{company.vision}</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Historia" title={`Fundada en ${company.founded}`} center />
          <p className="mx-auto mt-6 max-w-3xl text-center text-gray-600">
            Desde {company.founded}, NexCargo Logistics ha crecido de una pequeña operación de mensajería local en
            Bogotá a una red de transporte con 42 centros de distribución en 17 países. Nuestro crecimiento ha
            estado impulsado por la inversión constante en tecnología de rastreo y en la capacitación de nuestro
            equipo operativo.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Lo que nos define" title="Nuestros valores" center />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {company.values.map((value) => (
              <div key={value.title} className="rounded-xl bg-gray-50 p-6 text-center shadow-card">
                <h3 className="font-semibold text-navy-900">{value.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Nuestra red" title="Centros logísticos" center />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {company.distributionCenters.map((center) => (
              <div key={center.city} className="rounded-xl bg-white p-5 text-center shadow-card">
                <p className="font-semibold text-navy-900">{center.city}</p>
                <p className="mt-1 text-xs text-gray-500">{center.type}</p>
                <p className="mt-1 text-xs text-gray-400">Desde {center.established}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Liderazgo" title="Equipo directivo" center />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {employees.map((employee) => (
              <TeamCard key={employee.id} employee={employee} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
