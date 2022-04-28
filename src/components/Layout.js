import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

import "../assets/css/main.css"

const Layout = ({children}) => {
  return (
    <>
        <Navbar/>
        {children}
        <Footer/>
    </>
  )
}

export default Layout