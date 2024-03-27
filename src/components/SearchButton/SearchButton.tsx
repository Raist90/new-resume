'use client'
import { useState } from 'react'
import { SearchButtonDialog } from './partials'
import { useEffectOnce } from '@/helpers/hooks'

export const SearchButton = () => {
  let [isOpen, setIsOpen] = useState(false)
  let [headerHeight, setHeaderHeight] = useState(0)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  useEffectOnce(() => {
    /** @todo What if we have more then an element with role `menubar`? Better be more specific */
    const header = document.querySelectorAll('[role="menubar"]').item(0)
    const headerRects = header.getClientRects().item(0)
    const headerHeight = Math.round(Number(headerRects?.bottom))
    setHeaderHeight(headerHeight)
    return () => {
      setHeaderHeight(0)
    }
  })
  return (
    <>
      <button onClick={openModal} type='button' className='block'>
        Search
      </button>
      <SearchButtonDialog
        isOpen={isOpen}
        closeModal={closeModal}
        headerHeight={headerHeight}
      />
    </>
  )
}
