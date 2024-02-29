import { Navigation } from '@/components'
import { getCMSContent } from '@/helpers/getCMSContent'

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { primary } = await getCMSContent('navigation')
  return (
    <main className='grid p-8'>
      <Navigation>
        <Navigation.Primary primary={primary} />
      </Navigation>
      {children}
    </main>
  )
}
