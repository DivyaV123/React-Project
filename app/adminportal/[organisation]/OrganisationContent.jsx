import React from 'react'
import SubCategoryContent from './SubCategoryContent'
import AdminCategory from './AdminCategory'

const OrganisationContent = ({ categoryData }) => {
  return (
    <div className=''>
      <AdminCategory categoryData={categoryData} />
      {/* <SubCategoryContent categoryData={categoryData} /> */}
    </div>
  )
}

export default OrganisationContent