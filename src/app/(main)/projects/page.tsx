import { ProjectCard } from '@/components'
import { CMSRouter } from '@/routers/CMSRouter'

const ProjectsPage = async () => {
  const allProjects = await CMSRouter.fetch.projectPageList()
  console.log('allProjects', allProjects)
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {allProjects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </section>
  )
}

export default ProjectsPage
