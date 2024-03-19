import Link from 'next/link'
import { Media } from '..'
import type { Post } from '@/types'
import { useId } from 'react'
import { getLinkAriaLabel } from '@/helpers/accessibility'

type LatestPostsProps = {
  posts: Post[]
  className?: string
}

export const LatestPosts = ({ posts, ...rest }: LatestPostsProps) => {
  const titleId = useId()
  return (
    <section className='px-4' aria-labelledby={titleId} {...rest}>
      <header id={titleId}>
        <h2 className='text-2xl'>Latest posts</h2>
      </header>

      <div className='grid gap-2'>
        {posts.map((post) => {
          return (
            <div key={post.slug}>
              <Link
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
    </section>
  )
}
