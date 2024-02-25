import type { SanityDocument } from 'sanity'
import Iframe from 'sanity-plugin-iframe-pane'
import type { DefaultDocumentNodeResolver } from 'sanity/structure'
import { getPreviewUrl } from '.'

/** @description Add document types here that you want to have a preview pane */
const documentsWithPreview = ['page', 'profile', 'projectPage']

export const defaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType },
) => {
  if (documentsWithPreview.includes(schemaType)) {
    return S.document().views([
      S.view.form(),
      S.view
        .component(Iframe)
        .options({
          reload: {
            button: true,
          },
          url: (doc: SanityDocument & { slug: { current: string } }) =>
            getPreviewUrl(doc),
        })
        .title('Preview'),
    ])
  }
  return S.document().views([S.view.form()])
}
