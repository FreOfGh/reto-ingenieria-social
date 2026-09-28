// Capa de acceso a datos. Hoy consulta datos estáticos locales;
// en el futuro estas funciones podrán apuntar a un backend real
// (Discord Bot -> Gemini API -> Challenge Engine -> CTFd) sin cambiar
// la forma en que los componentes consumen esta API.

import { shipments, findShipment, type Shipment } from '../data/shipments'
import { policies, getPolicyBySlug, type PolicyDocument } from '../data/policies'
import { employees, type Employee } from '../data/employees'
import { company } from '../data/company'

export interface TrackingResult {
  found: boolean
  shipment: Shipment | null
}

export async function getShipmentByTrackingNumber(trackingNumber: string): Promise<TrackingResult> {
  const shipment = findShipment(trackingNumber)
  return { found: shipment !== null, shipment }
}

export async function getAllPolicies(): Promise<PolicyDocument[]> {
  return policies
}

export async function getPolicy(slug: string): Promise<PolicyDocument | null> {
  return getPolicyBySlug(slug) ?? null
}

export async function getTeam(): Promise<Employee[]> {
  return employees
}

export async function getCompanyInfo() {
  return company
}

export interface ContactFormPayload {
  name: string
  email: string
  subject: string
  message: string
}

export interface ContactFormResponse {
  success: boolean
  message: string
}

// Placeholder para una futura integración con el backend de soporte.
export async function submitContactForm(payload: ContactFormPayload): Promise<ContactFormResponse> {
  void payload
  return {
    success: true,
    message: 'Hemos recibido tu mensaje. Nuestro equipo de atención al cliente te responderá pronto.',
  }
}

export interface AllShipments {
  [trackingNumber: string]: Shipment
}

export async function getAllShipments(): Promise<AllShipments> {
  return shipments
}
