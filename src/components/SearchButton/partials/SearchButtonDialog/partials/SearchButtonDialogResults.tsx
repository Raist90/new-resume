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
  searchResult: posts,
}: SearchButtonDialogResultsProps) => {
  const handleClick = () => {
    closeModal()
    resetSearchResults()
  }
  return (
    <div className='grid gap-2'>
      {posts.map((post) => {
        return (
          <div key={post.slug}>
            <Link
              onClick={handleClick}
              aria-label={getLinkAriaLabel(post.title)}
              href={`/posts/${post.slug}`}
            >
              <div className='flex lg:items-center gap-4 p-2'>
                <div className='relative aspect-square w-[60px] h-[60px]'>
                  <Media image={post.cover} options={'rounded-sm'} />
                </div>

                <div>
                  <h3 className='mb-0 uppercase'>{post.title}</h3>
                  <p className='text-sm'>{post.excerpt}</p>
                </div>
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}
