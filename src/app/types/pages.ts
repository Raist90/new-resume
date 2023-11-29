import z from 'zod'

/** @description This data is coming from Sanity CMS */
export const homepageSchema = z.object({
  title: z.string(),
  profile: z.object({
    name: z.string(),
    motto: z.string(),
    picture: z.object({
      alt: z.string(),
      src: z.string().url(),
    }),
    role: z.string(),
    bio: z.array(
      z.object({
        _key: z.string(),
        _type: z.string(),
        children: z.array(
          z.object({
            _key: z.string(),
            _type: z.string(),
            marks: z.array(z.string()),
            text: z.string(),
          }),
        ),
        markDefs: z.array(z.unknown()),
        style: z.string(),
      }),
    ),
  }),
})

export type HomepageProps = z.infer<typeof homepageSchema>
