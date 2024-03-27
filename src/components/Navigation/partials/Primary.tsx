import { SearchButton } from '@/components'
import { useNavigation } from '@/contexts'
import Link from 'next/link'

export const Primary = () => {
  const { primary } = useNavigation()
  return (
    <nav role='navigation' className='z-50'>
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
