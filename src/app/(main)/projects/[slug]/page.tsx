import { projectPageQuery } from '@/api'
import { blockRenderer } from '@/helpers/blockRenderer'
import { client } from '@/sanity/lib/client'
import * as blockComponents from '@/blocks'
import { projectPageSchema } from '@/types'

const getProjectPage = async (slug: string) => {
  const sanityClient = client
  const projectPage = await sanityClient.fetch(projectPageQuery, { slug })
  return projectPage
}

const ProjectPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  const data = await getProjectPage(slug)
  const page = projectPageSchema.parse(data)
  const { title, blocks } = page

  return (
    <section className='lg:w-1/2 mx-auto'>
      <h2 className='text-2xl'>{title}</h2>

      {blockRenderer(blocks, blockComponents)}
    </section>
  )
}

export default ProjectPage
