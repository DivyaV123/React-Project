import React from 'react'
import Navbar from '../navbar/navbar'
import OurCourse from '../ourCourses/ourCourse'
import MaxWebWidth from '../commonComponents/maxwebWidth/maxWebWidth'

function Homepage() {
    return (
        <MaxWebWidth>
            <Navbar />
            {/* <InitialCorosal/> */}
            <OurCourse />
        </MaxWebWidth>
    )
}

export default Homepage