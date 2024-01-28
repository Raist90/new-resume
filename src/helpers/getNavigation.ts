import { navigationQuery } from '@/api'
import { client } from '@/sanity/lib/client'
import { type Navigation, navigationSchema } from '@/types'

export const getNavigation = async () => {
  const sanityClient = client
  const data: Awaited<Navigation> = await sanityClient.fetch(navigationQuery)
  const navigation = navigationSchema.parse(data)
  return navigation
}
