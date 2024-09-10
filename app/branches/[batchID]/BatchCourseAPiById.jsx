'use client'
import React from 'react'
import WebLayout from '@/components/commonComponents/webLayout/WebLayout'
import BranchesLandingPage from '../BranchesLandingPage'
import BranchesCourse from '../BranchesCourse'
import UpCommingBatches from '../UpCommingBatches'
import PlacementStatisticsHome from '@/components/placementstatistics/placementStatisticsHome'
import HiringPartners from '@/components/hiringPartners/hiringPartners'
import StidentsPlaced from '../StidentsPlaced'
import Testimonials from '../Testimonials'
import FaqHome from '@/components/faq/faqHome'
import { usePathname } from 'next/navigation'
import { useGetAllBranchDetailsQuery } from '@/redux/queries/getBranchDetails'
import Loading from '@/lib/Loading'



function BatchCourseAPiById() {
    const pathname = usePathname();
    const params = pathname.split('/').pop();
    const digitIds = params.match(/\b\d+\b/g);

    const branchId = digitIds[0];
    const courseID = digitIds[1];
   
    const { data: BranchDetails, error, isLoading } = useGetAllBranchDetailsQuery({ courseId: courseID, branchId: branchId }, {
        skip: !courseID || !branchId,
    });

    if (isLoading) return <div>
        <Loading />
    </div>
    if (error) return <div>Error: {error.message}</div>
    if (!BranchDetails) return <div>No course details found.</div>
    const {courses,name,batches,faqs}=BranchDetails?.data
    return (
        <WebLayout>
            <BranchesLandingPage BranchDetails={BranchDetails} />
            <BranchesCourse branchCourseData={courses} />
            <UpCommingBatches branchCourseData={courses} branchName={name} branchesData={batches} branchId={branchId}/>
            <PlacementStatisticsHome page='branch' />
            <section className='mb-4 mt-5'>
                <HiringPartners page='branch' />
            </section>
            <StidentsPlaced branchName={name} />
            {/* <Testimonials /> */}
            <FaqHome page='branch' faqData={faqs} />
        </WebLayout>
    )
}

export default BatchCourseAPiById