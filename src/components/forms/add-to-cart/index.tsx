'use client'

import { useCart } from '@/contexts/cart'
import { zodResolver } from '@hookform/resolvers/zod'
import { AlertTriangle } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { SizeButton } from './size-button'
import {
  FormAddToCartInputsType,
  FormAddToCartProps,
  formAddToCartSchema,
} from './types'

export function FormAddProductToCart({ product }: FormAddToCartProps) {
  const { addToCart } = useCart()

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormAddToCartInputsType>({
    mode: 'onSubmit',
    resolver: zodResolver(formAddToCartSchema),
  })

  function handleAddProductToCart(data: FormAddToCartInputsType) {
    const { productSize } = data

    addToCart(product.id, productSize)
  }

  const { productSize: productSizeSelectedValue } = watch()

  return (
    <form
      className="flex flex-col"
      onSubmit={handleSubmit(handleAddProductToCart)}
    >
      <span className="mb-3 text-lg font-semibold">Tamanhos</span>

      <div className="mb-6 flex gap-3 text-base">
        <SizeButton
          size="P"
          register={register}
          productSizeSelectedValue={productSizeSelectedValue}
        />

        <SizeButton
          size="M"
          register={register}
          productSizeSelectedValue={productSizeSelectedValue}
        />

        <SizeButton
          size="G"
          register={register}
          productSizeSelectedValue={productSizeSelectedValue}
        />

        <SizeButton
          size="GG"
          register={register}
          productSizeSelectedValue={productSizeSelectedValue}
        />
      </div>

      {errors.productSize?.message && (
        <span className="mb-6 flex items-center gap-4 text-xs font-medium text-rose-500">
          {errors.productSize.message} <AlertTriangle size={20} />
        </span>
      )}

      <button
        type="submit"
        className="h-12 w-full rounded-full bg-emerald-500 text-lg font-semibold hover:bg-emerald-500/50 hover:transition hover:duration-300"
      >
        Adicionar ao carrinho
      </button>
    </form>
  )
}
