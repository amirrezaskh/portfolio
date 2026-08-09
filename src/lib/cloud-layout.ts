import type { CloudItem } from '../data/cloud'

/**
 * Scatter is generated from a fixed seed rather than Math.random, so the
 * arrangement is identical on every render and every reload — random-looking
 * without the icons jumping around when React re-renders.
 */

export type PlacedItem = CloudItem & {
  key: string
  /** Percent down the page. */
  top: number
  /** Percent across the gutter, measured from the outer edge. */
  offset: number
  rotate: number
  scale: number
  opacity: number
  duration: number
  delay: number
  /** Parallax layer — 1 drifts further than 0. */
  depth: 0 | 1
  /** 2 only appears once there is room for the full effect. */
  tier: 1 | 2
}

type PlacementOptions = {
  seed: number
  /** Narrowest and widest distance from the page edge, in percent. */
  minOffset: number
  maxOffset: number
}

function mulberry32(seed: number) {
  let state = seed >>> 0
  return () => {
    state = (state + 0x6d2b79f5) >>> 0
    let t = state
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

/** Fisher-Yates against a seeded source. */
export function shuffle<T>(items: T[], seed: number): T[] {
  const random = mulberry32(seed)
  const result = [...items]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

/**
 * Walks one vertical slot per item and jitters within it. Slotting first
 * guarantees coverage from top to bottom; the jitter is what stops it
 * looking like a column.
 */
export function placeItems(
  items: CloudItem[],
  { seed, minOffset, maxOffset }: PlacementOptions,
): PlacedItem[] {
  const random = mulberry32(seed)
  const slot = 100 / items.length
  const offsetRange = maxOffset - minOffset

  return items.map((item, index) => {
    const jitter = (random() - 0.5) * slot * 1.6
    const top = clamp(slot * (index + 0.5) + jitter, 0.5, 98.5)

    return {
      ...item,
      key: `${item.label}-${index}`,
      top,
      offset: minOffset + random() * offsetRange,
      rotate: (random() - 0.5) * 26,
      scale: 0.78 + random() * 0.5,
      opacity: 0.26 + random() * 0.3,
      duration: 8 + random() * 9,
      // Negative delay starts each icon mid-cycle, so nothing pulses in unison.
      delay: -random() * 17,
      depth: random() > 0.5 ? 1 : 0,
      // Roughly a third are held back until there is room for them.
      tier: random() > 0.66 ? 2 : 1,
    }
  })
}
