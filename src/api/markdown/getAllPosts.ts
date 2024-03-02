import path from 'path'
import { frontmatterSchema, type Frontmatter, type Post } from '@/types'
import { postsFormatter } from './formatters'
import { readFileSync, readdirSync } from 'fs'
import { compileMDX } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'

export const getAllPosts = async () => {
  const postsPath = path.join(process.cwd(), 'src/posts')

  const source = readdirSync(postsPath)

  let allPosts: Post[] = []

  for (const file of source) {
    const source = readFileSync(
      path.join(postsPath, file, file + '.mdx'),
      'utf8',
    )

    const { frontmatter }: { frontmatter: Frontmatter } = await compileMDX({
      source,
      options: {
        parseFrontmatter: true,
      },
    })

    const result = frontmatterSchema.safeParse(frontmatter)

    if (!result.success) {
      if (process.env.NODE_ENV === 'development') {
        throw new Error(`Failed to parse response: ${result.error}`)
      }
      return notFound()
    }

    allPosts.push(postsFormatter(result.data))
  }
  return allPosts.sort((a, b) => b.date.localeCompare(a.date))
}
