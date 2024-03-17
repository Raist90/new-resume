import { dmMono } from '@/fonts'
import Link from 'next/link'

export const TagList = ({ tags }: { tags: string[] }) => {
  return (
    <div className={`${dmMono.className} inline-flex flex-wrap gap-x-2`}>
      {tags.map((tag, index) => {
        const isLastIndex = index === tags.length - 1

        return (
          <Link key={index + 2} href={`/tags/${tag}`}>
            <span className='text-xs uppercase'>{tag}</span>
            {!isLastIndex && <span className='text-gray-600'> /</span>}
          </Link>
        )
      })}
    </div>
  )
}
