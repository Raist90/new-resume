import { Navigation } from '@/components'
export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className='grid p-4'>
      <Navigation>
        <Navigation.Primary />
      </Navigation>
      {children}
    </main>
  )
}
