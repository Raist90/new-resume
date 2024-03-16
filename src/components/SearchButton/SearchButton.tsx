'use client'
import { useEffect, useState } from 'react'
import { SearchButtonDialog } from './partials'

const headerRectsInitialState = {
  headerHeight: 0,
  headerWidth: 0,
}

export const SearchButton = () => {
  let [isOpen, setIsOpen] = useState(false)
  let [headerRects, setHeaderRects] = useState<typeof headerRectsInitialState>(
    headerRectsInitialState,
  )

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  useEffect(() => {
    /** @todo What if we have more then an element with role `menubar`? Better be more specific */
    const header = document.querySelectorAll('[role="menubar"]').item(0)
    const headerRects = header.getClientRects().item(0)
    const headerHeight = Math.round(Number(headerRects?.bottom))
    const headerWidth = Math.round(Number(headerRects?.width))
    setHeaderRects({
      headerHeight,
      headerWidth,
    })
    return () => {
      setHeaderRects(headerRectsInitialState)
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
        headerRects={headerRects}
      />
    </>
  )
}
