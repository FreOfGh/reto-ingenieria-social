import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Hero() {
  const [trackingNumber, setTrackingNumber] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (trackingNumber.trim()) {
      navigate(`/tracking?nc=${encodeURIComponent(trackingNumber.trim())}`)
    } else {
      navigate('/tracking')
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800">
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="animate-fadeInUp">
            <span className="inline-flex items-center rounded-full bg-navy-700/60 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-orangeLight ring-1 ring-inset ring-navy-600">
              Red logística en 17 países
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Movemos lo que <span className="text-brand-orange">importa</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-gray-300">
              NexCargo Logistics conecta ciudades y países con soluciones de transporte, mensajería y
              logística empresarial confiables, rastreables y a tiempo.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="Ingresa tu número de guía, ej. NC-48291"
                className="w-full rounded-lg border-0 bg-white px-4 py-3 text-navy-900 shadow-card placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange sm:max-w-sm"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-orange px-6 py-3 font-semibold text-white shadow-card transition-colors hover:bg-brand-orangeDark"
              >
                Rastrear envío
              </button>
            </form>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-400">
              <Link to="/policies" className="underline decoration-dotted underline-offset-4 hover:text-white">
                Consultar políticas de envío
              </Link>
              <span className="text-gray-600">·</span>
              <Link to="/help" className="underline decoration-dotted underline-offset-4 hover:text-white">
                Centro de ayuda
              </Link>
            </div>
          </div>

          <div className="relative animate-fadeInUp">
            <div className="rounded-2xl bg-white/5 p-6 shadow-2xl ring-1 ring-white/10 backdrop-blur">
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg bg-navy-800/80 px-4 py-3">
                  <span className="text-sm text-gray-300">Centro de distribución</span>
                  <span className="rounded-full bg-brand-orange/20 px-2 py-1 text-xs font-semibold text-brand-orangeLight">
                    Activo
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-navy-800/80 px-4 py-3">
                  <span className="text-sm text-gray-300">Flota en ruta</span>
                  <span className="text-sm font-semibold text-white">1,204 vehículos</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-navy-800/80 px-4 py-3">
                  <span className="text-sm text-gray-300">Entregas hoy</span>
                  <span className="text-sm font-semibold text-white">38,912</span>
                </div>
                <div className="rounded-lg border border-dashed border-navy-600 px-4 py-3 text-xs text-gray-400">
                  Cobertura activa en Colombia, México, Perú, Chile, Argentina y 12 países más.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
