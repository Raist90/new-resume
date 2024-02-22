import { blockImageQuery, blockTextQuery } from '.'

export const blockTextImageQuery = `
  'blockKey': _key,
  ${blockImageQuery},
  ${blockTextQuery},
  imagePosition
`
