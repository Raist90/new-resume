'use client'
import clsx from 'clsx'
import { useEffect, useState } from 'react'

/** @todo There's a bug here. It will not show the border when reloading a page without scrolling. */
export const NavigationBorder = () => {
  let [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
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
