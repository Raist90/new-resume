import { blockRenderer } from '@/helpers/blockRenderer'
import * as blockComponents from '@/blocks'
import { randomUUID } from 'crypto'
import { HeadingWithImage } from '@/components'
import { CMSRouter } from '@/routers/CMSRouter'

export const generateStaticParams = async () => {
  const projectPages = await CMSRouter.fetch.projectPageSlugList()
  return projectPages.map((page) => ({
    slug: page.slug,
  }))
}

const ProjectPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  const { title, cover, excerpt, blocks } =
    await CMSRouter.fetch.projectPage(slug)
  const titleId = randomUUID()

  return (
    <section className='lg:w-1/2 mx-auto'>
      <HeadingWithImage
        id={titleId}
        title={title}
        excerpt={excerpt}
        image={cover}
      />

      {blockRenderer(blocks, blockComponents)}
    </section>
  )
}

export default ProjectPage
