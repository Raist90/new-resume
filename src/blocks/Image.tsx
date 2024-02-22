import { Media } from '@/components'
import type { BlockImage } from '@/types'

export const Image = ({ image }: BlockImage) => {
  return (
    <div className='relative h-[200px] md:h-[400px]'>
      <Media image={image} />
    </div>
  )
}
