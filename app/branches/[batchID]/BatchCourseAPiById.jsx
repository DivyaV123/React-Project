'use client'
import WebLayout from '@/components/commonComponents/webLayout/WebLayout'
import React from 'react'
import BranchesLandingPage from '../BranchesLandingPage'
import BranchesCourse from '../BranchesCourse'
import UpCommingBatches from '../UpCommingBatches'
import PlacementStatisticsHome from '@/components/placementstatistics/placementStatisticsHome'
import HiringPartners from '@/components/hiringPartners/hiringPartners'
import StidentsPlaced from '../StidentsPlaced'
import Testimonials from '../Testimonials'
import FaqHome from '@/components/faq/faqHome'
import { usePathname, useSearchParams } from 'next/navigation'
import { useGetAllBranchDetailsQuery } from '@/redux/queries/getBranchDetails'
import Loading from '@/lib/Loading'



function BatchCourseAPiById() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    console.log(pathname, "pathname");
    const params = pathname.split('/').pop();
    const [branchId, courseID] = params.split(',');

    console.log(branchId, courseID, "branchId, courseID");

    const { data: courseDetails, error, isLoading } = useGetAllBranchDetailsQuery({ courseId: "96", branchId: "76" }, {
        skip: !courseID,
    });

    if (isLoading) return <div>
        <Loading />
    </div>
    if (error) return <div>Error: {error.message}</div>
    if (!courseDetails) return <div>No course details found.</div>
    return (
        <WebLayout>
            <BranchesLandingPage />
            <BranchesCourse />
            <UpCommingBatches />
            <PlacementStatisticsHome page='branch' />
            <section className='mb-4 mt-5'>
                <HiringPartners page='branch' />
            </section>
            <StidentsPlaced />
            {/* <Testimonials /> */}
            <FaqHome page='branch' />
        </WebLayout>
    )
}

export default BatchCourseAPiById