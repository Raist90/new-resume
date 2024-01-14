export const workExperienceQuery = `
  title,
  companies[] {
    'id': _key,
    name,
    description,
    from,
    to,
    role,
    isCurrent,
  }
`
