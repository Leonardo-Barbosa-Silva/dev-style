import { api } from '@/api'
import { ProductProps } from '@/app/(home)/(store)/product/[slug]'
import Image from 'next/image'
import Link from 'next/link'

async function getFeaturedProducts(): Promise<ProductProps[]> {
  const resp = await api('/products/featured', {
    next: {
      revalidate: 60 * 60,
    },
  })

  const data = await resp.json()

  return data
}

export default async function Store() {
  const [highLightedProduct, ...otherProducts] = await getFeaturedProducts()

  return (
    <div className="grid max-h-[800px] grid-cols-9 grid-rows-6 gap-6 text-sm">
      <Link
        href={`/product/${highLightedProduct.slug}`}
        className="group relative col-span-6 row-span-6 flex items-start justify-center overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          src={highLightedProduct.image}
          width={900}
          height={900}
          alt=""
          quality={100}
          className="transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute bottom-20 right-20 flex h-[60px] max-w-[300px] items-center gap-2 truncate rounded-full border-2 border-zinc-500 bg-black/60 py-[3px] pl-4 pr-[3px]">
          <span className="truncate">{highLightedProduct.title}</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$ {highLightedProduct.price}
          </span>
        </div>
      </Link>

      {otherProducts.map((product) => (
        <Link
          href={`/product/${product.slug}`}
          className="group relative col-span-3 row-span-3 flex items-start justify-center overflow-hidden rounded-lg bg-zinc-900"
          key={product.id}
        >
          <Image
            src={product.image}
            width={800}
            height={800}
            alt=""
            quality={100}
            className="transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute bottom-10 right-10 flex h-[60px] max-w-[300px] items-center gap-2 truncate rounded-full border-2 border-zinc-500 bg-black/60 py-[3px] pl-4 pr-[3px]">
            <span className="truncate">{product.title}</span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
              R$ {product.price}
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}
