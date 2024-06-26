'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { useForm } from 'react-hook-form'
import { SearchProductInputsType, searchProductsSchema } from './types'

function SearchFormComponent() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const { register, handleSubmit } = useForm<SearchProductInputsType>({
    mode: 'onSubmit',
    resolver: zodResolver(searchProductsSchema),
    defaultValues: {
      search: searchParams.get('q') ?? '',
    },
  })

  function handleSearchFormSubmit(data: SearchProductInputsType) {
    const { search: query } = data

    router.push(`/search?q=${query}`)
  }

  return (
    <form
      onSubmit={handleSubmit(handleSearchFormSubmit)}
      className="flex h-[52px] w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-4 py-2"
    >
      <button type="submit" className="group">
        <Search
          size={24}
          className="text-zinc-500 group-hover:text-emerald-500"
        />
      </button>

      <input
        {...register('search')}
        placeholder="Buscar produtos..."
        className="flex-1 bg-transparent outline-none placeholder:text-zinc-500"
      />
    </form>
  )
}

export function SearchFormProducts() {
  return (
    <Suspense>
      <SearchFormComponent />
    </Suspense>
  )
}
