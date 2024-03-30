import type { Post } from '.'
import type { Prettify } from './helpers'

/** @description This type is used in the search functionality */
export type SearchableItem = Prettify<
  Omit<Post, 'date' | 'tags'> & {
    tags?: string[]
    type?: string
  }
>
