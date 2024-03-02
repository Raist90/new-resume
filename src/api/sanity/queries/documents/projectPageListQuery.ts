export const projectPageListQuery = `
  *[_type == 'projectPage'] {
    'slug': slug.current,
  }
`
