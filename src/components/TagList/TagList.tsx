import { dmMono } from '@/fonts'
import Link from 'next/link'

export const TagList = ({ tags }: { tags: string[] }) => {
  const isLastIndex = (index: number) => index === tags.length - 1

  return (
    <div className={`${dmMono.className} inline-flex flex-wrap gap-x-2`}>
      {tags.map((tag, index) => (
        <Link key={index + 2} href={`/tags/${tag}`}>
          <span className='text-xs uppercase'>{tag}</span>
          {!isLastIndex(index) && <span> /</span>}
        </Link>
      ))}
    </div>
  )
}
