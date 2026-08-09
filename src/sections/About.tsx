import { ArrowUpRight, Mail } from 'lucide-react'
import { profile, socials } from '../data/content'

export function About() {
  return (
    <section id="about" className="py-14 sm:py-20">
      <div className="flex flex-col-reverse gap-8 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
        <div className="min-w-0 flex-1">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {profile.name}
          </h1>
          <p className="mt-2 text-[15px] text-ink-muted">
            {profile.role}
            <span className="px-1.5 text-ink-faint">·</span>
            {profile.location}
          </p>

          <p className="mt-5 text-[15px] leading-7 text-ink-muted">
            {profile.intro}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-2">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 rounded-lg bg-ink px-3 py-1.5 text-sm font-medium text-canvas transition-opacity hover:opacity-85"
            >
              <Mail className="size-3.5" />
              Get in touch
            </a>
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center gap-1 rounded-lg border border-line px-3 py-1.5 text-sm text-ink-muted transition-colors hover:bg-surface hover:text-ink"
            >
              Résumé
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </div>

        {/* Portrait is cropped from the top so the frame keeps the face. */}
        <img
          src={profile.photo}
          alt={profile.name}
          width={176}
          height={220}
          className="aspect-4/5 w-32 shrink-0 rounded-xl border border-line object-cover object-top sm:w-44"
        />
      </div>

      <div className="mt-10 space-y-4 text-[15px] leading-7 text-ink-muted">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
        {socials.map((social) => (
          <li key={social.label}>
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-0.5 text-sm text-ink-muted underline decoration-line underline-offset-4 transition-colors hover:text-ink hover:decoration-ink-faint"
            >
              {social.label}
              <ArrowUpRight className="size-3.5 text-ink-faint transition-transform group-hover:-translate-y-px group-hover:translate-x-px" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
