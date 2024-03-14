import type { Post } from '@/types'
import { Dialog, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Search } from 'lucide-react'
import { Fragment, useState } from 'react'
import { useBlogRouter } from '@/contexts'
import { SearchButtonDialogResults } from './partials'
import { getFilteredSearchResults } from './helpers'

type SearchButtonDialogProps = {
  isOpen: boolean
  closeModal: () => void
  headerRects: {
    headerHeight: number
    headerWidth: number
  }
}

/** @todo Dialog should reset search results when closed */
export const SearchButtonDialog = ({
  isOpen,
  closeModal,
  headerRects,
}: SearchButtonDialogProps) => {
  const { headerHeight, headerWidth } = headerRects
  const customInset = `${headerHeight}px 0 0 0`

  const posts = useBlogRouter()

  const initialState = {
    Posts: true,
    Tags: false,
    Projects: false,
  }

  let [isActive, setIsActive] = useState<typeof initialState>(initialState)
  let [searchCategory, setSearchCategory] =
    useState<keyof typeof initialState>('Posts')
  let [searchResult, setSearchResult] = useState<Post[]>([])

  const searchDialogButtonList = [
    { active: isActive['Posts'], label: 'Posts' },
    { active: isActive['Tags'], label: 'Tags' },
    { active: isActive['Projects'], label: 'Projects' },
  ]

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    const queryResults = getFilteredSearchResults(posts, searchCategory, query)
    setSearchResult(queryResults)
  }

  /** @todo Ideally here when clicking a button the search results should be reset or even better we should update the results with the current query */
  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const clickedButton = e.currentTarget.innerHTML as keyof typeof initialState
    const updatedState = Object.fromEntries(
      searchDialogButtonList.map((button) => [button.label, false]),
    ) as typeof initialState
    updatedState[clickedButton] = true
    setIsActive(updatedState)
    setSearchCategory(clickedButton)
  }

  const resetSearchResults = () => {
    setSearchResult([])
  }

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
                <Dialog.Panel
                  style={{ width: headerWidth }}
                  className='transform overflow-hidden bg-white shadow-xl transition-all bg-lightBGPrimary dark:bg-darkBGPrimary border border-gray-200 dark:border-gray-600 rounded-lg'
                >
                  <div className='flex h-10 gap-2 p-2'>
                    <div className='h-full flex items-center'>
                      <Search size={16} />
                    </div>
                    <input
                      autoComplete='off'
                      className='h-full w-full focus:outline-none bg-inherit'
                      onChange={handleChange}
                      type='text'
                      name='search'
                      placeholder='Search anything...'
                    />
                  </div>
                  <div className='text-xs p-2 border-t border-gray-200 dark:border-gray-600 h-10 flex gap-1'>
                    {searchDialogButtonList.map((button) => (
                      <button
                        key={button.label}
                        type='button'
                        className={clsx(
                          button.active && 'bg-gray-200 dark:bg-black',
                          'border px-2 rounded-lg border-gray-200 dark:border-gray-600',
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
