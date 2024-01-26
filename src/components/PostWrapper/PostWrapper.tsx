import { Media, TagList } from '..'

type PostWrapperProps = {
  children: React.ReactNode
  title: string
  date: string
  /** @todo Create a `BaseImage` type and move it into `src/types` */
  cover: {
    alt: string
    src: string
  }
  tags: string[]
  excerpt: string
}

export const PostWrapper = ({
  children,
  title,
  date,
  cover,
  tags,
  excerpt,
}: PostWrapperProps) => {
  return (
    <section className='w-full md:w-10/12 lg:w-1/2 mx-auto p-4 grid gap-4'>
      <div>
        <TagList tags={tags} />

        <h2 className='text-3xl'>{title}</h2>
        <p className='text-xl text-balance'>{excerpt}</p>

        <hr className='mt-4 mb-3 w-[200px]' />

        <span className='text-xs uppercase block mb-1'>
          Published on {date}
        </span>

        <div className='aspect-[16/9] relative my-4'>
          <Media image={cover} />
        </div>
      </div>

      <div>{children}</div>
    </section>
  )
}
