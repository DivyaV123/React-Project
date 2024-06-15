import React from 'react'
import CoursePageContainer from './CoursePageContainer'
import FaqHome from '@/components/faq/faqHome'

function CoursesFaq({ courseDetails }) {
    return (
        <CoursePageContainer className='bg-backgroundBlue pb-6'>
            <FaqHome page='course' courseDetails={courseDetails} />
        </CoursePageContainer>
    )
}

export default CoursesFaq