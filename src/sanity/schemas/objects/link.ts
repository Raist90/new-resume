import { defineField, defineType } from 'sanity'
import { generateLinkValidation } from '../validationRules'
import { Link } from 'lucide-react'
import { isArray, isString } from '@/helpers/predicates'

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
    validation: (Rule) => generateLinkValidation(Rule, 'internal'),
  }),
  defineField({
    name: 'externalLink',
    title: 'External Link',
    type: 'slug',
    options: {
      source: (_, object) => {
        const { parent } = object
        if (!isArray(parent) && 'label' in parent && isString(parent.label)) {
          return parent.label
        }
        return ''
      },
      slugify: (input: string) => `/${input.toLowerCase()}`,
    },
    hidden: ({ parent }) => parent.linkType !== 'external',
    validation: (Rule) => generateLinkValidation(Rule, 'external'),
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
      externalLink: 'externalLink.current',
    },
    prepare({
      label,
      linkType,
      externalLink,
    }: Record<string, string | undefined>) {
      const urlify = (str: string) => {
        if (str) return `/${str.toLowerCase()}`
      }

      const getUrl = (): string | undefined => {
        if (!linkType) return 'no url'
        if (isString(linkType) && linkType === 'internal' && isString(label)) {
          return urlify(label)
        } else if (
          isString(linkType) &&
          linkType === 'external' &&
          externalLink &&
          isString(externalLink)
        ) {
          return externalLink
        }
      }

      return {
        title: label || 'No label',
        subtitle: `Type: ${linkType}, URL: ${getUrl()}`,
      }
    },
  },
})
