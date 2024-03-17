import Link from 'next/link'
import { dmMono } from '@/fonts'
import { SearchButton } from '..'
import type { Navigation as NavigationType } from '@/types'
import { NavigationBorder, Secondary } from './partials'

const NavigationComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='sticky z-50 top-0 backdrop-blur-md'>
      <menu
        role='menubar'
        className={`${dmMono.className} w-full lg:w-1/2 lg:mx-auto py-4 flex justify-between px-4`}
      >
        {children}
        <NavigationBorder />
      </menu>
    </div>
  )
}

export const Primary = ({ primary }: NavigationType) => {
  return (
    <nav role='navigation'>
      <ul className='inline-flex gap-x-3 items-center w-max'>
        {primary.map((item) => {
          const isHomepage = item.url === '/homepage'

          return (
            <li key={item.id}>
              <Link href={isHomepage ? '/' : item.url}>{item.label}</Link>
            </li>
          )
        })}
        <SearchButton />
      </ul>
    </nav>
  )
}

export const Navigation = Object.assign(NavigationComponent, {
  Primary,
  Secondary,
})
