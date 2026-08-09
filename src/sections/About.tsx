import { ArrowUpRight, Briefcase, FileText, Mail, MapPin } from 'lucide-react'
import { profile, socials } from '../data/content'

export function About() {
  return (
    <section id="about" className="py-14 sm:py-20">
      <div className="flex flex-col-reverse gap-8 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
        <div className="min-w-0 flex-1">
          <p className="mb-3 font-mono text-sm text-ink-faint">
            <span className="mr-1.5 text-gv-green select-none">$</span>
            whoami
          </p>

          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {profile.name}
          </h1>

          <p className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-sm">
            <span className="inline-flex items-center gap-1.5 text-gv-yellow">
              <Briefcase className="size-3.5" />
              {profile.role}
            </span>
            <span className="inline-flex items-center gap-1.5 text-ink-muted">
              <MapPin className="size-3.5" />
              {profile.location}
            </span>
          </p>

          <p className="mt-5 text-[15px] leading-7 text-ink-muted">
            {profile.intro}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-2">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 rounded-lg bg-gv-orange px-3 py-1.5 font-mono text-sm font-medium text-canvas transition-opacity hover:opacity-85"
            >
              <Mail className="size-3.5" />
              get in touch
            </a>
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center gap-1.5 rounded-lg border border-line px-3 py-1.5 font-mono text-sm text-ink-muted transition-colors hover:bg-surface hover:text-ink"
            >
              <FileText className="size-3.5" />
              résumé
            </a>
          </div>
        </div>

        {/* Portrait is cropped from the top so the frame keeps the face. */}
        <img
          src={profile.photo}
          alt={profile.name}
          width={240}
          height={300}
          className="aspect-4/5 w-40 shrink-0 rounded-xl border border-line object-cover object-top sm:w-48 md:w-60"
        />
      </div>

      <div className="mt-10 space-y-4 text-[15px] leading-7 text-ink-muted">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 font-mono text-sm">
        {socials.map(({ label, href, icon: Icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1.5 text-gv-blue underline decoration-line underline-offset-4 transition-colors hover:decoration-gv-blue"
            >
              <Icon className="size-4" />
              {label.toLowerCase()}
              <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-px group-hover:translate-x-px" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
