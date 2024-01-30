import { blocksQuery } from '../partials'

export const projectPageQuery = `
  *[ _type == 'projectPage' && slug.current == $slug ][0] {
    title,
    'blocks': blocks[] {${blocksQuery}}
  }
`
