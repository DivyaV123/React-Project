'use client'
import React, { useEffect, useState } from 'react'
import NavTabs from '../NavTabs'
import AdminSidebar from '../AdminSidebar'
import SubjectContent from './SubjectContent'
import Loading from '@/lib/Loading'

function SubjectLanding() {
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
                <SubjectContent />
            </aside>
        </section>
    )
}

export default SubjectLanding 