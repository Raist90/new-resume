import type { MDXComponents } from 'mdx/types'

export const components: MDXComponents = {
  h3: ({ children }) => (
    <h3 className='text-xl uppercase font-bold mt-4'>{children}</h3>
  ),
}
