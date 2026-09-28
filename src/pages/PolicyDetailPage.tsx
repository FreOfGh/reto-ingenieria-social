import { Link, useParams } from 'react-router-dom'
import Breadcrumbs from '../components/common/Breadcrumbs'
import { policies, getPolicyBySlug } from '../data/policies'

export default function PolicyDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const policy = slug ? getPolicyBySlug(slug) : undefined

  if (!policy) {
    return (
      <>
        <Breadcrumbs items={[{ label: 'Inicio', to: '/' }, { label: 'Políticas', to: '/policies' }, { label: 'No encontrada' }]} />
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <p className="text-lg font-semibold text-navy-900">Esta política no existe.</p>
          <Link to="/policies" className="mt-4 inline-block text-brand-orange hover:underline">
            Volver a políticas
          </Link>
        </div>
      </>
    )
  }

  const otherPolicies = policies.filter((p) => p.slug !== policy.slug)

  return (
    <>
      <Breadcrumbs
        items={[{ label: 'Inicio', to: '/' }, { label: 'Políticas', to: '/policies' }, { label: policy.title }]}
      />

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_260px] lg:px-8">
        <article>
          <h1 className="text-3xl font-bold text-navy-900">{policy.title}</h1>
          <p className="mt-2 text-sm text-gray-400">Última actualización: {policy.lastUpdated}</p>
          <p className="mt-4 text-base text-gray-600">{policy.summary}</p>

          <div className="mt-10 space-y-10">
            {policy.sections.map((section) => (
              <div key={section.heading} className="border-t border-gray-100 pt-6 first:border-0 first:pt-0">
                <h2 className="text-xl font-semibold text-navy-900">{section.heading}</h2>
                <div className="mt-3 space-y-3">
                  {section.paragraphs.map((paragraph, idx) => (
                    <p key={idx} className="text-sm leading-relaxed text-gray-700 sm:text-base">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>

        <aside className="h-fit rounded-xl border border-gray-100 bg-gray-50 p-5">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Otras políticas</h3>
          <ul className="mt-4 space-y-3">
            {otherPolicies.map((p) => (
              <li key={p.slug}>
                <Link
                  to={`/policies/${p.slug}`}
                  className="text-sm text-navy-800 transition-colors hover:text-brand-orange"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </>
  )
}
