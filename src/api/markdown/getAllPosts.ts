import path from 'path'
import type { Frontmatter, Post } from '@/types'
import { postsFormatter } from './formatters'
import { readFileSync, readdirSync } from 'fs'
import { compileMDX } from 'next-mdx-remote/rsc'

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

    allPosts.push(postsFormatter(frontmatter))
  }
  return allPosts.sort((a, b) => b.date.localeCompare(a.date))
}
