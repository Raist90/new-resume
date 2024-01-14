import z from 'zod'

/** @todo Move this to a separate file */
const portableTextSchema = z.array(
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
)

/** @todo Move this to a separate file */
const companySchema = z.object({
  id: z.string(),
  name: z.string(),
  role: z.union([
    z.literal('Frontend Developer'),
    z.literal('Fullstack Developer'),
  ]),
  isCurrent: z.boolean(),
  from: z.string(),
  to: z.string().nullish(),
  description: portableTextSchema,
})

const companiesSchema = z.array(companySchema)

/**
 * @description This data is coming from Sanity CMS
 * @todo Split this code into multiple objects
 * */
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
    bio: portableTextSchema,
  }),
  workExperience: z.object({
    title: z.string(),
    companies: companiesSchema,
  }),
})

export type HomepageProps = z.infer<typeof homepageSchema>
