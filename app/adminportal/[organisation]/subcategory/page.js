import React from 'react'
import SubCategoryContent from '../SubCategoryContent'
import AdminSidebar from '../AdminSidebar'
import NavTabs from '../NavTabs'
const SubCategory = () => {
  return (
    <section className="flex  w-full h-[100vh]">
      <AdminSidebar />
      <aside className='bg-[#F5F5F5] w-[82.813vw]  h-full'>
        <NavTabs />
        <SubCategoryContent />
      </aside>
    </section>

  )
}
export default SubCategory