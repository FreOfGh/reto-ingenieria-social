import type { ShipmentStatus } from '../../data/shipments'

const steps: ShipmentStatus[] = [
  'Pedido creado',
  'En tránsito',
  'Centro de distribución',
  'En reparto',
  'Entregado',
]

export default function ShipmentTimeline({ currentStatus }: { currentStatus: ShipmentStatus }) {
  const currentIndex = steps.indexOf(currentStatus)

  return (
    <ol className="mt-8 flex flex-col gap-0 sm:flex-row sm:items-start sm:justify-between">
      {steps.map((step, idx) => {
        const done = idx <= currentIndex
        const isLast = idx === steps.length - 1
        return (
          <li key={step} className="relative flex flex-1 flex-col items-center text-center">
            <div className="flex w-full items-center">
              {idx !== 0 && (
                <span
                  className={`hidden h-0.5 flex-1 sm:block ${
                    idx <= currentIndex ? 'bg-brand-orange' : 'bg-gray-200'
                  }`}
                />
              )}
              <span
                className={`z-10 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
                  done ? 'bg-brand-orange text-white' : 'bg-gray-200 text-gray-500'
                }`}
              >
                {idx + 1}
              </span>
              {!isLast && (
                <span
                  className={`hidden h-0.5 flex-1 sm:block ${
                    idx < currentIndex ? 'bg-brand-orange' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
            <p className={`mt-2 text-xs font-medium sm:text-sm ${done ? 'text-navy-900' : 'text-gray-400'}`}>
              {step}
            </p>
            {!isLast && <span className="my-1 text-gray-300 sm:hidden">↓</span>}
          </li>
        )
      })}
    </ol>
  )
}
