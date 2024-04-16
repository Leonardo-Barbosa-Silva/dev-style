import { env } from './env'

export async function api(path: string, init?: RequestInit) {
  const baseUrl = env.NEXT_PUBLIC_API_BASE_URL
  const url = new URL('/api'.concat(path), baseUrl)

  await new Promise((resolve) => setTimeout(resolve, 3000))

  return fetch(url, init)
}
