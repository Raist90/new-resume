import { defineField } from 'sanity'

const fields = [
  defineField({
    name: 'text',
    title: 'Text',
    type: 'array',
    of: [{ type: 'block' }],
  }),
]

export const blockText = defineField({
  name: 'blockText',
  title: 'Block Text',
  type: 'object',
  fields,
})
