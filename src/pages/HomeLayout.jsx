import React from 'react'
import { Outlet } from 'react-router-dom'
const HomeLayout = () => {
  return (
    <div className="align-element">
      home page
      <Outlet />
    </div>
  )
}

export default HomeLayout
