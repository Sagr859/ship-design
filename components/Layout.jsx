import React from 'react'
import TopBar from './TopBar'
import Footer from './Footer'

export default function Layout({children}) {
  return (
    <div className='homeLayout'>
        <TopBar/>
        {children}
        <Footer/>
    </div>
  )
}
