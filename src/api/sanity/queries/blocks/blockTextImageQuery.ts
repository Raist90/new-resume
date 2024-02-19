import { blockImageQuery, blockTextQuery } from '.'

export const blockTextImageQuery = `
  ${blockImageQuery},
  ${blockTextQuery},
  imagePosition
`
