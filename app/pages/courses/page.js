import React from 'react'
import NavHome from '@/components/navHome/navHome'
import WebLayout from '@/components/commonComponents/webLayout/WebLayout'
import CourseLanding from './CourseLanding'
import PlacementStaticsHome from './PlacementStaticsHome'
import HiringPartners from '@/components/hiringPartners/hiringPartners'
import FaqHome from '@/components/faq/faqHome'
import CourseHighlites from './CourseHighlites'
import OurBranchesHome from '@/components/ourBranches/ourBranchesHome'
import UpComingBranches from './UpComingBranches'
import StudentsPlacedHome from './StudentsPlacedHome'
const Courses = () => {
  return (
    <WebLayout>
      <CourseLanding />
      <UpComingBranches />
      <PlacementStaticsHome />
      <StudentsPlacedHome />
      <CourseHighlites />
      <FaqHome page='course' />
    </WebLayout>
  )
}

export default Courses