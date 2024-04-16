import data from '../data.json'

export function GET() {
  const products = data.products.filter((product) => product.featured)

  if (products.length === 0) {
    return Response.json(
      { message: 'Featured products not found' },
      { status: 404 },
    )
  }

  return Response.json(data.products.filter((product) => product.featured))
}
