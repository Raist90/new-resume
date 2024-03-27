'use client'
import type { Navigation } from '@/types'
import { createContext, useContext, useState } from 'react'

/** @todo Fix this type */
const NavigationContext = createContext<Navigation>({ primary: [] })

export const useNavigation = () => {
  const context = useContext(NavigationContext)
  return context
}

type PostsProviderProps = {
  children: React.ReactNode
  navigation: Navigation
}

export const NavigationProvider = ({
  children,
  navigation,
}: PostsProviderProps) => {
  const [value] = useState<Navigation>(navigation)

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  )
}
