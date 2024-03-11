import { Media } from '@/components'
import type { BlockImage } from '@/types'

export const Image = ({
  className,
  image,
}: Omit<BlockImage, 'blockKey'> & { className?: string }) => {
  return (
    <div className={`relative h-[200px] md:h-[400px] ${className}`}>
      <Media image={image} />
    </div>
  )
}
