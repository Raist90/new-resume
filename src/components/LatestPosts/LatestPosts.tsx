import Link from 'next/link'
import { Media } from '..'
import type { Post } from '@/types'

type LatestPostsProps = {
  posts: Omit<Post, 'date' | 'tags'>[]
  className?: string
}

/** @todo Find a way to generate an `id` for each post */
export const LatestPosts = ({ posts, ...rest }: LatestPostsProps) => {
  return (
    <section {...rest}>
      <h2 className='text-2xl'>Latest posts</h2>

      <div className='grid gap-2'>
        {posts.map((post, index) => {
          const isLastIndex = index === posts.length - 1
          return (
            <div key={post.title}>
              <Link href={`/posts/${post.slug}`}>
                <article className='flex lg:items-center gap-4 p-2'>
                  <div className='relative aspect-square w-[60px] h-[60px]'>
                    <Media image={post.cover} options={'rounded-sm'} />
                  </div>

                  <div>
                    <h3 className='mb-0 uppercase'>{post.title}</h3>
                    <p className='text-sm'>{post.excerpt}</p>
                  </div>
                </article>
              </Link>

              {!isLastIndex && (
                <hr className='my-2 border-lightAccent dark:border-darkAccent' />
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
