import React from 'react'
import WebLayout from '@/components/commonComponents/webLayout/WebLayout'
import PlacementCards from './PlacementCards'
import Degree_Branch_Passout from './Degree_Branch_Passout'
import PlacementSideBar from './PlacementSideBar'
const Placements = () => {
  return (
    <WebLayout>
      <PlacementCards/>
      <Degree_Branch_Passout/>
      <PlacementSideBar/>
    </WebLayout>
  )
}

export default Placements