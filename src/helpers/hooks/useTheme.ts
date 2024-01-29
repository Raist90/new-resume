'use client'
export const useTheme = () => {
  /** This check is needed because even with `use client` directive Next will first generate static HTML, resulting in `localStorage` not being available */
  if (typeof window === 'undefined') return null

  /** Check if user has set a prefered theme */
  if (!localStorage.getItem('prefered-theme')) {
    /** If not, check if user has a prefered color scheme */
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      /** If so, set theme to dark */
      localStorage.setItem('prefered-theme', 'dark')
      return 'dark'
    } else {
      /** If not, set theme to light */
      localStorage.setItem('prefered-theme', 'light')
      return 'light'
    }
  }

  return localStorage.getItem('prefered-theme')
}
