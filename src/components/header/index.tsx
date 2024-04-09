import { Search, ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className="flex items-center justify-between text-sm">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-3xl font-extrabold tracking-tight">
          DevStyle
        </Link>

        <form className="flex h-[52px] w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-4 py-2">
          <Search size={24} className="text-zinc-500" />

          <input
            placeholder="Buscar produtos..."
            className="flex-1 bg-transparent outline-none placeholder:text-zinc-500"
          />
        </form>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <ShoppingBag size={14} />
          <span>Cart (3)</span>
        </div>

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
