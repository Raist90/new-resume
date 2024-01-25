import { DM_Mono, DM_Sans } from 'next/font/google'

export const dmMono = DM_Mono({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-dm-mono',
})

export const dmSans = DM_Sans({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-dm-sans',
})
