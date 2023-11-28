/** @todo Fix this ugly import */
import { client } from '../../../sanity/lib/client'
import { homepageQuery } from '../api/sanity'
import { HomepageProps } from '../types'

export const getHomepage = async () => {
  const sanityClient = client
  const homepage: Awaited<HomepageProps> =
    await sanityClient.fetch(homepageQuery)
  return homepage
}
