import { Media } from '@/components/Media'
import type { SearchableItem } from '@/types'
import { getLinkAriaLabel } from '@/helpers/accessibility'
import { useRouter } from 'next/navigation'

type SearchButtonDialogResultsProps = {
  closeModal: () => void
  resetSearchResults: () => void
  searchResult: SearchableItem[]
}

/** @todo Double check accessibility here since we are wrapping everything in a button */
export const SearchButtonDialogResults = ({
  closeModal,
  resetSearchResults,
  searchResult: items,
}: SearchButtonDialogResultsProps) => {
  const { push } = useRouter()

  const handleClick = (slug: string, type: string) => {
    closeModal()
    if (type === 'projectPage') push(`/projects/${slug}`)
    else push(`/posts/${slug}`)
    resetSearchResults()
  }

  return (
    <div className='grid gap-2'>
      {items.map((item) => {
        const { cover, excerpt, slug, title, type } = item
        return (
          <div key={slug}>
            <button
              className='text-start w-full'
              onClick={() => handleClick(slug, type)}
              aria-label={getLinkAriaLabel(title)}
            >
              <div className='flex lg:items-center gap-4 p-2'>
                <div className='relative aspect-square w-[60px] h-[60px]'>
                  <Media image={cover} options={'rounded-sm'} />
                </div>

                <div>
                  <h3 className='mb-0 uppercase'>{title}</h3>
                  <p className='text-sm'>{excerpt}</p>
                </div>
              </div>
            </button>
          </div>
        )
      })}
    </div>
  )
}
