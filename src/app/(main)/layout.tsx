import { Navigation } from '../components'
export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <Navigation>
        <Navigation.Primary />
        <Navigation.Secondary />
      </Navigation>
      {children}
    </main>
  )
}
