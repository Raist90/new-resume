import { components } from '@/components'
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeHighlight from 'rehype-highlight'

export const getCompiledData = async (source: string) => {
  return await compileMDX({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [],
        /** @todo Try to understand of to fix this annoying typescript error */
        rehypePlugins: [rehypeHighlight] as any,
      },
    },
    components: components,
  })
}
