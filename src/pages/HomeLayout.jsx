import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Navbar } from '../components'
const HomeLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="align-element">
        <Outlet />
      </div>
    </>
  )
}

export default HomeLayout
