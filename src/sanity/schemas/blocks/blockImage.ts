import { FileImage } from 'lucide-react'
import { defineField, defineType } from 'sanity'

const fields = [
  defineField({
    name: 'image',
    title: 'Image',
    type: 'image',
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: 'alt',
    title: 'Alt Tag',
    type: 'string',
    validation: (Rule) => Rule.required(),
  }),
]

export const blockImage = defineType({
  name: 'blockImage',
  title: 'Block Image',
  type: 'object',
  icon: FileImage,
  fields,
  preview: {
    select: {
      alt: 'alt',
      image: 'image',
    },
    prepare({ alt, image }) {
      return {
        media: image,
        title: 'Block Image',
        subtitle: `Alt tag: ${alt || 'No alt tag'}`,
      }
    },
  },
})
