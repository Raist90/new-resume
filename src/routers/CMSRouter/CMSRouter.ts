import {
  homepageQuery,
  navigationQuery,
  projectPageListQuery,
  projectPageQuery,
} from '@/api'
import { client } from '@/sanity/lib/client'
import {
  homepageSchema,
  navigationSchema,
  projectPageListSchema,
  projectPageSchema,
} from '@/types'
import { notFound } from 'next/navigation'
import z from 'zod'

/** @description Map of all documents in the CMS. Add all the other documents here. */
const documentMap = {
  homepage: {
    query: homepageQuery,
    schema: homepageSchema,
    hasQueryParams: false,
  },
  navigation: {
    query: navigationQuery,
    schema: navigationSchema,
    hasQueryParams: false,
  },
  projectPage: {
    query: projectPageQuery,
    schema: projectPageSchema,
    hasQueryParams: true,
    queryParams: z.object({
      slug: z.string(),
    }),
  },
  projectPageList: {
    query: projectPageListQuery,
    schema: projectPageListSchema,
    hasQueryParams: false,
  },
}

export async function CMSRouter<
  T extends Exclude<keyof typeof documentMap, 'projectPage'>,
>(documentType: T): Promise<z.infer<(typeof documentMap)[T]['schema']>>

export async function CMSRouter<
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
export async function CMSRouter<T extends keyof typeof documentMap>(
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
