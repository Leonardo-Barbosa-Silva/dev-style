import { Header } from '@/components/header'
import { CartProvider } from '@/contexts/cart'
import { env } from '@/env'
import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: {
    template: '%s | DevStyle',
    default: 'Home',
  },
  metadataBase: new URL(env.NEXT_PUBLIC_API_BASE_URL),
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/pt-BR',
      'en-US': '/en-US',
    },
  },
}

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-[min-content_max-content] gap-5 p-8">
        <Header />
        {children}
      </div>
    </CartProvider>
  )
}
