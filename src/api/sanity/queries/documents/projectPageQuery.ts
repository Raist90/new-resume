import { blocksQuery } from '../partials'

export const projectPageQuery = `
  *[ _type == 'projectPage' && slug.current == $slug ][0] {
    title,
    excerpt,
    'cover': {
      alt,
      'src': cover.asset->url
    },
    'blocks': blocks[] {${blocksQuery}}
  }
`
