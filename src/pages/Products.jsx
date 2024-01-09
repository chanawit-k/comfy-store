import React from 'react'
import { customFetch } from '../utils'
import { Filters, ProductsContainer } from '../components'
const url = 'products'
export const loader = async () => {
  const response = await customFetch(url)
  const products = response.data.data
  return products
}

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
    </>
  )
}

export default Products
