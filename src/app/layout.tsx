import type { Metadata } from 'next'
import './globals.css'
import './atom-one-dark.css'
import { dmMono, dmSans } from '@/fonts'

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
    <html lang='en' className='md:text-lg'>
      <body
        className={`${dmMono.variable} ${dmSans.variable} bg-lightBGPrimary text-lightTextPrimary dark:bg-darkBGPrimary dark:text-darkTextPrimary`}
      >
        {children}
      </body>
    </html>
  )
}
