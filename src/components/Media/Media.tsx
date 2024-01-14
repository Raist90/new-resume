import Image from 'next/image'
import { MediaProps } from './MediaProps'

export const Media = ({ image, options }: MediaProps) => {
  const { alt, src } = image
  return (
    <Image
      alt={alt}
      className={`object-cover ${options}`}
      fill={true}
      quality={100}
      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
      src={src}
      placeholder='blur'
      blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='
    />
  )
}
