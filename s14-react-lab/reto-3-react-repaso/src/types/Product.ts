export interface Category {
  name: string
  description: string
}

export interface Product {
  name: string
  description: string
  imageUrl: string
  category: Category
  quantity: number
  price: number
  height: number
  width: number
  length: number
  isEnabled: boolean
}

export interface ProductApiResponse {
  name: string
  description: string
  image_url: string
  category: Category
  quantity: number
  price: number
  height: number
  width: number
  length: number
  isEnabled: boolean
}

export const mapApiProductToProduct = (apiProduct: ProductApiResponse): Product => ({
  name: apiProduct.name,
  description: apiProduct.description,
  imageUrl: apiProduct.image_url,
  category: apiProduct.category,
  quantity: apiProduct.quantity,
  price: apiProduct.price,
  height: apiProduct.height,
  width: apiProduct.width,
  length: apiProduct.length,
  isEnabled: apiProduct.isEnabled,
})
