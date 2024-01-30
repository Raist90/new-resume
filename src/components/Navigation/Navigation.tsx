import Link from 'next/link'
import { dmMono } from '@/fonts'
import { ThemeSwitcher } from '..'
import type { Navigation as NavigationType } from '@/types'

const NavigationComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav className={`${dmMono.className} lg:w-1/2 lg:mx-auto grid py-4`}>
      {children}
    </nav>
  )
}

export const Primary = async ({ primary }: NavigationType) => {
  return (
    <ul className='inline-flex gap-x-3 items-center w-max'>
      {primary.map((item) => {
        const isHomepage = item.url === '/homepage'

        return (
          <li key={item.id}>
            <Link href={isHomepage ? '/' : item.url}>{item.label}</Link>
          </li>
        )
      })}
      <ThemeSwitcher />
    </ul>
  )
}

export const Navigation = Object.assign(NavigationComponent, {
  Primary,
})
