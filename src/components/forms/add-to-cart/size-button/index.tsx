import { SizeButtonProps } from './types'

export function SizeButton({
  size,
  register,
  productSizeSelectedValue,
}: SizeButtonProps) {
  return (
    <>
      <label
        htmlFor={size}
        className={`w-fit rounded-full border-2 bg-zinc-800 px-4 py-1.5 font-bold hover:cursor-pointer hover:bg-zinc-900 ${productSizeSelectedValue === size ? 'border-emerald-500' : 'border-zinc-600'}`}
      >
        {size}
      </label>
      <input
        type="radio"
        id={size}
        value={size}
        {...register('productSize')}
        className="hidden"
      />
    </>
  )
}
