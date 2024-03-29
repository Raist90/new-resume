import { client } from '@/sanity/lib/client'
import { notFound } from 'next/navigation'
import z from 'zod'
import { documentMap } from './documentMap'

async function fetchCMSData<
  T extends Exclude<keyof typeof documentMap, 'projectPage'>,
>(documentType: T): Promise<z.infer<(typeof documentMap)[T]['schema']>>

async function fetchCMSData<
  T extends Extract<keyof typeof documentMap, 'projectPage'>,
>(
  documentType: T,
  queryParams: z.infer<(typeof documentMap)[T]['queryParams']>,
): Promise<z.infer<(typeof documentMap)[T]['schema']>>

/** @description Fetches content from the CMS. These above are function overloads.
 *
 * @param documentType - The type of document to fetch
 * @param queryParams - The query params needed to fetch document
 * @returns The content of the document. It redirects the user to 404 page if the document is not correctly parsed against its own schema.
 */
async function fetchCMSData<T extends keyof typeof documentMap>(
  documentType: T,
  queryParams?: T extends 'projectPage'
    ? z.infer<typeof documentMap.projectPage.queryParams>
    : {},
): Promise<z.infer<(typeof documentMap)[T]['schema']>> {
  if (documentMap[documentType].hasQueryParams && !queryParams) {
    throw new Error(`Query params are required for ${documentType} document`)
  }

  if (!documentMap[documentType].hasQueryParams && queryParams) {
    if (process.env.NODE_ENV === 'development') {
      throw new Error(
        `Query params are not required for ${documentType} document`,
      )
    }
  }

  const sanityClient = client

  const data = await sanityClient.fetch(
    documentMap[documentType].query,
    documentMap[documentType].hasQueryParams ? queryParams : {},
  )

  const result = documentMap[documentType].schema.safeParse(data)

  if (!result.success) {
    if (process.env.NODE_ENV === 'development') {
      throw new Error(`Failed to parse response: ${result.error}`)
    }
    return notFound()
  }

  return result.data
}

export const CMSRouter = {
  fetch: {
    homepage: async () => await fetchCMSData('homepage'),
    navigation: async () => await fetchCMSData('navigation'),
    projectPage: async (slug: string) =>
      await fetchCMSData('projectPage', { slug }),
    projectPageList: async () => await fetchCMSData('projectPageList'),
    projectPageSlugList: async () => await fetchCMSData('projectPageSlugList'),
  },
}
