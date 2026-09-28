import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-orange">Error 404</p>
      <h1 className="mt-2 text-3xl font-bold text-navy-900">Página no encontrada</h1>
      <p className="mt-4 text-gray-600">La página que buscas no existe o fue movida.</p>
      <Link to="/" className="mt-6 rounded-lg bg-brand-orange px-6 py-3 font-semibold text-white hover:bg-brand-orangeDark">
        Volver al inicio
      </Link>
    </div>
  )
}
