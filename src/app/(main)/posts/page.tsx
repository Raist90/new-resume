import { PostCard } from '@/components'
import { blogRouter } from '@/helpers/blogRouter'

const PostsPage = async () => {
  const allPosts = await blogRouter.fetch.allPosts()
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {allPosts.map((post) => (
        <PostCard key={post.title} post={post} />
      ))}
    </section>
  )
}

export default PostsPage
