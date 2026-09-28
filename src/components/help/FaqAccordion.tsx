import { useState } from 'react'

export interface FaqItem {
  question: string
  answer: string
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="divide-y divide-gray-100 rounded-xl border border-gray-100 bg-white shadow-card">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-medium text-navy-900">{item.question}</span>
              <span
                className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-transform ${
                  isOpen ? 'rotate-45 bg-brand-orange text-white' : ''
                }`}
              >
                +
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-5 text-sm leading-relaxed text-gray-600 sm:text-base">{item.answer}</div>
            )}
          </div>
        )
      })}
    </div>
  )
}
