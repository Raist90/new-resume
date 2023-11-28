import type { SanityDocument } from 'sanity'

const homepagePreview = ['profile']

export const getPreviewUrl = (
  /** @todo Figure out how to type this */
  doc: SanityDocument & { slug: { current: string } },
) => {
  return doc?.slug?.current === 'homepage' ||
    homepagePreview.includes(doc._type)
    ? `${process.env.APP_URL}`
    : `${process.env.APP_URL}/${doc.slug.current}`
}
