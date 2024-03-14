'use client'
import { Post } from '@/types'
import { createContext, useContext, useState } from 'react'

type BlogRouterCTX = Post[]

const PostsContext = createContext<BlogRouterCTX>([])

export const useBlogRouter = () => {
  const context = useContext(PostsContext)
  return context
}

type PostsProviderProps = {
  children: React.ReactNode
  posts: Post[]
}

export const PostsProvider = ({ children, posts }: PostsProviderProps) => {
  const [value] = useState<BlogRouterCTX | []>(posts)

  return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
}
