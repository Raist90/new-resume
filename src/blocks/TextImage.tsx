import type { BlockTextImage } from '@/types'
import { Image as ImageBlock, Text as TextBlock } from '.'

const getBlocks = <T extends JSX.Element>(leftBlock: T, rightBlock: T) => {
  return (
    <>
      {leftBlock}
      {rightBlock}
    </>
  )
}

export const TextImage = ({ image, text, imagePosition }: BlockTextImage) => {
  const imageBlock = <ImageBlock image={image} ratio='1/1' />
  const textBlock = (
    <TextBlock
      className='md:sticky md:place-self-end md:bottom-12'
      text={text}
    />
  )

  const directionMap = {
    left: getBlocks(imageBlock, textBlock),
    right: getBlocks(textBlock, imageBlock),
  }

  return (
    <section className='grid grid-cols-2 gap-4 min-h-[400px] absolute w-8/12 left-[50%] translate-x-[-50%]'>
      {directionMap[imagePosition]}
    </section>
  )
}
