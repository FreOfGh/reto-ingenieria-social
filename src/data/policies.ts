export interface PolicySection {
  heading: string
  paragraphs: string[]
}

export interface PolicyDocument {
  id: string
  slug: string
  title: string
  lastUpdated: string
  summary: string
  sections: PolicySection[]
}

export const policies: PolicyDocument[] = [
  {
    id: 'privacy',
    slug: 'privacidad',
    title: 'Política de Privacidad',
    lastUpdated: '2026-01-15',
    summary:
      'Cómo NexCargo Logistics recopila, utiliza y protege la información personal de sus clientes y usuarios.',
    sections: [
      {
        heading: '1. Información que recopilamos',
        paragraphs: [
          'NexCargo Logistics recopila datos personales necesarios para la prestación del servicio de transporte y mensajería, incluyendo nombre completo, dirección de origen y destino, número de contacto, correo electrónico y datos relacionados con el contenido declarado del envío.',
          'Adicionalmente, se recopila información técnica de navegación (dirección IP, tipo de dispositivo y cookies) cuando el usuario interactúa con nuestro sitio web y herramientas de rastreo.',
        ],
      },
      {
        heading: '2. Uso de la información',
        paragraphs: [
          'La información recopilada se utiliza exclusivamente para la gestión de envíos, atención al cliente, facturación, prevención de fraude y mejora continua de nuestros servicios logísticos.',
          'NexCargo no vende ni alquila la información personal de sus usuarios a terceros con fines comerciales.',
        ],
      },
      {
        heading: '3. Conservación de datos',
        paragraphs: [
          'Los datos asociados a un envío se conservan durante un período de cinco (5) años contados a partir de la fecha de entrega, con el fin de dar soporte a procesos de reembolso, auditoría o requerimientos legales.',
        ],
      },
      {
        heading: '4. Derechos del titular',
        paragraphs: [
          'Todo cliente puede solicitar el acceso, la rectificación o la eliminación de sus datos personales escribiendo a support@nexcargo.local, salvo cuando exista una obligación legal de conservar dicha información.',
        ],
      },
    ],
  },
  {
    id: 'terms',
    slug: 'terminos-de-servicio',
    title: 'Términos de Servicio',
    lastUpdated: '2026-02-01',
    summary: 'Condiciones generales que rigen la relación contractual entre NexCargo Logistics y sus clientes.',
    sections: [
      {
        heading: '1. Aceptación de los términos',
        paragraphs: [
          'Al contratar cualquier servicio de transporte con NexCargo Logistics, el cliente acepta los presentes Términos de Servicio, así como las políticas complementarias publicadas en esta sección, incluyendo la Política de Envíos, la Política de Devoluciones y la Política de Reembolsos.',
        ],
      },
      {
        heading: '2. Responsabilidad del remitente',
        paragraphs: [
          'El remitente es responsable de declarar con veracidad el contenido, peso y valor del paquete. NexCargo se reserva el derecho de inspeccionar envíos que incumplan la normativa de transporte vigente.',
        ],
      },
      {
        heading: '3. Modificaciones',
        paragraphs: [
          'NexCargo Logistics podrá actualizar estos términos y las políticas asociadas en cualquier momento. Los cambios se entenderán notificados una vez publicados en el sitio web oficial.',
        ],
      },
      {
        heading: '4. Jurisdicción',
        paragraphs: [
          'Estos términos se rigen por las leyes de la República de Colombia. Cualquier controversia será resuelta ante los tribunales competentes de Bogotá D.C.',
        ],
      },
    ],
  },
  {
    id: 'shipping',
    slug: 'envios',
    title: 'Política de Envíos',
    lastUpdated: '2026-02-10',
    summary: 'Condiciones sobre tiempos de tránsito, fechas estimadas de entrega y responsabilidades durante el transporte.',
    sections: [
      {
        heading: '1. Fecha estimada de entrega',
        paragraphs: [
          'Al momento de generar un envío, NexCargo asigna una fecha estimada de entrega calculada según el origen, el destino y el tipo de servicio contratado (estándar o express). Esta fecha se informa al cliente en la confirmación del pedido y es visible en todo momento a través del sistema de rastreo en línea.',
          'La fecha estimada de entrega es una proyección basada en condiciones normales de operación y no constituye una garantía absoluta de entrega en ese día exacto.',
        ],
      },
      {
        heading: '2. Entrega efectiva',
        paragraphs: [
          'Se considera "entrega efectiva" el momento en que el paquete es recibido físicamente por el destinatario o por una persona autorizada en la dirección de destino, y dicho evento queda registrado en el sistema de rastreo con el estado "Entregado".',
          'Mientras un pedido se encuentre en los estados "Pedido creado", "En tránsito", "Centro de distribución" o "En reparto", no se considera que haya ocurrido la entrega efectiva, independientemente del tiempo que el paquete lleve en camino.',
        ],
      },
      {
        heading: '3. Embalaje y manipulación',
        paragraphs: [
          'Todos los paquetes son manipulados conforme a los estándares de manejo de carga de NexCargo. Se recomienda a los remitentes utilizar embalaje adecuado para artículos frágiles.',
        ],
      },
    ],
  },
  {
    id: 'refunds',
    slug: 'reembolsos',
    title: 'Política de Reembolsos',
    lastUpdated: '2026-02-14',
    summary: 'Condiciones bajo las cuales un cliente puede solicitar y obtener el reembolso del valor de su envío.',
    sections: [
      {
        heading: '4. Retrasos en la entrega',
        paragraphs: [
          'Los clientes podrán solicitar un reembolso completo del valor pagado por el envío cuando este experimente un retraso superior a setenta y dos (72) horas respecto de la fecha estimada de entrega comunicada al momento de la compra.',
          'El retraso se debe comunicar a nuestros asistentes por los canales oficiales esto con el fin de realizar el desembolso de manera inmediata una vez se comunique la situación.',
        ],
      },
      {
        heading: '5. Cancelaciones',
        paragraphs: [
          'Un pedido puede cancelarse sin costo alguno siempre que la solicitud se realice antes de que el paquete sea despachado del centro de distribución de origen. Una vez despachado, la cancelación se rige por la presente Política de Reembolsos.',
        ],
      },
      {
        heading: '6. Momento de la solicitud de reembolso',
        paragraphs: [
          'Toda solicitud de reembolso motivada por retraso deberá registrarse a través de los canales oficiales de atención al cliente antes de que se registre la entrega efectiva del paquete conforme a la definición establecida en la Política de Envíos.',
          'Las solicitudes de reembolso recibidas después de la entrega efectiva del paquete no se descartan automáticamente, pero serán evaluadas conforme a las condiciones adicionales descritas en la Política de Devoluciones.',
        ],
      },
      {
        heading: '7. Excepciones al proceso de devolución',
        paragraphs: [
          'Como regla general, la aprobación de un reembolso sobre un pedido que ya fue entregado genera para el cliente la obligación de devolver el paquete recibido, conforme a lo indicado en la Política de Devoluciones.',
          'No obstante, cuando una solicitud de reembolso por retraso haya sido registrada y aprobada por el equipo de atención al cliente antes de que se registrara la entrega efectiva del paquete, el cliente no estará obligado a devolver posteriormente el envío recibido, en la medida en que la aprobación se produjo mientras el pedido aún no había sido entregado en los términos de la Política de Envíos.',
        ],
      },
      {
        heading: '8. Medio de reembolso',
        paragraphs: [
          'Los reembolsos aprobados se realizan mediante el mismo método de pago utilizado en la compra original, dentro de un plazo de 5 a 10 días hábiles.',
        ],
      },
    ],
  },
  {
    id: 'returns',
    slug: 'devoluciones',
    title: 'Política de Devoluciones',
    lastUpdated: '2026-02-14',
    summary: 'Condiciones para la devolución física de paquetes asociados a un reembolso aprobado.',
    sections: [
      {
        heading: '9. Obligación general de devolución',
        paragraphs: [
          'Salvo que se indique una excepción expresa en la Política de Reembolsos, todo cliente que reciba un reembolso sobre un pedido ya entregado deberá devolver el paquete recibido dentro de los quince (15) días calendario siguientes a la aprobación del reembolso, utilizando la guía de devolución prepagada suministrada por NexCargo.',
          'El incumplimiento de esta obligación general puede dar lugar al cobro retroactivo del valor reembolsado.',
        ],
      },
      {
        heading: '10. Estado del artículo devuelto',
        paragraphs: [
          'Cuando aplique la obligación de devolución, el artículo deberá devolverse en el mismo estado en que fue recibido, con su embalaje original cuando sea posible.',
        ],
      },
      {
        heading: '11. Casos especiales',
        paragraphs: [
          'Los reembolsos derivados de paquetes dañados o perdidos se rigen por la Política de Paquetes Dañados y no requieren devolución cuando el artículo no pueda recuperarse físicamente.',
          'Para cualquier otro caso no contemplado expresamente, el equipo de Atención al Cliente evaluará la solicitud conforme al conjunto de políticas publicadas en este sitio.',
        ],
      },
    ],
  },
  {
    id: 'damaged',
    slug: 'paquetes-danados',
    title: 'Política de Paquetes Dañados',
    lastUpdated: '2026-01-20',
    summary: 'Procedimiento para reportar y gestionar paquetes que presenten daños durante el transporte.',
    sections: [
      {
        heading: '1. Reporte de daños',
        paragraphs: [
          'El destinatario debe reportar cualquier daño visible en el paquete dentro de las 48 horas siguientes a la entrega, adjuntando fotografías del embalaje y del contenido a través del formulario de contacto o la línea de atención al cliente.',
        ],
      },
      {
        heading: '2. Evaluación',
        paragraphs: [
          'NexCargo evaluará el reporte junto con el registro de manipulación del paquete durante el transporte. Los reportes presentados fuera del plazo establecido podrán ser rechazados.',
        ],
      },
      {
        heading: '3. Resolución',
        paragraphs: [
          'Dependiendo del resultado de la evaluación, NexCargo podrá ofrecer un reembolso parcial o total, o la reposición del envío, sin que se requiera la devolución física del artículo dañado cuando este no tenga valor de reventa.',
        ],
      },
    ],
  },
  {
    id: 'faq-legal',
    slug: 'preguntas-frecuentes',
    title: 'Preguntas Frecuentes sobre Políticas',
    lastUpdated: '2026-02-14',
    summary: 'Aclaraciones adicionales sobre la aplicación de nuestras políticas de envío, devoluciones y reembolsos.',
    sections: [
      {
        heading: '¿Qué se entiende por "entrega efectiva"?',
        paragraphs: [
          'Es el momento en que el sistema de rastreo registra el estado "Entregado" para un pedido, tal como se define en la Política de Envíos.',
        ],
      },
      {
        heading: '¿Todas las solicitudes de reembolso requieren devolver el paquete?',
        paragraphs: [
          'No en todos los casos. La necesidad de devolución depende del tipo de reembolso y del momento en que este fue aprobado, conforme a lo establecido en la Política de Reembolsos y la Política de Devoluciones.',
        ],
      },
      {
        heading: '¿Qué pasa si mi pedido ya fue entregado pero considero que hubo un retraso?',
        paragraphs: [
          'Puedes contactar a nuestro equipo de atención al cliente para que evalúe tu caso particular conforme a las políticas vigentes al momento en que se generó tu pedido.',
        ],
      },
    ],
  },
]

export function getPolicyBySlug(slug: string): PolicyDocument | undefined {
  return policies.find((policy) => policy.slug === slug)
}
