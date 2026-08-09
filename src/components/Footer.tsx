import { profile } from '../data/content'

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      {/* Trailing comment at the end of the file. */}
      <p className="font-mono text-xs text-ink-faint">
        <span className="select-none">{'// '}</span>© {new Date().getFullYear()}{' '}
        {profile.name} · built with react, tailwind &amp; gruvbox
      </p>
    </footer>
  )
}
