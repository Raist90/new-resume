import type { Metadata } from 'next'
import { DM_Mono } from 'next/font/google'
import './globals.css'
import { Providers } from './Theme'

const dmMono = DM_Mono({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Manuel De Toma',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${dmMono.className} dark:bg-neutral-900`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
