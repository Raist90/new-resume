import zod from 'zod'

const envClientSchema = zod.object({
  APP_URL: zod.string().url(),
  NEXT_PUBLIC_SANITY_PROJECT_ID: zod.string(),
  NEXT_PUBLIC_SANITY_DATASET: zod.string(),
  NEXT_PUBLIC_SANITY_API_VERSION: zod.string(),
})

const parsedEnvClientSchema = envClientSchema.parse({
  APP_URL: process.env.APP_URL,
  NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
  NEXT_PUBLIC_SANITY_API_VERSION: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
})

export const ENV = parsedEnvClientSchema
