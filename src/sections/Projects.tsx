import { ArrowRight, ArrowUpRight, ExternalLink, FolderGit2 } from 'lucide-react'
import { Section } from '../components/Section'
import { Tag } from '../components/Tag'
import { GithubIcon } from '../components/BrandIcons'
import { projects } from '../data/content'

export function Projects() {
  return (
    <Section
      id="projects"
      title="projects"
      icon={FolderGit2}
      action={
        <a
          href="https://github.com/amirrezaskh"
          className="inline-flex items-center gap-1 font-mono text-sm text-ink-faint transition-colors hover:text-gv-blue"
        >
          all projects
          <ArrowRight className="size-3.5" />
        </a>
      }
    >
      <div className="grid gap-3 sm:grid-cols-2">
        {/* An <article>, not an <a> — the repo and live links inside a card
            cannot be nested in an outer anchor. */}
        {projects.map((project) => (
          <article
            key={project.name}
            className="group flex flex-col rounded-xl border border-line p-4 transition-colors hover:border-gv-green/40 hover:bg-surface"
          >
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="text-[15px] font-medium">
                <a
                  href={project.href}
                  className="inline-flex items-center text-gv-green hover:underline"
                >
                  {project.name}
                  <ArrowUpRight className="ml-0.5 size-3.5 transition-transform group-hover:-translate-y-px group-hover:translate-x-px" />
                </a>
              </h3>
              <span className="shrink-0 font-mono text-xs text-gv-purple">
                {project.year}
              </span>
            </div>

            <p className="mt-1.5 flex-1 text-sm leading-6 text-ink-muted">
              {project.description}
            </p>

            <div className="mt-3 flex items-end justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>

              <div className="flex shrink-0 items-center gap-1">
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.name} source on GitHub`}
                    title="Source"
                    className="rounded-md p-1 text-ink-faint transition-colors hover:bg-surface-hover hover:text-ink"
                  >
                    <GithubIcon className="size-4" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.name} live site`}
                    title="Live"
                    className="rounded-md p-1 text-ink-faint transition-colors hover:bg-surface-hover hover:text-ink"
                  >
                    <ExternalLink className="size-4" />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
