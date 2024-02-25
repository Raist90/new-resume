import { isString, type SlugIsUniqueValidator } from 'sanity'

const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION

export const isUniqueAcrossAllDocuments: SlugIsUniqueValidator = async (
  slug,
  context,
) => {
  const { document, getClient } = context

  if (!isString(apiVersion) || !document) return

  const client = getClient({ apiVersion })
  const id = document._id.replace(/^drafts\./, '')
  const params = {
    draft: `drafts.${id}`,
    published: id,
    slug,
  }

  const query = `!defined(*[!(_id in [$draft, $published]) && slug.current == $slug][0]._id)`
  const result = await client.fetch(query, params)

  return result
}
