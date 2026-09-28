export default function LoadingSpinner({ label = 'Cargando...' }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-16 text-gray-500">
      <span className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-brand-orange" />
      <p className="text-sm font-medium animate-pulseSoft">{label}</p>
    </div>
  )
}
