import { Navigation } from '@/components'
import { getNavigation } from '@/helpers/getNavigation'
export default async function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { primary } = await getNavigation()
  return (
    <main className='grid p-8'>
      <Navigation>
        <Navigation.Primary primary={primary} />
      </Navigation>
      {children}
    </main>
  )
}
