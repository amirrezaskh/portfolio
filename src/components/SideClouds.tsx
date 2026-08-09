import { useEffect, useRef, type CSSProperties } from 'react'
import { cloudItems, CATEGORY_COLOR } from '../data/cloud'
import { placeItems, shuffle, type PlacedItem } from '../lib/cloud-layout'

type Side = 'left' | 'right'

/* Split once at module load, then place each side with its own seed and a
   slightly different spread so the two gutters never mirror each other. */
const shuffled = shuffle(cloudItems, 20260809)
const LEFT = placeItems(
  shuffled.filter((_, index) => index % 2 === 0),
  { seed: 1337, minOffset: 6, maxOffset: 62 },
)
const RIGHT = placeItems(
  shuffled.filter((_, index) => index % 2 === 1),
  { seed: 90210, minOffset: 10, maxOffset: 68 },
)

/** How far each parallax layer drifts, in px, at full pointer deflection. */
const DEPTH_X = [7, 18]
const DEPTH_Y = [5, 13]

function CloudIcon({ item, side }: { item: PlacedItem; side: Side }) {
  const { Icon, label, category, color } = item

  const position: CSSProperties = {
    top: `${item.top}%`,
    ...(side === 'left'
      ? { left: `${item.offset}%` }
      : { right: `${item.offset}%` }),
  }

  const glyph = {
    '--rot': `${item.rotate}deg`,
    '--scl': item.scale,
    '--opa': item.opacity,
  } as CSSProperties

  return (
    <div
      className={`absolute ${item.tier === 2 ? 'hidden xl:block' : ''}`}
      style={position}
    >
      <div
        className="cloud-float"
        style={{
          animationDuration: `${item.duration}s`,
          animationDelay: `${item.delay}s`,
        }}
      >
        {/* Custom properties live here and inherit down to .cloud-glyph,
            which keeps them off the icon component's prop type. */}
        <div
          className="cloud-item pointer-events-auto relative cursor-default"
          style={glyph}
        >
          <Icon
            className={`cloud-glyph size-6 ${color ?? CATEGORY_COLOR[category]}`}
          />
          <span className="cloud-label absolute top-full left-1/2 mt-1.5 -translate-x-1/2 rounded bg-canvas/90 px-1.5 py-0.5 font-mono text-[10px] whitespace-nowrap text-ink-muted">
            {label}
          </span>
        </div>
      </div>
    </div>
  )
}

function Cloud({ items, side }: { items: PlacedItem[]; side: Side }) {
  // Left and right drift in opposite directions — reads as depth, not slide.
  const direction = side === 'left' ? 1 : -1

  return (
    <div
      className={`absolute top-0 h-full w-[calc(50%-25.5rem)] ${
        side === 'left' ? 'left-0' : 'right-0'
      }`}
    >
      {([0, 1] as const).map((depth) => (
        <div
          key={depth}
          className="absolute inset-0 transition-transform duration-500 ease-out will-change-transform"
          style={{
            transform: `translate3d(calc(var(--cloud-x) * ${
              DEPTH_X[depth] * direction
            }px), calc(var(--cloud-y) * ${DEPTH_Y[depth]}px), 0)`,
          }}
        >
          {items
            .filter((item) => item.depth === depth)
            .map((item) => (
              <CloudIcon key={item.key} item={item} side={side} />
            ))}
        </div>
      ))}
    </div>
  )
}

export function SideClouds() {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = root.current
    if (!node) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    // The clouds are hidden below lg, so there is nothing to track there.
    const wide = window.matchMedia('(min-width: 1024px)')
    if (reduced.matches || !wide.matches) return

    let frame = 0
    const onMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const x = event.clientX / window.innerWidth - 0.5
        const y = event.clientY / window.innerHeight - 0.5
        node.style.setProperty('--cloud-x', x.toFixed(3))
        node.style.setProperty('--cloud-y', y.toFixed(3))
      })
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div
      ref={root}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden overflow-hidden [--cloud-x:0] [--cloud-y:0] lg:block"
    >
      <Cloud items={LEFT} side="left" />
      <Cloud items={RIGHT} side="right" />
    </div>
  )
}
