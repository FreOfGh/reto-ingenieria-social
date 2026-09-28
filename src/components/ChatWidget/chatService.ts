/**
 * Configuración del chat de soporte NexCargo.
 *
 * El frontend NUNCA habla directamente con Gemini. Todos los mensajes se
 * envían a un webhook de n8n, que es quien orquesta la conversación con
 * Gemini y devuelve una respuesta ya procesada.
 *
 * IMPORTANTE (CORS):
 * Como este endpoint será llamado desde el navegador, el workflow de n8n
 * debe responder a las peticiones (incluido el preflight OPTIONS) con:
 *   Access-Control-Allow-Origin: <origen de este sitio> (o '*' en pruebas)
 *   Access-Control-Allow-Methods: POST, OPTIONS
 *   Access-Control-Allow-Headers: Content-Type
 * En el nodo "Webhook" de n8n, activa la opción "Respond to Webhook" con
 * un nodo que incluya esos headers, o habilita CORS en la configuración
 * del nodo Webhook si tu versión de n8n lo soporta nativamente.
 */
export const N8N_WEBHOOK_URL = 'URL_DEL_WEBHOOK_N8N'

const SESSION_STORAGE_KEY = 'nexcargo_chat_session_id'

export interface ChatEvaluation {
  eligible?: boolean
}

export interface N8nChatResponse {
  reply?: string
  evaluation?: ChatEvaluation
  success?: boolean
  flag?: string
}

/** Obtiene (o crea) un sessionId estable para la conversación actual. */
export function getSessionId(): string {
  try {
    const existing = window.localStorage.getItem(SESSION_STORAGE_KEY)
    if (existing) return existing

    const generated =
      typeof crypto !== 'undefined' && 'randomUUID' in crypto
        ? crypto.randomUUID()
        : `sess-${Date.now()}-${Math.random().toString(36).slice(2)}`

    window.localStorage.setItem(SESSION_STORAGE_KEY, generated)
    return generated
  } catch {
    // localStorage no disponible: generamos un id efímero en memoria.
    return `sess-${Date.now()}-${Math.random().toString(36).slice(2)}`
  }
}

/**
 * Envía un mensaje del usuario al webhook de n8n y devuelve la respuesta
 * ya normalizada. Lanza un error genérico ante cualquier fallo de red o
 * de formato, sin exponer detalles internos.
 */
export async function sendMessageToN8n(message: string): Promise<N8nChatResponse> {
  const payload = {
    sessionId: getSessionId(),
    message,
    timestamp: new Date().toISOString(),
    source: 'nexcargo-web',
  }

  let response: Response
  try {
    response = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
  } catch {
    throw new Error('No hemos podido comunicarnos con nuestro sistema de atención. Por favor, intenta nuevamente.')
  }

  if (!response.ok) {
    throw new Error('No hemos podido comunicarnos con nuestro sistema de atención. Por favor, intenta nuevamente.')
  }

  try {
    const data = (await response.json()) as N8nChatResponse
    return data
  } catch {
    throw new Error('No hemos podido comunicarnos con nuestro sistema de atención. Por favor, intenta nuevamente.')
  }
}
