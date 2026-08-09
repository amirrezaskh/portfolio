import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import {
  applyTheme,
  prefersDark,
  readStoredTheme,
  ThemeContext,
  THEME_STORAGE_KEY,
  type Theme,
} from '../lib/theme-context'

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(readStoredTheme)
  const [systemDark, setSystemDark] = useState(prefersDark)

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next)
    localStorage.setItem(THEME_STORAGE_KEY, next)
  }, [])

  useEffect(() => {
    applyTheme(theme)
  }, [theme, systemDark])

  // Keep 'system' live if the OS preference changes while the tab is open.
  useEffect(() => {
    const query = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (event: MediaQueryListEvent) => setSystemDark(event.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  const value = useMemo(
    () => ({
      theme,
      resolved: (theme === 'system' ? (systemDark ? 'dark' : 'light') : theme) as
        | 'light'
        | 'dark',
      setTheme,
    }),
    [theme, systemDark, setTheme],
  )

  return <ThemeContext value={value}>{children}</ThemeContext>
}
