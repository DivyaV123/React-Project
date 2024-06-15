import React from 'react'
import WebLayout from '@/components/commonComponents/webLayout/WebLayout'
import GenerateLinkSidebar from './GenerateLinkSidebar'
import CounsellorCardHeader from '../internalplacementstatistics/CounsellorCardHeader'
import GenerateLinkHeader from './GenerateLinkHeader'
const InternalStats = () => {
  return (
    <WebLayout>
      <div className="px-[1.875vw] pt-[3.333vh] pb-[6.528vh] flex bg-[#F9F9F9]">
        <div>
          <GenerateLinkSidebar />
        </div>

        <div className="pl-[1.875vw]">
          <GenerateLinkHeader />
          {/* <CounsellorCardHeader/> */}
        </div>
      </div>
    </WebLayout>
  )
}

export default InternalStats