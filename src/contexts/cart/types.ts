export type productsSize = 'P' | 'M' | 'G' | 'GG'

export type CartItem = {
  productId: number
  size: productsSize
  qtd: number
}

export interface CartContextProps {
  items: CartItem[]
  addToCart: (productId: number, productSize: productsSize) => void
}
