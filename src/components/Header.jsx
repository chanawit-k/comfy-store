import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../features/user/userSlice'
import { clearCart } from '../features/cart/cartSlice'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.user)

  const handleLogout = () => {
    navigate('/')
    dispatch(logoutUser())
    dispatch(clearCart())
  }

  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="align-element flex justify-center sm:justify-end">
        <div className="flex gap-x-6 justify-center items-center">
          {user ? (
            <div className="flex gap-x-2 sm:gap-x-8 items-center">
              <p className="text-xs sm:text-sm">Hello, {user.username}</p>
              <button
                className="btn btn-xs btn-outline btn-primary "
                onClick={handleLogout}
              >
                logout
              </button>
            </div>
          ) : (
            <div className="flex gap-x-6 justify-center items-center">
              <Link to="/login" className="link link-hover text-xs sm:text-sm">
                Sign in / Guest
              </Link>
              <Link
                to="/register"
                className="link link-hover text-xs sm:text-sm"
              >
                Create an Account
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
