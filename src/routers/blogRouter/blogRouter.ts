import path from 'path'
import type { Post } from '@/types'
import { POSTS_DIRECTORY } from '@/constants'
import type { BlogRouterOptions, CompiledMDX } from './types'
import { getAllPosts, getSinglePostBySlug } from './getters'
import { isNumber, isString } from '@/helpers/predicates'

async function fetchPostData(): Promise<Post[]>
async function fetchPostData(options: BlogRouterOptions): Promise<Post[]>
async function fetchPostData(slug: string): Promise<CompiledMDX>
async function fetchPostData(limit: number): Promise<Post[]>

async function fetchPostData(
  slugOrLimit?: unknown,
): Promise<Post[] | CompiledMDX> {
  const postsPath = path.join(process.cwd(), POSTS_DIRECTORY)

  const isSlug = isString(slugOrLimit)
  const isLimit = isNumber(slugOrLimit)

  switch (true) {
    case isSlug:
      return getSinglePostBySlug(postsPath, slugOrLimit)
    case isLimit:
      return getAllPosts(postsPath, slugOrLimit)
    default:
      // This will run when consuming `allPosts` with `Options` or with no arguments at all
      return getAllPosts(postsPath)
  }
}

export const blogRouter = {
  fetch: {
    allPosts: async () => await fetchPostData(),
    allPostsWithOptions: async (options: BlogRouterOptions) =>
      await fetchPostData(options).then((posts) =>
        posts.filter((post) => post.tags.includes(options.filter.byTag)),
      ),
    latestPosts: async (limit: number) => await fetchPostData(limit),
    singlePost: async (slug: string) => await fetchPostData(slug),
  },
}
