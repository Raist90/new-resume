import { profileQuery, workExperienceQuery } from './partials'

export const homepageQuery = `
  *[ _type == 'page' && title == 'Homepage' ][0] {
    title,
    'profile': profile-> {${profileQuery}},
    'workExperience': workExperience-> {${workExperienceQuery}}
  }
`
