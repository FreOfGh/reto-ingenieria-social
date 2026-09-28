import Breadcrumbs from '../components/common/Breadcrumbs'
import SectionHeading from '../components/common/SectionHeading'
import PolicyCard from '../components/policies/PolicyCard'
import { policies } from '../data/policies'

export default function PoliciesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Inicio', to: '/' }, { label: 'Políticas' }]} />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Documentación legal"
            title="Políticas de NexCargo Logistics"
            description="Conoce en detalle las condiciones que rigen nuestros envíos, devoluciones, reembolsos y el tratamiento de tu información."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {policies.map((policy) => (
              <PolicyCard key={policy.id} policy={policy} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
