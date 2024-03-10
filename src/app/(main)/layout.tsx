import { Navigation } from '@/components'
import { CMSRouter } from '@/routers/CMSRouter'

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { primary } = await CMSRouter.fetch.navigation()
  return (
    <main className='grid p-8'>
      <Navigation>
        <Navigation.Primary primary={primary} />
      </Navigation>
      {children}
    </main>
  )
}
