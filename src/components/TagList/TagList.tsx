import { dmMono } from '@/fonts'
import Link from 'next/link'

export const TagList = ({ tags }: { tags: string[] }) => {
  return (
    <div className={`${dmMono.className} inline-flex flex-wrap gap-x-2`}>
      {tags.map((tag, index) => (
        <Link key={index + 2} href={`/tags/${tag}`}>
          <em className='text-sm'>#{tag}</em>
        </Link>
      ))}
    </div>
  )
}
