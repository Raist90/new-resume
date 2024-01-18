import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import type { Post } from '@/types'
import { postsFormatter } from './formatters'
import { readFileSync, readdirSync } from 'fs'

export const getAllPosts = async () => {
  const postsPath = path.join(process.cwd(), 'src/posts')

  const source = readdirSync(postsPath)

  let allPosts: Post[] = []

  for (const file of source) {
    const source = readFileSync(
      path.join(postsPath, file, file + '.mdx'),
      'utf8',
    )
    const mdxSource = await serialize(source, { parseFrontmatter: true })

    allPosts.push(postsFormatter(mdxSource.frontmatter))
  }
  return allPosts
}
