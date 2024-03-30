import { isArray } from '@/helpers/predicates'
import type { Post, ProjectCard, SearchableItem } from '@/types'

export const formatIntoSearchableItem = (
  content: (Post | ProjectCard)[],
): SearchableItem[] => {
  return content.map((item) => ({
    ...item,
    tags: 'tags' in item && isArray(item.tags) ? item.tags : undefined,
  }))
}
