import type { SearchableItem } from '@/types'

const getResultsByPosts = (posts: SearchableItem[], query: string) => {
  const result = posts.filter(
    ({ title, type }) =>
      query.length > 0 &&
      type === 'post' &&
      [title].some((str) => str.toLowerCase().includes(query.toLowerCase())),
  )
  return result
}

const getResultsByProjects = (projects: SearchableItem[], query: string) => {
  const result = projects.filter(
    ({ title, type }) =>
      query.length > 0 &&
      type === 'projectPage' &&
      [title].some((str) => str.toLowerCase().includes(query.toLowerCase())),
  )
  return result
}

const getResultsByTags = (posts: SearchableItem[], query: string) => {
  const result = posts.filter(
    ({ tags, type }) =>
      query.length > 0 &&
      type === 'post' &&
      tags &&
      tags.some((tag) => query.length > 0 && tag.includes(query.toLowerCase())),
  )
  return result
}

export const getFilteredSearchResults = (
  searchableItems: SearchableItem[],
  searchCategory: 'Posts' | 'Tags' | 'Projects',
  query: string,
): SearchableItem[] => {
  switch (searchCategory) {
    case 'Posts':
      return getResultsByPosts(searchableItems, query)
    case 'Projects':
      return getResultsByProjects(searchableItems, query)
    case 'Tags':
      return getResultsByTags(searchableItems, query)
    default:
      return []
  }
}
