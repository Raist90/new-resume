import { client } from '@/sanity/lib/client'
import { homepageQuery } from '@/api/sanity'
import { HomepageProps, homepageSchema } from '@/types'

export const getHomepage = async () => {
  const sanityClient = client
  const data: Awaited<HomepageProps> = await sanityClient.fetch(homepageQuery)
  const homepage = homepageSchema.parse(data)
  return homepage
}
