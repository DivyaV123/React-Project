import React from 'react'
import SubCategoryContent from './SubCategoryContent'
import AdminCategory from './AdminCategory'

const OrganisationContent = ({ categoryData }) => {
  return (
    <div className=' max-h-[100vh] h-[88vh] overflow-y-scroll myscrollbar '>
    <AdminCategory categoryData={categoryData}/>
      <SubCategoryContent categoryData={categoryData} />
    </div>
  )
}

export default OrganisationContent