import { Link } from 'react-router-dom'

export interface Crumb {
  label: string
  to?: string
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="breadcrumb" className="border-b border-gray-100 bg-gray-50">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-1 px-4 py-3 text-sm text-gray-500 sm:px-6 lg:px-8">
        {items.map((item, idx) => (
          <span key={item.label} className="flex items-center gap-1">
            {idx > 0 && <span className="text-gray-300">/</span>}
            {item.to ? (
              <Link to={item.to} className="transition-colors hover:text-brand-orange">
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-navy-900">{item.label}</span>
            )}
          </span>
        ))}
      </div>
    </nav>
  )
}
