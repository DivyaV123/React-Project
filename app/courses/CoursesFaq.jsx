import React from 'react'
import CoursePageContainer from './CoursePageContainer'
import FaqHome from '@/components/faq/faqHome'

function CoursesFaq({ courseDetails }) {
    return (
        <FaqHome page='course' courseDetails={courseDetails} />
    )
}

export default CoursesFaq