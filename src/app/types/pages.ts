import type { TypedObject } from 'sanity'

export type HomepageProps = {
  title: string
  profile: {
    name: string
    motto: string
    picture: {
      alt: string
      src: string
    }
    role: string
    bio: TypedObject[]
  }
}
