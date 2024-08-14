'use client'
import React,{useState,useEffect} from 'react'
import AdminSidebar from '../AdminSidebar'
import NavTabs from '../NavTabs'
import CourseCategoryContent from '../CourseCategoryContent'
import Loading from '@/lib/Loading'
const CourseContent = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <div className="loader"><Loading /></div>;
  }
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