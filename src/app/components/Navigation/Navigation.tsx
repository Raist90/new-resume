import { Secondary } from './partials'

const NavigationComponent = ({ children }: { children: React.ReactNode }) => {
  return <div className='border grid grid-cols-2 items-center'>{children}</div>
}

export const Primary = () => {
  return (
    <nav className='border'>
      <ul className='inline-flex gap-2'>
        <li>Home</li>
        <li>Blog</li>
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
