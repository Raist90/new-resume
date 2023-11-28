import type { ComponentType } from 'react'
import type { HomepageProps } from '../types'
import { getHomepage } from '../helpers/getHomepage'
import { Profile } from '../components'

const Homepage: ComponentType<HomepageProps> = async () => {
  const { title, profile } = await getHomepage()
  return (
    <div className='border grid gap-9 p-4'>
      {title}
      <Profile profile={profile} />
    </div>
  )
}

export default Homepage
