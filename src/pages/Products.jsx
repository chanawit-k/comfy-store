import React from 'react'
import { customFetch } from '../utils'
const url = 'products'
export const loader = async () => {
  const response = await customFetch(url)
  const products = response.data.data
  return products
}

const Products = () => {
  return <div>Products</div>
}

export default Products
