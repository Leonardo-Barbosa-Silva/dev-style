export interface ProductProps {
  id: number
  title: string
  slug: string
  price: number
  image: string
  description: string
  featured: boolean
}

export interface ProductPageParams {
  params: {
    slug: string
  }
}
