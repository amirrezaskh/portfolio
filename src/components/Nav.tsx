import { useActiveSection } from '../lib/use-active-section'
import { profile, sections } from '../data/content'
import { ThemeToggle } from './ThemeToggle'

const SECTION_IDS = sections.map((section) => section.id)

export function Nav() {
  const active = useActiveSection(SECTION_IDS)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/80 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-3xl items-center justify-between gap-4 px-6">
        <a
          href="#about"
          className="shrink-0 text-sm font-medium tracking-tight hover:text-ink-muted"
        >
          {profile.name}
        </a>

        <div className="flex items-center gap-1">
          <ul className="hidden items-center gap-0.5 sm:flex">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  aria-current={active === section.id ? 'true' : undefined}
                  className={`rounded-md px-2.5 py-1.5 text-sm transition-colors ${
                    active === section.id
                      ? 'bg-surface text-ink'
                      : 'text-ink-muted hover:bg-surface hover:text-ink'
                  }`}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="ml-1.5">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  )
}
