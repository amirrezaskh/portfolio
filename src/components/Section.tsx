import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  title: string
  /** Optional link or control rendered opposite the title. */
  action?: ReactNode
  children: ReactNode
}

export function Section({ id, title, action, children }: SectionProps) {
  return (
    <section id={id} className="border-t border-line py-14">
      <header className="mb-7 flex items-baseline justify-between gap-4">
        <h2 className="text-xs font-medium uppercase tracking-[0.14em] text-ink-faint">
          {title}
        </h2>
        {action}
      </header>
      {children}
    </section>
  )
}
