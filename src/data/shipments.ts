export type ShipmentStatus =
  | 'Pedido creado'
  | 'En tránsito'
  | 'Centro de distribución'
  | 'En reparto'
  | 'Entregado'

export interface ShipmentEvent {
  status: ShipmentStatus
  date: string
  location: string
}

export interface Shipment {
  trackingNumber: string
  status: ShipmentStatus
  estimatedDeliveryDate: string
  actualDeliveryDate: string | null
  recipient: string
  origin: string
  destination: string
  weightKg: number
  service: string
  history: ShipmentEvent[]
}

export const shipments: Record<string, Shipment> = {
  'NC-48291': {
    trackingNumber: 'NC-48291',
    status: 'Entregado',
    estimatedDeliveryDate: '2026-09-10',
    actualDeliveryDate: '2026-09-14',
    recipient: 'Daniel Martínez',
    origin: 'Medellín, Colombia',
    destination: 'Bogotá, Colombia',
    weightKg: 3.2,
    service: 'Envío estándar',
    history: [
      { status: 'Pedido creado', date: '2026-09-05', location: 'Medellín, Colombia' },
      { status: 'En tránsito', date: '2026-09-06', location: 'Medellín, Colombia' },
      { status: 'Centro de distribución', date: '2026-09-08', location: 'Bogotá, Colombia' },
      { status: 'En reparto', date: '2026-09-13', location: 'Bogotá, Colombia' },
      { status: 'Entregado', date: '2026-09-14', location: 'Bogotá, Colombia' },
    ],
  },
  'NC-10233': {
    trackingNumber: 'NC-10233',
    status: 'En tránsito',
    estimatedDeliveryDate: '2026-09-18',
    actualDeliveryDate: null,
    recipient: 'Camila Rojas',
    origin: 'Ciudad de México, México',
    destination: 'Guadalajara, México',
    weightKg: 1.1,
    service: 'Envío express',
    history: [
      { status: 'Pedido creado', date: '2026-09-14', location: 'Ciudad de México, México' },
      { status: 'En tránsito', date: '2026-09-15', location: 'Ciudad de México, México' },
    ],
  },
  'NC-77120': {
    trackingNumber: 'NC-77120',
    status: 'Centro de distribución',
    estimatedDeliveryDate: '2026-09-16',
    actualDeliveryDate: null,
    recipient: 'Jorge Salazar',
    origin: 'Lima, Perú',
    destination: 'Arequipa, Perú',
    weightKg: 5.4,
    service: 'Envío estándar',
    history: [
      { status: 'Pedido creado', date: '2026-09-10', location: 'Lima, Perú' },
      { status: 'En tránsito', date: '2026-09-11', location: 'Lima, Perú' },
      { status: 'Centro de distribución', date: '2026-09-13', location: 'Arequipa, Perú' },
    ],
  },
}

export function findShipment(trackingNumber: string): Shipment | null {
  const normalized = trackingNumber.trim().toUpperCase()
  return shipments[normalized] ?? null
}
