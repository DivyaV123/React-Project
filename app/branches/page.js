'use client'
import WebLayout from '@/components/commonComponents/webLayout/WebLayout'
import React from 'react'
import BranchesLandingPage from './BranchesLandingPage'
import BranchesCourse from './BranchesCourse'
import PlacementStatisticsHome from '@/components/placementstatistics/placementStatisticsHome'
import HiringPartners from '@/components/hiringPartners/hiringPartners'
import StidentsPlaced from './StidentsPlaced'
import Testimonials from './Testimonials'
import FaqHome from '@/components/faq/faqHome'
import UpCommingBatches from './UpCommingBatches'


function Branches() {
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
            <Testimonials />
            <FaqHome page='branch' />
        </WebLayout>
    )
}

export default Branches