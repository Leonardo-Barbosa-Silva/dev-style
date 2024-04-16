import { Skeleton } from '@/components/skeleton'

export default function ProdutoLoading() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2 h-[800px] p-10">
        <Skeleton className="h-full" />
      </div>

      <div className="cols-span-1 flex flex-col items-center justify-center gap-6 p-4">
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-16 w-full rounded-full" />
      </div>
    </div>
  )
}
