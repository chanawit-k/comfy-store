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
      console.log('log in')
    },
    logoutUser: (state) => {
      console.log('log out')
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
