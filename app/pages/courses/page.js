'use client'
import React, { useState } from 'react'
import WebLayout from '@/components/commonComponents/webLayout/WebLayout'
import CourseLanding from './CourseLanding'
import PlacementStaticsHome from './PlacementStaticsHome'
import FaqHome from '@/components/faq/faqHome'
import CourseHighlites from './CourseHighlites'
import UpComingBranches from './UpComingBranches'
import StudentsPlacedHome from './StudentsPlacedHome'
import HiringPartnersHome from './HiringPartnersHome'
import StudentsTestimonialsHome from './StudentsTestimonialsHome'
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
      <HiringPartnersHome />
      <StudentsPlacedHome />
      <CourseHighlites />
      <StudentsTestimonialsHome/>
      <FaqHome page='course' />
    </WebLayout>
  )
}

export default Courses