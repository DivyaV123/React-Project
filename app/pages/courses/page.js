'use client'
import React, { useState } from 'react'
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
  const [isRightBarFixed, setIsRightBarFixed] = useState(false);

  const handleRightBarFix = (fixed) => {
    setIsRightBarFixed(fixed);
  }
  return (
    <WebLayout>
      <CourseLanding onRightBarFix={handleRightBarFix} isRightBarFixed={isRightBarFixed} />
      <UpComingBranches/>
      <PlacementStaticsHome />
      <StudentsPlacedHome />
      <CourseHighlites />
      <FaqHome page='course' />
    </WebLayout>
  )
}

export default Courses