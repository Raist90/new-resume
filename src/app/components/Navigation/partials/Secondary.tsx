'use client'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export const Secondary = () => {
  const { theme, setTheme } = useTheme()
  const handleThemeChange = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }
  return (
    <div className='inline-flex justify-end'>
      <button title='Toggle theme' onClick={handleThemeChange}>
        <span className='sr-only'>Toggle theme</span>
        {theme === 'dark' ? <Sun /> : <Moon />}
      </button>
    </div>
  )
}
