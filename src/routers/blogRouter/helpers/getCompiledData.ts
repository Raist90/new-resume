import { components } from '@/components'
import { compileMDX } from 'next-mdx-remote/rsc'

export const getCompiledData = async (source: string) => {
  return await compileMDX({
    source,
    options: {
      parseFrontmatter: true,
    },
    components: components,
  })
}
