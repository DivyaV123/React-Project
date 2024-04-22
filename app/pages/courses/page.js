import React from 'react'
import NavHome from '@/components/navHome/navHome'
import WebLayout from '@/components/commonComponents/webLayout/WebLayout'
import CourseLanding from './CourseLanding'
import PlacementStaticsHome from './PlacementStaticsHome'
const Courses = () => {
  return (
    <WebLayout>
      <CourseLanding />
      <PlacementStaticsHome/>
    </WebLayout>
  )
}

export default Courses