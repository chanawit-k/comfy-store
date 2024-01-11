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

const cartSlice = createSlice({
  name: 'cart',
  initialState: defaultState,
  reducers: {
    addItem: (state, { payload }) => {
      console.log(payload)
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
  },
})

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions
export default cartSlice.reducer
