'use client'
import { useTheme } from '@/helpers/hooks'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export const ThemeSwitcher = () => {
  const storedTheme = useTheme()

  const [mounted, setMounted] = useState(false)

  /** For now this seems the only way to prevent hydration errors when dealing with `localStorage` with client directives */
  useEffect(() => setMounted(true), [])

  const [theme, setTheme] = useState(storedTheme || 'light')

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('prefered-theme', newTheme)
    setTheme(newTheme)
  }

  useEffect(() => {
    const root = document.documentElement
    /** I'm removing both classes to avoid writing two ugly `if` conditions */
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
  }, [theme])

  if (!mounted) return

  return (
    <button onClick={toggleTheme} className='block'>
      {theme === 'light' ? <Moon /> : <Sun />}
    </button>
  )
}
