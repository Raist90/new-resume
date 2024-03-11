import type { Post } from '@/types'
import type { JSXElementConstructor, ReactElement } from 'react'

export type BlogRouterOptions = {
  filter: {
    byTag: string
  }
}

export type CompiledMDX = {
  content: ReactElement<any, string | JSXElementConstructor<any>>
  metadata: Post
}
