import { useLoaderData } from 'react-router-dom'
import { customFetch, formatPrice } from '../utils'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const loader = async ({ params }) => {
  const response = await customFetch(`/products/${params.id}`)
  const products = response.data
  return { products }
}
const SingleProduct = () => {
  return <div>SingleProduct</div>
}

export default SingleProduct
