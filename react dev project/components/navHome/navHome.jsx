import React from 'react'
import TopNavbar from './topnav/topNavbar'
import MainNavbar from './mainNavbar/mainNavbar'

function NavHome() {
  return (
    <section className='sticky top-0 z-10 w-full'>
      <TopNavbar />
      <MainNavbar />
    </section>
  )
}

export default NavHome