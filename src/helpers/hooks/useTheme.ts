'use client'
export const useTheme = () => {
  /** This check is needed because even with `use client` directive Next will first generate static HTML, resulting in `localStorage` not being available */
  if (typeof window === 'undefined') return null

  return localStorage.getItem('prefered-theme')
}
