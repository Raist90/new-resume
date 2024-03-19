import { LatestPosts, Profile, Roadmap } from '@/components'
import { CMSRouter } from '@/routers/CMSRouter'
import { blogRouter } from '@/routers/blogRouter'

const MAX_POSTS = 3

const Homepage = async () => {
  const { profile, workExperience } = await CMSRouter.fetch.homepage()
  const latestPosts = await blogRouter.fetch.latestPosts(MAX_POSTS)

  return (
    <>
      <div className='md:w-10/12 lg:w-1/2 mx-auto grid gap-20'>
        <Profile profile={profile} />
        <LatestPosts posts={latestPosts} />
        <Roadmap workExperience={workExperience} />
      </div>
    </>
  )
}

export default Homepage
