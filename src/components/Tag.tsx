export function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-md bg-surface px-1.5 py-0.5 text-xs text-ink-muted">
      {children}
    </span>
  )
}
