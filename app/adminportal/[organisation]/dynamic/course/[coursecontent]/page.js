import React from 'react'
import AdminSidebar from '../../../AdminSidebar'
import NavTabs from '../../../NavTabs'
import CategoryContent from './CategoryContent'
const DynamicCourseContent = () => {
  return (
    <section className="flex  w-full h-[100vh]">
    <AdminSidebar />
    <aside className='bg-[#F5F5F5] w-[82.813vw]  h-full'>
      <NavTabs />
      <CategoryContent/>
    </aside>
  </section>
  )
}

export default DynamicCourseContent