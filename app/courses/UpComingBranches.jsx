import React, { useState } from 'react'
import OurBranchesHome from '@/components/ourBranches/ourBranchesHome'
import CoursePageContainer from './CoursePageContainer'
import MaxWebWidth from '@/components/commonComponents/maxwebWidth/maxWebWidth';

function UpComingBranches({ courseDetails }) {
    const [isRightBarFixed, setIsRightBarFixed] = useState(false);
    const handleRightBarFix = (fixed) => {
        setIsRightBarFixed(fixed);
    }
    return (
        <>
            {(courseDetails?.mode?.includes("OFFLINE_CLASSES") || courseDetails?.mode?.includes("ONLINE_CLASSES")) &&
                <MaxWebWidth>
                    <OurBranchesHome tabData={courseDetails.mode} page='course' onRightBarFix={handleRightBarFix} />
                </MaxWebWidth>
            }
        </>
    )
}

export default UpComingBranches