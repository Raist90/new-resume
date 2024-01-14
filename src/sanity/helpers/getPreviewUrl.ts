import { ENV } from '@/env'
import type { SanityDocument } from 'sanity'

const homepagePreview = ['profile']

export const getPreviewUrl = (
  /** @todo Figure out how to type this */
  doc: SanityDocument & { slug: { current: string } },
) => {
  return doc?.slug?.current === 'homepage' ||
    homepagePreview.includes(doc._type)
    ? `${ENV.APP_URL}`
    : `${ENV.APP_URL}/${doc.slug.current}`
}
