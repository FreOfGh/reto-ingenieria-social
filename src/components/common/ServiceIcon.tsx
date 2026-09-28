const icons: Record<string, React.ReactNode> = {
  truck: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 7h11v9H3z" strokeLinejoin="round" />
      <path d="M14 11h4l3 3v2h-7z" strokeLinejoin="round" />
      <circle cx="7.5" cy="18" r="1.6" />
      <circle cx="17.5" cy="18" r="1.6" />
    </svg>
  ),
  globe: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
    </svg>
  ),
  warehouse: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 10l9-6 9 6v9a1 1 0 01-1 1H4a1 1 0 01-1-1z" strokeLinejoin="round" />
      <path d="M9 20v-6h6v6" />
    </svg>
  ),
  zap: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M13 2 4 14h6l-1 8 9-12h-6z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  ),
}

export default function ServiceIcon({ name }: { name: string }) {
  return <>{icons[name] ?? icons.truck}</>
}
