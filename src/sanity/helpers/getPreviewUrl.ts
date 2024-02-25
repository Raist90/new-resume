import { ENV } from '@/env'
import { isString, type SanityDocument } from 'sanity'

const homepagePreview = ['profile']

export const getPreviewUrl = (doc: SanityDocument) => {
  if (
    'slug' in doc &&
    doc.slug &&
    typeof doc.slug === 'object' &&
    'current' in doc.slug &&
    isString(doc.slug.current)
  ) {
    return doc.slug.current === 'homepage'
      ? `${ENV.APP_URL}`
      : `${ENV.APP_URL}/${doc.slug.current}`
  } else if (homepagePreview.includes(doc._type)) {
    return `${ENV.APP_URL}`
  }
  return undefined
}
