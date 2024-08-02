import React from 'react'
import NavTabs from './NavTabs'
import OrganisationContent from './OrganisationContent'

const AdminContent = ({categoryData}) => {
  return (
    <aside className='bg-[#F5F5F5] w-[82.813vw]  h-full pl-[1.875vw]'>
      <NavTabs categoryData={categoryData}/>
<OrganisationContent categoryData={categoryData}/>
    </aside>
  )
}

export default AdminContent