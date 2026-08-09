/** Full class names so Tailwind's scanner can see them. */
const TAG_HUES = [
  'text-gv-red',
  'text-gv-green',
  'text-gv-yellow',
  'text-gv-blue',
  'text-gv-purple',
  'text-gv-aqua',
  'text-gv-orange',
]

/** Same label always gets the same hue, the way a token type would. */
function hueFor(label: string) {
  let hash = 0
  for (let i = 0; i < label.length; i++) {
    hash = (hash * 31 + label.charCodeAt(i)) >>> 0
  }
  return TAG_HUES[hash % TAG_HUES.length]
}

export function Tag({ children }: { children: string }) {
  return (
    <span
      className={`rounded-md bg-surface px-1.5 py-0.5 font-mono text-xs ${hueFor(children)}`}
    >
      {children}
    </span>
  )
}
