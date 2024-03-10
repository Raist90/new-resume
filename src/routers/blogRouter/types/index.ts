import type { Post } from '@/types'
import type { JSXElementConstructor, ReactElement } from 'react'

export type CompiledMDX = {
  content: ReactElement<any, string | JSXElementConstructor<any>>
  metadata: Post
}
