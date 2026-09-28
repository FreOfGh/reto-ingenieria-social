import { useEffect, useRef, useState } from 'react'
import ChatMessage, { type ChatMessageData } from './ChatMessage'
import ChatInput from './ChatInput'
import { sendMessageToN8n } from './chatService'

const WELCOME_MESSAGE =
  'Hola, soy Laura Gómez, del equipo de atención al cliente de NexCargo Logistics. ¿En qué puedo ayudarte?'

const ERROR_MESSAGE =
  'No hemos podido comunicarnos con nuestro sistema de atención. Por favor, intenta nuevamente.'

let messageIdCounter = 0
function nextId() {
  messageIdCounter += 1
  return `msg-${messageIdCounter}`
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessageData[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isSending, setIsSending] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ id: nextId(), role: 'agent', text: WELCOME_MESSAGE }])
    }
  }, [isOpen, messages.length])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isSending])

  async function handleSend() {
    const text = inputValue.trim()
    if (!text || isSending) return

    setMessages((prev) => [...prev, { id: nextId(), role: 'user', text }])
    setInputValue('')
    setIsSending(true)

    try {
      const response = await sendMessageToN8n(text)
      const eligible = response.evaluation?.eligible === true
      const flag = response.success === true ? response.flag : undefined

      setMessages((prev) => [
        ...prev,
        {
          id: nextId(),
          role: 'agent',
          text: response.reply || 'Gracias por tu mensaje.',
          flag: eligible ? flag : undefined,
        },
      ])
    } catch {
      setMessages((prev) => [...prev, { id: nextId(), role: 'system', text: ERROR_MESSAGE }])
    } finally {
      setIsSending(false)
    }
  }

  return (
    <>
      {/* Botón flotante */}
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? 'Cerrar chat de soporte' : 'Abrir chat de soporte'}
        aria-expanded={isOpen}
        className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-brand-orange px-4 py-3 text-white shadow-cardHover transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-orangeDark hover:shadow-cardHover focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 sm:px-5"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="shrink-0 transition-transform duration-200 group-hover:scale-110"
        >
          <path
            d="M21 12a8 8 0 0 1-8 8H5.5a1 1 0 0 1-.8-1.6L6 16.5A8 8 0 1 1 21 12Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="hidden text-sm font-semibold sm:inline">Chat de soporte</span>
      </button>

      {/* Ventana de chat */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white sm:inset-auto sm:bottom-24 sm:right-5 sm:h-[550px] sm:w-[380px] sm:rounded-2xl sm:shadow-cardHover sm:ring-1 sm:ring-navy-700/10">
          {/* Header */}
          <div className="flex items-center justify-between rounded-t-2xl bg-navy-900 px-4 py-3 text-white">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-orange font-bold">
                LG
              </span>
              <div>
                <p className="text-sm font-semibold leading-tight">NexCargo Support</p>
                <p className="flex items-center gap-1.5 text-xs text-gray-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
                  Laura Gómez · En línea
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar chat"
              className="rounded-md p-1.5 text-gray-300 hover:bg-navy-800 hover:text-white"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Mensajes */}
          <div className="flex-1 space-y-3 overflow-y-auto bg-gray-50 px-4 py-4">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}

            {isSending && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-sm bg-gray-100 px-4 py-2 text-xs italic text-gray-500">
                  Laura está escribiendo...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <ChatInput value={inputValue} onChange={setInputValue} onSend={handleSend} disabled={isSending} />
        </div>
      )}
    </>
  )
}
