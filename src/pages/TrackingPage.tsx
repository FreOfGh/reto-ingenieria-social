import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Breadcrumbs from '../components/common/Breadcrumbs'
import LoadingSpinner from '../components/common/LoadingSpinner'
import ShipmentTimeline from '../components/tracking/ShipmentTimeline'
import { getShipmentByTrackingNumber } from '../api/client'
import type { Shipment } from '../data/shipments'

function formatDate(dateStr: string | null): string {
  if (!dateStr) return 'Por definir'
  const date = new Date(`${dateStr}T00:00:00`)
  return date.toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function TrackingPage() {
  const [searchParams] = useSearchParams()
  const [input, setInput] = useState(searchParams.get('nc') ?? '')
  const [loading, setLoading] = useState(false)
  const [searched, setSearched] = useState(false)
  const [result, setResult] = useState<Shipment | null>(null)

  async function runSearch(value: string) {
    if (!value.trim()) return
    setLoading(true)
    setSearched(true)
    const { shipment } = await getShipmentByTrackingNumber(value)
    setResult(shipment)
    setLoading(false)
  }

  useEffect(() => {
    const initial = searchParams.get('nc')
    if (initial) {
      void runSearch(initial)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    void runSearch(input)
  }

  return (
    <>
      <Breadcrumbs items={[{ label: 'Inicio', to: '/' }, { label: 'Rastreo' }]} />

      <section className="bg-navy-900 py-14 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold sm:text-4xl">Rastrea tu envío</h1>
          <p className="mt-3 text-gray-300">
            Ingresa tu número de guía para consultar el estado actual de tu pedido.
          </p>

          <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ej. NC-48291"
              className="w-full rounded-lg border-0 px-4 py-3 text-navy-900 shadow-card focus:outline-none focus:ring-2 focus:ring-brand-orange"
            />
            <button
              type="submit"
              className="rounded-lg bg-brand-orange px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-orangeDark"
            >
              Rastrear
            </button>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {loading && <LoadingSpinner label="Consultando el estado de tu envío..." />}

        {!loading && searched && !result && (
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-8 text-center">
            <p className="text-lg font-semibold text-navy-900">No encontramos ese número de guía</p>
            <p className="mt-2 text-sm text-gray-600">
              Verifica que el número de seguimiento esté escrito correctamente, por ejemplo: NC-48291.
            </p>
          </div>
        )}

        {!loading && result && (
          <div className="animate-fadeInUp rounded-2xl border border-gray-100 bg-white p-6 shadow-card sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-6">
              <div>
                <p className="text-sm text-gray-500">Pedido</p>
                <p className="text-2xl font-bold text-navy-900">{result.trackingNumber}</p>
              </div>
              <span className="rounded-full bg-brand-orange/10 px-4 py-2 text-sm font-semibold text-brand-orangeDark">
                {result.status}
              </span>
            </div>

            <ShipmentTimeline currentStatus={result.status} />

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Fecha estimada</p>
                <p className="mt-1 text-navy-900">{formatDate(result.estimatedDeliveryDate)}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Fecha de entrega</p>
                <p className="mt-1 text-navy-900">{formatDate(result.actualDeliveryDate)}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Destinatario</p>
                <p className="mt-1 text-navy-900">{result.recipient}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Servicio</p>
                <p className="mt-1 text-navy-900">{result.service}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Origen</p>
                <p className="mt-1 text-navy-900">{result.origin}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Destino</p>
                <p className="mt-1 text-navy-900">{result.destination}</p>
              </div>
            </div>
          </div>
        )}

        {!searched && !loading && (
          <div className="rounded-xl border border-dashed border-gray-200 p-8 text-center text-sm text-gray-500">
            Ingresa un número de guía para ver el detalle de tu envío.
          </div>
        )}
      </section>
    </>
  )
}
