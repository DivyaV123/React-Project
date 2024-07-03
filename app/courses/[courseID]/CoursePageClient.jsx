'use client'

import React from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import CourseLanding from '../CourseLanding'
import { useGetAllCourseDetailsQuery } from '@/redux/queries/getCoursedetails'
import { useGetAllPlacementCountQuery } from "@/redux/queries/getAllPlacementCount";
import WebLayout from '@/components/commonComponents/webLayout/WebLayout'
import CourseContent from '../CourseContent'
import UpComingBranches from '../UpComingBranches'
import HiringPartnersHome from '../HiringPartnersHome'
import StudentsPlacedHome from '../StudentsPlacedHome'
import CoursesFaq from '../CoursesFaq'
import Loading from '@/lib/Loading'

const CoursePageClient = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const courseID = pathname.split('/').pop() // Extract the courseID from the URL
  const { data: countDetails, isLoading:countLoading } = useGetAllPlacementCountQuery()
  const { data: courseDetails, error, isLoading } = useGetAllCourseDetailsQuery(courseID, {
    skip: !courseID, // Skip query until courseID is available
  })

  if (isLoading || countLoading) return <div>
    <Loading />
  </div>
  if (error) return <div>Error: {error.message}</div>
  if (!courseDetails) return <div>No course details found.</div>


  return (
    <WebLayout page='course' courseDetails={courseDetails.data}>
      <CourseLanding courseDetails={courseDetails.data} countDetails={countDetails}/>
      <CourseContent courseDetails={courseDetails} />
      <UpComingBranches courseDetails={courseDetails.data} />
      {/* <div className='mb-9'>
        <PlacementStatisticsHome page="course" courseDetails={courseDetails} />
      </div> */}
      <div className='mb-9'>
        <HiringPartnersHome courseDetails={courseDetails} />
      </div>
      <StudentsPlacedHome page="branch" courseDetails={courseDetails} />
      <CoursesFaq courseDetails={courseDetails.data} />
    </WebLayout>
  )
}

export default CoursePageClient
