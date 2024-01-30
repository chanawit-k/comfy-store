import React from 'react'
import { SectionTitle, CartTotals, CheckoutForm } from '../components'
import { useSelector } from 'react-redux'
const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartTotal)
  if (cartItems.length === 0) {
    return <SectionTitle text="Your cart is empty" />
  }

  return (
    <>
      <SectionTitle text={'Total'} />
      <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  )
}

export default Checkout
