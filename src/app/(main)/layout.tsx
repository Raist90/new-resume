import { Navigation } from '@/components'
import { PostsProvider } from '@/contexts'
import { CMSRouter } from '@/routers/CMSRouter'
import { blogRouter } from '@/routers/blogRouter'

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { primary } = await CMSRouter.fetch.navigation()
  const posts = await blogRouter.fetch.allPosts()
  return (
    <>
      <Navigation>
        <PostsProvider posts={posts}>
          <Navigation.Primary primary={primary} />
          <Navigation.Secondary />
        </PostsProvider>
      </Navigation>
      <main className='grid py-8 px-4'>{children}</main>
    </>
  )
}
