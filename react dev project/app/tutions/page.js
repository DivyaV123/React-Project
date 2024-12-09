'use client'
import React, { useState } from 'react'
import CourseLanding from '../courses/CourseLanding';
import ImageScroller from '../courses/ImageScroller';
import CourseContent from '../courses/CourseContent';
import CourseHighlites from '../courses/CourseHighlites';
import StudentsTestimonialsHome from '../courses/StudentsTestimonialsHome';
import CoursesFaq from '../courses/CoursesFaq';
import WebLayout from '@/components/commonComponents/webLayout/WebLayout';


const Tutions = () => {
    const [isRightBarFixed, setIsRightBarFixed] = useState(false);

    const handleRightBarFix = (fixed) => {
        setIsRightBarFixed(fixed);
    }
    return (
        <WebLayout>
            <CourseLanding page='tution' />
            {/* <ImageScroller onRightBarFix={handleRightBarFix} isRightBarFixed={isRightBarFixed} /> */}
            <CourseContent />
            <CourseHighlites />
            <StudentsTestimonialsHome page='tution' />
            <CoursesFaq />
        </WebLayout>
    )
}

export default Tutions