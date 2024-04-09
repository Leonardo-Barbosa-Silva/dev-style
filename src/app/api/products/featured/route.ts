import data from '../data.json'

export function GET() {
  return Response.json(data.products.filter((product) => product.featured))
}
