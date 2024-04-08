import React from 'react'
import MaxWebWidth from '../commonComponents/maxwebWidth/maxWebWidth'
import PlacementAssistance from './placementAssistance'
import ExperiencedFaculty from './experiencedFaculty'
import RelevantTraining from './relevantTraining'

function ChooseQspidersHome() {
    return (
        <MaxWebWidth sectionStyling='max-w-full overflow-hidden'>
            <PlacementAssistance />
            <ExperiencedFaculty />
            <RelevantTraining/>
        </MaxWebWidth>
    )
}

export default ChooseQspidersHome