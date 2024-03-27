import { Footer, Navigation } from '@/components'
import { NavigationProvider, PostsProvider } from '@/contexts'
import { CMSRouter } from '@/routers/CMSRouter'
import { blogRouter } from '@/routers/blogRouter'

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const navigation = await CMSRouter.fetch.navigation()
  const posts = await blogRouter.fetch.allPosts()
  return (
    <>
      <PostsProvider posts={posts}>
        <NavigationProvider navigation={navigation}>
          <Navigation />
        </NavigationProvider>
      </PostsProvider>
      <main className='grid py-8 px-4'>{children}</main>
      <Footer />
    </>
  )
}
