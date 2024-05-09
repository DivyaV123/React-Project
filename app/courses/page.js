'use client'
import React, { useState } from 'react'
import WebLayout from '@/components/commonComponents/webLayout/WebLayout'
import CourseLanding from './CourseLanding'
import PlacementStaticsHome from './PlacementStaticsHome'
import CourseHighlites from './CourseHighlites'
import UpComingBranches from './UpComingBranches'
import StudentsPlacedHome from './StudentsPlacedHome'
import HiringPartnersHome from './HiringPartnersHome'
import StudentsTestimonialsHome from './StudentsTestimonialsHome'
import CourseContent from './CourseContent'
import CoursesFaq from './CoursesFaq'
import ImageScroller from './ImageScroller'
const Courses = () => {
  const [isRightBarFixed, setIsRightBarFixed] = useState(false);
  const handleRightBarFix = (fixed) => {
    setIsRightBarFixed(fixed);
  }
  return (
    <WebLayout>
      <CourseLanding />
      <ImageScroller onRightBarFix={handleRightBarFix} isRightBarFixed={isRightBarFixed} />
      <CourseContent />
      <UpComingBranches />
      <PlacementStaticsHome />
      <HiringPartnersHome />
      <StudentsPlacedHome />
      <CourseHighlites />
      <StudentsTestimonialsHome />
      <CoursesFaq />
    </WebLayout>
  )
}

export default Courses