'use client'

import { ReactNode, createContext, useContext, useState } from 'react'
import { CartContextProps, CartItem, ProductSizes } from './types'

const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addToCart(productId: number, productSize: ProductSizes) {
    setCartItems((prev) => {
      const isProductOnCart = prev.some(
        (product) => product.productId === productId,
      )

      if (isProductOnCart) {
        return prev.map((product) => {
          if (product.productId === productId) {
            return { ...product, qtd: product.qtd++ }
          } else {
            return product
          }
        })
      } else {
        return [...prev, { productId, qtd: 1, size: productSize }]
      }
    })
  }

  return (
    <CartContext.Provider value={{ items: cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
