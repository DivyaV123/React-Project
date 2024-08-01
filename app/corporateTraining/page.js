'use client'
import React, { useContext } from 'react'
import CorporateTrainingLanding from './CorporateTrainingLanding'
import WebLayout from '@/components/commonComponents/webLayout/WebLayout'
import TrainingMode from '@/components/ourBranches/trainingMode/trainingMode'
import HiringPartners from '@/components/hiringPartners/hiringPartners'
import TrendingCourses from './TrendingCourses'
import BenefitsOfTraining from './BenefitsOfTraining'
import ClientTesimonials from '../hireFromUs/ClientTesimonials'
import TransformWorkSpace from './TransformWorkSpace'
import FaqHome from '@/components/faq/faqHome'
import { useGetAllFaqQuery } from '@/redux/queries/getAllFaq'
import { GlobalContext } from '@/components/Context/GlobalContext'
import OurCourse from '@/components/ourCourses/ourCourse'
import CorporateModes from './CorporateModes'
import CorporateTrainingFeatures from './CorporateTrainingFeatures'
const CorporateTraining = () => {
  const { domainVariable } = useContext(GlobalContext)
  let domain = domainVariable === "Qspiders" ? "QSP" : domainVariable === "Jspiders" ? "JSP" : domainVariable === "Pyspiders" ? "PYSP" : "BSP"
  const { data: faqData, error, isLoading } = useGetAllFaqQuery(domain);
  return (
    <WebLayout>

      <CorporateTrainingLanding />
      <HiringPartners />
      {/* <TrainingMode page='corporateTraining' /> */}
      {/* <OurCourse /> */}
      <CorporateModes/>
      <div className='w-[87.5vw] m-auto'>
        <TrendingCourses />
        {/* <BenefitsOfTraining /> */}
      </div>
      <CorporateTrainingFeatures/>
      <ClientTesimonials />
      <TransformWorkSpace />
      <FaqHome mainfaqData={faqData?.data} />
    </WebLayout>

  )
}

export default CorporateTraining