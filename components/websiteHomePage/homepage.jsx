import React from 'react'
import OurCourse from '../ourCourses/ourCourse'
import CarosalHome from '../carosalHome/carosalHome'
import OurBranchesHome from '../ourBranches/ourBranchesHome'
import ChooseQspidersHome from '../chooseQspiders/chooseQspidersHome'
import PlacementStatisticsHome from '../placementstatistics/placementStatisticsHome'
import TestimonialsHome from '../testimonials/testimonialsHome'
import FaqHome from '../faq/faqHome'
import WebLayout from '../commonComponents/webLayout/WebLayout'
import HiringPartners from '../hiringPartners/hiringPartners'

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