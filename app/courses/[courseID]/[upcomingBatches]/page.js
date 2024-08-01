
import React from 'react'
import BranchWithFilter from './BranchWithFilter'
import UpcomingBatchesLanding from './UpcomingBatchesLanding'
import WebLayout from '@/components/commonComponents/webLayout/WebLayout'

function UpComingBranches() {

  return (
    <WebLayout>
      <UpcomingBatchesLanding />
      {/* <BranchWithFilter /> */}
    </WebLayout>
  )
}

export default UpComingBranches