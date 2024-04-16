'use client'

import { useCart } from '@/contexts/cart'
import { ShoppingBag } from 'lucide-react'

export function CartWidget() {
  const { items } = useCart()

  return (
    <div className="flex items-center gap-2">
      <ShoppingBag size={14} />
      <span>Cart ({items.length})</span>
    </div>
  )
}
