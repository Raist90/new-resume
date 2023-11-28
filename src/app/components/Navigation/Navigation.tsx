import { Secondary } from './partials'

const NavigationComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='border lg:w-1/2 grid grid-cols-2 items-center mx-auto p-4'>
      {children}
    </div>
  )
}

export const Primary = () => {
  return (
    <nav>
      <ul className='inline-flex gap-3'>
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
