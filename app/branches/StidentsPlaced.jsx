import MaxWebWidth from '@/components/commonComponents/maxwebWidth/maxWebWidth'
import React from 'react'
import StudentsPlacedHome from '../courses/StudentsPlacedHome'

function StidentsPlaced({ branchName }) {

    return (
        <MaxWebWidth sectionStyling='bg-[#F9F9F9] pb-5'>
            <StudentsPlacedHome branchName={branchName} page='branch' />
        </MaxWebWidth>
    )
}

export default StidentsPlaced