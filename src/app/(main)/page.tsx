import { getHomepage } from '@/helpers/getHomepage'
import { LatestPosts, Profile, Roadmap } from '@/components'
import { getLatestPosts } from '@/api'

const MAX_POSTS = 3

const Homepage = async () => {
  const { profile, workExperience } = await getHomepage()
  const latestPosts = await getLatestPosts(MAX_POSTS)

  return (
    <>
      <div className='md:w-10/12 lg:w-1/2 mx-auto grid gap-2'>
        <Profile profile={profile} />
        <LatestPosts className='' posts={latestPosts} />
        <Roadmap workExperience={workExperience} />
      </div>
    </>
  )
}

export default Homepage
