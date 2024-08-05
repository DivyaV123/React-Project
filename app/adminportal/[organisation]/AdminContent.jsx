import React from 'react'
import NavTabs from './NavTabs'
import OrganisationContent from './OrganisationContent'

const AdminContent = () => {
  return (
    <aside className='bg-[#F5F5F5] w-[82.813vw]  h-full'>
      <NavTabs  />
      <OrganisationContent  />
    </aside>
  )
}

export default AdminContent