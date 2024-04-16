export type ProductSizes = 'P' | 'M' | 'G' | 'GG'

export type CartItem = {
  productId: number
  size: ProductSizes
  qtd: number
}

export interface CartContextProps {
  items: CartItem[]
  addToCart: (productId: number, productSize: ProductSizes) => void
}
