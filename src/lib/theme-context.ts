import { createContext, useContext } from 'react'

export type Theme = 'light' | 'dark' | 'system'

export const THEME_STORAGE_KEY = 'theme'

export function isTheme(value: unknown): value is Theme {
  return value === 'light' || value === 'dark' || value === 'system'
}

export function readStoredTheme(): Theme {
  const stored = localStorage.getItem(THEME_STORAGE_KEY)
  return isTheme(stored) ? stored : 'system'
}

export function prefersDark(): boolean {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

/** Flips the `.dark` class the CSS variables in index.css key off of. */
export function applyTheme(theme: Theme) {
  const dark = theme === 'system' ? prefersDark() : theme === 'dark'
  document.documentElement.classList.toggle('dark', dark)
}

type ThemeContextValue = {
  /** What the user picked — may be 'system'. */
  theme: Theme
  /** What that currently renders as. */
  resolved: 'light' | 'dark'
  setTheme: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used inside <ThemeProvider>')
  return context
}
