import { ENV } from '@/env'
import { isString, type SanityDocument } from 'sanity'

const homepagePreview = ['profile']

export const getPreviewUrl = (
  doc: SanityDocument & { slug?: { current: string } },
) => {
  /** I'm keeping this as generic as possible because `doc._type` is a generic string */
  const pageMap: Record<string, string> = {
    page: `${ENV.APP_URL}/${doc.slug?.current}`,
    projectPage: `${ENV.APP_URL}/projects/${doc.slug?.current}`,
  }
  if (
    'slug' in doc &&
    doc.slug &&
    typeof doc.slug === 'object' &&
    'current' in doc.slug &&
    isString(doc.slug.current)
  ) {
    return doc.slug.current === 'homepage'
      ? `${ENV.APP_URL}`
      : pageMap[doc._type]
  } else if (homepagePreview.includes(doc._type)) {
    return `${ENV.APP_URL}`
  }

  return undefined
}
