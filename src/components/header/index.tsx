import Image from 'next/image'
import Link from 'next/link'
import { CartWidget } from '../cart-widget'
import { SearchProducts } from '../forms/search-products'

export function Header() {
  return (
    <header className="flex items-center justify-between text-sm">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-3xl font-extrabold tracking-tight">
          DevStyle
        </Link>

        <SearchProducts />
      </div>

      <div className="flex items-center gap-4">
        <CartWidget />

        <div className="h-[25px] w-px bg-zinc-500" />

        <Link
          href="/"
          className="flex items-center gap-2 underline-offset-2 hover:underline"
        >
          <span>Account</span>
          <Image
            src="https://github.com/Leonardo-Barbosa-Silva.png"
            width={24}
            height={24}
            className="h-6 w-6 rounded-full"
            alt=""
          />
        </Link>
      </div>
    </header>
  )
}
