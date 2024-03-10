import path from 'path'
import { type Frontmatter, type Post } from '@/types'
import { readFileSync, readdirSync } from 'fs'
import { compileMDX } from 'next-mdx-remote/rsc'
import { postsFormatter } from '@/api/markdown'
import type { JSXElementConstructor, ReactElement } from 'react'
import { components } from '@/components'
import { isNumber, isString } from './predicates'

type CompiledMDX = {
  content: ReactElement<any, string | JSXElementConstructor<any>>
  metadata: Post
}
type LatestPost = Omit<Post, 'date' | 'tags'>

const getCompiledData = async (source: string) => {
  return await compileMDX({
    source,
    options: {
      parseFrontmatter: true,
    },
    components: components,
  })
}

async function fetchPostData(): Promise<Post[]>
async function fetchPostData(slug: string): Promise<CompiledMDX>
async function fetchPostData(limit: number): Promise<LatestPost[]>
/** @todo Type all the return types and add error handling. Complete it because right now sucks */
async function fetchPostData(
  arg?: unknown,
): Promise<Post[] | LatestPost[] | CompiledMDX> {
  /** @todo Move `src/posts` to a constant */
  const postsPath = path.join(process.cwd(), 'src/posts')
  const isArgSlug = isString(arg)
  const isArgLimit = isNumber(arg)

  let source
  let compiledData
  let result

  if (isArgSlug) {
    const slug = arg
    /** @todo Wrap this slug into a constant instead of using join like this */
    source = readFileSync(path.join(postsPath, slug, slug + '.mdx'), 'utf8')
    compiledData = await getCompiledData(source)

    const { content, frontmatter } = compiledData
    /** @todo Figure out what to do here, data is already parsed */
    const metadata = postsFormatter(frontmatter as Frontmatter)

    /** @todo I need to type result and it needs to match the result type of the signature with slug arg */
    result = { content, metadata }
    return result
  } else {
    /** @todo Ideally `limit` should be applied directly to `source`, in order to fetch only a limited number of posts */
    source = readdirSync(postsPath)

    let data: Post[] = []

    for (const file of source) {
      const source = readFileSync(
        path.join(postsPath, file, file + '.mdx'),
        'utf8',
      )
      compiledData = await getCompiledData(source)
      data.push(postsFormatter(compiledData.frontmatter as Frontmatter))
    }
    if (isArgLimit) {
      const limit = arg
      return data
        .slice(0, limit)
        .sort((a, b) => b.date.localeCompare(a.date))
        .map((post) => {
          const { date, tags, ...rest } = post
          return rest
        })
    }
    return data.sort((a, b) => b.date.localeCompare(a.date))
  }
}

export const blogRouter = {
  fetch: {
    allPosts: async () => await fetchPostData(),
    latestPosts: async (limit: number) => await fetchPostData(limit),
    singlePost: async (slug: string) => await fetchPostData(slug),
  },
}
