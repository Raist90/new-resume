export const projectPageListQuery = `
  *[_type == 'projectPage'][] {
    title,
    excerpt,
    'cover': {
      alt,
      'src': cover.asset->url
    },
    'slug': slug.current,
    'type': _type
  }
`
