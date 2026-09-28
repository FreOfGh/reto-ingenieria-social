import type { Employee } from '../../data/employees'

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export default function TeamCard({ employee }: { employee: Employee }) {
  return (
    <div className="group rounded-xl border border-gray-100 bg-white p-6 text-center shadow-card transition-all hover:-translate-y-1 hover:shadow-cardHover">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-navy-900 text-lg font-bold text-white transition-colors group-hover:bg-brand-orange">
        {initials(employee.name)}
      </div>
      <h3 className="mt-4 font-semibold text-navy-900">{employee.name}</h3>
      <p className="text-sm font-medium text-brand-orange">{employee.role}</p>
      <p className="mt-2 text-xs text-gray-500">{employee.department}</p>
      <p className="mt-3 text-sm text-gray-600">{employee.bio}</p>
    </div>
  )
}
