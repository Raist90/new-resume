import type { Frontmatter, Post } from '@/types'
import { readdirSync } from 'fs'
import { generateMDXSource, getCompiledData } from '../helpers'
import { postsFormatter } from '../formatters'

const sortPosts = (a: Post, b: Post) => b.date.localeCompare(a.date)

export const getAllPosts = async (
  path: string,
  limit?: number,
): Promise<Post[]> => {
  let sourceList

  if (limit) sourceList = readdirSync(path).slice(0, limit)
  else sourceList = readdirSync(path)

  let data: Post[] = []

  for (const file of sourceList) {
    const source = generateMDXSource(path, file)
    const { frontmatter } = await getCompiledData(source)
    data.push(postsFormatter(frontmatter as Frontmatter))
  }

  return data.sort(sortPosts)
}
