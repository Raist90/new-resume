import { PostCard } from '@/components'
import { blogRouter } from '@/routers/blogRouter'

export const generateStaticParams = async () => {
  const allPosts = await blogRouter.fetch.allPosts()
  return allPosts.map((post) => ({
    tags: post.tags,
  }))
}

const TagPage = async ({ params }: { params: { tag: string } }) => {
  const { tag } = params
  const allPosts = await blogRouter.fetch.allPosts()

  /** @todo Handle this better */
  const posts = allPosts.filter((post) => post.tags.includes(tag))
  return (
    <section>
      <h2 className='text-3xl'>Posts tagged with {`"${tag}"`}</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {posts.map((post) => (
          <PostCard key={post.title} post={post} />
        ))}
      </div>
    </section>
  )
}

export default TagPage
