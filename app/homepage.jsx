import React from 'react'
import OurCourse from '../components/ourCourses/ourCourse'
import CarosalHome from '../components/carosalHome/carosalHome'
import OurBranchesHome from '../components/ourBranches/ourBranchesHome'
import ChooseQspidersHome from '../components/chooseQspiders/chooseQspidersHome'
import PlacementStatisticsHome from '../components/placementstatistics/placementStatisticsHome'
import TestimonialsHome from '../components/testimonials/testimonialsHome'
import FaqHome from '../components/faq/faqHome'
import WebLayout from '../components/commonComponents/webLayout/WebLayout'
import HiringPartners from '../components/hiringPartners/hiringPartners'

function Homepage() {
    return (
        <WebLayout >
            <CarosalHome />
            <HiringPartners/>
            <OurCourse />
            <OurBranchesHome />
            <ChooseQspidersHome />
            <PlacementStatisticsHome />
            {/* <TestimonialsHome /> */}
            <FaqHome />
        </WebLayout>
    )
}

export default Homepage