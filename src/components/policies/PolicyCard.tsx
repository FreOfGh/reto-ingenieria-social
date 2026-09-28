import { Link } from 'react-router-dom'
import type { PolicyDocument } from '../../data/policies'

export default function PolicyCard({ policy }: { policy: PolicyDocument }) {
  return (
    <Link
      to={`/policies/${policy.slug}`}
      className="group flex flex-col rounded-xl border border-gray-100 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-cardHover"
    >
      <h3 className="text-lg font-semibold text-navy-900 group-hover:text-brand-orange">{policy.title}</h3>
      <p className="mt-2 flex-1 text-sm text-gray-600">{policy.summary}</p>
      <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
        <span>Actualizado {policy.lastUpdated}</span>
        <span className="font-medium text-brand-orange group-hover:underline">Leer más →</span>
      </div>
    </Link>
  )
}
