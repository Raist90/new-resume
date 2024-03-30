import type { MDXComponents } from 'mdx/types'

export const components: MDXComponents = {
  h3: ({ children }) => (
    <h3 className='text-xl uppercase font-bold mt-4'>{children}</h3>
  ),
  pre: ({ children }) => (
    <pre className='bg-[#282c34] my-8 py-4 px-6 rounded-sm text-sm overflow-auto'>
      {children}
    </pre>
  ),
  li: ({ children }) => <li className='list-disc ml-6'>{children}</li>,
}
