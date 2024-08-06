import React from 'react'
import AdminSidebar from '../AdminSidebar'
import NavTabs from '../NavTabs'
import CourseCategoryContent from '../CourseCategoryContent'
const CourseContent = () => {
  return (
    <section className="flex  w-full h-[100vh]">
      <AdminSidebar />
      <aside className='bg-[#F5F5F5] w-[82.813vw]  h-full'>
        <NavTabs />
        <CourseCategoryContent />
      </aside>
    </section>
  )
}

export default CourseContent