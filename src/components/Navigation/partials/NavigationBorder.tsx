'use client'
import clsx from 'clsx'
import { useEffect, useState } from 'react'

export const NavigationBorder = () => {
  let [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    // This will make sure that the border will show if the user is not at the top of the page on route refresh
    if (window.scrollY > 0) {
      setIsSticky(true)
    }

    const handleScroll = () => {
      setIsSticky(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={clsx(
        !isSticky && `hidden`,
        `border-b border-gray-600 absolute top-0 left-0 bottom-0 w-full`,
      )}
    />
  )
}
