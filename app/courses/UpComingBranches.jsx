import React, { useState } from 'react'
import OurBranchesHome from '@/components/ourBranches/ourBranchesHome'
import CoursePageContainer from './CoursePageContainer'
import MaxWebWidth from '@/components/commonComponents/maxwebWidth/maxWebWidth';

function UpComingBranches() {
    const [isRightBarFixed, setIsRightBarFixed] = useState(false);

    const handleRightBarFix = (fixed) => {
        setIsRightBarFixed(fixed);
    }
    return (
        <MaxWebWidth>
            <OurBranchesHome page='course' onRightBarFix={handleRightBarFix} />
        </MaxWebWidth>

    )
}

export default UpComingBranches