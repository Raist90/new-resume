import type { SearchableItem } from '@/types'
import { Dialog, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Search } from 'lucide-react'
import { Fragment, useEffect, useMemo, useRef, useState } from 'react'
import { usePosts, useProjects } from '@/contexts'
import { SearchButtonDialogResults } from './partials'
import { getFilteredSearchResults } from './helpers'
import type { SearchButtonDialogProps } from '.'
import { formatIntoSearchableItem } from './formatters'

const activeCategory = {
  Posts: true,
  Tags: false,
  Projects: false,
}

type SearchInitialState = {
  isActive: typeof activeCategory
  searchCategory: keyof typeof activeCategory
  searchResult: SearchableItem[]
  searchQuery: string
}

const searchInitialState: SearchInitialState = {
  isActive: activeCategory,
  searchCategory: 'Posts',
  searchResult: [],
  searchQuery: '',
}

export const SearchButtonDialog = ({
  isOpen,
  closeModal,
  headerHeight,
}: SearchButtonDialogProps) => {
  const customInset = `${headerHeight}px 0 0 0`

  const posts = usePosts()
  const projects = useProjects()
  /** @todo For some reason this doesn't work without using `useMemo` and instead it generates an infinite loop. Try to understand why */
  const content = useMemo(
    () => formatIntoSearchableItem([...posts, ...projects]),
    [posts, projects],
  )

  let [searchState, setSearchState] = useState(searchInitialState)

  const { isActive, searchCategory, searchResult, searchQuery } = searchState

  /** @todo Make sure to also add CMS pages here */
  const searchDialogButtonList = [
    { active: isActive['Posts'], label: 'Posts' },
    { active: isActive['Tags'], label: 'Tags' },
    { active: isActive['Projects'], label: 'Projects' },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchState((prevState) => ({ ...prevState, searchQuery: query }))
  }

  useEffect(() => {
    const queryResults = getFilteredSearchResults(
      content,
      searchCategory,
      searchQuery,
    )
    setSearchState((prevState) => ({
      ...prevState,
      searchResult: queryResults,
    }))
  }, [content, searchCategory, searchQuery])

  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const clickedButton = e.currentTarget
      .innerHTML as keyof typeof activeCategory

    const updatedState = Object.fromEntries(
      searchDialogButtonList.map((button) => [button.label, false]),
    ) as typeof activeCategory

    updatedState[clickedButton] = true

    setSearchState((prevState) => ({
      ...prevState,
      isActive: updatedState,
      searchCategory: clickedButton,
    }))

    if (!inputRef.current) return
    inputRef.current.focus()
  }

  const resetSearchResults = () => {
    setSearchState((prevState) => ({ ...prevState, searchQuery: '' }))
  }

  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <>
      <Transition appear show={isOpen} as='div'>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed bg-white/50 dark:bg-black/50 inset-0 backdrop-blur-sm' />
          </Transition.Child>

          <div
            style={{ inset: `${customInset}` }}
            className={`fixed overflow-y-auto`}
          >
            <div id='searchModal' className='flex justify-center m-1'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full md:w-1/2 mt-4 transform overflow-hidden bg-white shadow-xl transition-all bg-lightBGPrimary dark:bg-darkBGPrimary border border-gray-600 rounded-lg'>
                  <div className='flex h-10 gap-2 p-2'>
                    <div className='h-full flex items-center'>
                      <Search size={16} />
                    </div>
                    <input
                      autoComplete='off'
                      className='h-full w-full focus:outline-none bg-inherit'
                      onChange={handleChange}
                      ref={inputRef}
                      type='text'
                      name='search'
                      placeholder='Search anything...'
                    />
                  </div>
                  <div className='text-xs p-2 border-t border-gray-600 h-10 flex gap-1'>
                    {searchDialogButtonList.map((button) => (
                      <button
                        key={button.label}
                        type='button'
                        className={clsx(
                          button.active && 'bg-gray-200 dark:bg-black',
                          'border px-2 rounded-lg border-gray-600',
                        )}
                        onClick={onButtonClick}
                      >
                        {button.label}
                      </button>
                    ))}
                  </div>

                  <SearchButtonDialogResults
                    closeModal={closeModal}
                    resetSearchResults={resetSearchResults}
                    searchResult={searchResult}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
