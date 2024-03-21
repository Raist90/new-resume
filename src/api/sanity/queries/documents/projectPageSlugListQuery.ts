export const projectPageSlugListQuery = `
  *[_type == 'projectPage'] {
    'slug': slug.current,
  }
`
