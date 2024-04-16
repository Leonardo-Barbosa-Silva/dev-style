import { api } from '@/api'
import { FormAddProductToCart } from '@/components/forms/add-to-cart'
import { Metadata } from 'next'
import Image from 'next/image'
import { ProductPageParams, ProductProps } from './types'

async function getProduct(slug: string): Promise<ProductProps> {
  const resp = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60,
    },
  })
  const data = await resp.json()

  return data
}

export async function generateMetadata({
  params,
}: ProductPageParams): Promise<Metadata> {
  const product = await getProduct(params.slug)

  return {
    title: product.title,
  }
}

export default async function ProductPage({ params }: ProductPageParams) {
  const product = await getProduct(params.slug)

  return (
    <div className="grid max-h-[800px] grid-cols-3 text-base">
      <div className="col-span-2 overflow-hidden">
        <Image
          src={product.image}
          width={920}
          height={920}
          quality={100}
          alt=""
        />
      </div>

      <div className="cols-span-1 flex flex-col justify-center gap-6 p-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold leading-tight">{product.title}</h1>

          <span className="text-base text-zinc-400">{product.description}</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="flex h-[44px] items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$ {product.price}
          </span>

          <span className="text-sm text-zinc-400">
            Em 12x s/ juros de{' '}
            {(product.price / 12).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </div>

        <FormAddProductToCart product={product} />
      </div>
    </div>
  )
}
