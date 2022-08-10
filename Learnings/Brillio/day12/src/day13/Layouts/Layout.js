import Footer from './Footer';
import Navigation from './Navigation';
import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
        <Navigation/>
        <main>{children}</main>
        <Footer/>
    </div>
  )
}

export default Layout