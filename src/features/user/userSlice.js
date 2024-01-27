import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const defaultState = {
  user: [],
  themem: 0,
  reducers: {
    loginUser: (state, action) => {
      console.log('log in')
    },
    logoutUser: (state) => {
      console.log('log out')
    },
    toggleTheme: (state) => {
      console.log('handle theme')
    },
  },
}

const userSlice = createSlice({
  name: 'user',
  initialState: defaultState,
})
export const { loginUser, logoutUser, toggleTheme } = userSlice.actions
export default userSlice.reducer
