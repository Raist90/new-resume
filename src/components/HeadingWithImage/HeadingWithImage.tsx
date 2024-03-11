import { Media, Separator, TagList } from '..'

type HeadingWithImageProps = {
  /** @description This is required for accessibility purposes */
  id: string
  title: string
  excerpt: string
  image: {
    alt: string
    src: string
  }
  date?: string
  tags?: string[]
}

export const HeadingWithImage = ({
  id: titleId,
  title,
  excerpt,
  image,
  date,
  tags,
}: HeadingWithImageProps) => {
  const isThisAPost = tags && date
  const sectionType = isThisAPost ? 'Post' : 'Project page'
  return (
    <section
      aria-level={1}
      aria-label={`${sectionType} heading`}
      role='heading'
    >
      {tags && <TagList tags={tags} />}

      <hgroup>
        <h2 id={titleId} className='text-3xl'>
          {title}
        </h2>
        <p className='text-xl text-balance'>{excerpt}</p>
      </hgroup>

      {date && (
        <span className='text-xs uppercase block mb-1'>
          Published on {date}
        </span>
      )}

      <Separator className='mt-4 mb-3 w-[200px]' />

      <div className='aspect-[16/9] relative my-4'>
        <Media image={image} />
      </div>
    </section>
  )
}
