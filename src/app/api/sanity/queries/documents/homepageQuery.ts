import { profileQuery } from './profileQuery'

export const homepageQuery = `
  *[ _type == 'page' && title == 'Homepage' ][0] {
    title,
    'profile': profile-> {${profileQuery}}
  }
`
