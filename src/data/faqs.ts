export interface FaqEntry {
  question: string
  answer: string
}

export const helpFaqs: FaqEntry[] = [
  {
    question: '¿Cómo puedo rastrear mi pedido?',
    answer:
      'Ingresa a la sección de Rastreo y escribe tu número de guía, por ejemplo NC-48291. Podrás ver el estado actual, la fecha estimada de entrega y el historial completo de tu envío.',
  },
  {
    question: '¿Cuándo puedo solicitar un reembolso?',
    answer:
      'Las condiciones para solicitar un reembolso dependen del tipo de incidencia (retraso, daño o pérdida del paquete). Te recomendamos revisar nuestra sección de Políticas, particularmente la Política de Reembolsos, para conocer los plazos y el momento correcto para presentar tu solicitud.',
  },
  {
    question: '¿Qué ocurre si mi paquete llega tarde?',
    answer:
      'Si tu envío presenta un retraso frente a la fecha estimada de entrega, puedes contactar a nuestro equipo de atención al cliente. Las condiciones específicas sobre cuánto retraso da derecho a un reembolso y en qué momento debe solicitarse están detalladas en la Política de Reembolsos.',
  },
  {
    question: '¿Tengo que devolver un paquete reembolsado?',
    answer:
      'En general, sí, salvo algunas excepciones. El procedimiento estándar de devolución se explica en la Política de Devoluciones, y las condiciones bajo las cuales podría no aplicar dicha obligación están descritas en la Política de Reembolsos.',
  },
  {
    question: '¿Qué hago si recibo un paquete dañado?',
    answer:
      'Repórtalo dentro de las 48 horas siguientes a la entrega a través de nuestro formulario de contacto, adjuntando fotografías del paquete. Nuestro equipo evaluará tu caso conforme a la Política de Paquetes Dañados.',
  },
  {
    question: '¿Puedo cancelar mi pedido después de comprarlo?',
    answer:
      'Sí, siempre que el paquete no haya sido despachado del centro de distribución de origen. Consulta la sección de Cancelaciones dentro de la Política de Reembolsos para más detalles.',
  },
]
