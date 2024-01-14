import { defineField, defineType } from 'sanity'

export const Page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'profile',
      title: 'Profile',
      type: 'reference',
      to: [{ type: 'profile' }],
    }),
    defineField({
      name: 'workExperience',
      title: 'Work Experience',
      type: 'reference',
      to: [{ type: 'workExperience' }],
    }),
  ],
})
