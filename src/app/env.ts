import zod from 'zod'

const envSchema = zod.object({
  APP_URL: zod.string().url(),
  NEXT_PUBLIC_SANITY_PROJECT_ID: zod.string(),
  NEXT_PUBLIC_SANITY_DATASET: zod.string(),
  NEXT_PUBLIC_SANITY_API_VERSION: zod.string(),
})

const envServer = envSchema.safeParse(process.env)

if (!envServer.success) {
  console.error(envServer.error.issues)
  throw new Error('Env validation error')
}

export const ENV = envServer.data
