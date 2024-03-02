import { homepageQuery, navigationQuery, projectPageQuery } from '@/api'
import { client } from '@/sanity/lib/client'
import { homepageSchema, navigationSchema, projectPageSchema } from '@/types'
import { notFound } from 'next/navigation'
import z from 'zod'

const documentMap = {
  homepage: {
    query: homepageQuery,
    schema: homepageSchema,
    hasQueryParams: false,
  },
  projectPage: {
    query: projectPageQuery,
    schema: projectPageSchema,
    hasQueryParams: true,
  },
  navigation: {
    query: navigationQuery,
    schema: navigationSchema,
    hasQueryParams: false,
  },
}

export const getCMSContent = async <T extends keyof typeof documentMap>(
  documentType: T,
  queryParams?: Record<string, string>,
): Promise<z.infer<(typeof documentMap)[T]['schema']>> => {
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
