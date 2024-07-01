'use client'
import React, { useEffect, useState } from 'react'
import OurCourse from '../components/ourCourses/ourCourse'
import CarosalHome from '../components/carosalHome/carosalHome'
import OurBranchesHome from '../components/ourBranches/ourBranchesHome'
import ChooseQspidersHome from '../components/chooseQspiders/chooseQspidersHome'
import PlacementStatisticsHome from '../components/placementstatistics/placementStatisticsHome'
import TestimonialsHome from '../components/testimonials/testimonialsHome'
import FaqHome from '../components/faq/faqHome'
import WebLayout from '../components/commonComponents/webLayout/WebLayout'
import HiringPartners from '../components/hiringPartners/hiringPartners'
import { useGetAllFaqQuery } from '@/redux/queries/getAllFaq'


function Homepage() {
    const { data: faqData, error, isLoading } = useGetAllFaqQuery();
    return (
        <WebLayout page='main' >
            <CarosalHome />
            <HiringPartners />
            <OurCourse />
            <OurBranchesHome />
            <ChooseQspidersHome />
            <PlacementStatisticsHome />
            {/* <TestimonialsHome /> */}
            <FaqHome mainfaqData={faqData?.data} />
        </WebLayout>
    )
}

export default Homepage