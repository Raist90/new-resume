import { defineField } from 'sanity'

export const companyFields = [
  defineField({
    name: 'company',
    title: 'Company',
    type: 'object',
    fields: [
      defineField({
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'role',
        title: 'Role',
        type: 'string',
        options: {
          list: ['Frontend Developer', 'Fullstack Developer'],
          layout: 'radio',
          direction: 'horizontal',
        },
        initialValue: 'Frontend Developer',
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'isCurrent',
        title: 'Is Current?',
        type: 'boolean',
        initialValue: false,
      }),
      defineField({
        name: 'from',
        title: 'From',
        type: 'date',
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'to',
        title: 'To',
        type: 'date',
        hidden: ({ parent }) => parent?.isCurrent,
      }),
      defineField({
        name: 'description',
        title: 'Description',
        type: 'array',
        of: [{ type: 'block' }],
      }),
    ],
  }),
]
