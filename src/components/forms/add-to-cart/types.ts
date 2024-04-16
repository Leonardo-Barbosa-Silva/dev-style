import { ProductProps } from '@/app/(home)/(store)/product/[slug]'
import { z } from 'zod'

export interface FormAddToCartProps {
  product: ProductProps
}

export const formAddToCartSchema = z.object({
  productSize: z.enum(['P', 'M', 'G', 'GG'], {
    errorMap: () => ({
      message: 'Por favor, selecione o tamanho desejado',
    }),
  }),
})

export type FormAddToCartInputsType = z.infer<typeof formAddToCartSchema>
