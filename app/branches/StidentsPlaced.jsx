import MaxWebWidth from '@/components/commonComponents/maxwebWidth/maxWebWidth'
import React from 'react'
import StudentsPlacedHome from '../courses/StudentsPlacedHome'

function StidentsPlaced({ branchName }) {

    return (
        <section sectionStyling='bg-[#F9F9F9] pb-5'>
            <StudentsPlacedHome branchName={branchName} page='branch' />
        </section>
    )
}

export default StidentsPlaced