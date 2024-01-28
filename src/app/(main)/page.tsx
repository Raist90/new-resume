import { getHomepage } from '@/helpers/getHomepage'
import { Profile, Roadmap } from '@/components'

const Homepage = async () => {
  const { profile, workExperience } = await getHomepage()
  return (
    <div className='md:w-10/12 lg:w-1/2 mx-auto grid gap-9'>
      <Profile profile={profile} />
      <Roadmap workExperience={workExperience} />
    </div>
  )
}

export default Homepage
