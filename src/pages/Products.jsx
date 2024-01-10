import React from 'react'
import { customFetch } from '../utils'
import { Filters, ProductsContainer, PaginationContainer } from '../components'

const url = '/products/'
export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ])
  const response = await customFetch(url, { params })
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
