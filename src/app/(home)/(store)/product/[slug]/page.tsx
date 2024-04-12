import { api } from '@/api'
import { ProductProps } from '@/types/products'
import { Metadata } from 'next'
import Image from 'next/image'
import { ProductPageParams } from './types'

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

          <span className="text-sm text-zinc-400">{product.description}</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="flex h-[44px] items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$ {product.price}
          </span>

          <span className="text-xs text-zinc-400">
            Em 12x s/ juros de{' '}
            {(product.price / 12).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </div>

        <form className="flex flex-col">
          <span className="mb-3 font-semibold">Tamanhos</span>

          <div className="mb-6 flex gap-3 text-sm">
            <div className="w-fit rounded-full border border-zinc-700 bg-zinc-800 px-4 py-1.5">
              <label htmlFor="P" className="font-bold">
                P
              </label>
              <input
                type="radio"
                id="P"
                name="P"
                value="P"
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
                name="M"
                value="M"
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
                name="G"
                value="G"
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
                name="GG"
                value="GG"
                className="hidden"
              />
            </div>
          </div>

          <button
            type="submit"
            className="h-12 w-full rounded-full bg-emerald-500 font-semibold hover:bg-emerald-500/50 hover:transition hover:duration-300"
          >
            Adicionar ao carrinho
          </button>
        </form>
      </div>
    </div>
  )
}
