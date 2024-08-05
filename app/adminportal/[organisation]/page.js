'use client'
import React from 'react'
import dynamic from 'next/dynamic';

const AdminSidebar = dynamic(() => import('./AdminSidebar'), { ssr: false });
const Homepage = dynamic(() => import('@/app/homepage'), { ssr: false });
const OragnisationLandning = () => {
    const storedToken = typeof window !== 'undefined' ? localStorage.getItem('Role') : null;
  return (
    <>
    {
      storedToken ==="COURSEADDER" ?  <AdminSidebar/> : <Homepage/>
    }
    </>
  )
}

export default OragnisationLandning