'use client'
import { ThemeProvider } from 'next-themes'
import { useEffect, useState } from 'react'

/** @todo Maybe I should rename this */
export const Providers = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false)

  /** This fixes an annoying `Hydration` error with next-themes */
  useEffect(() => setMounted(true), [])

  if (!mounted) return

  return <ThemeProvider attribute='class'>{children}</ThemeProvider>
}
