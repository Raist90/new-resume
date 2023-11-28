'use client'
import { ThemeProvider } from 'next-themes'

/** @todo Maybe I should rename this */
export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider attribute='class'>{children}</ThemeProvider>
}
