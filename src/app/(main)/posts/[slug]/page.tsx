import { readFileSync } from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'
import { PostWrapper } from '@/components'
import { getAllPosts, postsFormatter } from '@/api'
import type { MDXComponents } from 'mdx/types'

export const generateStaticParams = async () => {
  const posts = await getAllPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

/** @todo Move all the logic inside `getSinglePost` */
const PostPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  const postsPath = path.join(process.cwd(), 'src/posts')

  const source = readFileSync(
    path.join(postsPath, slug, slug + '.mdx'),
    'utf-8',
  )

  /** @todo Move this into another file */
  const components: MDXComponents = {
    h3: ({ children }) => <h3 className='text-2xl'>{children}</h3>,
  }

  const { content, frontmatter } = await compileMDX({
    source,
    options: {
      parseFrontmatter: true,
    },
    components: components,
  })

  const metadata = postsFormatter(frontmatter)

  return (
    <div>
      <PostWrapper {...metadata}>{content}</PostWrapper>
    </div>
  )
}

export default PostPage
