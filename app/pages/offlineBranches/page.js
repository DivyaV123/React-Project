import React from 'react'
import WebLayout from '@/components/commonComponents/webLayout/WebLayout'
import IndividualBranches from './IndividualBranches'
import HomePageContextProvider from '@/components/Contexts/HomePageContext'
const OfflineBranches = () => {
  return (
    <WebLayout>
      <HomePageContextProvider>
      <IndividualBranches />
      </HomePageContextProvider>
    </WebLayout>
  )
}

export default OfflineBranches