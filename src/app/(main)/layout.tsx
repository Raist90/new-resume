import { Footer, Navigation } from '@/components'
import { NavigationProvider, PostsProvider, ProjectsProvider } from '@/contexts'
import { CMSRouter } from '@/routers/CMSRouter'
import { blogRouter } from '@/routers/blogRouter'

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const navigation = await CMSRouter.fetch.navigation()
  const posts = await blogRouter.fetch.allPosts()
  const projects = await CMSRouter.fetch.projectPageList()
  return (
    <>
      <ProjectsProvider projects={projects}>
        <PostsProvider posts={posts}>
          <NavigationProvider navigation={navigation}>
            <Navigation />
          </NavigationProvider>
        </PostsProvider>
      </ProjectsProvider>
      <main className='py-8 px-4'>{children}</main>
      <Footer />
    </>
  )
}
