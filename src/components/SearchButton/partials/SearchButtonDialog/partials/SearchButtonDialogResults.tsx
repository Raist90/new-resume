import { Media } from '@/components/Media'
import type { Post } from '@/types'
import { getLinkAriaLabel } from '@/helpers/accessibility'
import { useRouter } from 'next/navigation'

type SearchButtonDialogResultsProps = {
  closeModal: () => void
  resetSearchResults: () => void
  searchResult: Post[] | []
}

/** @todo Double check accessibility here since we are wrapping everything in a button */
export const SearchButtonDialogResults = ({
  closeModal,
  resetSearchResults,
  searchResult: items,
}: SearchButtonDialogResultsProps) => {
  const { push } = useRouter()

  const handleClick = (slug: string) => {
    closeModal()
    resetSearchResults()
    push(`/posts/${slug}`)
  }

  return (
    <div className='grid gap-2'>
      {items.map((item) => {
        return (
          <div key={item.slug}>
            <button
              className='text-start w-full'
              onClick={() => handleClick(item.slug)}
              aria-label={getLinkAriaLabel(item.title)}
            >
              <div className='flex lg:items-center gap-4 p-2'>
                <div className='relative aspect-square w-[60px] h-[60px]'>
                  <Media image={item.cover} options={'rounded-sm'} />
                </div>

                <div>
                  <h3 className='mb-0 uppercase'>{item.title}</h3>
                  <p className='text-sm'>{item.excerpt}</p>
                </div>
              </div>
            </button>
          </div>
        )
      })}
    </div>
  )
}
