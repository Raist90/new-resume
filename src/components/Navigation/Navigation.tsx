'use client'
import { dmMono } from '@/fonts'
import { Primary, Secondary } from './partials'
import clsx from 'clsx'
import { useEffect, useState } from 'react'

/** @todo This is not an arrow function because of a weird `Next bug`.
 * Check this one and change it once it's fixed: https://github.com/vercel/next.js/issues/58778 */
export function Navigation() {
  const [isSticky, setIsSticky] = useState(false)

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
        isSticky && 'border-b border-gray-600',
        'sticky z-50 top-0 backdrop-blur-md',
      )}
    >
      <menu
        role='menubar'
        className={`${dmMono.className} w-full lg:w-1/2 lg:mx-auto py-4 flex justify-between px-4`}
      >
        <Primary />
        <Secondary />
      </menu>
    </div>
  )
}
