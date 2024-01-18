import type { Post } from '@/types'
import Link from 'next/link'
import { Media } from '..'

type PostCardProps = {
  post: Post
}

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <Link href={`posts/${post.slug}`} key={post.title}>
      <article>
        <div className='aspect-[16/9] relative my-2'>
          <Media image={post.cover} />
        </div>

        <h2 className='text-2xl'>{post.title}</h2>
        <span className='text-sm block mb-2'>Published on {post.date}</span>
        <p>{post.excerpt}</p>

        <div className='inline-flex gap-2 text-sm'>
          {post.tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
      </article>
    </Link>
  )
}
