import { Media } from '@/components'
import type { BlockImage } from '@/types'

export const Image = ({ image }: Omit<BlockImage, 'blockKey'>) => {
  return (
    <div className='relative h-[200px] md:h-[400px]'>
      <Media image={image} />
    </div>
  )
}
