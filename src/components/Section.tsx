import type { ReactNode } from 'react'
import type { IconComponent } from '../data/content'

type SectionProps = {
  id: string
  title: string
  icon: IconComponent
  /** Optional link or control rendered opposite the title. */
  action?: ReactNode
  children: ReactNode
}

export function Section({ id, title, icon: Icon, action, children }: SectionProps) {
  return (
    <section id={id} className="border-t border-line py-14">
      <header className="mb-7 flex items-baseline justify-between gap-4">
        <h2 className="flex items-center gap-2 font-mono text-sm font-medium lowercase text-gv-aqua">
          <Icon className="size-4" />
          {title}
        </h2>
        {action}
      </header>
      {children}
    </section>
  )
}
