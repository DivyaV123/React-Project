'use client'

import React, { useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import CourseLanding from '../CourseLanding'
import { useGetAllCourseDetailsQuery } from '@/redux/queries/getCoursedetails'
import WebLayout from '@/components/commonComponents/webLayout/WebLayout'
import CourseContent from '../CourseContent'
import UpComingBranches from '../UpComingBranches'
import HiringPartnersHome from '../HiringPartnersHome'
import StudentsPlacedHome from '../StudentsPlacedHome'
import CoursesFaq from '../CoursesFaq'
import Loading from '@/lib/Loading'
import PlacementStatisticsHome from '@/components/placementstatistics/placementStatisticsHome'

const CoursePageClient = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const courseID = pathname.split('/').pop() // Extract the courseID from the URL

  const { data: courseDetails, error, isLoading } = useGetAllCourseDetailsQuery(courseID, {
    skip: !courseID, // Skip query until courseID is available
  })

  if (isLoading) return <div>
    <Loading />
  </div>
  if (error) return <div>Error: {error.message}</div>
  if (!courseDetails) return <div>No course details found.</div>


  return (
    <WebLayout page='course'>
      <CourseLanding courseDetails={courseDetails.data} />
      <CourseContent courseDetails={courseDetails} />
      <UpComingBranches courseDetails={courseDetails.data} />
      <div className='mb-9'>
        <PlacementStatisticsHome page="course" courseDetails={courseDetails} />
      </div>
      <div className='mb-9'>
        <HiringPartnersHome courseDetails={courseDetails} />
      </div>
      <StudentsPlacedHome page="branch" courseDetails={courseDetails} />
      <CoursesFaq courseDetails={courseDetails.data} />
    </WebLayout>
  )
}

export default CoursePageClient
