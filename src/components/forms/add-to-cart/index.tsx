'use client'

import { useCart } from '@/contexts/cart'
import { zodResolver } from '@hookform/resolvers/zod'
import { AlertTriangle } from 'lucide-react'
import { useForm } from 'react-hook-form'
import {
  FormAddToCartInputsType,
  FormAddToCartProps,
  formAddToCartSchema,
} from './types'

export function FormAddToCart({ product }: FormAddToCartProps) {
  const { addToCart } = useCart()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormAddToCartInputsType>({
    mode: 'onSubmit',
    resolver: zodResolver(formAddToCartSchema),
  })

  function handleAddProductToCart(data: FormAddToCartInputsType) {
    const { productSize } = data

    addToCart(product.id, productSize)
  }

  return (
    <form
      className="flex flex-col"
      onSubmit={handleSubmit(handleAddProductToCart)}
    >
      <span className="mb-3 font-semibold">Tamanhos</span>

      <div className="mb-6 flex gap-3 text-sm">
        <div className="w-fit rounded-full border border-zinc-700 bg-zinc-800 px-4 py-1.5">
          <label htmlFor="P" className="font-bold">
            P
          </label>
          <input
            type="radio"
            id="P"
            value="P"
            {...register('productSize')}
            className="hidden"
          />
        </div>

        <div className="w-fit rounded-full border border-zinc-700 bg-zinc-800 px-4 py-1.5">
          <label htmlFor="M" className="font-bold">
            M
          </label>
          <input
            type="radio"
            id="M"
            value="M"
            {...register('productSize')}
            className="hidden"
          />
        </div>

        <div className="w-fit rounded-full border border-zinc-700 bg-zinc-800 px-4 py-1.5">
          <label htmlFor="G" className="font-bold">
            G
          </label>
          <input
            type="radio"
            id="G"
            value="G"
            {...register('productSize')}
            className="hidden"
          />
        </div>

        <div className="w-fit rounded-full border border-zinc-700 bg-zinc-800 px-4 py-1.5">
          <label htmlFor="GG" className="font-bold">
            GG
          </label>
          <input
            type="radio"
            id="GG"
            value="GG"
            {...register('productSize')}
            className="hidden"
          />
        </div>
      </div>

      {errors.productSize?.message && (
        <span className="mb-6 flex items-center gap-4 text-xs font-medium text-rose-500">
          {errors.productSize.message} <AlertTriangle size={20} />
        </span>
      )}

      <button
        type="submit"
        className="h-12 w-full rounded-full bg-emerald-500 font-semibold hover:bg-emerald-500/50 hover:transition hover:duration-300"
      >
        Adicionar ao carrinho
      </button>
    </form>
  )
}
