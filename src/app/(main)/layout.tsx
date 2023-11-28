import { Navigation } from '../components'
export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className='grid gap-6 p-4'>
      <Navigation>
        <Navigation.Primary />
        <Navigation.Secondary />
      </Navigation>
      {children}
    </main>
  )
}
