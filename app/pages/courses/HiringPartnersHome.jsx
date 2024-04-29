import MaxWebWidth from '@/components/commonComponents/maxwebWidth/maxWebWidth'
import HiringPartners from '@/components/hiringPartners/hiringPartners'
import React from 'react'
import CoursePageContainer from './CoursePageContainer'

function HiringPartnersHome() {
  return (
    <CoursePageContainer className='overflow-hide pl-0'>
      <HiringPartners page='course' />
    </CoursePageContainer>
  )
}

export default HiringPartnersHome