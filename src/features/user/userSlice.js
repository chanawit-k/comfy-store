import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
const themes = {
  light: 'light',
  dark: 'dark',
}

const getThemeFromLocalStorage = () => {
  return localStorage.getItem('theme') || themes.dark
}

const defaultState = {
  user: { username: 'coding addict' },
  theme: getThemeFromLocalStorage(),
}

const userSlice = createSlice({
  name: 'user',
  initialState: defaultState,
  reducers: {
    loginUser: (state, action) => {
      debugger
      const user = { ...action.payload.user, token: action.payload.jwt }
      state.user = user
      localStorage.setItem('user', JSON.stringify(user))
    },
    logoutUser: (state) => {
      state.user = null
      localStorage.removeItem('user')
      toast.success('Logged out successfully')
    },
    toggleTheme: (state) => {
      const { dark, light } = themes
      state.theme = getThemeFromLocalStorage() === dark ? light : dark
      document.documentElement.setAttribute('data-theme', state.theme)
      localStorage.setItem('theme', state.theme)
    },
  },
})
export const { loginUser, logoutUser, toggleTheme } = userSlice.actions
export default userSlice.reducer
