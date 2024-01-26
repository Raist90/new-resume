import Link from 'next/link'
import { dmMono } from '@/fonts'
import { ThemeSwitcher } from '..'

const NavigationComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav className={`${dmMono.className} lg:w-1/2 grid mx-auto p-4`}>
      {children}
    </nav>
  )
}

/** @todo Add links and `tabIndex` */
export const Primary = () => {
  return (
    <ul className='inline-flex gap-x-3 items-center justify-self-end w-max'>
      <li>
        <Link href='/'>Home</Link>
      </li>
      <li>
        <Link href='/posts'>Posts</Link>
      </li>
      <li>Projects</li>
      <li>About</li>
      <ThemeSwitcher />
    </ul>
  )
}

export const Navigation = Object.assign(NavigationComponent, {
  Primary,
})
