import Link from 'next/link'
import { dmMono } from '@/fonts'
import { ThemeSwitcher } from '..'
import { getNavigation } from '@/helpers/getNavigation'

const NavigationComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav className={`${dmMono.className} lg:w-1/2 grid mx-auto p-4`}>
      {children}
    </nav>
  )
}

export const Primary = async () => {
  /** @todo Should I fetch this on `Layout` instead? */
  const { primary } = await getNavigation()

  return (
    <ul className='inline-flex gap-x-3 items-center justify-self-end w-max'>
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
