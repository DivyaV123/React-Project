import React from 'react'
import OurCourse from '../ourCourses/ourCourse'
import NavHome from '../navHome/navHome'
import CarosalHome from '../carosalHome/carosalHome'
import OurBranchesHome from '../ourBranches/ourBranchesHome'
import ChooseQspidersHome from '../chooseQspiders/chooseQspidersHome'
import PlacementStatisticsHome from '../placementstatistics/placementStatisticsHome'
import TestimonialsHome from '../testimonials/testimonialsHome'
import FaqHome from '../faq/faqHome'
import FooterHome from '../footer/footerHome'

function Homepage() {
    return (
        <>
            <NavHome />
            <CarosalHome />
            <OurCourse />
            <OurBranchesHome />
            <ChooseQspidersHome />
            <PlacementStatisticsHome />
            <TestimonialsHome />
            <FaqHome />
            <FooterHome />
        </>
    )
}

export default Homepage