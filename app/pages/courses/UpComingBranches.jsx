import React,{useState} from 'react'
import MaxWebWidth from '@/components/commonComponents/maxwebWidth/maxWebWidth'
import OurBranchesHome from '@/components/ourBranches/ourBranchesHome'

function UpComingBranches() {
    const [isRightBarFixed, setIsRightBarFixed] = useState(false);

    const handleRightBarFix = (fixed) => {
      setIsRightBarFixed(fixed);
    }
    return (
        <MaxWebWidth>
            <OurBranchesHome page='course' onRightBarFix={handleRightBarFix}/>
        </MaxWebWidth>

    )
}

export default UpComingBranches