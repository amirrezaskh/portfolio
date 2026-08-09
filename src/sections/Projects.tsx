import { ArrowUpRight } from 'lucide-react'
import { Section } from '../components/Section'
import { Tag } from '../components/Tag'
import { projects } from '../data/content'

export function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      action={
        <a
          href="#"
          className="text-sm text-ink-muted transition-colors hover:text-ink"
        >
          All projects →
        </a>
      }
    >
      <div className="grid gap-3 sm:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.href}
            className="group flex flex-col rounded-xl border border-line p-4 transition-colors hover:bg-surface"
          >
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="text-[15px] font-medium">
                {project.name}
                <ArrowUpRight className="ml-0.5 inline size-3.5 text-ink-faint transition-transform group-hover:-translate-y-px group-hover:translate-x-px" />
              </h3>
              <span className="shrink-0 font-mono text-xs text-ink-faint">
                {project.year}
              </span>
            </div>

            <p className="mt-1.5 flex-1 text-sm leading-6 text-ink-muted">
              {project.description}
            </p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </a>
        ))}
      </div>
    </Section>
  )
}
