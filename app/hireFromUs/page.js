import React from 'react'
import WebLayout from '@/components/commonComponents/webLayout/WebLayout'
import HirefromusLanding from './HirefromusLanding'
import HiringPartners from '@/components/hiringPartners/hiringPartners'
import Hiringprocess from './Hiringprocess'
import DeliveryApproach from './DeliveryApproach'
import FindingCandidates from './FindingCandidates'
import DomainContainer from './DomainContainer'
import Testimonials from '../branches/Testimonials'
import ClientTesimonials from './ClientTesimonials'
const HireFromUs = () => {
  return (
    <WebLayout>
      <HirefromusLanding />
      <HiringPartners />
      <Hiringprocess/>
      <FindingCandidates/>
      <DeliveryApproach/>
      <DomainContainer/>
      <ClientTesimonials />
    </WebLayout>
  )
}

export default HireFromUs