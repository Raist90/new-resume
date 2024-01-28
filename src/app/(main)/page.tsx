import { getHomepage } from '@/helpers/getHomepage'
import { Profile, Roadmap } from '@/components'

const Homepage = async () => {
  const { profile, workExperience } = await getHomepage()
  return (
    <div className='w-1/2 mx-auto grid gap-9 p-4'>
      <Profile profile={profile} />
      <Roadmap workExperience={workExperience} />
    </div>
  )
}

export default Homepage
