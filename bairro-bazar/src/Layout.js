import React from 'react'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
