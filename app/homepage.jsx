'use client'
import React, { useContext, useEffect, useState } from 'react'
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
import { GlobalContext } from '@/components/Context/GlobalContext'


function Homepage() {
    const { domainVariable } = useContext(GlobalContext)
    let domain = domainVariable === "Qspiders" ? "QSP" : domainVariable === "Jspiders" ? "JSP" : domainVariable === "Pyspiders" ? "PYSP" : "BSP"
    const { data: faqData, error, isLoading } = useGetAllFaqQuery(domain);

    return (
        <WebLayout page='main' >
            <CarosalHome />
            <HiringPartners page="home"/>
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