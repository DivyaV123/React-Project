import WebLayout from '@/components/commonComponents/webLayout/WebLayout'
import OurCourse from '@/components/ourCourses/ourCourse'
import React from 'react'

function exploreCourses() {
    return (
        <WebLayout>
            <OurCourse
                page='explore'
            />
        </WebLayout>
    )
}

export default exploreCourses