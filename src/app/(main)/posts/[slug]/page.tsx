import { PostWrapper } from '@/components'
import { blogRouter } from '@/routers/blogRouter'

export const generateStaticParams = async () => {
  const posts = await blogRouter.fetch.allPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

const PostPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  const { content, metadata } = (await blogRouter.fetch.singlePost(slug)) || {}

  return <PostWrapper {...metadata}>{content}</PostWrapper>
}

export default PostPage
