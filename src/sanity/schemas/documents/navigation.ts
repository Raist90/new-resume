import { Navigation } from 'lucide-react'
import { defineField, defineType } from 'sanity'

const fields = [
  defineField({
    name: 'title',
    title: 'Title',
    type: 'string',
    initialValue: 'Navigation',
    readOnly: true,
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: 'primary',
    title: 'Primary',
    type: 'array',
    of: [{ type: 'link' }],
  }),
]

export const navigation = defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  icon: Navigation,
  fields,
})
