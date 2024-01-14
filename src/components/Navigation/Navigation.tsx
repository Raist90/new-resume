import Link from 'next/link'
import { Secondary } from './partials'

const NavigationComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='border lg:w-1/2 grid grid-cols-2 items-center mx-auto p-4'>
      {children}
    </div>
  )
}

/** @todo Add links and `tabIndex` */
export const Primary = () => {
  return (
    <nav>
      <ul className='inline-flex gap-3'>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/posts/first-post'>Blog</Link>
        </li>
        <li>Projects</li>
        <li>About</li>
      </ul>
    </nav>
  )
}

export const Navigation = Object.assign(NavigationComponent, {
  Primary,
  Secondary,
})
