import {
  homepageQuery,
  navigationQuery,
  projectPageListQuery,
  projectPageQuery,
  projectPageSlugListQuery,
} from '@/api'
import {
  homepageSchema,
  navigationSchema,
  projectPageListSchema,
  projectPageSchema,
  projectPageSlugListSchema,
} from '@/types'
import z from 'zod'

/** @description Map of all documents in the CMS. Add all the other documents here. */
export const documentMap = {
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
  projectPageSlugList: {
    query: projectPageSlugListQuery,
    schema: projectPageSlugListSchema,
    hasQueryParams: false,
  },
}
