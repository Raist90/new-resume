import { defineField, defineType } from 'sanity'

const fields = [
  defineField({
    name: 'name',
    title: 'Name',
    type: 'string',
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: 'motto',
    title: 'Motto',
    type: 'string',
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: 'picture',
    title: 'Picture',
    type: 'image',
    fields: [
      defineField({
        name: 'alt',
        title: 'Alt',
        type: 'string',
        validation: (Rule) => Rule.required(),
      }),
    ],
  }),
  defineField({
    name: 'role',
    title: 'Role',
    type: 'string',
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: 'bio',
    title: 'Bio',
    type: 'array',
    of: [{ type: 'block' }],
  }),
]

export const profile = defineType({
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields,
})
