import { ProductSizes } from '@/contexts/cart/types'
import { UseFormRegister } from 'react-hook-form'

export interface SizeButtonProps {
  size: ProductSizes
  register: UseFormRegister<{
    productSize: 'P' | 'M' | 'G' | 'GG'
  }>
  productSizeSelectedValue: ProductSizes
}
