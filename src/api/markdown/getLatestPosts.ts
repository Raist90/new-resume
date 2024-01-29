import { getAllPosts } from '.'

export const getLatestPosts = async (limit: number) => {
  const allPosts = await getAllPosts()
  const latestPosts = allPosts.slice(0, limit).map((post) => {
    const { cover, excerpt, slug, title } = post
    const latestPost = {
      cover,
      excerpt,
      slug,
      title,
    }
    return latestPost
  })

  return latestPosts
}
