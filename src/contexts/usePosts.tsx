'use client'
import type { Post } from '@/types'
import { createContext, useContext, useState } from 'react'

const PostsContext = createContext<Post[]>([])

export const usePosts = () => {
  const context = useContext(PostsContext)
  return context
}

type PostsProviderProps = {
  children: React.ReactNode
  posts: Post[]
}

export const PostsProvider = ({ children, posts }: PostsProviderProps) => {
  const [value] = useState<Post[] | []>(posts)

  return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
}
