import type { Frontmatter } from '@/types'
import { postsFormatter } from '../formatters'
import { generateMDXSource, getCompiledData } from '../helpers'
import type { CompiledMDX } from '../types'

export const getSinglePostBySlug = async (
  path: string,
  slug: string,
): Promise<CompiledMDX> => {
  const source = generateMDXSource(path, slug)
  const compiledData = await getCompiledData(source)

  const { content, frontmatter } = compiledData
  const metadata = postsFormatter(frontmatter as Frontmatter)

  const result = { content, metadata }

  return result
}
