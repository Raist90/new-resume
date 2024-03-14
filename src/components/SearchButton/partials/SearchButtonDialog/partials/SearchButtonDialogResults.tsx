import { Media } from '@/components/Media'
import type { Post } from '@/types'
import Link from 'next/link'
import { getLinkAriaLabel } from '@/helpers/accessibility'

type SearchButtonDialogResultsProps = {
  closeModal: () => void
  resetSearchResults: () => void
  searchResult: Post[] | []
}

export const SearchButtonDialogResults = ({
  closeModal,
  resetSearchResults,
  searchResult: items,
}: SearchButtonDialogResultsProps) => {
  const handleClick = () => {
    closeModal()
    resetSearchResults()
  }
  /** @todo Here `Link` should ideally be a `button` that redirects by using `useRouter` */
  return (
    <div className='grid gap-2'>
      {items.map((item) => {
        return (
          <div key={item.slug}>
            <Link
              onClick={handleClick}
              aria-label={getLinkAriaLabel(item.title)}
              href={`/posts/${item.slug}`}
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
            </Link>
          </div>
        )
      })}
    </div>
  )
}
