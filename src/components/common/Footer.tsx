import { Link } from 'react-router-dom'
import { company } from '../../data/company'

const footerLinks = [
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre nosotros', to: '/about' },
      { label: 'Nuestros servicios', to: '/#servicios' },
      { label: 'Contacto', to: '/contact' },
    ],
  },
  {
    title: 'Soporte',
    links: [
      { label: 'Centro de ayuda', to: '/help' },
      { label: 'Rastrear pedido', to: '/tracking' },
      { label: 'Políticas', to: '/policies' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Política de privacidad', to: '/policies/privacidad' },
      { label: 'Términos de servicio', to: '/policies/terminos-de-servicio' },
      { label: 'Política de reembolsos', to: '/policies/reembolsos' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-orange text-white font-bold">
                NC
              </span>
              <span className="text-lg font-bold text-white">
                Nex<span className="text-brand-orange">Cargo</span>
              </span>
            </div>
            <p className="mt-3 text-sm text-gray-400">{company.slogan}</p>
            <p className="mt-4 text-sm text-gray-400">{company.contact.address}</p>
            <p className="mt-1 text-sm text-gray-400">{company.contact.phone}</p>
            <p className="mt-1 text-sm text-gray-400">{company.contact.email}</p>
          </div>

          {footerLinks.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-200">{col.title}</h3>
              <ul className="mt-4 space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm text-gray-400 transition-colors hover:text-brand-orange">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-navy-800 pt-6 text-xs text-gray-500 md:flex-row">
          <p>© {new Date().getFullYear()} NexCargo Logistics S.A.S. Todos los derechos reservados.</p>
          <p>Movemos lo que importa.</p>
        </div>
      </div>
    </footer>
  )
}
