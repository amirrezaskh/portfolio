import { ArrowUpRight, Mail, MapPin, Send } from 'lucide-react'
import { Section } from '../components/Section'
import { profile, socials } from '../data/content'

export function Contact() {
  return (
    <Section id="contact" title="contact" icon={Send}>
      <div className="rounded-xl border border-line bg-surface p-6">
        <h3 className="text-lg font-medium tracking-tight text-gv-yellow">
          Let&rsquo;s talk shop.
        </h3>
        <p className="mt-1.5 max-w-md text-[15px] leading-7 text-ink-muted">
          A line inviting people to reach out — what you are open to, and how
          quickly you tend to reply.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-5 inline-flex items-center gap-2 rounded-lg bg-gv-orange px-3.5 py-2 font-mono text-sm font-medium text-canvas transition-opacity hover:opacity-85"
        >
          <Mail className="size-4" />
          {profile.email}
        </a>

        <p className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs text-ink-faint">
          <MapPin className="size-3.5" />
          {profile.location}
        </p>

        <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-4 font-mono text-sm">
          {socials.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1.5 text-gv-blue hover:underline"
              >
                <Icon className="size-4" />
                {label.toLowerCase()}
                <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-px group-hover:translate-x-px" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
