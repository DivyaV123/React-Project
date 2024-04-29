import React, { useState } from 'react'
import OurBranchesHome from '@/components/ourBranches/ourBranchesHome'
import CoursePageContainer from './CoursePageContainer'

function UpComingBranches() {
    const [isRightBarFixed, setIsRightBarFixed] = useState(false);

    const handleRightBarFix = (fixed) => {
        setIsRightBarFixed(fixed);
    }
    return (
        <CoursePageContainer>
            <OurBranchesHome page='course' onRightBarFix={handleRightBarFix} />
        </CoursePageContainer>

    )
}

export default UpComingBranches