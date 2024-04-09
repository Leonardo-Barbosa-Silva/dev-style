import Image from 'next/image'
import Link from 'next/link'

export default async function Store() {
  return (
    <div className="grid max-h-screen grid-cols-9 grid-rows-6 gap-6 text-sm">
      <Link
        href="/"
        className="group relative col-span-6 row-span-6 flex items-start justify-center overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          src="/moletom-never-stop-learning.png"
          width={900}
          height={900}
          alt=""
          quality={100}
          className="transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute bottom-20 right-20 flex h-[60px] max-w-[290px] items-center truncate rounded-full border-2 border-zinc-500 bg-black/60 py-[3px] pl-4 pr-[3px]">
          <span className="truncate">Moletom Never Stop Learning</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$129
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="group relative col-span-3 row-span-3 flex items-start justify-center overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          src="/camiseta-dowhile-2022.png"
          width={800}
          height={800}
          alt=""
          quality={100}
          className="transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute bottom-10 right-10 flex h-[60px] max-w-[290px] items-center truncate rounded-full border-2 border-zinc-500 bg-black/60 py-[3px] pl-4 pr-[3px]">
          <span className="truncate">Camiseta Expand Mind</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$59
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="group relative col-span-3 row-span-3 flex items-start justify-center overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          src="/moletom-ia-p-devs.png"
          width={800}
          height={800}
          alt=""
          quality={100}
          className="transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute bottom-10 right-10 flex h-[60px] max-w-[290px] items-center truncate rounded-full border-2 border-zinc-500 bg-black/60 py-[3px] pl-4 pr-[3px]">
          <span className="truncate">Moletom IA Para Devs</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$119
          </span>
        </div>
      </Link>
    </div>
  )
}
