import path from 'path'
import type { Frontmatter, Post } from '@/types'
import { readdirSync } from 'fs'
import { postsFormatter } from './formatters'
import { isNumber, isString } from '@/helpers/predicates'
import { POSTS_DIRECTORY } from '@/constants'
import type { CompiledMDX } from './types'
import { generateMDXSource, getCompiledData } from './helpers'

async function fetchPostData(): Promise<Post[]>
async function fetchPostData(slug: string): Promise<CompiledMDX>
async function fetchPostData(limit: number): Promise<Post[]>
async function fetchPostData(
  slugOrLimit?: unknown,
): Promise<Post[] | CompiledMDX> {
  const postsPath = path.join(process.cwd(), POSTS_DIRECTORY)

  const isSlug = isString(slugOrLimit)
  const isLimit = isNumber(slugOrLimit)

  let source
  let compiledData
  let result

  if (isSlug) {
    const slug = slugOrLimit
    source = generateMDXSource(postsPath, slug)
    compiledData = await getCompiledData(source)

    const { content, frontmatter } = compiledData
    const metadata = postsFormatter(frontmatter as Frontmatter)

    result = { content, metadata }

    return result
  }

  if (isLimit) {
    const limit = slugOrLimit
    source = readdirSync(postsPath).slice(0, limit)
  }

  source = readdirSync(postsPath)

  let data: Post[] = []

  for (const file of source) {
    const source = generateMDXSource(postsPath, file)
    compiledData = await getCompiledData(source)
    data.push(postsFormatter(compiledData.frontmatter as Frontmatter))
  }

  return data.sort((a, b) => b.date.localeCompare(a.date))
}

export const blogRouter = {
  fetch: {
    allPosts: async () => await fetchPostData(),
    latestPosts: async (limit: number) => await fetchPostData(limit),
    singlePost: async (slug: string) => await fetchPostData(slug),
  },
}
