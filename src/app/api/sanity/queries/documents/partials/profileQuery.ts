export const profileQuery = `
  name,
  motto,
  picture {
    alt,
    'src': asset->url
  },
  role,
  bio
`
