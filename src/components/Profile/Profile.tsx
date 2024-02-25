import { Media } from '..'
import { PortableText } from '@portabletext/react'
import type { HomepageProps } from '@/types'
import { expertiseLabels } from '@/constants'

type ProfileProps = Pick<HomepageProps, 'profile'>

export const Profile = ({ profile }: ProfileProps) => {
  const { name, motto, picture, role, bio } = profile
  return (
    <section className='grid gap-8'>
      <div className='grid lg:grid-cols-2 gap-4 text-balance'>
        <div>
          <h2 className='text-3xl'>{name}</h2>
          <h3 className='text-2xl'>{role}</h3>
          <p>{motto}</p>
        </div>

        <div className='relative aspect-square h-[200px]'>
          <Media image={picture} options={'rounded-full'} />
        </div>
      </div>

      <div>
        <PortableText value={bio} />
      </div>

      <div className='text-sm'>
        <h4 className='text-2xl'>Expertise</h4>
        <div>
          <ul className='flex flex-wrap gap-3'>
            {expertiseLabels.map((label) => (
              <li
                className='border border-lightAccent dark:border-darkAccent p-2'
                key={label}
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
