export type ChatRole = 'user' | 'agent' | 'system'

export interface ChatMessageData {
  id: string
  role: ChatRole
  text: string
  flag?: string
}

interface ChatMessageProps {
  message: ChatMessageData
}

/**
 * Renderiza un único mensaje del chat. Todo el texto se pasa como
 * children de React (equivalente a textContent), nunca via innerHTML,
 * para evitar inyección de HTML/JS proveniente del usuario o de n8n.
 */
export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user'

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm shadow-sm ${
          isUser
            ? 'rounded-br-sm bg-brand-orange text-white'
            : 'rounded-bl-sm bg-gray-100 text-navy-900'
        }`}
      >
        <p className="whitespace-pre-wrap break-words">{message.text}</p>

        {message.flag && (
          <div className="mt-2 rounded-lg border border-emerald-300 bg-emerald-50 px-3 py-2 text-xs text-emerald-800">
            <p className="font-semibold">✅ Solicitud procesada correctamente</p>
            <p className="mt-1 break-all font-mono">{message.flag}</p>
          </div>
        )}
      </div>
    </div>
  )
}
