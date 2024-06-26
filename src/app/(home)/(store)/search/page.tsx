import { api } from '@/api'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { ProductProps } from './types'

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { q: string }
}): Promise<Metadata> {
  const { q: query } = searchParams

  return {
    title: query ?? 'Produtos',
  }
}

async function getProducts(query: string): Promise<ProductProps[]> {
  const resp = await api(`/products/search?q=${query}`, {
    next: {
      revalidate: 60 * 60,
    },
  })
  const data = await resp.json()

  return data
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q: string }
}) {
  const { q: query } = searchParams

  if (!query) redirect('/')

  const products = await getProducts(query)

  return (
    <div className="flex flex-col gap-4">
      <p className="">
        Resultados para: <span className="font-semibold">{query}</span>
      </p>

      {products.length === 0 ? (
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-3xl font-semibold tracking-tight">
          Nenhum resultado para busca
        </span>
      ) : (
        <div className="grid grid-cols-3 gap-6 text-sm">
          {products.map((product) => (
            <Link
              href={`/product/${product.slug}`}
              className="group relative flex items-start justify-center overflow-hidden rounded-lg bg-zinc-900"
              key={product.id}
            >
              <Image
                src={product.image}
                width={480}
                height={480}
                alt=""
                quality={100}
                className="transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute bottom-20 right-20 flex h-[60px] max-w-[250px] items-center gap-2 truncate rounded-full border-2 border-zinc-500 bg-black/60 py-[3px] pl-4 pr-[3px]">
                <span className="truncate">{product.title}</span>
                <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                  R$ {product.price}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
