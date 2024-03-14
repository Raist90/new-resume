'use client'
import { useEffect, useState } from 'react'
import { Post } from '@/types'
import { SearchButtonDialog } from './partials'

type SearchButtonProps = {
  posts: Post[]
}

/** @todo Fix this */
export const SearchButton = ({ posts }: SearchButtonProps) => {
  let [isOpen, setIsOpen] = useState(false)
  let [headerHeight, setHeaderHeight] = useState(0)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  useEffect(() => {
    const header = document.querySelectorAll('[role="navigation"]').item(0)
    const headerHeight = Math.round(
      Number(header.getClientRects().item(0)?.bottom),
    )
    setHeaderHeight(headerHeight || 0)
    return () => {
      setHeaderHeight(0)
    }
  }, [])
  return (
    <>
      <button onClick={openModal} type='button' className='block'>
        Search
      </button>
      <SearchButtonDialog
        isOpen={isOpen}
        closeModal={closeModal}
        headerHeight={headerHeight}
        posts={posts}
      />
    </>
  )
}
