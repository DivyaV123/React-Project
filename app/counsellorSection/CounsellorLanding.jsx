import React from 'react'
import CounsellorFilters from './CounsellorFilters'
import CounsellorCardHeader from './CounsellorCardHeader'
const CounsellorLanding = () => {
  return (
    <div className='px-[1.875vw] pt-[3.333vh] pb-[6.528vh] flex'>
      <div>
      <CounsellorFilters/>
      </div>
      <div className='pl-[1.875vw]'>
        <CounsellorCardHeader/>
      </div>
    </div>
  )
}

export default CounsellorLanding