import { Post } from '@/types'

const getResultsByPosts = (posts: Post[], query: string) => {
  const result = posts.filter(
    ({ title }) =>
      query.length > 0 &&
      [title].some((str) => str.toLowerCase().includes(query)),
  )
  return result
}

const getResultsByTags = (posts: Post[], query: string) => {
  const result = posts.filter((post) =>
    post.tags.some(
      (tag) => tag === query || (query.length > 0 && tag.includes(query)),
    ),
  )
  return result
}

export const getFilteredSearchResults = (
  posts: Post[],
  searchCategory: 'Posts' | 'Tags' | 'Projects',
  query: string,
): Post[] => {
  switch (searchCategory) {
    case 'Posts':
      return getResultsByPosts(posts, query)
    case 'Tags':
      return getResultsByTags(posts, query)
    default:
      return []
  }
}
