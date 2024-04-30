'use client'
import WebLayout from '@/components/commonComponents/webLayout/WebLayout';
import React, { useState } from 'react'
import CourseLanding from '../courses/CourseLanding';
import CourseContent from '../courses/CourseContent';
import UpComingBranches from '../courses/UpComingBranches';
import PlacementStaticsHome from '../courses/PlacementStaticsHome';
import HiringPartnersHome from '../courses/HiringPartnersHome';
import CourseHighlites from '../courses/CourseHighlites';
import StudentsTestimonialsHome from '../courses/StudentsTestimonialsHome';
import CoursesFaq from '../courses/CoursesFaq';

const Tutions = () => {
    const [isRightBarFixed, setIsRightBarFixed] = useState(false);

    const handleRightBarFix = (fixed) => {
        setIsRightBarFixed(fixed);
    }
    return (
        <WebLayout>
            <CourseLanding page='tution' onRightBarFix={handleRightBarFix} isRightBarFixed={isRightBarFixed} />
            <CourseContent />
            <CourseHighlites />
            <StudentsTestimonialsHome />
            <CoursesFaq />
        </WebLayout>
    )
}

export default Tutions