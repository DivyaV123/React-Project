import React from 'react'
import AdminSidebar from '../AdminSidebar'
import NavTabs from '../NavTabs'
import TrainerLandingPage from './TrainerLandingPage'

function trainersPage() {
    return (
        <section className="flex  w-full h-[100vh]">
            <AdminSidebar />
            <aside className='bg-[#F5F5F5] w-[82.813vw]  h-full'>
                <NavTabs />
                <TrainerLandingPage />
            </aside>
        </section>
    )
}

export default trainersPage