import type { MDXComponents } from 'mdx/types'

export const useMDXComponents = (components: MDXComponents): MDXComponents => {
  return {
    h2: ({ children }) => <h2 className='text-3xl'>{children}</h2>,
    h3: ({ children }) => <h3 className='text-2xl'>{children}</h3>,
    ...components,
  }
}
