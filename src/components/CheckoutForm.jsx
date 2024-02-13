import React from 'react'
import { customFetch } from '../utils'
import { Form, redirect } from 'react-router-dom'
import { FormInput, SubmitBtn } from '../components'
import { formatPrice } from '../utils'
import { toast } from 'react-toastify'

const url = '/orders/'

export const action =
  (store) =>
  async ({ request }) => {
    const user = store.getState().user.user
    const { cartItems, numItemsInCart, orderTotal } = store.getState().cart
    const formData = await request.formData()
    const { address, name } = Object.fromEntries(formData)

    try {
      const info = {
        name,
        address,
        cartItems,
        chargeTotal: orderTotal,
        orderTotal: formatPrice(orderTotal),
        numItemsInCart,
      }

      const response = await customFetch.post(
        url,
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      toast.success('CheckOut Success')
      return redirect('/orders')
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        'please double check your credentials'
      toast.error(errorMessage)
      if (error?.response?.status === 401 || 403) {
        return redirect('/login')
      }
      return null
    }
  }

const CheckoutForm = () => {
  return (
    <Form method="POST" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl">Shipping Information</h4>
      <FormInput label="first name" name="name" type="text" />
      <FormInput label="address" name="address" type="text" />
      <div className="mt-4">
        <SubmitBtn text="Place Your Order" />
      </div>
    </Form>
  )
}

export default CheckoutForm
