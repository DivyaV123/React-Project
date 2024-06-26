'use client'
import WebLayout from '@/components/commonComponents/webLayout/WebLayout'
import React, { useContext } from 'react'
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
import { GlobalContext } from '@/components/Context/GlobalContext'



function BatchCourseAPiById() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
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
    return (
        <WebLayout>
            <BranchesLandingPage BranchDetails={BranchDetails} />
            <BranchesCourse branchCourseData={BranchDetails?.data?.courses} />
            <UpCommingBatches branchName={BranchDetails?.data?.name} branchesData={BranchDetails?.data?.batches} />
            <PlacementStatisticsHome page='branch' />
            <section className='mb-4 mt-5'>
                <HiringPartners page='branch' />
            </section>
            <StidentsPlaced branchName={BranchDetails?.data?.name} />
            {/* <Testimonials /> */}
            <FaqHome page='branch' faqData={BranchDetails?.data?.faqs} />
        </WebLayout>
    )
}

export default BatchCourseAPiById