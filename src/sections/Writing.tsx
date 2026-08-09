import { ArrowUpRight } from 'lucide-react'
import { Section } from '../components/Section'
import { posts } from '../data/content'

export function Writing() {
  return (
    <Section
      id="writing"
      title="Writing"
      action={
        <a
          href="#"
          className="text-sm text-ink-muted transition-colors hover:text-ink"
        >
          All posts →
        </a>
      }
    >
      <ul className="divide-y divide-line border-y border-line">
        {posts.map((post) => (
          <li key={post.title}>
            <a
              href={post.href}
              className="group -mx-3 flex flex-col gap-1 px-3 py-3.5 transition-colors hover:bg-surface"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-[15px] font-medium">
                  {post.title}
                  <ArrowUpRight className="ml-0.5 inline size-3.5 text-ink-faint transition-transform group-hover:-translate-y-px group-hover:translate-x-px" />
                </h3>
                <span className="shrink-0 font-mono text-xs text-ink-faint">
                  {post.date}
                  <span className="px-1.5">·</span>
                  {post.readingTime}
                </span>
              </div>
              <p className="text-sm leading-6 text-ink-muted">{post.excerpt}</p>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
