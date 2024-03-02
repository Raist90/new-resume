import type { BlockTextImage } from '@/types'
import { Image as ImageBlock, Text as TextBlock } from '.'

const getBlocks = <T extends JSX.Element>(leftBlock: T, rightBlock: T) => {
  return (
    <>
      <div className='md:col-span-4'>{leftBlock}</div>
      <div className='md:col-span-8 md:sticky md:place-self-end md:bottom-12'>
        {rightBlock}
      </div>
    </>
  )
}

export const TextImage = ({ image, text, imagePosition }: BlockTextImage) => {
  const imageBlock = <ImageBlock image={image} />
  const textBlock = <TextBlock className='m-0' text={text} />

  const directionMap = {
    left: getBlocks(imageBlock, textBlock),
    right: getBlocks(textBlock, imageBlock),
  }

  return (
    <div className='grid md:grid-cols-12 gap-4 md:ml-[-100px]'>
      {directionMap[imagePosition]}
    </div>
  )
}
