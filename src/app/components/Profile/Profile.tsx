import type { ComponentType } from 'react'
import { Media } from '../Media'
import { PortableText } from '@portabletext/react'
import type { HomepageProps } from '@/app/types'
import { expertiseLabels } from '@/app/constants'

type ProfileProps = Pick<HomepageProps, 'profile'>

export const Profile: ComponentType<ProfileProps> = ({ profile }) => {
  const { name, motto, picture, role, bio } = profile
  return (
    <>
      <article className='grid md:grid-cols-12 gap-9 items-start'>
        <div className='md:col-span-5 relative h-[400px] lg:h-[700px]'>
          <Media image={picture} options={`rounded-lg object-top`} />
        </div>

        <div className='md:col-span-7 grid gap-3'>
          <div>
            <h2 className='text-3xl'>{name}</h2>
            <h3 className='text-2xl'>{role}</h3>
            <p>{motto}</p>
            <PortableText value={bio} />
          </div>
          <div>
            <h4 className='text-2xl'>Expertise</h4>
            <div>
              <ul className='flex flex-wrap gap-3'>
                {expertiseLabels.map((label) => (
                  <li className='border p-2' key={label}>
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
