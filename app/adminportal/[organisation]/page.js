'use client'
import React from 'react'
import AdminSidebar from './AdminSidebar'
import Homepage from '@/app/homepage'
const OragnisationLandning = () => {
  const storedToken = localStorage?.getItem('Role');
  return (
    <>
    {
      storedToken ==="COURSEADDER" ?  <AdminSidebar/> : <Homepage/>
    }
    </>
  )
}

export default OragnisationLandning