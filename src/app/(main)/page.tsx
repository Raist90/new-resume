import { LatestPosts, Profile, Roadmap } from '@/components'
import { getCMSContent } from '@/helpers/getCMSContent'
import { blogRouter } from '@/helpers/blogRouter'

const MAX_POSTS = 3

const Homepage = async () => {
  const { profile, workExperience } = await getCMSContent('homepage')
  const latestPosts = await blogRouter.fetch.latestPosts(MAX_POSTS)

  return (
    <>
      <div className='md:w-10/12 lg:w-1/2 mx-auto grid gap-2'>
        <Profile profile={profile} />
        <LatestPosts posts={latestPosts} />
        <Roadmap workExperience={workExperience} />
      </div>
    </>
  )
}

export default Homepage
