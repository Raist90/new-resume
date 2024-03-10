import path from 'path'
import type { Post } from '@/types'
import { POSTS_DIRECTORY } from '@/constants'
import type { CompiledMDX } from './types'
import { getAllPosts, getSinglePostBySlug } from './getters'

async function fetchPostData(): Promise<Post[]>
async function fetchPostData(slug: string): Promise<CompiledMDX>
async function fetchPostData(limit: number): Promise<Post[]>

async function fetchPostData(
  slugOrLimit?: unknown,
): Promise<Post[] | CompiledMDX> {
  const postsPath = path.join(process.cwd(), POSTS_DIRECTORY)

  switch (typeof slugOrLimit) {
    case 'string':
      return getSinglePostBySlug(postsPath, slugOrLimit)
    case 'number':
      return getAllPosts(postsPath, Number(slugOrLimit))
    default:
      return getAllPosts(postsPath)
  }
}

export const blogRouter = {
  fetch: {
    allPosts: async () => await fetchPostData(),
    latestPosts: async (limit: number) => await fetchPostData(limit),
    singlePost: async (slug: string) => await fetchPostData(slug),
  },
}