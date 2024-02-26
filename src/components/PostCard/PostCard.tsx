import type { Post } from '@/types'
import Link from 'next/link'
import { Media, TagList } from '..'
import { useId } from 'react'
import { getLinkAriaLabel } from '@/helpers/accessibility'

type PostCardProps = {
  post: Post
}

export const PostCard = ({ post }: PostCardProps) => {
  const postTitle = useId()
  return (
    <article aria-labelledby={postTitle} key={post.title}>
      <Link
        aria-label={getLinkAriaLabel(post.title)}
        href={`/posts/${post.slug}`}
      >
        <div className='aspect-[16/9] relative my-4'>
          <Media image={post.cover} />
        </div>
      </Link>

      <TagList tags={post.tags} />
      <Link href={`/posts/${post.slug}`}>
        <h2 id={postTitle} className='text-2xl'>
          {post.title}
        </h2>
      </Link>
      <span className='text-sm block mb-1'>Published on {post.date}</span>
      <p>{post.excerpt}</p>
    </article>
  )
}
