import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const defaultState = {
  cartItems: [],
  numItemsInCart: 1,
  carTotal: 1,
  shipping: 500,
  tax: 1,
  orderTotal: 1,
}

const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('cart')) || defaultState
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload
      const item = state.cartItems.find((i) => i.cartID === product.cartID)
      if (item) {
        item.amount += product.amount
      } else {
        state.cartItems.push(product)
      }
      state.numItemsInCart += product.amount
      state.cartTotal += product.price * product.amount
      state.tax = 0.1 * state.cartTotal
      state.orderTotal = state.cartTotal + state.shipping + state.tax
      localStorage.setItem('cart', JSON.stringify(state))
      toast.success('Item added to cart')
    },
    clearCart: (state) => {
      state.cartItems = []
    },
    removeItem: (state, { payload }) => {
      console.log('remove Item')
    },
    editItem: (state, { payload }) => {
      console.log('edit item ')
    },
    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal
      state.orderTotal = state.cartTotal + state.shipping + state.tax
      localStorage.setItem('cart', JSON.stringify(state))
    },
  },
})

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions
export default cartSlice.reducer
