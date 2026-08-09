import { ArrowRight, ArrowUpRight, Calendar, Clock, PenLine } from 'lucide-react'
import { Section } from '../components/Section'
import { posts } from '../data/content'

export function Writing() {
  return (
    <Section
      id="writing"
      title="writing"
      icon={PenLine}
      action={
        <a
          href="#"
          className="inline-flex items-center gap-1 font-mono text-sm text-ink-faint transition-colors hover:text-gv-blue"
        >
          all posts
          <ArrowRight className="size-3.5" />
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
                <h3 className="text-[15px] font-medium text-gv-green">
                  {post.title}
                  <ArrowUpRight className="ml-0.5 inline size-3.5 transition-transform group-hover:-translate-y-px group-hover:translate-x-px" />
                </h3>
                <span className="flex shrink-0 items-center gap-3 font-mono text-xs text-gv-purple">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="size-3.5" />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="size-3.5" />
                    {post.readingTime}
                  </span>
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
