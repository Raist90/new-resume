import { defineField, defineType } from 'sanity'
import { blockImage, blockText } from '.'
import { Columns } from 'lucide-react'

/** @description Since this block is just a combination of `blockImage` and `blockText` with some additional fields, we can re-use those fields here */
const fields = [
  ...blockImage.fields,
  ...blockText.fields,
  defineField({
    name: 'imagePosition',
    title: 'Image Position',
    type: 'string',
    options: {
      list: ['left', 'right'],
      layout: 'radio',
      direction: 'horizontal',
    },
    initialValue: 'left',
    validation: (Rule) => Rule.required(),
  }),
]

export const blockTextImage = defineType({
  name: 'blockTextImage',
  title: 'BlockTextImage',
  type: 'object',
  icon: Columns,
  fields,
})
