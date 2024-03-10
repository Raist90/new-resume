import path from 'path'
import type { Frontmatter, Post } from '@/types'
import { readFileSync, readdirSync } from 'fs'
import { compileMDX } from 'next-mdx-remote/rsc'
import { postsFormatter } from '@/api/markdown'
import type { JSXElementConstructor, ReactElement } from 'react'
import { components } from '@/components'
import { isNumber, isString } from './predicates'
import { POSTS_DIRECTORY } from '@/constants'

type CompiledMDX = {
  content: ReactElement<any, string | JSXElementConstructor<any>>
  metadata: Post
}

const getCompiledData = async (source: string) => {
  return await compileMDX({
    source,
    options: {
      parseFrontmatter: true,
    },
    components: components,
  })
}

const generateMDXSource = (postsPath: string, slug: string): string => {
  return readFileSync(path.join(postsPath, slug, slug + '.mdx'), 'utf8')
}

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
