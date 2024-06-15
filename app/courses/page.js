'use client'
import React, { useState } from 'react'
import WebLayout from '@/components/commonComponents/webLayout/WebLayout'
import PlacementStaticsHome from './PlacementStaticsHome'
import UpComingBranches from './UpComingBranches'
import StudentsPlacedHome from './StudentsPlacedHome'
import HiringPartnersHome from './HiringPartnersHome'
import CourseContent from './CourseContent'
import CoursesFaq from './CoursesFaq'
import CourseLanding from './CourseLanding'
const Courses = () => {
  return (
    <WebLayout>
      <CourseLanding />
      <CourseContent />
      <UpComingBranches />
      <PlacementStaticsHome />
      <HiringPartnersHome />
      <StudentsPlacedHome />
      <CoursesFaq />
    </WebLayout>
  )
}

export default Courses