import type { HomepageProps } from '@/app/types'
import { PortableText } from '@portabletext/react'
import type { ComponentType } from 'react'

type RoadmapProps = Pick<HomepageProps, 'workExperience'>

export const Roadmap: ComponentType<RoadmapProps> = ({ workExperience }) => {
  const { title, companies } = workExperience
  return (
    <section className='grid'>
      <div className='flex lg:w-10/12 flex-col mx-auto'>
        <h2 className='text-3xl'>{title}</h2>
        <article className='grid gap-6'>
          {companies.map(
            ({ id, name, role, from, to, description, isCurrent }) => (
              <div key={id}>
                <h3 className='text-2xl'>{name}</h3>
                <p className='text-xl'>{role}</p>
                {isCurrent ? (
                  <p className='text-xs'>{from} - Current</p>
                ) : (
                  <p className='text-xs'>
                    {from} - {to}
                  </p>
                )}
                <PortableText value={description} />
              </div>
            ),
          )}
        </article>
      </div>
    </section>
  )
}
