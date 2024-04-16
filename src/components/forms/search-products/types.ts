import { z } from 'zod'

export const searchProductsSchema = z.object({
  search: z.string(),
})

export type SearchProductInputsType = z.infer<typeof searchProductsSchema>
