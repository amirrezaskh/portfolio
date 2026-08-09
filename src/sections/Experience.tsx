import { ArrowUpRight } from 'lucide-react'
import { Section } from '../components/Section'
import { Tag } from '../components/Tag'
import { experiences } from '../data/content'

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-1">
        {experiences.map((item) => (
          <li key={`${item.company}-${item.period}`}>
            <div className="-mx-3 rounded-lg px-3 py-3 transition-colors hover:bg-surface">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-[15px] font-medium">
                  {item.role}
                  <span className="px-1.5 text-ink-faint">·</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-0.5 text-ink-muted hover:text-ink"
                    >
                      {item.company}
                      <ArrowUpRight className="size-3.5 text-ink-faint transition-transform group-hover:-translate-y-px group-hover:translate-x-px" />
                    </a>
                  ) : (
                    <span className="text-ink-muted">{item.company}</span>
                  )}
                </h3>
                <span className="shrink-0 font-mono text-xs text-ink-faint">
                  {item.period}
                </span>
              </div>

              <p className="mt-1.5 text-sm leading-6 text-ink-muted">
                {item.summary}
              </p>

              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
