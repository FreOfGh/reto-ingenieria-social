export interface Employee {
  id: string
  name: string
  role: string
  department: string
  bio: string
  photo?: string
}

export const employees: Employee[] = [
  {
    id: 'laura-gomez',
    name: 'Laura Gómez',
    role: 'Directora de Atención al Cliente',
    department: 'Servicio al cliente',
    bio: 'Laura lidera el equipo de atención al cliente de NexCargo desde 2017, enfocada en mejorar los tiempos de respuesta y la satisfacción de los usuarios.',
  },
  {
    id: 'carlos-ramirez',
    name: 'Carlos Ramírez',
    role: 'Gerente de Operaciones',
    department: 'Operaciones',
    bio: 'Carlos supervisa la red de centros de distribución de NexCargo, garantizando la eficiencia operativa en más de 40 sedes.',
  },
  {
    id: 'andres-torres',
    name: 'Andrés Torres',
    role: 'Director de Tecnología',
    department: 'Tecnología',
    bio: 'Andrés impulsa la transformación digital de NexCargo, incluyendo el sistema de rastreo en tiempo real y la plataforma de atención automatizada.',
  },
  {
    id: 'mariana-lopez',
    name: 'Mariana López',
    role: 'Directora Financiera',
    department: 'Finanzas',
    bio: 'Mariana supervisa la política de reembolsos y la gestión financiera de la compañía desde 2019.',
  },
  {
    id: 'javier-santos',
    name: 'Javier Santos',
    role: 'Gerente de Cumplimiento y Políticas',
    department: 'Legal y cumplimiento',
    bio: 'Javier es responsable de la redacción y actualización de los términos de servicio y políticas corporativas de NexCargo.',
  },
  {
    id: 'valentina-cruz',
    name: 'Valentina Cruz',
    role: 'Fundadora y CEO',
    department: 'Dirección general',
    bio: 'Valentina fundó NexCargo Logistics en 2009 con el objetivo de modernizar la industria del transporte de paquetería en Latinoamérica.',
  },
]
