import { defineField, defineType } from 'sanity'
import { linkValidation, referenceValidation } from '../validationRules'
import { Link } from 'lucide-react'

const fields = [
  defineField({
    name: 'linkType',
    title: 'Link Type',
    type: 'string',
    options: {
      list: ['internal', 'external'],
      layout: 'radio',
      direction: 'horizontal',
    },
    initialValue: 'internal',
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: 'label',
    title: 'Label',
    type: 'string',
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: 'internalLink',
    title: 'Internal Link',
    type: 'reference',
    to: [{ type: 'page' }],
    hidden: ({ parent }) => parent.linkType !== 'internal',
    validation: referenceValidation,
  }),
  defineField({
    name: 'externalLink',
    title: 'External Link',
    type: 'string',
    hidden: ({ parent }) => parent.linkType !== 'external',
    validation: linkValidation,
  }),
]

export const link = defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  icon: Link,
  fields,
  preview: {
    select: {
      label: 'label',
      linkType: 'linkType',
      externalLink: 'externalLink',
    },
    prepare({
      label,
      linkType,
      externalLink,
    }: {
      [key: string]: string | undefined
    }) {
      const urlify = (str: string) => `/${str.toLowerCase()}`
      const url =
        linkType === 'internal' ? label ?? 'no url' : externalLink ?? 'no url'
      const previewUrl = url !== 'no url' ? urlify(url) : url

      return {
        title: label || 'No label',
        subtitle: `Type: ${linkType}, URL: ${previewUrl}`,
      }
    },
  },
})
