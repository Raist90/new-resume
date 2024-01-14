import type { ComponentType } from 'react'
import type { HomepageProps } from '../types'
import { getHomepage } from '../helpers/getHomepage'
import { Profile, Roadmap } from '../components'

const Homepage: ComponentType<HomepageProps> = async () => {
  const { title, profile, workExperience } = await getHomepage()
  return (
    <div className='border grid gap-9 p-4'>
      {title}
      <Profile profile={profile} />
      <Roadmap workExperience={workExperience} />
    </div>
  )
}

export default Homepage
