import React from 'react'
import { customFetch } from '../utils'
import { Filters, ProductsContainer, PaginationContainer } from '../components'
const url = 'products'
export const loader = async () => {
  const response = await customFetch(url)
  const products = response.data
  return products
}

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  )
}

export default Products
