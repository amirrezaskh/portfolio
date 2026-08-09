import { profile } from '../data/content'

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <p className="text-xs text-ink-faint">
        © {new Date().getFullYear()} {profile.name}
        <span className="px-1.5">·</span>
        Built with React &amp; Tailwind
      </p>
    </footer>
  )
}
