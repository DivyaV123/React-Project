import React from 'react'
import WebLayout from '@/components/commonComponents/webLayout/WebLayout'
import HirefromusLanding from './HirefromusLanding'
import HiringPartners from '@/components/hiringPartners/hiringPartners'
import Hiringprocess from './Hiringprocess'
import DeliveryApproach from './DeliveryApproach'
const HireFromUs = () => {
  return (
    <WebLayout>
      <HirefromusLanding />
      <HiringPartners />
      <Hiringprocess/>
      <DeliveryApproach/>
    </WebLayout>
  )
}

export default HireFromUs