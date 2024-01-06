import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components'
const HomeLayout = () => {
  return (
    <>
      <Header />
      <div className="align-element">
        <Outlet />
      </div>
    </>
  )
}

export default HomeLayout
